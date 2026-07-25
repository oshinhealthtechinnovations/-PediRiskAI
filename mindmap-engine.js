/* ==========================================================================
   OSHIN HEALTHTECH INNOVATIONS PVT. LTD.
   PediRisk AI - NotebookLM DOM-Flow Mind Map Engine
   ========================================================================== */

class NotebookLMMindMapEngine {
    constructor(containerId, svgId, phaseData, options = {}) {
        this.container = document.getElementById(containerId);
        this.phaseData = phaseData;
        this.options = options;

        // Branches are COLLAPSED BY DEFAULT (NotebookLM feature)
        this.expandedSubCategories = new Set();

        this.init();
    }

    init() {
        if (!this.container) return;
        this.render();
    }

    render() {
        this.container.innerHTML = '';

        const treeRoot = document.createElement('div');
        treeRoot.className = 'tree-root-flow';

        // Level 1: Central Root Card
        const centralCard = document.createElement('div');
        centralCard.className = 'tree-central-card';
        centralCard.id = `central-${this.phaseData.id}`;
        centralCard.innerHTML = `
            <h2>${this.phaseData.title}</h2>
            <p><i class="fa-solid fa-layer-group"></i> ${this.phaseData.subCategories.length} Sub-Categories</p>
        `;
        centralCard.addEventListener('click', () => {
            if (this.options.onNodeClick) {
                this.options.onNodeClick({
                    title: this.phaseData.title,
                    category: 'Phase Overview',
                    description: this.phaseData.description,
                    items: this.phaseData.subCategories.map(s => s.title),
                    metrics: `Total ${this.phaseData.subCategories.reduce((a, b) => a + b.items.length, 0)} action deliverables across all branches.`
                });
            }
        });
        treeRoot.appendChild(centralCard);

        // Bridge Spacer
        const bridge = document.createElement('div');
        bridge.className = 'tree-spine-bridge';
        treeRoot.appendChild(bridge);

        // Level 2: Sub-Categories Column with DOM Spine
        const subColumn = document.createElement('div');
        subColumn.className = 'tree-sub-column-flow';

        this.phaseData.subCategories.forEach((sub, subIdx) => {
            const isExpanded = this.expandedSubCategories.has(subIdx);

            const subBlock = document.createElement('div');
            subBlock.className = 'tree-sub-block-flow';

            // Level 2 Sub-Card
            const subCard = document.createElement('div');
            subCard.className = `tree-sub-card-flow ${isExpanded ? 'expanded' : ''}`;
            subCard.id = `sub-${this.phaseData.id}-${subIdx}`;
            
            subCard.innerHTML = `
                <div class="sub-card-header">
                    <div class="sub-card-title">
                        <i class="fa-solid ${sub.icon}"></i> ${sub.title}
                    </div>
                </div>
                <button class="expand-badge-btn ${isExpanded ? 'active-expanded' : ''}" id="toggle-btn-${this.phaseData.id}-${subIdx}">
                    <i class="fa-solid ${isExpanded ? 'fa-minus' : 'fa-plus'}"></i>
                    ${isExpanded ? 'Collapse' : `${sub.items.length} deliverables`}
                </button>
            `;

            // Toggle Expand / Collapse
            const toggleBtn = subCard.querySelector(`#toggle-btn-${this.phaseData.id}-${subIdx}`);
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.expandedSubCategories.has(subIdx)) {
                    this.expandedSubCategories.delete(subIdx);
                } else {
                    this.expandedSubCategories.add(subIdx);
                }
                this.render();
            });

            subCard.addEventListener('click', () => {
                if (this.options.onNodeClick) {
                    this.options.onNodeClick({
                        title: sub.title,
                        category: `${this.phaseData.title} Sub-Category`,
                        description: sub.description,
                        items: sub.items,
                        metrics: 'Verified research & execution deliverable.'
                    });
                }
            });

            subBlock.appendChild(subCard);

            // Level 3: Deliverables Group with DOM Branch Connector (ONLY RENDERED IF EXPANDED)
            if (isExpanded) {
                const leafGroup = document.createElement('div');
                leafGroup.className = 'tree-leaf-group-flow';

                sub.items.forEach((item, itemIdx) => {
                    const leafCard = document.createElement('div');
                    leafCard.className = 'tree-leaf-card-flow';
                    leafCard.id = `leaf-${this.phaseData.id}-${subIdx}-${itemIdx}`;
                    leafCard.textContent = item;
                    leafCard.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (this.options.onNodeClick) {
                            this.options.onNodeClick({
                                title: item,
                                category: `${sub.title} Item`,
                                description: `Specific deliverable item under ${sub.title}.`,
                                items: [item, `Sub-Category: ${sub.title}`, `Phase: ${this.phaseData.title}`],
                                metrics: 'Action milestone deliverable.'
                            });
                        }
                    });
                    leafGroup.appendChild(leafCard);
                });

                subBlock.appendChild(leafGroup);
            }

            subColumn.appendChild(subBlock);
        });

        treeRoot.appendChild(subColumn);
        this.container.appendChild(treeRoot);
    }

    expandAll() {
        this.phaseData.subCategories.forEach((_, idx) => this.expandedSubCategories.add(idx));
        this.render();
    }

    collapseAll() {
        this.expandedSubCategories.clear();
        this.render();
    }

    search(query) {
        query = query.trim().toLowerCase();
        document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
        if (!query) return;

        // Auto expand matching branches
        this.phaseData.subCategories.forEach((sub, subIdx) => {
            let hasMatch = false;
            if (sub.title.toLowerCase().includes(query)) {
                hasMatch = true;
            }
            sub.items.forEach(item => {
                if (item.toLowerCase().includes(query)) {
                    hasMatch = true;
                }
            });

            if (hasMatch) {
                this.expandedSubCategories.add(subIdx);
            }
        });

        this.render();

        // Highlight nodes
        this.phaseData.subCategories.forEach((sub, subIdx) => {
            if (sub.title.toLowerCase().includes(query)) {
                const subCard = document.getElementById(`sub-${this.phaseData.id}-${subIdx}`);
                if (subCard) subCard.classList.add('highlighted');
            }
            sub.items.forEach((item, itemIdx) => {
                if (item.toLowerCase().includes(query)) {
                    const leafCard = document.getElementById(`leaf-${this.phaseData.id}-${subIdx}-${itemIdx}`);
                    if (leafCard) leafCard.classList.add('highlighted');
                }
            });
        });
    }
}
