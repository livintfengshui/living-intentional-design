import type { Lang } from "./translations";

export type ServiceSection = {
  heading?: string;
  paras?: string[];
  list?: string[];
  steps?: { title: string; body: string }[];
};

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ServiceSection[];
  signature: string;
};

export const SERVICE_SLUGS = [
  "livint-basic",
  "audit-livint",
  "space-livint",
  "new-livint-space",
  "decor-curation",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

const en: Record<ServiceSlug, ServiceDetail> = {
  "livint-basic": {
    slug: "livint-basic",
    title: "LIVINT Basic",
    tagline: "An expert perspective to help you make better decisions about your space.",
    metaTitle: "LIVINT Basic — Interior & Feng Shui Consultation | LIVINT",
    metaDescription:
      "A personalised consultation on interior design and Classical Feng Shui to help you make clearer decisions about your space before you act.",
    intro: [
      "Not every space needs a renovation. Sometimes, it simply needs to be seen differently.",
      "LIVINT Basic is a personalised consultation designed to address specific interior design and Classical Feng Shui questions, and to help you make clearer decisions before taking action.",
      "We look at a particular space, layout, need or idea that is not quite working, and explore realistic, coherent solutions tailored to the way you live.",
    ],
    sections: [
      {
        heading: "When can it help?",
        list: [
          "When you need a professional second opinion.",
          "When you are unsure how to arrange a room.",
          "When you want to reorganise a space without major construction work.",
          "When you are considering changing furniture, lighting or functionality.",
          "When you feel a space could work much better, but you do not know where to begin.",
        ],
      },
      {
        heading: "One consultation. Clearer decisions.",
        paras: [
          "Before changing, buying or renovating, we take the time to understand.",
          "During the session we explore the elements that directly affect the experience of the space: layout, circulation, proportions, light, rest, activity and, where relevant, the principles of Classical Feng Shui.",
          "The goal is not to give you more options. It is to help you identify which decisions genuinely make sense for your space.",
        ],
      },
      {
        heading: "The process",
        steps: [
          {
            title: "Understanding the space",
            body:
              "Before the session we collect floor plans, photographs and the information needed to understand the context and your needs.",
          },
          {
            title: "Analysis",
            body:
              "During a personalised session we explore the questions you want to resolve and identify opportunities for improvement.",
          },
          {
            title: "Priorities",
            body:
              "You receive clear, practical recommendations, organised so you know what to do, what to avoid and where to begin.",
          },
        ],
      },
      {
        heading: "You will receive",
        list: [
          "A personalised 90–120 minute consultation",
          "Prior analysis of the information provided",
          "Specific recommendations",
          "A summary document after the session",
          "Priorities and suggested next steps",
        ],
      },
      {
        heading: "The outcome",
        paras: [
          "You do not leave with an endless list of things to do. You leave with clarity.",
          "Because sometimes transforming a space simply begins with knowing how to see it.",
        ],
      },
    ],
    signature: "A first perspective to begin transforming your space.",
  },
  "audit-livint": {
    slug: "audit-livint",
    title: "Audit LIVINT",
    tagline: "Before you buy a property, discover what it could become.",
    metaTitle: "Audit LIVINT — Pre-Purchase Property Analysis | LIVINT",
    metaDescription:
      "A pre-purchase property assessment combining interior design and Classical Feng Shui to reveal a property's true potential before you invest.",
    intro: [
      "Buying a home is one of the most significant financial decisions we make. Yet properties are often chosen primarily through what we see during a viewing: the light, the views, the finishes, the initial feeling.",
      "There is another question worth asking: what is the true potential of this space to become the place you need?",
      "Audit LIVINT assesses a property before purchase through two complementary perspectives — interior design and Classical Feng Shui. We do not simply analyse what the property is today; we explore what it could become, and what it would take to get there.",
    ],
    sections: [
      {
        heading: "Who is it for?",
        paras: [
          "For anyone considering purchasing a home, second residence, commercial premises or office, and looking to make the decision with a broader perspective. Especially when there are questions about:",
        ],
        list: [
          "Layout",
          "Renovation possibilities",
          "Orientation and relationship with the surroundings",
          "Circulation",
          "Use of floor area",
          "Positioning of different functions",
          "The property's true potential for transformation",
        ],
      },
      {
        heading: "What do we analyse?",
        steps: [
          {
            title: "The existing space",
            body:
              "Layout, proportions, entrances, circulation, relationships between rooms, natural light and ventilation.",
          },
          {
            title: "Its potential for transformation",
            body:
              "What could be reorganised, which elements may constrain a renovation and what opportunities the property offers.",
          },
          {
            title: "The Classical Feng Shui perspective",
            body:
              "Orientation and the spatial characteristics relevant to Classical Feng Shui, integrated into the overall reading of the property.",
          },
          {
            title: "The space and your way of life",
            body:
              "A property can have excellent objective qualities and still fail to respond to the needs of the person who will live or work there. We consider how you want to live, rest, work and experience the space.",
          },
        ],
      },
      {
        heading: "A perspective before you invest",
        paras: [
          "The result is not a renovation project. It is something that comes before it: a decision-making tool.",
          "The report identifies strengths, opportunities, limitations and possible courses of action, allowing you to assess the property with greater clarity.",
        ],
      },
      {
        heading: "You will receive",
        list: [
          "A pre-purchase property analysis",
          "An assessment of its redistribution and renovation potential",
          "An analysis of its main spatial constraints",
          "Classical Feng Shui analysis",
          "An annotated floor plan and recommendations",
          "Identification of opportunities and limitations",
          "A personalised report",
          "A presentation session and the opportunity to discuss your questions",
        ],
      },
      {
        heading: "The outcome",
        paras: [
          "Before falling in love with a property, you will be able to understand it.",
          "Because a good purchase should not depend solely on how a property looks today. It should also consider how well it could work tomorrow.",
        ],
      },
    ],
    signature: "The property before the property.",
  },
  "space-livint": {
    slug: "space-livint",
    title: "Space LIVINT",
    tagline: "Redesigning a space so it works with you again.",
    metaTitle: "Space LIVINT — Redesign of Existing Spaces | LIVINT",
    metaDescription:
      "Redistribution and interior design for existing homes and professional spaces, integrating Classical Feng Shui from the first decisions.",
    intro: [
      "Some homes are beautifully decorated and still do not work. A bedroom too exposed to the movement of the house. A living room that forces you to cross through a resting area. A room carrying too many different functions. Square metres that exist, but are not being used effectively.",
      "Space LIVINT begins with a simple idea: before decorating a space, we need to understand how it needs to be lived in.",
      "This is our redesign service for existing homes, offices and professional spaces, integrating emotional interior design and Classical Feng Shui from the earliest decisions — so the space becomes more coherent with the people who inhabit it.",
      "It is not about changing for the sake of changing. We analyse first: how the space is currently used, what works, what creates friction, what you need to change. From there, we develop a new spatial proposal.",
    ],
    sections: [
      {
        heading: "Our approach",
        steps: [
          {
            title: "Understand",
            body: "We learn how you live or work, what you need and what is currently not working.",
          },
          {
            title: "Read",
            body:
              "We analyse the existing space: layout, circulation, light, proportions, functions and Classical Feng Shui principles.",
          },
          {
            title: "Reconfigure",
            body:
              "We develop a new spatial organisation that prioritises functionality, wellbeing and coherence.",
          },
          {
            title: "Design",
            body:
              "We build the identity of the interior through materials, lighting, colour, furniture and textures.",
          },
          {
            title: "Bring it to life",
            body: "We support the decisions required to translate the concept into the actual space.",
          },
        ],
      },
      {
        heading: "It can include",
        list: [
          "Space redistribution",
          "Interior design project",
          "Spatial concept and narrative",
          "Materials and finishes",
          "Lighting",
          "Furniture",
          "Textiles and decorative elements",
          "Classical Feng Shui integration",
          "Project documentation according to scope",
          "Support throughout the process",
        ],
      },
      {
        heading: "Who is it for?",
        paras: [
          "For those who feel their space no longer reflects the way they live.",
          "For those whose circumstances, needs or lifestyle have changed.",
          "For those looking for something deeper than a purely aesthetic update.",
        ],
      },
      {
        heading: "The outcome",
        paras: [
          "A space designed not simply to be photographed. A space designed to be lived in.",
        ],
      },
    ],
    signature: "Redesigning to live better.",
  },
  "new-livint-space": {
    slug: "new-livint-space",
    title: "New LIVINT Space",
    tagline: "Designing with intention from the very first line.",
    metaTitle: "New LIVINT Space — New Builds & Full Renovations | LIVINT",
    metaDescription:
      "Interior design and Classical Feng Shui integrated from the earliest stages of a new build or comprehensive renovation project.",
    intro: [
      "When a home is designed from scratch, there is an opportunity that should not be overlooked: to think about the space before it is built.",
      "New LIVINT Space is our approach to new-build projects and comprehensive renovations, where interior design and Classical Feng Shui are considered from the earliest stages.",
      "We do not wait until the architecture is finished to think about how it will be lived in. We work ahead of time so that layout, orientation, circulation, natural light, functions and atmosphere form part of one coherent vision.",
    ],
    sections: [
      {
        heading: "When everything begins earlier, everything works better together",
        paras: [
          "We become involved at the stages where important decisions can still be made:",
        ],
        list: [
          "The position of a room",
          "The relationship between public and private areas",
          "The way natural light enters",
          "Circulation routes",
          "The location of specific functions",
          "Materials and finishes",
          "The relationship between architecture and interior",
        ],
      },
      {
        heading: "The process",
        steps: [
          {
            title: "Initial reading",
            body:
              "We analyse the project, property or site and the needs of the people who will inhabit it.",
          },
          {
            title: "Spatial strategy",
            body:
              "We establish criteria for layout, orientation, functions and relationships between spaces.",
          },
          {
            title: "Feng Shui integration",
            body:
              "We apply the relevant principles of Classical Feng Shui within the design process, rather than adding them as a final layer.",
          },
          {
            title: "Interior development",
            body:
              "We define materials, lighting, furniture, atmospheres and the elements that shape the experience of the space.",
          },
          {
            title: "Collaboration",
            body:
              "We coordinate interior decisions with the professionals involved in the project to maintain a coherent overall vision.",
          },
        ],
      },
      {
        heading: "Who is it for?",
        paras: [
          "For individuals building or comprehensively renovating their home.",
          "For owners looking for a particularly considered approach to a second residence.",
          "For architects, developers and professionals who wish to incorporate a Classical Feng Shui perspective into a project without compromising its architectural language.",
        ],
      },
      {
        heading: "The outcome",
        paras: [
          "A home designed before it exists.",
          "A project where architecture, interior design, functionality and spatial intention become part of the same conversation.",
        ],
      },
    ],
    signature: "Designing from the beginning changes the outcome.",
  },
  "decor-curation": {
    slug: "decor-curation",
    title: "Decor & Curation by LIVINT",
    tagline: "The final details also shape a space.",
    metaTitle: "Decor & Curation by LIVINT — Furniture, Sourcing & Styling",
    metaDescription:
      "Selection, sourcing and styling of furniture, lighting, textiles, art and objects to complete an interior with intention.",
    intro: [
      "A project does not end when the furniture is installed. It ends when everything finds its place.",
      "Decor & Curation by LIVINT is our service for selecting, sourcing and styling the furniture, lighting, textiles, art and objects that complete an interior — a considered approach designed to avoid impulsive purchases and ensure every piece has a purpose within the whole.",
      "It is not about filling a space. It is about selecting. We look for pieces that speak to one another and to the space itself — through proportion, materials, texture, function and presence.",
      "The result should feel natural, as though every element had always belonged there.",
    ],
    sections: [
      {
        heading: "The process",
        steps: [
          {
            title: "Define",
            body:
              "We begin with the concept of the space and establish the furniture and decorative requirements.",
          },
          {
            title: "Select",
            body:
              "We source pieces, materials and objects according to the budget and the identity established for the project.",
          },
          {
            title: "Curate",
            body: "We compare options and create a coherent selection, avoiding isolated decisions.",
          },
          {
            title: "Source",
            body:
              "We can support the purchasing and order coordination process according to the agreed scope.",
          },
          {
            title: "Style",
            body:
              "Finally, we bring the whole composition together through the placement of furniture, textiles, lighting and objects.",
          },
        ],
      },
      {
        heading: "We can work with",
        list: [
          "Furniture",
          "Lighting",
          "Rugs",
          "Textiles",
          "Art",
          "Decorative objects",
          "Accessories",
          "Statement pieces",
          "Final styling",
        ],
      },
      {
        heading: "Who is it for?",
        paras: [
          "For those who want to enjoy the finished result without spending weeks searching, comparing, purchasing and coordinating every piece.",
          "For those who value a carefully considered selection.",
          "For those who understand that a sophisticated space is not about having more, but about choosing better.",
        ],
      },
      {
        heading: "The outcome",
        paras: [
          "A finished, coherent and personal space. Without unnecessary purchases. Without pieces competing with one another. Without the feeling that something is missing.",
          "Only what genuinely adds value.",
        ],
      },
    ],
    signature: "Choose less. Choose better.",
  },
};

const es: Record<ServiceSlug, ServiceDetail> = {
  "livint-basic": {
    slug: "livint-basic",
    title: "LIVINT Basic",
    tagline: "Una mirada experta para tomar mejores decisiones sobre tu espacio.",
    metaTitle: "LIVINT Basic — Consulta de Interiorismo y Feng Shui | LIVINT",
    metaDescription:
      "Una consulta personalizada de interiorismo y Feng Shui Clásico para tomar decisiones más claras sobre tu espacio antes de actuar.",
    intro: [
      "No todos los espacios necesitan una reforma. A veces, simplemente necesitan mirarse de otra manera.",
      "LIVINT Basic es una consulta personalizada pensada para resolver dudas concretas de interiorismo y Feng Shui Clásico, y ayudarte a decidir con más claridad antes de actuar.",
      "Observamos un espacio, una distribución, una necesidad o una idea que no acaba de funcionar, y exploramos soluciones realistas y coherentes con tu forma de vivir.",
    ],
    sections: [
      {
        heading: "¿Cuándo puede ayudarte?",
        list: [
          "Cuando necesitas una segunda opinión profesional.",
          "Cuando no sabes cómo organizar una estancia.",
          "Cuando quieres reorganizar un espacio sin obra.",
          "Cuando estás valorando cambiar mobiliario, iluminación o funcionalidad.",
          "Cuando sientes que un espacio podría funcionar mucho mejor, pero no sabes por dónde empezar.",
        ],
      },
      {
        heading: "Una consulta. Decisiones más claras.",
        paras: [
          "Antes de cambiar, comprar o reformar, dedicamos tiempo a comprender.",
          "Durante la sesión exploramos los elementos que afectan directamente a la experiencia del espacio: distribución, circulación, proporciones, luz, descanso, actividad y, cuando procede, los principios del Feng Shui Clásico.",
          "El objetivo no es darte más opciones. Es ayudarte a identificar qué decisiones tienen realmente sentido para tu espacio.",
        ],
      },
      {
        heading: "El proceso",
        steps: [
          {
            title: "Comprender el espacio",
            body:
              "Antes de la sesión recopilamos planos, fotografías y la información necesaria para entender el contexto y tus necesidades.",
          },
          {
            title: "Análisis",
            body:
              "En una sesión personalizada exploramos las dudas que quieres resolver e identificamos oportunidades de mejora.",
          },
          {
            title: "Prioridades",
            body:
              "Recibes recomendaciones claras y prácticas, ordenadas para saber qué hacer, qué evitar y por dónde empezar.",
          },
        ],
      },
      {
        heading: "Qué incluye",
        list: [
          "Una consulta personalizada de 90–120 minutos",
          "Análisis previo de la información aportada",
          "Recomendaciones específicas",
          "Un documento resumen tras la sesión",
          "Prioridades y siguientes pasos sugeridos",
        ],
      },
      {
        heading: "El resultado",
        paras: [
          "No te vas con una lista infinita de cosas por hacer. Te vas con claridad.",
          "Porque a veces transformar un espacio empieza simplemente por saber mirarlo.",
        ],
      },
    ],
    signature: "Una primera mirada para empezar a transformar tu espacio.",
  },
  "audit-livint": {
    slug: "audit-livint",
    title: "Audit LIVINT",
    tagline: "Antes de comprar una propiedad, descubre en qué puede convertirse.",
    metaTitle: "Audit LIVINT — Análisis de Vivienda Antes de Comprar | LIVINT",
    metaDescription:
      "Evaluación de una propiedad antes de la compra, combinando interiorismo y Feng Shui Clásico para descubrir su verdadero potencial.",
    intro: [
      "Comprar una vivienda es una de las decisiones financieras más importantes. Y, sin embargo, las propiedades suelen elegirse por lo que vemos en una visita: la luz, las vistas, los acabados, la primera sensación.",
      "Hay otra pregunta que merece hacerse: ¿cuál es el verdadero potencial de este espacio para convertirse en el lugar que necesitas?",
      "Audit LIVINT evalúa una propiedad antes de la compra desde dos perspectivas complementarias: interiorismo y Feng Shui Clásico. No analizamos solo lo que la propiedad es hoy; exploramos en qué puede convertirse y qué haría falta para lograrlo.",
    ],
    sections: [
      {
        heading: "¿Para quién es?",
        paras: [
          "Para quien está considerando comprar una vivienda, segunda residencia, local u oficina y quiere decidir con una perspectiva más amplia. Especialmente cuando hay dudas sobre:",
        ],
        list: [
          "Distribución",
          "Posibilidades de reforma",
          "Orientación y relación con el entorno",
          "Circulación",
          "Aprovechamiento de la superficie",
          "Ubicación de las distintas funciones",
          "El potencial real de transformación",
        ],
      },
      {
        heading: "¿Qué analizamos?",
        steps: [
          {
            title: "El espacio existente",
            body:
              "Distribución, proporciones, accesos, circulación, relación entre estancias, luz natural y ventilación.",
          },
          {
            title: "Su potencial de transformación",
            body:
              "Qué podría reorganizarse, qué elementos pueden condicionar una reforma y qué oportunidades ofrece la propiedad.",
          },
          {
            title: "La lectura de Feng Shui Clásico",
            body:
              "Orientación y características espaciales relevantes para el Feng Shui Clásico, integradas en la lectura global de la propiedad.",
          },
          {
            title: "El espacio y tu forma de vivir",
            body:
              "Una propiedad puede tener excelentes cualidades objetivas y no responder a las necesidades de quien va a vivir o trabajar en ella. Consideramos cómo quieres vivir, descansar, trabajar y habitar el espacio.",
          },
        ],
      },
      {
        heading: "Una perspectiva antes de invertir",
        paras: [
          "El resultado no es un proyecto de reforma. Es algo previo: una herramienta para decidir.",
          "El informe identifica fortalezas, oportunidades, limitaciones y posibles vías de actuación, para que puedas valorar la propiedad con mayor claridad.",
        ],
      },
      {
        heading: "Qué incluye",
        list: [
          "Análisis de la propiedad antes de la compra",
          "Valoración de su potencial de redistribución y reforma",
          "Análisis de sus principales condicionantes espaciales",
          "Análisis de Feng Shui Clásico",
          "Plano anotado y recomendaciones",
          "Identificación de oportunidades y limitaciones",
          "Un informe personalizado",
          "Sesión de presentación y espacio para resolver dudas",
        ],
      },
      {
        heading: "El resultado",
        paras: [
          "Antes de enamorarte de una propiedad, podrás comprenderla.",
          "Porque una buena compra no debería depender solo de cómo se ve hoy, sino también de cómo podría funcionar mañana.",
        ],
      },
    ],
    signature: "La propiedad antes de la propiedad.",
  },
  "space-livint": {
    slug: "space-livint",
    title: "Space LIVINT",
    tagline: "Rediseñar un espacio para que vuelva a funcionar contigo.",
    metaTitle: "Space LIVINT — Rediseño de Espacios Existentes | LIVINT",
    metaDescription:
      "Redistribución e interiorismo para viviendas y espacios profesionales existentes, con Feng Shui Clásico desde las primeras decisiones.",
    intro: [
      "Hay casas bellamente decoradas que siguen sin funcionar. Un dormitorio demasiado expuesto al movimiento de la casa. Un salón que obliga a atravesar una zona de descanso. Una estancia que carga con demasiadas funciones. Metros que existen, pero no se aprovechan.",
      "Space LIVINT parte de una idea simple: antes de decorar un espacio, hay que entender cómo necesita ser habitado.",
      "Es nuestro servicio de rediseño para viviendas, oficinas y espacios profesionales existentes, integrando interiorismo emocional y Feng Shui Clásico desde las primeras decisiones, para que el espacio sea más coherente con quienes lo habitan.",
      "No se trata de cambiar por cambiar. Primero analizamos: cómo se usa hoy el espacio, qué funciona, qué genera fricción, qué necesitas cambiar. A partir de ahí desarrollamos una nueva propuesta espacial.",
    ],
    sections: [
      {
        heading: "Nuestro enfoque",
        steps: [
          {
            title: "Comprender",
            body: "Conocemos cómo vives o trabajas, qué necesitas y qué no está funcionando.",
          },
          {
            title: "Leer",
            body:
              "Analizamos el espacio existente: distribución, circulación, luz, proporciones, funciones y principios de Feng Shui Clásico.",
          },
          {
            title: "Reconfigurar",
            body:
              "Desarrollamos una nueva organización espacial que prioriza funcionalidad, bienestar y coherencia.",
          },
          {
            title: "Diseñar",
            body:
              "Construimos la identidad del interior a través de materiales, iluminación, color, mobiliario y texturas.",
          },
          {
            title: "Materializar",
            body: "Acompañamos las decisiones necesarias para llevar el concepto al espacio real.",
          },
        ],
      },
      {
        heading: "Puede incluir",
        list: [
          "Redistribución del espacio",
          "Proyecto de interiorismo",
          "Concepto y narrativa espacial",
          "Materiales y acabados",
          "Iluminación",
          "Mobiliario",
          "Textiles y elementos decorativos",
          "Integración de Feng Shui Clásico",
          "Documentación de proyecto según alcance",
          "Acompañamiento durante el proceso",
        ],
      },
      {
        heading: "¿Para quién es?",
        paras: [
          "Para quien siente que su espacio ya no refleja su forma de vivir.",
          "Para quien ha visto cambiar sus circunstancias, necesidades o estilo de vida.",
          "Para quien busca algo más profundo que una actualización estética.",
        ],
      },
      {
        heading: "El resultado",
        paras: ["Un espacio pensado no para ser fotografiado, sino para ser vivido."],
      },
    ],
    signature: "Rediseñar para vivir mejor.",
  },
  "new-livint-space": {
    slug: "new-livint-space",
    title: "New LIVINT Space",
    tagline: "Diseñar con intención desde la primera línea.",
    metaTitle: "New LIVINT Space — Obra Nueva y Reformas Integrales | LIVINT",
    metaDescription:
      "Interiorismo y Feng Shui Clásico integrados desde las primeras fases de una obra nueva o una reforma integral.",
    intro: [
      "Cuando una vivienda se diseña desde cero existe una oportunidad que no conviene desaprovechar: pensar el espacio antes de construirlo.",
      "New LIVINT Space es nuestro enfoque para obra nueva y reformas integrales, donde el interiorismo y el Feng Shui Clásico se consideran desde las primeras fases.",
      "No esperamos a que la arquitectura esté terminada para pensar cómo se va a habitar. Trabajamos con antelación para que distribución, orientación, circulación, luz natural, funciones y atmósfera formen parte de una misma visión coherente.",
    ],
    sections: [
      {
        heading: "Cuando todo empieza antes, todo funciona mejor",
        paras: ["Nos incorporamos en las fases en las que aún pueden tomarse decisiones importantes:"],
        list: [
          "La posición de una estancia",
          "La relación entre zonas públicas y privadas",
          "La forma en que entra la luz natural",
          "Los recorridos de circulación",
          "La ubicación de funciones concretas",
          "Materiales y acabados",
          "La relación entre arquitectura e interior",
        ],
      },
      {
        heading: "El proceso",
        steps: [
          {
            title: "Lectura inicial",
            body:
              "Analizamos el proyecto, la propiedad o el solar y las necesidades de quienes lo habitarán.",
          },
          {
            title: "Estrategia espacial",
            body:
              "Establecemos criterios de distribución, orientación, funciones y relaciones entre espacios.",
          },
          {
            title: "Integración de Feng Shui",
            body:
              "Aplicamos los principios pertinentes de Feng Shui Clásico dentro del proceso de diseño, no como una capa final.",
          },
          {
            title: "Desarrollo del interior",
            body:
              "Definimos materiales, iluminación, mobiliario, atmósferas y los elementos que dan forma a la experiencia del espacio.",
          },
          {
            title: "Colaboración",
            body:
              "Coordinamos las decisiones de interior con los profesionales implicados para mantener una visión global coherente.",
          },
        ],
      },
      {
        heading: "¿Para quién es?",
        paras: [
          "Para quien construye o reforma integralmente su vivienda.",
          "Para propietarios que buscan un enfoque especialmente cuidado en una segunda residencia.",
          "Para arquitectos, promotores y profesionales que desean incorporar la perspectiva del Feng Shui Clásico sin comprometer el lenguaje arquitectónico del proyecto.",
        ],
      },
      {
        heading: "El resultado",
        paras: [
          "Una casa diseñada antes de existir.",
          "Un proyecto donde arquitectura, interiorismo, funcionalidad e intención espacial forman parte de la misma conversación.",
        ],
      },
    ],
    signature: "Diseñar desde el principio cambia el resultado.",
  },
  "decor-curation": {
    slug: "decor-curation",
    title: "Decor & Curation by LIVINT",
    tagline: "Los últimos detalles también construyen el espacio.",
    metaTitle: "Decor & Curation by LIVINT — Selección y Styling",
    metaDescription:
      "Selección, compra y styling de mobiliario, iluminación, textiles, arte y objetos para completar un interior con intención.",
    intro: [
      "Un proyecto no termina cuando se instala el mobiliario. Termina cuando todo encuentra su lugar.",
      "Decor & Curation by LIVINT es nuestro servicio de selección, aprovisionamiento y styling del mobiliario, iluminación, textiles, arte y objetos que completan un interior: un enfoque pensado para evitar compras impulsivas y asegurar que cada pieza tenga un propósito dentro del conjunto.",
      "No se trata de llenar un espacio. Se trata de seleccionar. Buscamos piezas que dialoguen entre sí y con el propio espacio — a través de la proporción, el material, la textura, la función y la presencia.",
      "El resultado debe sentirse natural, como si cada elemento hubiera estado allí siempre.",
    ],
    sections: [
      {
        heading: "El proceso",
        steps: [
          {
            title: "Definir",
            body:
              "Partimos del concepto del espacio y establecemos las necesidades de mobiliario y decoración.",
          },
          {
            title: "Seleccionar",
            body:
              "Buscamos piezas, materiales y objetos según el presupuesto y la identidad definida para el proyecto.",
          },
          {
            title: "Curar",
            body: "Comparamos opciones y creamos una selección coherente, evitando decisiones aisladas.",
          },
          {
            title: "Aprovisionar",
            body:
              "Podemos acompañar el proceso de compra y coordinación de pedidos según el alcance acordado.",
          },
          {
            title: "Styling",
            body:
              "Finalmente unimos toda la composición mediante la colocación de mobiliario, textiles, iluminación y objetos.",
          },
        ],
      },
      {
        heading: "Podemos trabajar con",
        list: [
          "Mobiliario",
          "Iluminación",
          "Alfombras",
          "Textiles",
          "Arte",
          "Objetos decorativos",
          "Accesorios",
          "Piezas singulares",
          "Styling final",
        ],
      },
      {
        heading: "¿Para quién es?",
        paras: [
          "Para quien quiere disfrutar del resultado final sin dedicar semanas a buscar, comparar, comprar y coordinar cada pieza.",
          "Para quien valora una selección cuidadosamente pensada.",
          "Para quien entiende que un espacio sofisticado no consiste en tener más, sino en elegir mejor.",
        ],
      },
      {
        heading: "El resultado",
        paras: [
          "Un espacio terminado, coherente y personal. Sin compras innecesarias. Sin piezas compitiendo entre sí. Sin la sensación de que falta algo.",
          "Solo lo que aporta valor.",
        ],
      },
    ],
    signature: "Elegir menos. Elegir mejor.",
  },
};

export const serviceDetails: Record<Lang, Record<ServiceSlug, ServiceDetail>> = { en, es };

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}
