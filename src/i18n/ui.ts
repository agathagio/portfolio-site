export const languages = {
  en: 'EN',
  pt: 'PT',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.status': 'Open to remote roles',
    'hero.eyebrow': 'Growth · Performance · Analytics · AI',
    'hero.headline.a': 'Growth, performance',
    'hero.headline.b': 'and analytics, with AI',
    'hero.headline.c': 'I build myself.',
    'hero.sub':
      'Ten years in digital: performance and growth at a startup, CRO consulting for national consumer brands, analytics, and digital retail run end to end. Plus the AI systems I build to scale the execution.',
    'hero.cta.work': 'See the work',
    'hero.cta.cv': 'Download CV',
    'readout.orders': 'Orders / month',
    'readout.orders.note': '~5× in 4 months',
    'cases.title': 'Selected projects',
    'cases.lede':
      'Recent production work, sanitized for the public. Each project started as a real operational or data bottleneck and follows the same method I bring to growth: measure, prioritize, automate.',
    'cases.read': 'Read the case',
    'about.title': 'About',
    'about.body.a':
      'I am Agatha Gioielli. Ten years in growth, performance and marketing analytics: performance and growth at the largest gaming startup in Latin America, CRO consulting for brands like Cultura Inglesa, and running e-commerce and digital for a fashion retailer, from acquisition to post-purchase.',
    'about.body.b':
      'In recent years I added building AI systems in production: data pipelines, a content operating system, image automation. I am looking for remote senior individual contributor roles in growth, CRO and analytics, where technical depth counts for more than team size.',
    'about.cta.linkedin': 'LinkedIn',
    'about.cta.cv': 'Download CV',
    'footer.built': 'Built with Claude Code',
    'footer.source': 'Source on GitHub',
    'footer.email': 'Email',
    'case.related': 'Related cases',
    'case.stack': 'Stack',
    'case.back': 'All work',
    'lang.switch': 'Em português',
  },
  pt: {
    'nav.work': 'Projetos',
    'nav.about': 'Sobre',
    'nav.status': 'Aberta a vagas remotas',
    'hero.eyebrow': 'Growth · Performance · Analytics · IA',
    'hero.headline.a': 'Growth, performance',
    'hero.headline.b': 'e analytics, com IA',
    'hero.headline.c': 'que eu mesma construo.',
    'hero.sub':
      'Dez anos no digital: performance e growth em startup, consultoria de CRO para marcas nacionais, analytics e operação digital de ponta a ponta no varejo. E os sistemas de IA que construo para escalar a execução.',
    'hero.cta.work': 'Ver os projetos',
    'hero.cta.cv': 'Baixar CV',
    'readout.orders': 'Pedidos / mês',
    'readout.orders.note': '~5× em 4 meses',
    'cases.title': 'Projetos selecionados',
    'cases.lede':
      'Trabalho recente em produção, sanitizado para o público. Cada projeto nasceu de um gargalo real de operação ou de dado, e segue o mesmo método que aplico a growth: medir, priorizar, automatizar.',
    'cases.read': 'Ler o case',
    'about.title': 'Sobre',
    'about.body.a':
      'Sou Agatha Gioielli. Dez anos em growth, performance e marketing analytics: performance e growth na maior startup de games da América Latina, consultoria de CRO para marcas como Cultura Inglesa, e gestão de e-commerce e digital no varejo de moda, da aquisição ao pós-venda.',
    'about.body.b':
      'Nos últimos anos somei a construção de sistemas de IA em produção: pipelines de dados, sistema operacional de conteúdo, automação de imagem. Procuro vagas remotas de especialista sênior em growth, CRO e analytics, onde profundidade técnica pesa mais que tamanho de time.',
    'about.cta.linkedin': 'LinkedIn',
    'about.cta.cv': 'Baixar CV',
    'footer.built': 'Feito com Claude Code',
    'footer.source': 'Código no GitHub',
    'footer.email': 'E-mail',
    'case.related': 'Cases relacionados',
    'case.stack': 'Stack',
    'case.back': 'Todos os projetos',
    'lang.switch': 'In English',
  },
} as const;
