<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Prospección de cliente',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> apropiarse de los conocimientos asociados a la prospección de clientes, así como su tipología, los mercados en los cuales se desenvuelven y las estrategias que se utilizan para atraerlos, retenerlos y fidelizarlos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la prospección de clientes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de identificar y atraer potenciales clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La venta directa de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El análisis financiero de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La distribución de mercancías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el objetivo principal de la prospección de clientes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Generar oportunidades de venta mediante la identificación de posibles compradores.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Diseñar nuevos productos.', esCorrecta: false },
            { id: 'd', texto: 'Controlar la competencia.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza al mercado de consumo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compra productos para revenderlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compra productos para procesos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compra bienes o servicios para uso personal o familiar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compra exclusivamente para exportar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 4,
          texto: '¿Quiénes participan en los mercados industriales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Consumidores finales.', esCorrecta: false },
            { id: 'b', texto: 'Instituciones educativas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Organizaciones sin ánimo de lucro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Empresas que adquieren productos para producir otros bienes o servicios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función principal de los mercados de revendedores?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprar productos para revenderlos a otros consumidores o empresas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fabricar productos terminados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Exportar mercancías.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Regular los precios del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza a los mercados de gobierno?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compran productos para consumo personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comercializan productos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Adquieren bienes y servicios para satisfacer necesidades gubernamentales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Revenden productos a empresas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 7,
          texto: '¿Qué son los mercados internacionales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mercados que operan únicamente dentro de una ciudad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mercados donde se compran y venden productos en un contexto global.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mercados exclusivos para gobiernos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mercados destinados a consumidores locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 8,
          texto: '¿Cuál es una estrategia utilizada para atraer clientes?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la calidad del servicio.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Eliminar la publicidad.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Aplicar acciones de <i>marketing</i>, publicidad y promoción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la comunicación con los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 9,
          texto: '¿Qué acción contribuye a retener clientes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorar sus necesidades.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Incrementar los tiempos de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender los canales de atención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Implementar programas de lealtad y mantener una comunicación constante.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 10,
          texto: '¿Qué significa fidelizar clientes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incrementar los precios.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reducir la oferta de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lograr que los clientes mantengan una relación duradera con la empresa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la atención posventa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 11,
          texto: '¿Quiénes son los clientes potenciales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Personas que muestran interés en un producto o servicio, pero aún no han comprado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Clientes que compran regularmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clientes que dejaron de comprar hace años.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Clientes corporativos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 12,
          texto: '¿Quiénes son los clientes actuales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personas que nunca han comprado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personas interesadas en comprar en el futuro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Clientes que han realizado compras y permanecen activos en el mercado.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Clientes inactivos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza a los clientes leales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Compran una sola vez.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Compran regularmente y presentan un alto nivel de satisfacción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No muestran interés en la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizan compras esporádicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 14,
          texto: '¿Quiénes son los clientes inactivos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personas interesadas en adquirir productos.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Clientes frecuentes.', esCorrecta: false },
            { id: 'c', texto: 'Clientes potenciales.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Personas que compraron anteriormente, pero no lo han hecho recientemente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 15,
          texto: '¿Cuál es el primer paso en el proceso de prospección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación de prospectos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Conversión de clientes.', esCorrecta: false },
            { id: 'c', texto: 'Cierre de ventas.', esCorrecta: false },
            { id: 'd', texto: 'Facturación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 16,
          texto: '¿Qué implica la calificación de prospectos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar cuáles prospectos tienen mayor probabilidad de convertirse en clientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar estudios financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar eventos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 17,
          texto: '¿Qué ocurre durante la etapa de enfoque y contacto inicial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se realiza la venta definitiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se elimina al prospecto del proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se establece el primer acercamiento con el posible cliente.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Se realiza la facturación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 18,
          texto: '¿Cuál es el propósito del seguimiento y conversión?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar productos nuevos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reducir la inversión publicitaria.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Clasificar mercados.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Transformar prospectos en clientes mediante acciones de acompañamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 19,
          texto: '¿Cuál de las siguientes es una herramienta de prospección?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inventario físico.', esCorrecta: false },
            { id: 'b', texto: 'Balance general.', esCorrecta: false },
            { id: 'c', texto: 'Redes sociales.', esCorrecta: true },
            { id: 'd', texto: 'Nómina de empleados.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 20,
          texto:
            '¿Qué técnica permite contactar prospectos mediante mensajes enviados a través del correo electrónico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Investigación de mercado.', esCorrecta: false },
            { id: 'b', texto: 'Eventos y ferias.', esCorrecta: false },
            { id: 'c', texto: 'Redes sociales.', esCorrecta: false },
            { id: 'd', texto: 'Email <i>marketing</i>.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos de la Prospección de clientes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
