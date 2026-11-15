// Featured projects (PORTFOLIO_CONTENT.md §4). Statuses follow the approved
// content: DR is "In Progress, if still accurate"; RabbY's status is set
// from its actual implementation — the lab-final app runs on device with
// the full flow verified, so it is marked Completed.
export const projects = [
  {
    id: 'dr-classification',
    number: '001',
    category: 'AI Research / Computer Vision',
    title: 'Diabetic Retinopathy Classification & Explainability',
    summary:
      'An academic research project exploring deep-learning architectures for diabetic-retinopathy stage classification and model explainability using retinal fundus images.',
    metadata: [
      { label: 'CATEGORY', value: 'AI Research' },
      { label: 'DOMAIN', value: 'Medical Image Analysis' },
      { label: 'METHOD', value: 'Deep Learning / XAI' },
    ],
    status: 'in-progress',
    tags: [
      'Python',
      'Deep Learning',
      'CNN',
      'Grad-CAM',
      'Medical Image Analysis',
      'Five-class classification',
    ],
    visual: 'architecture',
    // Case-study page is Phase 2; no repository link verified for this project.
    caseStudy: null,
  },
  {
    id: 'rabby-food-delivery',
    number: '002',
    category: 'Software Engineering / Android Development',
    title: 'RabbY Food Delivery Android Application',
    summary:
      'An Android food-delivery application developed as an academic project, focused on food browsing and ordering workflows.',
    metadata: [
      { label: 'CATEGORY', value: 'Software Engineering' },
      { label: 'PLATFORM', value: 'Android' },
      { label: 'STACK', value: 'Java / XML / SQLite' },
    ],
    // Plain text status: the research-vocabulary pill does not fit a
    // shipped academic app. Set from the verified lab-final state.
    statusText: 'Completed',
    tags: ['Java', 'XML', 'Android Studio', 'SQLite', 'RecyclerView', 'Android UI'],
    visual: 'flow',
    repoUrl:
      'https://github.com/rabbyhasanrzs/Food-Delivery-APP/tree/feature/phase-1-foundation',
    repoLabel: 'View on GitHub',
  },
]
