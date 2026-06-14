export type Lang = "es" | "en";

export const content = {
  es: {
    meta: {
      title: "Martín Giura — Fundador, Advisor & Fractional CRO",
      description:
        "Tecnología y ventas para reescribir el sistema operativo de las empresas de América Latina. Infraestructura de revenue, prospección B2B y advisory.",
    },
    nav: {
      story: "Trayectoria",
      services: "Servicios",
      advisory: "Advisory",
      awards: "Reconocimientos",
      contact: "Contacto",
      cta: "Trabajemos juntos",
    },
    hero: {
      eyebrow: "Fundador · Advisor · Fractional CRO",
      titleLead: "Tecnología y ventas para reescribir el",
      titleEmphasis: "sistema operativo",
      titleTail: "de las empresas de América Latina.",
      subtitle:
        "Dos compañías fundadas y vendidas. Dos años en Silicon Valley. Hoy ayudo a empresas B2B a construir la infraestructura de revenue y los sistemas de prospección que necesitan para crecer en serio.",
      ctaPrimary: "Trabajemos juntos",
      ctaSecondary: "Ver trayectoria",
      location: "Desde Uruguay · para toda América Latina y Estados Unidos",
    },
    proof: {
      label: "Una trayectoria construida en",
      logos: ["woOw!", "Piio", "AngelPad", "Forum Ventures", "Inter Miami", "Prospecta"],
    },
    stats: [
      { value: "2", label: "Compañías fundadas y vendidas" },
      { value: "2 años", label: "Construyendo en Silicon Valley" },
      { value: "#2", label: "Dev Tool of the Year (Piio)" },
      { value: "15 años", label: "Haciendo empresas de tecnología" },
    ],
    story: {
      eyebrow: "Trayectoria",
      title: "De fundador a operador de revenue.",
      paragraphs: [
        "Empecé construyendo. woOw! nació en 2012 y se convirtió en una de las referencias de ecommerce de la región, hasta su adquisición por el Grupo de Narváez (TaTa) en 2019.",
        "Después vino Piio, una herramienta para developers que me llevó a Silicon Valley. Pasé dos años allá, por las aceleradoras AngelPad y Forum Ventures (Acceleprise), aprendiendo de cerca cómo se construyen y se venden productos de clase mundial. Tuve como mentor a Tito Bohrt, uno de los referentes globales de ventas en SaaS. Piio fue elegida 2.ª mejor dev tool del año y fue adquirida por Swell a fines de 2021.",
        "Trabajé tres años en inteligencia artificial aplicada al fútbol, detectando patrones de juego exitosos para clubes como el Inter Miami. Y en Pineapple ayudé a empresas de Estados Unidos a escalar con equipos nearshore.",
        "Hoy soy CEO de Prospecta. Tomo todo lo que aprendí usando las últimas tecnologías de datos en Estados Unidos y las metodologías más avanzadas de generación de demanda, y lo pongo al servicio de las empresas de América Latina.",
      ],
    },
    timeline: {
      eyebrow: "Línea de tiempo",
      title: "El camino, hito por hito.",
      items: [
        {
          year: "2012",
          tag: "woOw!",
          title: "Fundación de woOw!",
          description:
            "Lanzo woOw! y lo convierto en una de las plataformas de ecommerce líderes de la región. Premiado en eCommerce Day y por El Observador.",
        },
        {
          year: "2017",
          tag: "Ecosistema",
          title: "Ley de Emprendedores",
          description:
            "Junto a Justin Graside y otros referentes del ecosistema, impulso la Ley de Emprendedores en Uruguay.",
        },
        {
          year: "2019",
          tag: "Exit",
          title: "woOw! adquirida por Grupo de Narváez (TaTa)",
          description:
            "Tras siete años de crecimiento, woOw! es adquirida por uno de los grupos de retail más grandes de la región.",
        },
        {
          year: "2019–2021",
          tag: "Silicon Valley",
          title: "Piio en Silicon Valley",
          description:
            "Dos años en el Valley con Piio: aceleradoras AngelPad y Forum Ventures, mentoría de Tito Bohrt y el reconocimiento como 2.ª mejor dev tool del año.",
        },
        {
          year: "2021",
          tag: "Exit",
          title: "Piio adquirida por Swell",
          description:
            "Piio es adquirida por Swell a fines de 2021, mi segundo exit como fundador.",
        },
        {
          year: "2022–2024",
          tag: "IA & Nearshore",
          title: "IA aplicada al fútbol y Pineapple",
          description:
            "Tres años desarrollando IA para detectar patrones de juego exitosos en clubes como el Inter Miami. En Pineapple, escalo empresas de Estados Unidos con equipos nearshore.",
        },
        {
          year: "Hoy",
          tag: "Prospecta",
          title: "CEO de Prospecta",
          description:
            "Lidero Prospecta en la intersección de tecnología y ventas, cambiando el sistema operativo con el que funcionan las empresas de América Latina.",
        },
      ],
    },
    services: {
      eyebrow: "Prospecta",
      title: "Infraestructura de revenue y prospección B2B.",
      intro:
        "En Prospecta diseñamos y operamos los sistemas que hacen que tu equipo comercial deje de improvisar. Combinamos las últimas tecnologías de datos con metodologías probadas en el mercado más competitivo del mundo.",
      cards: [
        {
          number: "01",
          title: "Prospección outbound",
          description:
            "Generación de demanda y pipeline predecible. Listas, mensajes y secuencias multicanal que llenan la agenda de tu equipo comercial.",
          bullets: [
            "Identificación y enriquecimiento de cuentas ideales (ICP)",
            "Secuencias multicanal: email, LinkedIn y llamadas",
            "Copywriting y testing de mensajes",
            "Reuniones calificadas, no solo clics",
          ],
        },
        {
          number: "02",
          title: "Infraestructura de revenue",
          description:
            "El stack y los procesos para que las ventas sean un sistema, no una persona. CRM, automatización, datos y reporting que escalan.",
          bullets: [
            "Diseño e implementación de CRM",
            "Automatización y operaciones de revenue (RevOps)",
            "Modelos de datos y dashboards accionables",
            "Playbooks y procesos comerciales",
          ],
        },
        {
          number: "03",
          title: "Estrategia go-to-market",
          description:
            "Del posicionamiento al motor de adquisición. Definimos a quién, con qué mensaje y por qué canal vas a crecer.",
          bullets: [
            "ICP, segmentación y posicionamiento",
            "Pricing y propuesta de valor",
            "Canales de adquisición",
            "Métricas y unit economics",
          ],
        },
      ],
    },
    advisory: {
      eyebrow: "Advisory",
      title: "Como advisor, board member o Fractional CRO.",
      intro:
        "Para founders y equipos de liderazgo que quieren acelerar su crecimiento sin sumar un ejecutivo full-time. Llevo experiencia real de construir, escalar y vender compañías a tu mesa.",
      roles: [
        {
          title: "Fractional CRO",
          description:
            "Lidero tu estrategia de revenue part-time: estructura comercial, contrataciones clave, forecasting y ejecución.",
        },
        {
          title: "Advisor",
          description:
            "Acompañamiento cercano a founders en go-to-market, fundraising y la transición de fundador-vendedor a un equipo comercial sólido.",
        },
        {
          title: "Board / Directorio",
          description:
            "Aporte estratégico desde el directorio, con foco en crecimiento, expansión internacional y disciplina de revenue.",
        },
      ],
    },
    awards: {
      eyebrow: "Reconocimientos",
      title: "Premios y reconocimientos.",
      items: [
        { title: "2.ª Dev Tool of the Year", org: "Piio", year: "2021" },
        { title: "eCommerce Award", org: "eCommerce Day", year: "2012" },
        { title: "eCommerce Award", org: "El Observador", year: "2012" },
        { title: "Alumni de aceleradoras", org: "AngelPad · Forum Ventures", year: "Silicon Valley" },
        { title: "Mentoría de Tito Bohrt", org: "Referente global en ventas SaaS", year: "Silicon Valley" },
        { title: "Impulsor de la Ley de Emprendedores", org: "Junto a Justin Graside", year: "2017" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Construimos tu motor de crecimiento?",
      text: "Ya sea que necesites un sistema de prospección, infraestructura de revenue o un advisor que ya recorrió el camino, hablemos.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        message: "¿En qué estás trabajando?",
        submit: "Enviar mensaje",
        sending: "Enviando…",
        success: "¡Gracias! Te respondo a la brevedad.",
        error: "Algo salió mal. Probá de nuevo o escribime por LinkedIn.",
        required: "Completá este campo.",
        invalidEmail: "Ingresá un email válido.",
      },
      linkedinText: "¿Preferís hablar por otro lado?",
      linkedinCta: "Conectá en LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/martingiura/",
    },
    footer: {
      tagline: "Tecnología y ventas para América Latina.",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    meta: {
      title: "Martín Giura — Founder, Advisor & Fractional CRO",
      description:
        "Technology and sales to rewrite the operating system of Latin American companies. Revenue infrastructure, B2B outbound and advisory.",
    },
    nav: {
      story: "Track record",
      services: "Services",
      advisory: "Advisory",
      awards: "Recognition",
      contact: "Contact",
      cta: "Let's work together",
    },
    hero: {
      eyebrow: "Founder · Advisor · Fractional CRO",
      titleLead: "Technology and sales to rewrite the",
      titleEmphasis: "operating system",
      titleTail: "of Latin American companies.",
      subtitle:
        "Two companies founded and sold. Two years in Silicon Valley. Today I help B2B companies build the revenue infrastructure and outbound systems they need to grow for real.",
      ctaPrimary: "Let's work together",
      ctaSecondary: "See track record",
      location: "From Uruguay · for all of Latin America and the US",
    },
    proof: {
      label: "A track record built across",
      logos: ["woOw!", "Piio", "AngelPad", "Forum Ventures", "Inter Miami", "Prospecta"],
    },
    stats: [
      { value: "2", label: "Companies founded & acquired" },
      { value: "2 yrs", label: "Building in Silicon Valley" },
      { value: "#2", label: "Dev Tool of the Year (Piio)" },
      { value: "15 yrs", label: "Building technology companies" },
    ],
    story: {
      eyebrow: "Track record",
      title: "From founder to revenue operator.",
      paragraphs: [
        "I started by building. woOw! launched in 2012 and grew into one of the region's leading ecommerce players, until its acquisition by Grupo de Narváez (TaTa) in 2019.",
        "Then came Piio, a developer tool that took me to Silicon Valley. I spent two years there, going through AngelPad and Forum Ventures (Acceleprise), learning firsthand how world-class products are built and sold. My mentor was Tito Bohrt, one of the global references in SaaS sales. Piio was named the #2 dev tool of the year and was acquired by Swell in late 2021.",
        "I spent three years in applied AI for football, detecting winning play patterns for clubs like Inter Miami. At Pineapple, I helped US companies scale with nearshore teams.",
        "Today I'm CEO of Prospecta. I take everything I learned using the latest data technologies in the US and the most advanced demand-generation methodologies, and put it to work for companies across Latin America.",
      ],
    },
    timeline: {
      eyebrow: "Timeline",
      title: "The path, milestone by milestone.",
      items: [
        {
          year: "2012",
          tag: "woOw!",
          title: "Founded woOw!",
          description:
            "Launched woOw! and grew it into one of the region's leading ecommerce platforms. Awarded at eCommerce Day and by El Observador.",
        },
        {
          year: "2017",
          tag: "Ecosystem",
          title: "Entrepreneurs Law",
          description:
            "Alongside Justin Graside and other ecosystem leaders, helped drive Uruguay's Entrepreneurs Law.",
        },
        {
          year: "2019",
          tag: "Exit",
          title: "woOw! acquired by Grupo de Narváez (TaTa)",
          description:
            "After seven years of growth, woOw! is acquired by one of the region's largest retail groups.",
        },
        {
          year: "2019–2021",
          tag: "Silicon Valley",
          title: "Piio in Silicon Valley",
          description:
            "Two years in the Valley with Piio: AngelPad and Forum Ventures, mentorship from Tito Bohrt, and recognition as the #2 dev tool of the year.",
        },
        {
          year: "2021",
          tag: "Exit",
          title: "Piio acquired by Swell",
          description:
            "Piio is acquired by Swell in late 2021 — my second exit as a founder.",
        },
        {
          year: "2022–2024",
          tag: "AI & Nearshore",
          title: "Applied AI in football and Pineapple",
          description:
            "Three years building AI to detect winning play patterns for clubs like Inter Miami. At Pineapple, scaling US companies with nearshore teams.",
        },
        {
          year: "Today",
          tag: "Prospecta",
          title: "CEO of Prospecta",
          description:
            "Leading Prospecta at the intersection of technology and sales, changing the operating system Latin American companies run on.",
        },
      ],
    },
    services: {
      eyebrow: "Prospecta",
      title: "B2B revenue infrastructure and outbound.",
      intro:
        "At Prospecta we design and run the systems that stop your sales team from improvising. We combine the latest data technologies with methodologies proven in the world's most competitive market.",
      cards: [
        {
          number: "01",
          title: "Outbound prospecting",
          description:
            "Demand generation and predictable pipeline. Lists, messaging and multichannel sequences that fill your team's calendar.",
          bullets: [
            "Ideal account identification & enrichment (ICP)",
            "Multichannel sequences: email, LinkedIn and calls",
            "Copywriting and message testing",
            "Qualified meetings, not just clicks",
          ],
        },
        {
          number: "02",
          title: "Revenue infrastructure",
          description:
            "The stack and processes that make sales a system, not a single person. CRM, automation, data and reporting that scale.",
          bullets: [
            "CRM design and implementation",
            "Automation and revenue operations (RevOps)",
            "Data models and actionable dashboards",
            "Sales playbooks and processes",
          ],
        },
        {
          number: "03",
          title: "Go-to-market strategy",
          description:
            "From positioning to acquisition engine. We define who you'll win, with what message, and through which channel.",
          bullets: [
            "ICP, segmentation and positioning",
            "Pricing and value proposition",
            "Acquisition channels",
            "Metrics and unit economics",
          ],
        },
      ],
    },
    advisory: {
      eyebrow: "Advisory",
      title: "As an advisor, board member or Fractional CRO.",
      intro:
        "For founders and leadership teams who want to accelerate growth without adding a full-time executive. I bring real experience building, scaling and selling companies to your table.",
      roles: [
        {
          title: "Fractional CRO",
          description:
            "I lead your revenue strategy part-time: commercial structure, key hires, forecasting and execution.",
        },
        {
          title: "Advisor",
          description:
            "Close support for founders on go-to-market, fundraising, and the transition from founder-led sales to a real sales team.",
        },
        {
          title: "Board",
          description:
            "Strategic contribution from the board, focused on growth, international expansion and revenue discipline.",
        },
      ],
    },
    awards: {
      eyebrow: "Recognition",
      title: "Awards and recognition.",
      items: [
        { title: "#2 Dev Tool of the Year", org: "Piio", year: "2021" },
        { title: "eCommerce Award", org: "eCommerce Day", year: "2012" },
        { title: "eCommerce Award", org: "El Observador", year: "2012" },
        { title: "Accelerator alumni", org: "AngelPad · Forum Ventures", year: "Silicon Valley" },
        { title: "Mentored by Tito Bohrt", org: "Global reference in SaaS sales", year: "Silicon Valley" },
        { title: "Drove the Entrepreneurs Law", org: "Alongside Justin Graside", year: "2017" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we build your growth engine?",
      text: "Whether you need an outbound system, revenue infrastructure, or an advisor who has already walked the path — let's talk.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "What are you working on?",
        submit: "Send message",
        sending: "Sending…",
        success: "Thank you! I'll get back to you shortly.",
        error: "Something went wrong. Try again or reach me on LinkedIn.",
        required: "This field is required.",
        invalidEmail: "Enter a valid email.",
      },
      linkedinText: "Prefer another channel?",
      linkedinCta: "Connect on LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/martingiura/",
    },
    footer: {
      tagline: "Technology and sales for Latin America.",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Content = (typeof content)[Lang];
