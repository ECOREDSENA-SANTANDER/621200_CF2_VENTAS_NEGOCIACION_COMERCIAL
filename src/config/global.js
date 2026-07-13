export default {
  global: {
    Name: 'Prospección de clientes',
    Description:
      'En este componente se identifica el conjunto de actividades que realiza una empresa para seleccionar a sus clientes. Así mismo, se expondrá su tipología, los mercados en los cuales se desenvuelven y las estrategias que se utilizan con el fin de atraerlos, retenerlos y fidelizarlos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mercado de consumo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: ' Mercados industriales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mercados de revendedores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mercados de gobierno',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Mercados internacionales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relación del mercadeo y los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atraer clientes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Retener clientes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fidelizar clientes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación de clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Identificación y prospección de clientes potenciales',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_631101_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  referencias: [
    {
      referencia:
        'Agüero, C. (2014). Estrategia de fidelización de clientes. Universidad de Cantabria.',
      link: '',
    },
    {
      referencia:
        'Escamilla, G. (2020). Fidelización del cliente: concepto, importancia, consejos y métricas. RD Station.',
      link: '',
    },
    {
      referencia:
        'González, M. (2002). Concepto de mercado y sus tipos. Gestiópolis.',
      link: 'https://www.gestiopolis.com/concepto-mercado-tipos/',
    },
    {
      referencia:
        'González Camacho, M. (2018). Segmentación, Definición de Público Objetivo y Posicionamiento. [presentación] Universidad Interamericana para el desarrollo. ',
      link: '',
    },
    {
      referencia:
        'Gronroos, C. (1994). Marketing y Gestión de servicios. Diaz de Santos. 1a Edición.',
      link: '',
    },
    {
      referencia:
        'Hatch, H. (2016). La fidelización de clientes no sólo tiene forma de tarjeta. ',
      link: 'https://soy.marketing/la-fidelizacion-de-clientes/ ',
    },
    {
      referencia:
        'Promove Consultoría e formación SLNE. (2012). Atraer y fidelizar clientes. CEEI Galicia.',
    },
    {
      referencia:
        'Pursell, S. (2021). Clientes potenciales: qué son, qué tipos existen y cómo identificarlos. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/tipos-de-clientes-potenciales ',
    },
    {
      referencia:
        'Quiroa, M. (2020). Cliente: Qué es y cuál es su importancia. Economipedia.',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      referencia:
        'Redacción emprendedores (2021). ¿Qué significa modelo de negocio? Emprendedores.es. ',
      link:
        'https://www.emprendedores.es/estrategia/que-significa-modelo-de-negocio/',
    },
    {
      referencia:
        'Schnarch, A. (2013). <i>Marketing</i> para pymes. Alfa Omega. ',
      link: '',
    },
    {
      referencia:
        'Torres Morales, V. (2014). Administración de ventas. Grupo Editorial Patria.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Persona natural o jurídica que adquiere un producto o servicio mediante una transacción económica para satisfacer una necesidad o expectativa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Persona o entidad que reúne las características del mercado objetivo y que tiene posibilidades de convertirse en cliente.',
    },
    {
      termino: 'Contacto',
      significado:
        'Persona con la que la empresa establece una primera comunicación para obtener información, presentar una oferta o iniciar una relación comercial.',
    },
    {
      termino: 'Entrevista comercial',
      significado:
        'Reunión entre el vendedor y el prospecto para identificar necesidades, presentar soluciones y generar oportunidades de negocio.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Conjunto de estrategias orientadas a fortalecer la relación con los clientes para fomentar compras repetidas y relaciones comerciales de largo plazo (Hatch, 2018).',
    },
    {
      termino: '<i>Lead</i>',
      significado:
        'Contacto que ha manifestado interés inicial en un producto o servicio y que puede convertirse en prospecto tras un proceso de calificación.',
    },
    {
      termino: 'Mercado de consumo',
      significado:
        'Conjunto de personas que adquieren bienes o servicios para satisfacer necesidades personales o familiares.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Segmento específico del mercado al que la empresa dirige sus esfuerzos de mercadeo y ventas por presentar mayor probabilidad de compra.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'Herramienta que describe la propuesta de valor de una organización, el mercado al que se dirige, la forma en que genera ingresos y los recursos necesarios para operar (Redacción Emprendedores, 2021).',
    },
    {
      termino: 'Necesidad del cliente',
      significado:
        'Problema, deseo o requerimiento que puede satisfacerse mediante un producto o servicio ofrecido por la empresa.',
    },
    {
      termino: 'Prospecto',
      significado:
        'Cliente potencial que cumple con el perfil definido por la empresa, tiene capacidad de compra y posibilidad de tomar o influir en la decisión de adquisición.',
    },
    {
      termino: 'Prospección de clientes',
      significado:
        'Proceso sistemático de identificar, seleccionar, calificar y contactar clientes potenciales con el propósito de generar oportunidades de venta.',
    },
    {
      termino: 'Referido',
      significado:
        'Cliente potencial recomendado por un cliente, aliado o contacto, lo que facilita el establecimiento de una relación comercial.',
    },
    {
      termino: 'Retención de clientes',
      significado:
        'Estrategias y acciones implementadas para mantener a los clientes actuales, promover su permanencia y aumentar su valor para la organización.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'Grupo de consumidores que comparten características, necesidades o comportamientos similares, lo que permite diseñar estrategias comerciales específicas (Quiroa, 2020).',
    },
    {
      termino: 'Referido',
      significado:
        'Cliente potencial recomendado por un cliente, aliado o contacto, lo que facilita el establecimiento de una relación comercial.',
    },
    {
      termino: 'Retención de clientes',
      significado:
        'Estrategias y acciones implementadas para mantener a los clientes actuales, promover su permanencia y aumentar su valor para la organización.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'Grupo de consumidores que comparten características, necesidades o comportamientos similares, lo que permite diseñar estrategias comerciales específicas (Quiroa, 2020).',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor técnico',
          centro: 'Centro de Comercio y Servicio - Regional Bolívar',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Corrector de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhana Johanna Bustillo Ardila',
          cargo: 'Revisión de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Erika Fernandez Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
