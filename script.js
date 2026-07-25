/* ==========================================================================
   OSHIN HEALTHTECH INNOVATIONS PVT. LTD.
   PediRisk AI - Interactive Mind Map Engine & Application Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MASTER MIND MAP DATASTRUCTURE (PHASES I - VI)
    const mindmapData = [
        {
            id: 'phase-1',
            number: 1,
            title: 'Phase I – Research Foundation',
            shortTitle: 'Phase I: Research',
            themeColor: '#38BDF8',
            description: 'Establishing the epidemiological background, clinical literature, variable taxonomy, and initial screening questionnaires for pediatric Type 2 Diabetes.',
            subCategories: [
                {
                    title: 'Problem Identification',
                    icon: 'fa-triangle-exclamation',
                    description: 'Pinpointing pediatric metabolic health crises and screening bottlenecks.',
                    items: [
                        'Rising childhood obesity',
                        'Increasing pediatric Type 2 Diabetes',
                        'Delayed diagnosis',
                        'Limited screening programs',
                        'Healthcare burden'
                    ]
                },
                {
                    title: 'Literature Review',
                    icon: 'fa-book-medical',
                    description: 'Comprehensive analysis of clinical guidelines, existing risk scores, and AI models.',
                    items: [
                        'International Guidelines',
                        'Indian Guidelines',
                        'Existing Questionnaires',
                        'Risk Scores',
                        'AI Screening Models',
                        'Research Gaps'
                    ]
                },
                {
                    title: 'Clinical Variables',
                    icon: 'fa-clipboard-user',
                    description: 'Identifying key data points across multi-factorial health dimensions.',
                    items: [
                        'Demographics',
                        'Anthropometrics',
                        'Lifestyle',
                        'Family History',
                        'Clinical Signs',
                        'Laboratory Factors'
                    ]
                },
                {
                    title: 'Questionnaire Design',
                    icon: 'fa-file-signature',
                    description: 'Structuring age-appropriate screening instruments for various target stakeholders.',
                    items: [
                        'Parent Version',
                        'School Version',
                        'Doctor Version',
                        'Digital Forms',
                        'Pilot Questionnaire'
                    ]
                },
                {
                    title: 'Research Outputs',
                    icon: 'fa-box-archive',
                    description: 'Core research documentation and preliminary workflow blueprints.',
                    items: [
                        'Literature Review Report',
                        'Variable List',
                        'Questionnaire V1',
                        'Clinical Workflow',
                        'Research Report'
                    ]
                },
                {
                    title: 'Success Criteria',
                    icon: 'fa-circle-check',
                    description: 'Milestones required to exit Phase I.',
                    items: [
                        'Variables Identified',
                        'Questionnaire Ready',
                        'Clinical Workflow Drafted',
                        'Expert Review Ready'
                    ]
                }
            ]
        },
        {
            id: 'phase-2',
            number: 2,
            title: 'Phase II – Clinical Scientific Consultation',
            shortTitle: 'Phase II: Clinical',
            themeColor: '#34D399',
            description: 'Multi-disciplinary expert review, clinical variable validation, scoring protocol design, and referral pathway definition.',
            subCategories: [
                {
                    title: 'Expert Panel',
                    icon: 'fa-user-md',
                    description: 'Assembling cross-domain clinical and public health leaders.',
                    items: [
                        'Pediatrician',
                        'Diabetologist',
                        'Nutritionist',
                        'Epidemiologist',
                        'Public Health Expert',
                        'AI Consultant'
                    ]
                },
                {
                    title: 'Clinical Validation',
                    icon: 'fa-stethoscope',
                    description: 'Rigorous vetting of screening parameters and clinical decision rules.',
                    items: [
                        'Validate Variables',
                        'Remove Weak Variables',
                        'Add Missing Variables',
                        'Standardize Responses',
                        'Validate Clinical Logic'
                    ]
                },
                {
                    title: 'Scoring Framework',
                    icon: 'fa-calculator',
                    description: 'Deriving risk weights, cut-offs, and risk tier categorization.',
                    items: [
                        'Risk Weightage',
                        'Composite Score',
                        'Risk Categories',
                        'Cut-off Values',
                        'Referral Criteria'
                    ]
                },
                {
                    title: 'Clinical Workflow',
                    icon: 'fa-route',
                    description: 'Defining end-to-end patient journey from school checkup to specialist doctor.',
                    items: [
                        'School Screening',
                        'Parent Assessment',
                        'AI Screening',
                        'Doctor Review',
                        'Referral Pathway'
                    ]
                },
                {
                    title: 'Deliverables',
                    icon: 'fa-folder-closed',
                    description: 'Standardized clinical instruments ready for machine learning formulation.',
                    items: [
                        'Questionnaire V2',
                        'Clinical Score System',
                        'Risk Categories Map',
                        'Referral Protocol',
                        'Clinical Documentation'
                    ]
                },
                {
                    title: 'Success Criteria',
                    icon: 'fa-award',
                    description: 'Verification of clinical safety and consensus.',
                    items: [
                        'Clinical Approval',
                        'Questionnaire Validation',
                        'Scoring Validation',
                        'Ready for AI Design'
                    ]
                }
            ]
        },
        {
            id: 'phase-3',
            number: 3,
            title: 'Phase III – AI Scientific Consultation',
            shortTitle: 'Phase III: AI',
            themeColor: '#A78BFA',
            description: 'Designing data strategy, feature engineering pipelines, predictive machine learning algorithms, and explainable AI (SHAP/LIME) frameworks.',
            subCategories: [
                {
                    title: 'Data Strategy',
                    icon: 'fa-database',
                    description: 'Defining sampling protocols, data ethics, and dataset governance.',
                    items: [
                        'Data Sources',
                        'Sample Size',
                        'Inclusion Criteria',
                        'Exclusion Criteria',
                        'Data Governance'
                    ]
                },
                {
                    title: 'Feature Engineering',
                    icon: 'fa-gears',
                    description: 'Extracting non-linear interaction terms and clinical derived variables.',
                    items: [
                        'Clinical Features',
                        'Lifestyle Features',
                        'Anthropometric Features',
                        'Family History',
                        'Derived Variables'
                    ]
                },
                {
                    title: 'AI Models',
                    icon: 'fa-brain',
                    description: 'Benchmarking ensemble machine learning models.',
                    items: [
                        'Logistic Regression',
                        'Decision Tree',
                        'Random Forest',
                        'XGBoost',
                        'LightGBM',
                        'Neural Networks',
                        'Ensemble Learning'
                    ]
                },
                {
                    title: 'Explainable AI',
                    icon: 'fa-eye',
                    description: 'Ensuring transparent, non-blackbox risk explanations for clinicians.',
                    items: [
                        'SHAP (Shapley Additive)',
                        'LIME (Local Interpretable)',
                        'Feature Importance',
                        'Decision Path',
                        'Risk Explanation'
                    ]
                },
                {
                    title: 'Validation Strategy',
                    icon: 'fa-vial',
                    description: 'Ensuring statistical robustness and cross-domain generalization.',
                    items: [
                        'Train/Test Split',
                        'Cross Validation',
                        'External Validation',
                        'Calibration',
                        'Sensitivity Analysis'
                    ]
                },
                {
                    title: 'Performance Metrics',
                    icon: 'fa-chart-line',
                    description: 'Quantitative evaluation metrics for clinical utility.',
                    items: [
                        'Accuracy',
                        'Precision',
                        'Recall',
                        'Specificity',
                        'ROC-AUC',
                        'F1 Score',
                        'Calibration Curve'
                    ]
                },
                {
                    title: 'Deliverables',
                    icon: 'fa-file-code',
                    description: 'Comprehensive AI framework specifications.',
                    items: [
                        'AI Methodology Paper',
                        'Prediction Framework',
                        'Validation Plan',
                        'Explainability Framework'
                    ]
                }
            ]
        },
        {
            id: 'phase-4',
            number: 4,
            title: 'Phase IV – AI Model & Software Development',
            shortTitle: 'Phase IV: Software',
            themeColor: '#F472B6',
            description: 'Engineering the digital web platform, cloud APIs, encrypted database, AI inference engine, and multi-stakeholder dashboards.',
            subCategories: [
                {
                    title: 'UI Development',
                    icon: 'fa-desktop',
                    description: 'Responsive user interfaces for parents, educators, and doctors.',
                    items: [
                        'Parent Portal',
                        'School Dashboard',
                        'Doctor Dashboard',
                        'Admin Panel',
                        'Mobile Interface'
                    ]
                },
                {
                    title: 'Backend Infrastructure',
                    icon: 'fa-server',
                    description: 'Secure, scalable cloud service layer and APIs.',
                    items: [
                        'REST APIs',
                        'Authentication & OAuth',
                        'Encrypted Database',
                        'HIPAA Encryption',
                        'Cloud Storage'
                    ]
                },
                {
                    title: 'AI Engine',
                    icon: 'fa-microchip',
                    description: 'Real-time inference pipeline and recommendation engine.',
                    items: [
                        'Feature Extraction Pipeline',
                        'Prediction Pipeline',
                        'Explainability Module',
                        'Recommendation Engine',
                        'Confidence Score System'
                    ]
                },
                {
                    title: 'Reports & Analytics',
                    icon: 'fa-file-pdf',
                    description: 'Automated generation of individualized and aggregate health reports.',
                    items: [
                        'Child Health Report',
                        'Parent Summary',
                        'Doctor Clinical Report',
                        'School Analytics',
                        'Population Dashboard'
                    ]
                },
                {
                    title: 'Testing & QA',
                    icon: 'fa-shield-halved',
                    description: 'Rigorous security, privacy, performance, and usability audits.',
                    items: [
                        'Unit Testing',
                        'Integration Testing',
                        'Security & Penetration Testing',
                        'Performance Testing',
                        'User Acceptance Testing (UAT)'
                    ]
                },
                {
                    title: 'Deliverables',
                    icon: 'fa-cloud-arrow-up',
                    description: 'Fully deployed platform ready for clinical pilot deployment.',
                    items: [
                        'PediRisk AI Platform',
                        'Web Portal',
                        'Mobile App',
                        'Secure Database',
                        'Test & QA Reports'
                    ]
                }
            ]
        },
        {
            id: 'phase-5',
            number: 5,
            title: 'Phase V – Pilot Study & Clinical Validation',
            shortTitle: 'Phase V: Pilot',
            themeColor: '#FBBF24',
            description: 'Real-world clinical pilot across schools and clinics, ethics compliance, statistical accuracy benchmarking, and peer-reviewed publishing.',
            subCategories: [
                {
                    title: 'Ethics & Compliance',
                    icon: 'fa-balance-scale',
                    description: 'Institutional review board (IRB) approvals and parent consent.',
                    items: [
                        'Ethics Committee Approval',
                        'Parent Consent Forms',
                        'School Permission Protocols',
                        'Data Privacy & Protection'
                    ]
                },
                {
                    title: 'Pilot Sites',
                    icon: 'fa-hospital-user',
                    description: 'Deploying across multi-center test sites.',
                    items: [
                        'Partner Schools',
                        'Pediatric Hospitals',
                        'Primary Health Clinics',
                        'Community Programs'
                    ]
                },
                {
                    title: 'Data Collection',
                    icon: 'fa-folder-plus',
                    description: 'Gathering prospective clinical and digital questionnaire data.',
                    items: [
                        'Digital Questionnaire Data',
                        'Anthropometric Measurements',
                        'Clinical Assessment',
                        'Laboratory Results (HbA1c/FPG)',
                        'Follow-up Monitoring'
                    ]
                },
                {
                    title: 'AI Validation',
                    icon: 'fa-chart-pie',
                    description: 'Benchmarking AI risk classification against doctor diagnostic consensus.',
                    items: [
                        'Prediction Accuracy Verification',
                        'Risk Classification Agreement',
                        'False Positives Audit',
                        'False Negatives Minimization',
                        'Clinical Agreement Metrics'
                    ]
                },
                {
                    title: 'Statistical Analysis',
                    icon: 'fa-square-poll-vertical',
                    description: 'Detailed epidemiological validation statistical metrics.',
                    items: [
                        'ROC Analysis',
                        'Sensitivity & Specificity',
                        'Positive Predictive Value (PPV)',
                        'Negative Predictive Value (NPV)',
                        '95% Confidence Intervals'
                    ]
                },
                {
                    title: 'Deliverables',
                    icon: 'fa-file-invoice',
                    description: 'Scientific reports and updated model weights.',
                    items: [
                        'Validation Report',
                        'Performance Audit Report',
                        'Updated AI Model Weights',
                        'Scientific Journal Publication'
                    ]
                }
            ]
        },
        {
            id: 'phase-6',
            number: 6,
            title: 'Phase VI – Deployment & Scale-Up',
            shortTitle: 'Phase VI: Scale',
            themeColor: '#00F2FE',
            description: 'National implementation strategy, institutional capacity building, AI drift monitoring, commercial licensing, and expansion to broad metabolic health conditions.',
            subCategories: [
                {
                    title: 'Implementation Strategy',
                    icon: 'fa-network-wired',
                    description: 'Distribution pathways across public and private health networks.',
                    items: [
                        'Schools Rollout',
                        'Hospitals Integration',
                        'Primary Health Centres (PHCs)',
                        'NGO Partnerships',
                        'Government Health Programs'
                    ]
                },
                {
                    title: 'Capacity Building',
                    icon: 'fa-chalkboard-user',
                    description: 'Training healthcare personnel and school health teams.',
                    items: [
                        'Doctor Training Modules',
                        'School Staff Workshops',
                        'User Manuals & Toolkits',
                        'Technical Support Escalation',
                        '24/7 Help Desk'
                    ]
                },
                {
                    title: 'Monitoring & QA',
                    icon: 'fa-tower-observation',
                    description: 'Continuous model drift tracking and quality assurance.',
                    items: [
                        'System Performance Monitoring',
                        'User Feedback Loops',
                        'AI Model Drift Monitoring',
                        'Periodic Model Updates',
                        'Quality Assurance Audits'
                    ]
                },
                {
                    title: 'Research Expansion',
                    icon: 'fa-globe-americas',
                    description: 'Scaling research collaborations and international grants.',
                    items: [
                        'Multi-centre Global Studies',
                        'International Collaboration',
                        'Journal Publications',
                        'Conference Presentations',
                        'Grants & Funding'
                    ]
                },
                {
                    title: 'Commercialization',
                    icon: 'fa-handshake-simple',
                    description: 'Sustainable business models and institutional licensing.',
                    items: [
                        'School Subscription Plans',
                        'Hospital Licensing',
                        'Government Partnerships',
                        'CSR Healthcare Programs',
                        'International Expansion'
                    ]
                },
                {
                    title: 'Long-term Vision',
                    icon: 'fa-infinity',
                    description: 'Expanding platform scope across chronic pediatric conditions.',
                    items: [
                        'Obesity Screening Module',
                        'Hypertension Risk Screening',
                        'NAFLD Risk Assessment',
                        'PCOS Risk Prediction',
                        'Integrated Pediatric AI Platform'
                    ]
                }
            ]
        }
    ];

    // 2. DOM ELEMENTS
    const mindmapCanvas = document.getElementById('mindmapCanvas');
    const svgConnectors = document.getElementById('svgConnectors');
    const mindmapViewport = document.getElementById('mindmapViewport');
    const mindmapSearch = document.getElementById('mindmapSearch');
    const clearSearchBtn = document.getElementById('clearSearch');
    const matrixGrid = document.getElementById('matrixGrid');
    const matrixViewport = document.getElementById('matrixViewport');
    const btnViewTree = document.getElementById('btnViewTree');
    const btnViewMatrix = document.getElementById('btnViewMatrix');
    
    // Zoom & Pan State
    let zoomLevel = 0.9;
    let panX = 40;
    let panY = 40;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    // Collapsed Phases Tracker
    const collapsedPhases = new Set();

    // Active Phase Filter
    let activePhaseFilter = 'all';

    // 3. RENDER TREE MIND MAP
    function renderMindmapTree() {
        mindmapCanvas.innerHTML = '';
        
        // Root Tree Wrapper
        const treeRoot = document.createElement('div');
        treeRoot.className = 'mm-tree-root';

        // Central Node
        const centralNode = document.createElement('div');
        centralNode.className = 'mm-central-node';
        centralNode.id = 'node-central';
        centralNode.innerHTML = `
            <h2><i class="fa-solid fa-brain"></i> PediRisk AI</h2>
            <p>Master Execution Mind Map</p>
        `;
        centralNode.addEventListener('click', () => {
            openNodeModal({
                title: 'PediRisk AI - Flagship Initiative',
                phaseBadge: 'Master Framework',
                category: 'Oshin Healthtech Innovations Pvt. Ltd.',
                description: 'PediRisk AI is an evidence-based, non-invasive digital screening platform pioneering the early detection of Type 2 Diabetes risk in children and adolescents through explainable artificial intelligence (SHAP & LIME).',
                items: [
                    'Founded & Led by Sumit Raj & Oshin Ambekar',
                    '6 Comprehensive Execution Phases (Research to Scale-Up)',
                    'Multi-stakeholder Portals (Parents, Schools, Doctors)',
                    'Explainable Machine Learning Architecture',
                    'Multi-center Clinical Validation & Scale'
                ],
                metrics: 'Targeting population-level early risk identification in school and clinical health checkups.'
            });
        });
        treeRoot.appendChild(centralNode);

        // Phases Column
        const phasesColumn = document.createElement('div');
        phasesColumn.className = 'mm-phases-column';

        mindmapData.forEach(phase => {
            // Check phase filter
            if (activePhaseFilter !== 'all' && activePhaseFilter !== String(phase.number)) {
                return;
            }

            const isCollapsed = collapsedPhases.has(phase.id);

            const phaseBlock = document.createElement('div');
            phaseBlock.className = `mm-phase-block ${isCollapsed ? 'collapsed' : ''}`;
            phaseBlock.id = `block-${phase.id}`;
            phaseBlock.style.setProperty('--phase-theme-color', phase.themeColor);

            // Phase Node Header
            const phaseNode = document.createElement('div');
            phaseNode.className = 'mm-phase-node';
            phaseNode.id = `node-${phase.id}`;
            phaseNode.innerHTML = `
                <div class="phase-node-title">
                    <span class="phase-badge">Phase ${phase.number}</span>
                    <h3>${phase.title.split('–')[1] || phase.title}</h3>
                </div>
                <div class="toggle-icon"><i class="fa-solid fa-chevron-right"></i></div>
            `;

            // Toggle Expand/Collapse or open details on click
            phaseNode.addEventListener('click', (e) => {
                if (e.target.closest('.toggle-icon')) {
                    if (collapsedPhases.has(phase.id)) {
                        collapsedPhases.delete(phase.id);
                    } else {
                        collapsedPhases.add(phase.id);
                    }
                    renderMindmapTree();
                } else {
                    openNodeModal({
                        title: phase.title,
                        phaseBadge: `Phase ${phase.number}`,
                        category: 'Execution Phase Roadmap',
                        description: phase.description,
                        items: phase.subCategories.map(sc => sc.title),
                        metrics: `Includes ${phase.subCategories.reduce((acc, c) => acc + c.items.length, 0)} strategic action deliverables.`
                    });
                }
            });
            phaseBlock.appendChild(phaseNode);

            // Subnodes Column
            if (!isCollapsed) {
                const subnodesColumn = document.createElement('div');
                subnodesColumn.className = 'mm-subnodes-column';

                phase.subCategories.forEach((sub, subIdx) => {
                    const subBlock = document.createElement('div');
                    subBlock.className = 'mm-sub-block';

                    const subNode = document.createElement('div');
                    subNode.className = 'mm-sub-node';
                    subNode.id = `node-${phase.id}-sub-${subIdx}`;
                    subNode.innerHTML = `
                        <div class="sub-node-title">
                            <i class="fa-solid ${sub.icon}"></i> ${sub.title}
                        </div>
                        <div class="sub-item-count">${sub.items.length} key components</div>
                    `;

                    subNode.addEventListener('click', () => {
                        openNodeModal({
                            title: `${phase.shortTitle} • ${sub.title}`,
                            phaseBadge: `Phase ${phase.number}`,
                            category: sub.title,
                            description: sub.description,
                            items: sub.items,
                            metrics: `All components validated under Phase ${phase.number} execution workflow.`
                        });
                    });

                    subBlock.appendChild(subNode);

                    // Child Items Column (Third tier)
                    const itemsColumn = document.createElement('div');
                    itemsColumn.className = 'mm-items-column';

                    sub.items.forEach((item, itemIdx) => {
                        const itemLeaf = document.createElement('div');
                        itemLeaf.className = 'mm-item-leaf';
                        itemLeaf.id = `leaf-${phase.id}-${subIdx}-${itemIdx}`;
                        itemLeaf.textContent = item;
                        itemLeaf.addEventListener('click', () => {
                            openNodeModal({
                                title: item,
                                phaseBadge: `Phase ${phase.number}`,
                                category: `${phase.shortTitle} ➔ ${sub.title}`,
                                description: `Action item under ${sub.title} within ${phase.title}.`,
                                items: [item, `Parent Phase: ${phase.title}`, `Sub-Category: ${sub.title}`],
                                metrics: 'Verified specification deliverable.'
                            });
                        });
                        itemsColumn.appendChild(itemLeaf);
                    });

                    subBlock.appendChild(itemsColumn);
                    subnodesColumn.appendChild(subBlock);
                });

                phaseBlock.appendChild(subnodesColumn);
            }

            phasesColumn.appendChild(phaseBlock);
        });

        treeRoot.appendChild(phasesColumn);
        mindmapCanvas.appendChild(treeRoot);

        // Apply Transform
        updateCanvasTransform();

        // Draw Bezier SVG Connectors after DOM paint
        requestAnimationFrame(() => {
            drawConnectors();
        });
    }

    // 4. DRAW SVG BEZIER CONNECTORS BETWEEN NODES
    function drawConnectors() {
        svgConnectors.innerHTML = '';

        const centralNode = document.getElementById('node-central');
        if (!centralNode) return;

        const viewportRect = mindmapCanvas.getBoundingClientRect();
        const centralRect = centralNode.getBoundingClientRect();

        const cX = (centralRect.right - viewportRect.left) / zoomLevel;
        const cY = (centralRect.top + centralRect.height / 2 - viewportRect.top) / zoomLevel;

        mindmapData.forEach(phase => {
            if (activePhaseFilter !== 'all' && activePhaseFilter !== String(phase.number)) return;

            const phaseNode = document.getElementById(`node-${phase.id}`);
            if (!phaseNode) return;

            const pRect = phaseNode.getBoundingClientRect();
            const pStartX = (pRect.left - viewportRect.left) / zoomLevel;
            const pStartY = (pRect.top + pRect.height / 2 - viewportRect.top) / zoomLevel;
            const pEndX = (pRect.right - viewportRect.left) / zoomLevel;

            // Draw line Central -> Phase
            pathBezier(cX, cY, pStartX, pStartY, phase.themeColor, 3);

            if (collapsedPhases.has(phase.id)) return;

            // Draw lines Phase -> SubNodes
            phase.subCategories.forEach((sub, subIdx) => {
                const subNode = document.getElementById(`node-${phase.id}-sub-${subIdx}`);
                if (!subNode) return;

                const sRect = subNode.getBoundingClientRect();
                const sStartX = (sRect.left - viewportRect.left) / zoomLevel;
                const sStartY = (sRect.top + sRect.height / 2 - viewportRect.top) / zoomLevel;
                const sEndX = (sRect.right - viewportRect.left) / zoomLevel;

                pathBezier(pEndX, pStartY, sStartX, sStartY, phase.themeColor, 1.8);

                // Draw lines SubNode -> Items
                sub.items.forEach((item, itemIdx) => {
                    const leafNode = document.getElementById(`leaf-${phase.id}-${subIdx}-${itemIdx}`);
                    if (!leafNode) return;

                    const lRect = leafNode.getBoundingClientRect();
                    const lStartX = (lRect.left - viewportRect.left) / zoomLevel;
                    const lStartY = (lRect.top + lRect.height / 2 - viewportRect.top) / zoomLevel;

                    pathBezier(sEndX, sStartY, lStartX, lStartY, 'rgba(148, 163, 184, 0.25)', 1);
                });
            });
        });
    }

    function pathBezier(x1, y1, x2, y2, color, strokeWidth) {
        const dx = (x2 - x1) * 0.5;
        const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', strokeWidth);
        path.setAttribute('fill', 'none');
        svgConnectors.appendChild(path);
    }

    // 5. CANVAS PAN & ZOOM LOGIC
    function updateCanvasTransform() {
        mindmapCanvas.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
    }

    mindmapViewport.addEventListener('mousedown', (e) => {
        if (e.target.closest('.mm-phase-node') || e.target.closest('.mm-sub-node') || e.target.closest('.mm-item-leaf') || e.target.closest('.mm-central-node')) {
            return;
        }
        isDragging = true;
        startX = e.clientX - panX;
        startY = e.clientY - panY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateCanvasTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    mindmapViewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.05 : 0.05;
        zoomLevel = Math.min(Math.max(0.4, zoomLevel + delta), 1.8);
        updateCanvasTransform();
        drawConnectors();
    }, { passive: false });

    // Zoom Buttons
    document.getElementById('btnZoomIn').addEventListener('click', () => {
        zoomLevel = Math.min(1.8, zoomLevel + 0.15);
        updateCanvasTransform();
        drawConnectors();
    });

    document.getElementById('btnZoomOut').addEventListener('click', () => {
        zoomLevel = Math.max(0.4, zoomLevel - 0.15);
        updateCanvasTransform();
        drawConnectors();
    });

    document.getElementById('btnZoomReset').addEventListener('click', () => {
        zoomLevel = 0.9;
        panX = 40;
        panY = 40;
        updateCanvasTransform();
        drawConnectors();
    });

    document.getElementById('btnExpandAll').addEventListener('click', () => {
        collapsedPhases.clear();
        renderMindmapTree();
    });

    // 6. PHASE FILTER TABS
    const phaseFilters = document.querySelectorAll('.filter-btn');
    phaseFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            phaseFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activePhaseFilter = btn.getAttribute('data-phase');
            renderMindmapTree();
            renderMatrixView();
        });
    });

    // 7. SEARCH FILTER HIGHLIGHTING
    mindmapSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        clearSearchBtn.style.display = query ? 'block' : 'none';

        // Clear previous highlights
        document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));

        if (!query) return;

        // Auto-expand all phases during search
        collapsedPhases.clear();
        renderMindmapTree();

        mindmapData.forEach(phase => {
            phase.subCategories.forEach((sub, subIdx) => {
                let subMatch = false;
                if (sub.title.toLowerCase().includes(query)) {
                    const subNode = document.getElementById(`node-${phase.id}-sub-${subIdx}`);
                    if (subNode) subNode.classList.add('highlighted');
                }

                sub.items.forEach((item, itemIdx) => {
                    if (item.toLowerCase().includes(query)) {
                        const leafNode = document.getElementById(`leaf-${phase.id}-${subIdx}-${itemIdx}`);
                        if (leafNode) leafNode.classList.add('highlighted');
                    }
                });
            });
        });
    });

    clearSearchBtn.addEventListener('click', () => {
        mindmapSearch.value = '';
        clearSearchBtn.style.display = 'none';
        document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
    });

    // 8. MATRIX / CARDS VIEW RENDERER
    function renderMatrixView() {
        matrixGrid.innerHTML = '';

        mindmapData.forEach(phase => {
            if (activePhaseFilter !== 'all' && activePhaseFilter !== String(phase.number)) return;

            const card = document.createElement('div');
            card.className = 'glass-card matrix-card';
            card.innerHTML = `
                <div class="matrix-card-header">
                    <span class="matrix-phase-tag">Phase ${phase.number}</span>
                    <i class="fa-solid fa-diagram-project" style="color: ${phase.themeColor}"></i>
                </div>
                <h3>${phase.title}</h3>
                <p style="font-size:0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">${phase.description}</p>
                ${phase.subCategories.map(sub => `
                    <div class="matrix-section">
                        <div class="matrix-section-title"><i class="fa-solid ${sub.icon}"></i> ${sub.title}</div>
                        <ul class="matrix-list">
                            ${sub.items.map(item => `<li><i class="fa-solid fa-chevron-right"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            `;
            matrixGrid.appendChild(card);
        });
    }

    // View Switcher (Tree vs Matrix)
    btnViewTree.addEventListener('click', () => {
        btnViewTree.classList.add('active');
        btnViewMatrix.classList.remove('active');
        mindmapViewport.style.display = 'block';
        matrixViewport.style.display = 'none';
        requestAnimationFrame(() => drawConnectors());
    });

    btnViewMatrix.addEventListener('click', () => {
        btnViewMatrix.classList.add('active');
        btnViewTree.classList.remove('active');
        mindmapViewport.style.display = 'none';
        matrixViewport.style.display = 'block';
        renderMatrixView();
    });

    // 9. NODE DETAILS MODAL SIDE PANEL
    const modalBackdrop = document.getElementById('nodeModalBackdrop');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalNodeTitle = document.getElementById('modalNodeTitle');
    const modalPhaseBadge = document.getElementById('modalPhaseBadge');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalItemsList = document.getElementById('modalItemsList');
    const modalMetrics = document.getElementById('modalMetrics');

    function openNodeModal(data) {
        modalNodeTitle.textContent = data.title;
        modalPhaseBadge.textContent = data.phaseBadge;
        modalCategory.textContent = data.category;
        modalDescription.textContent = data.description;
        
        modalItemsList.innerHTML = '';
        if (data.items && data.items.length > 0) {
            data.items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-check-double"></i> ${item}`;
                modalItemsList.appendChild(li);
            });
        }

        modalMetrics.textContent = data.metrics || 'Verified deliverable under PediRisk AI framework.';
        modalBackdrop.classList.add('open');
    }

    function closeModal() {
        modalBackdrop.classList.remove('open');
    }

    modalClose.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
    });

    // 10. NAVBAR SCROLL & MOBILE MENU
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('mobile-open');
        });
    });

    // 11. INITIALIZATION
    renderMindmapTree();

    // Redraw connectors on window resize
    window.addEventListener('resize', () => {
        drawConnectors();
    });
});
