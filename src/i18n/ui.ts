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
    'hero.eyebrow': 'Growth · CRO · Marketing Analytics · E-commerce',
    'hero.headline.a': 'Growth & e-commerce,',
    'hero.headline.b': 'amplified by the systems',
    'hero.headline.c': 'I build.',
    'hero.sub':
      'Ten years turning operations into engineered systems. I run a lean fashion e-commerce and built 16+ AI automations that multiply its output.',
    'hero.cta.work': 'See the work',
    'hero.cta.cv': 'Download CV',
    'readout.orders': 'Orders / month',
    'readout.orders.note': '~5× in 4 months',
    'readout.automations': 'Automations',
    'readout.automations.note': 'built with Claude Code',
    'readout.years': 'Years',
    'readout.years.note': 'growth · analytics · e-commerce',
    'cases.title': 'Selected systems',
    'cases.lede':
      'Three production systems, sanitized for the public. Each one started as a real bottleneck and became something the operation runs on every week.',
    'cases.read': 'Read the case',
    'about.title': 'About',
    'about.body.a':
      'I am Agatha Gioielli, a growth and e-commerce specialist with ten years across CRO, marketing analytics and digital retail. I have led performance and growth at Nuuvem, CRO consulting at Supersonic (Cultura Inglesa, Altenburg), and digital at Ágatha.',
    'about.body.b':
      'Today I run the digital channel of a lean fashion retailer end to end, amplified by AI systems I designed and built: data pipelines, a content operating system, and image automation. I work hands-on as a senior individual contributor, the kind who ships systems rather than headcount.',
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
    'hero.eyebrow': 'Growth · CRO · Marketing Analytics · E-commerce',
    'hero.headline.a': 'Growth e e-commerce,',
    'hero.headline.b': 'ampliados pelos sistemas',
    'hero.headline.c': 'que eu construo.',
    'hero.sub':
      'Dez anos transformando operação em sistemas de engenharia. Toco um e-commerce de moda com equipe enxuta e construí 16+ automações de IA que multiplicam o output.',
    'hero.cta.work': 'Ver os projetos',
    'hero.cta.cv': 'Baixar CV',
    'readout.orders': 'Pedidos / mês',
    'readout.orders.note': '~5× em 4 meses',
    'readout.automations': 'Automações',
    'readout.automations.note': 'construídas com Claude Code',
    'readout.years': 'Anos',
    'readout.years.note': 'growth · analytics · e-commerce',
    'cases.title': 'Sistemas selecionados',
    'cases.lede':
      'Três sistemas de produção, sanitizados para o público. Cada um nasceu de um gargalo real e virou algo que a operação roda toda semana.',
    'cases.read': 'Ler o case',
    'about.title': 'Sobre',
    'about.body.a':
      'Sou Agatha Gioielli, especialista em growth e e-commerce com dez anos entre CRO, marketing analytics e varejo digital. Liderei performance e growth na Nuuvem, consultoria de CRO na Supersonic (Cultura Inglesa, Altenburg) e o digital na Ágatha.',
    'about.body.b':
      'Hoje toco o canal digital de uma varejista de moda enxuta de ponta a ponta, ampliada por sistemas de IA que desenhei e construí: pipelines de dados, um sistema operacional de conteúdo e automação de imagem. Trabalho mão na massa, como especialista sênior que entrega sistema, não headcount.',
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
