const quizzes = [
  {
    name: "Estadistica 1 Parcial 2",
    questions: [
      {
        question:
          "¿Qué tamaño debe tener la muestra si la empresa quiere estimar el sueldo promedio de todos los profesionales del rubro en la provincia de Córdoba y está dispuesta a aceptar un margen de error de +- $1.000, con un nivel de confianza del 95%?",
        options: [
          "865 empleados",
          "1000 empleados",
          "950 empleados",
          "900 empleados",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El tamaño mínimo de la muestra necesario para obtener la precisión especificada es de 865 empleados.",
      },
      {
        question:
          "Si una variable aleatoria X se distribuye según Poisson con λ=40, ¿a qué distribución podemos aproximar esta distribución de Poisson?",
        options: [
          "Normal con µ = 40 y σ = 6.3246",
          "Binomial con n = 40 y p = 0.5",
          "Uniforme entre 0 y 80",
          "Exponencial con λ = 1/40",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La distribución de Poisson con λ=40 puede ser aproximada por una distribución normal con µ = 40 y σ = 6.3246 debido a la relación entre Poisson y normal cuando λ es grande.",
      },
      {
        question:
          "¿Cuál es el valor esperado al tirar un dado equilibrado de 6 caras?",
        options: ["3.5", "3", "4", "2.5"],
        answer: [0],
        multi: false,
        explanation:
          "El valor esperado al tirar un dado de 6 caras, calculado como el promedio ponderado de sus resultados posibles, es 3.5.",
      },
      {
        question:
          "¿Cuál es el error muestral estándar de la distribución de medias de los cheques rechazados si se toma una muestra de 20 cuentas?",
        options: ["0.3354", "0.6574", "0.5", "0.75"],
        answer: [0],
        multi: false,
        explanation:
          "El error muestral estándar de la distribución de medias de los cheques rechazados es 0.3354.",
      },
      {
        question:
          "¿Qué fórmula utilizaría para calcular el tamaño de la muestra, si cuenta con el resto de los datos?",
        options: ["(z*σ/E)^2", "(z*σ)^2 / E", "z / (σ*E)", "(E / (z*σ))^2"],
        answer: [0],
        multi: false,
        explanation:
          "La fórmula para calcular el tamaño de la muestra en función del margen de error E, la desviación estándar σ y el valor crítico z es (z*σ/E)^2.",
      },
    ],
  },
  {
    name: "Seguridad informatica Parcial 2",
    questions: [
      {
        question:
          " Cual de las siguientes opciones corresponde la definición de un ataque? 'falsear la dirección fuente de un correo o email, enviando por tanto mensajes en nombre de otra persona",
        options: ["Spamming", "Phishing", "Spoofing", "Malware"],
        answer: [2],
        multi: false,
        explanation:
          "El spoofing implica falsear la dirección fuente de un correo o email, enviando mensajes en nombre de otra persona.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones NO corresponde a un tipo de vulnerabilidad que afecte a los equipos?",
        options: [
          "Malware",
          "Servidores y base de datos",
          "Phishing",
          "Ingeniería social",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Los servidores y bases de datos no son considerados vulnerabilidades, sino los objetivos de los ataques.",
      },
      {
        question:
          "En relación a la tipología de motivaciones de los atacantes, ¿Cuál es una de ellas?",
        options: [
          "Consideraciones económicas",
          "Ingeniería social",
          "Malware",
          "Suplantación de identidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los atacantes pueden estar motivados por consideraciones económicas, entre otras razones.",
      },
      {
        question:
          "En un ataque pasivo, ¿Qué dimensión de la Seguridad de la Información se vulnera?",
        options: [
          "Integridad",
          "Confidencialidad",
          "Disponibilidad",
          "Autenticación",
        ],
        answer: [1],
        multi: false,
        explanation:
          "En un ataque pasivo, la confidencialidad de la información se ve comprometida sin alterarla.",
      },
      {
        question: "¿Qué es un ataque Pasivo?",
        options: [
          "Es un tipo de ataque en el que no se producen cambios en la información y tampoco en la situación de los recursos del sistema atacado.",
          "Es un tipo de ataque que altera activamente los datos del sistema atacado.",
          "Es un ataque que busca sobrecargar los recursos del sistema atacado.",
          "Es un ataque que busca autenticar usuarios sin su consentimiento.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un ataque pasivo no modifica ni altera los datos ni los recursos del sistema atacado.",
      },
      {
        question:
          "En relación a los Cortafuegos (Firewall), ¿qué implica una Política Restrictiva?",
        options: [
          "Todo el tráfico de red que no esté permitido explícitamente en las reglas de filtrado será descartado.",
          "Todo el tráfico de red está permitido, excepto el explícitamente bloqueado por las reglas de filtrado.",
          "El cortafuegos no permite ningún tipo de tráfico de red.",
          "El cortafuegos permite todo tipo de tráfico de red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una política restrictiva implica que todo el tráfico no permitido explícitamente es descartado.",
      },
      {
        question:
          "¿Cuál de las siguientes características identifica a un Host Bastión?",
        options: [
          "Un equipo que actúa como servidor DNS.",
          "Un equipo que posee una sola interfaz de red.",
          "Un equipo que posee dos interfaces de red. En una conecta la red interna y en otra la red externa.",
          "Un equipo que actúa como servidor DHCP.",
        ],
        answer: [2],
        multi: false,
        explanation:
          "Un Host Bastión es un equipo que posee dos interfaces de red, una para la red interna y otra para la externa.",
      },
      {
        question:
          "En materia de topologías de defensa, ¿qué sucede en una arquitectura de Defensa en Profundidad?",
        options: [
          "Cada capa de seguridad se superpone sin conexión entre sí.",
          "Si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema.",
          "Cada capa de seguridad está completamente aislada de las demás.",
          "Cada capa de seguridad depende exclusivamente de la capa anterior.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "En una Defensa en Profundidad, si una capa falla, las otras pueden mantener la seguridad.",
      },
      {
        question: "¿Qué es una Zona Desmilitarizada o DMZ?",
        options: [
          "Una red interna segura que no permite acceso desde el exterior.",
          "Una red externa que actúa como barrera entre la red interna y el exterior.",
          "Una red planteada como una zona intermedia que permite mejorar el aislamiento entre la parte pública y la parte privada de una organización.",
          "Una red que permite acceso completo a los recursos internos de una organización.",
        ],
        answer: [2],
        multi: false,
        explanation:
          "Una DMZ es una zona intermedia que mejora el aislamiento entre la parte pública y privada de una organización.",
      },
      {
        question: "¿Cuál es el objetivo de los Sistemas trampa o Señuelo?",
        options: [
          "Detectar intrusiones y prevenir ataques.",
          "Atraer a los intrusos para conocer su modus operandi.",
          "Actuar como una barrera entre la red interna y externa.",
          "Monitorizar el tráfico de red en busca de comportamiento anómalo.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Los sistemas trampa atraen a los intrusos para estudiar sus métodos de ataque.",
      },
      {
        question:
          "¿Cuál es la función de un Sistema de Detección de Intrusiones?",
        options: [
          "Detectar y prevenir ataques informáticos.",
          "Detectar y reaccionar de forma automatizada ante un incidente de seguridad que ocurra en la red interna de la organización.",
          "Bloquear todo el tráfico de red sospechoso.",
          "Actuar como un firewall para la red interna de la organización.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Un IDS detecta y reacciona automáticamente ante incidentes de seguridad en la red interna.",
      },
      {
        question:
          "En relación a los sistemas de detección de intrusiones (IDS), ¿Qué función cumple un IDS basado en Red?",
        options: [
          "Monitorizar el tráfico de red en busca de comportamiento anómalo.",
          "Monitorizar el comportamiento de un equipo en busca de comportamiento anómalo.",
          "Detectar y bloquear ataques a nivel de aplicación.",
          "Detectar y prevenir intrusiones en los servidores de la red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un IDS basado en Red monitorea el tráfico de red en busca de comportamiento anómalo.",
      },
      {
        question:
          "En relación a los sistemas de detección de intrusiones (IDS), ¿Qué función cumple un IDS basado en Host?",
        options: [
          "Monitorizar el tráfico de red en busca de comportamiento anómalo.",
          "Monitorizar el comportamiento de un equipo en busca de comportamiento anómalo.",
          "Detectar y bloquear ataques a nivel de aplicación.",
          "Detectar y prevenir intrusiones en los servidores de la red.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Un IDS basado en Host monitorea el comportamiento de un equipo en busca de comportamiento anómalo.",
      },
      {
        question: "En Sistemas Trampa o Señuelo, ¿Qué es una Honeypot?",
        options: [
          "Un servidor configurado y conectado a una red para que pueda ser sondeado, atacado e incluso comprometido por intrusos.",
          "Un dispositivo de red diseñado para bloquear automáticamente cualquier tráfico sospechoso.",
          "Una herramienta de cifrado utilizada para proteger comunicaciones sensibles.",
          "Un sistema de autenticación biométrica.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una Honeypot es un servidor configurado para ser atacado y así estudiar las tácticas de los intrusos.",
      },
      {
        question:
          "Un Sistema de Detección de Intrusiones que monitoriza el tráfico de red, ¿De qué tipo es?",
        options: [
          "NIDS (Network-based IDS)",
          "HIDS (Host-based IDS)",
          "IPS (Intrusion Prevention System)",
          "FW (Firewall)",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un IDS que monitoriza el tráfico de red se denomina NIDS o IDS basado en Red.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones denomina a las zonas que permite establecer un firewall?",
        options: [
          "Zona de seguridad",
          "Zona no fiable o zona de riesgo",
          "Perimetro de seguridad",
          "Zona restringida",
          "Zona de confianza",
        ],
        answer: [1, 2],
        multi: true,
        explanation:
          "Las zonas permitidas por un firewall son la Zona no fiable o de riesgo y la Perímetro de Seguridad.",
      },
      {
        question:
          "En relación a la arquitectura de un Sistema de Detección de Intrusiones, identifica de forma correcta a uno de sus componentes.",
        options: [
          "Fuente de datos",
          "Firmware del equipo",
          "Controlador de acceso",
          "Procesador principal",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La base de datos de patrones de comportamiento es un componente importante de un IDS.",
      },
      {
        question:
          "Los sistemas de detección de intrusión (IDS) presentan una serie de problemas, entre ellos las falsas alarmas. ¿Cuál es una de estas falsas alarmas?",
        options: [
          "Falsos Positivos",
          "Falsos Negativos",
          "Falsos Alarmas",
          "Falsos Cortafuegos",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Los Falsos Negativos son alarmas erróneas generadas por un IDS.",
      },
      {
        question:
          "Un equipo que actúa como Host Bastión, ¿Cuántas interfaces de red posee?",
        options: [
          "Una interfaz de red",
          "Dos interfaces de red",
          "Tres interfaces de red",
          "Cuatro interfaces de red",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Un Host Bastión posee dos interfaces de red, una para la red interna y otra para la externa.",
      },
      {
        question:
          "¿Cuál es una alternativa válida para dotar de seguridad al Servicio de red TELNET?",
        options: [
          "VPN (Virtual Private Network)",
          "IPsec (Internet Protocol Security)",
          "SSL TELNET (Secure Sockets Layer TELNET)",
          "SSH (Secure Shell)",
        ],
        answer: [2],
        multi: false,
        explanation:
          "SSL TELNET proporciona seguridad al servicio de red TELNET mediante SSL.",
      },
      {
        question:
          "El protocolo Secure Shell (SSH) ofrece varios mecanismos de autenticación de Usuarios, ¿cuál es uno de ellos?",
        options: [
          "Autenticación basada en contraseñas",
          "Autenticación basada en algoritmos de Clave Pública",
          "Autenticación mediante biometría",
          "Autenticación de dos factores",
        ],
        answer: [1],
        multi: false,
        explanation:
          "SSH ofrece autenticación mediante algoritmos de Clave Pública para mayor seguridad.",
      },
      {
        question:
          "En relación al protocolo simple de administración de red (SNMP), ¿Cuál afirmación es correcta?",
        options: [
          "Su última versión 3 posee características de seguridad más robustas, contempla el envío de la información cifrada a través de la red y la autenticación de los dispositivos.",
          "La versión 3 es menos segura que las versiones anteriores y no contempla cifrado ni autenticación.",
          "La versión 3 no incluye características de seguridad.",
          "Las versiones anteriores son más seguras que la versión 3.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "SNMP versión 3 posee características de seguridad más robustas, incluyendo envío cifrado de información y autenticación de dispositivos.",
      },
      {
        question:
          "En relación a la seguridad del protocolo simple de transferencia de correo (SMTP), ¿Cuál afirmación es correcta?",
        options: [
          "SMTP asume que el Remitente es quien dice ser, pero no emplea mecanismos para garantizarlo.",
          "SMTP emplea cifrado y autenticación para garantizar la identidad del remitente.",
          "SMTP no permite el envío de correos electrónicos.",
          "SMTP no tiene relación con la seguridad en el envío de correos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "SMTP asume la identidad del remitente, pero no emplea mecanismos para garantizarla.",
      },
      {
        question: "En relación al servicio web, ¿Cuál afirmación es válida?",
        options: [
          "Los servicios Web no se ven afectados por errores de programación en las aplicaciones que los publican.",
          "Los servicios Web no tienen relación con la seguridad informática.",
          "Los servicios Web son inmunes a los ataques cibernéticos.",
          "Los servicios Web se ven afectados por errores de programación en las aplicaciones que los publican.",
        ],
        answer: [3],
        multi: false,
        explanation:
          "Los servicios Web pueden ser afectados por errores de programación en las aplicaciones que los publican, lo que puede comprometer su seguridad.",
      },
      {
        question:
          "En relación al servicio de red TELNET (Telecomunicación Network), ¿Cuál afirmación es válida?",
        options: [
          "TELNET cifra la comunicación para garantizar la seguridad de los datos transmitidos.",
          "TELNET permite la comunicación segura mediante autenticación y cifrado.",
          "TELNET no cifra la comunicación.",
          "TELNET es un servicio obsoleto y sin seguridad.",
        ],
        answer: [2],
        multi: false,
        explanation:
          "TELNET no cifra la comunicación, lo que lo hace vulnerable a ataques de interceptación de datos.",
      },
      {
        question:
          "En una comunicación entre un cliente y un servidor web, los problemas de seguridad se dividen en tres grupos, en función de los datos que pueden verse comprometidos. Seleccione las 3 opciones correctas:",
        options: [
          "Seguridad en el Servidor.",
          "Seguridad en el Cliente.",
          "Seguridad en la Red.",
          "Seguridad en el Protocolo.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Los problemas de seguridad en una comunicación web pueden comprometer la seguridad en el servidor, en el cliente y en la red.",
      },
      {
        question:
          "Identifica en la siguiente lista cuáles son Servicios de Red considerados como seguros. Selecciona las opciones correctas (cuatro):",
        options: ["FTP", "SCP", "SMB", "HTTPS", "SMTP"],
        answer: [1, 3, 4],
        multi: true,
        explanation:
          "Los servicios seguros de red incluyen SCP, HTTPS y SMTP seguro (SMTPS).",
      },
      {
        question:
          "El protocolo para redes inalámbricas WPA2, también conocido como Robust Security Network (RSN) implementa ciertas características de seguridad. ¿Cuáles son? Selecciona las opciones correctas (cuatro):",
        options: [
          "Permite garantizar la confidencialidad y la integridad de los datos transmitidos.",
          "Utiliza claves de sesión para proteger los datos transmitidos.",
          "Utiliza cifrado por bloques en cadena (CBC) para garantizar la integridad de los datos transmitidos.",
          "Se basa en el algoritmo criptográfico Advanced Encryption Standard (AES).",
          "Utiliza autenticación basada en texto plano.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "WPA2 (RSN) implementa características como confidencialidad, integridad, cifrado AES y claves de sesión para la seguridad de las redes inalámbricas.",
      },
      {
        question:
          "Identifica de forma correcta cuál de los siguientes constituyen posibles ataques a las redes Inalámbricas. Selecciona las opciones correctas (cuatro):",
        options: [
          "Instalación de un Punto de Acceso falso.",
          "Análisis de tráfico y sustracción de información.",
          "Interferencias electromagnéticas.",
          "Conexión no autorizada a la red Inalámbrica.",
          "Denegación de Servicio (DoS) mediante la saturación del canal.",
        ],
        answer: [0, 1, 3, 4],
        multi: true,
        explanation:
          "Los posibles ataques a redes inalámbricas incluyen la instalación de puntos de acceso falsos, análisis de tráfico, conexiones no autorizadas y denegación de servicio.",
      },
      {
        question:
          "En relación a las redes inalámbricas, un Punto de Acceso puede ser escaneado desde una red cableada Ethernet",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. Los puntos de acceso inalámbricos pueden ser escaneados desde una red cableada para detectar y evaluar su seguridad.",
      },
      {
        question:
          "Las redes inalámbricas se encuentran expuestas a modalidades de análisis de tráfico. ¿Cuáles son? Selecciona las opciones correctas (dos):",
        options: [
          "Escaneo Pasivo",
          "Escaneo Activo",
          "Inyección de Tráfico",
          "Ataques de Diccionario",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Las modalidades de análisis de tráfico en redes inalámbricas incluyen escaneo pasivo y escaneo activo.",
      },
      {
        question:
          "Identifica cual de las siguientes prácticas se consideran buenas prácticas para la configuración segura de redes inalámbricas. Selecciona las opciones correctas (cuatro):",
        options: [
          "Utilizar herramientas de detección de intentos de intrusión.",
          "Implementar medidas físicas en el edificio de la organización.",
          "Utilizar listas de control de acceso.",
          "Separar la red inalámbrica de la red interna de la organización.",
          "Utilizar cifrado WEP para garantizar la seguridad de la red.",
        ],
        answer: [0, 2, 3, 4],
        multi: true,
        explanation:
          "Las buenas prácticas para configurar redes inalámbricas incluyen el uso de herramientas de detección, listas de control de acceso y separación de redes.",
      },
      {
        question:
          "Identifica en la siguiente lista, cuales son recomendaciones válidas para una configuración segura de una red inalámbrica. Selecciona las opciones correctas (cuatro):",
        options: [
          "Utilizar protocolos de seguridad WEP, WPA y WPA2-RSN.",
          "Cambiar con frecuencia las claves de los equipos.",
          "Inhabilitar el servicio de asignación dinámica de direcciones IP (DHCP), empleando direcciones IP estáticas en los equipos.",
          "Cambiar las claves y configuraciones por defecto de los equipos y Puntos de acceso.",
          "Permitir el acceso a la red sin autenticación para facilitar la conexión.",
        ],
        answer: [1, 2, 3, 4],
        multi: true,
        explanation:
          "Para una configuración segura de redes inalámbricas se recomienda cambiar claves frecuentemente, deshabilitar DHCP, cambiar configuraciones por defecto y utilizar protocolos seguros como WPA2.",
      },
      {
        question:
          "¿Cómo se entiende la protección proporcionada por un Sistema Operativo?",
        options: [
          "Como la separación entre usuarios.",
          "Como el control de acceso a los datos.",
          "Como la administración de la red.",
          "Como la gestión de hardware.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La protección proporcionada por un Sistema Operativo se entiende como la separación entre usuarios y la gestión de recursos.",
      },
      {
        question:
          "En un sistema Operativo, la Separación entre Usuarios se puede lograr de varias formas.",
        options: [
          "Separación física.",
          "Separación lógica.",
          "Separación temporal.",
          "Separación de funciones.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "La separación entre usuarios en un sistema operativo se puede lograr de forma lógica mediante la administración de permisos y roles.",
      },
      {
        question:
          "En un sistema Operativo, la separación entre usuarios se puede lograr de varias formas. Identifica una de ellas.",
        options: [
          "Separación física.",
          "Separación lógica.",
          "Separación temporal.",
          "Separación de funciones.",
        ],
        answer: [2],
        multi: false,
        explanation:
          "La separación entre usuarios en un sistema operativo se puede lograr temporalmente asignando privilegios por tiempo limitado.",
      },
      {
        question:
          "En un Sistema Operativo, la separación entre usuarios se puede lograr de varias formas.",
        options: [
          "Separación lógica.",
          "Separación temporal.",
          "Separación de funciones.",
          "Separación por ubicación.",
        ],
        answer: [3],
        multi: false,
        explanation:
          "La separación entre usuarios en un sistema operativo puede lograrse por ubicación física o lógica, dependiendo de los recursos a los que necesiten acceder.",
      },
      {
        question:
          "Un sistema operativo seguro, es un sistema operativo diseñado para garantizar cuatro aspectos fundamentales. Identifica a uno de estos aspectos.",
        options: [
          "La eficiencia del sistema.",
          "La disponibilidad de recursos.",
          "La integridad de los datos.",
          "La precisión funcional.",
        ],
        answer: [3],
        multi: false,
        explanation:
          "Un sistema operativo seguro se diseña para garantizar la precisión funcional, entre otros aspectos como integridad, confidencialidad y disponibilidad.",
      },
      {
        question:
          "Para una configuración segura de Servidores, ¿qué criterio se debe adoptar?",
        options: [
          "Todo lo que no está expresamente permitido, está prohibido.",
          "Todo lo que no está expresamente prohibido, está permitido.",
          "Es necesario permitir todo tipo de acceso para asegurar la conectividad.",
          "Se debe permitir el acceso solo a usuarios autorizados.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Para una configuración segura de servidores, se debe adoptar el criterio de que todo lo que no está expresamente permitido, está prohibido.",
      },
      {
        question:
          "Para la monitorización de Eventos en servidores, ¿Cuál protocolo se puede utilizar?",
        options: [
          "Protocolo de Administración Simple de Red (SNMP)",
          "Protocolo de Control de Transmisión (TCP)",
          "Protocolo de Internet (IP)",
          "Protocolo de Resolución de Nombres (DNS)",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Para la monitorización de eventos en servidores, se puede utilizar el Protocolo de Administración Simple de Red (SNMP).",
      },
      {
        question:
          "El Control de Accesos se basa en dos principios fundamentales. Identifica correctamente a uno de estos principios en la siguiente lista.",
        options: [
          "Principio de mínimo privilegio",
          "Principio de separación de responsabilidades",
          "Principio de máxima seguridad",
          "Principio de acceso libre",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El Control de Accesos se basa en el principio de mínimo privilegio, que consiste en otorgar a los usuarios solo los permisos necesarios para realizar sus tareas.",
      },
      {
        question:
          "En Control de Accesos, la Autenticación se basa en alguno, o en combinación, de ciertos factores. ¿Cuál es uno de ellos?",
        options: [
          "Algo que el usuario es.",
          "Algo que el usuario conoce.",
          "Algo que el usuario posee.",
          "Algo que el usuario desea.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "En Control de Accesos, la Autenticación se basa en algo que el usuario conoce, como una contraseña.",
      },
      {
        question:
          "En Control de Accesos, la Autenticación se basa en alguno, o en combinación, de ciertos factores. ¿Cuál es uno de ellos?",
        options: [
          "Algo que el usuario es.",
          "Algo que el usuario conoce.",
          "Algo que el usuario posee.",
          "Algo que el usuario desea.",
        ],
        answer: [2],
        multi: false,
        explanation:
          "En Control de Accesos, la Autenticación se basa en algo que el usuario posee, como una tarjeta de acceso.",
      },
      {
        question:
          "En relación al Control de Accesos ¿qué se entiende por Identificación?",
        options: [
          "Es el proceso mediante el cual se comprueba si una Identidad es verdadera.",
          "Es el proceso mediante el cual el usuario presenta una identidad concreta para acceder a un Sistema o recurso.",
          "Es el proceso mediante el cual se establecen los privilegios de acceso de un usuario.",
          "Es el proceso mediante el cual se controla el acceso a la red.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "En Control de Accesos, la Identificación es el proceso mediante el cual el usuario presenta una identidad concreta para acceder a un sistema o recurso.",
      },
      {
        question: "En Control de Accesos ¿Qué se entiende por Autenticación?",
        options: [
          "Es el proceso mediante el cual se comprueba si una Identidad es verdadera.",
          "Es el proceso mediante el cual el usuario presenta una identidad concreta para acceder a un Sistema o recurso.",
          "Es el proceso mediante el cual se establecen los privilegios de acceso de un usuario.",
          "Es el proceso mediante el cual se controla el acceso a la red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En Control de Accesos, la Autenticación es el proceso mediante el cual se comprueba si una Identidad es verdadera.",
      },
      {
        question: "En relación a los mecanismos de Autorización Discrecional.",
        options: [
          "Los controles son discrecionales en el sentido de que un usuario con un permiso de acceso es capaz de transmitir ese permiso.",
          "Los controles son estrictos y no permiten la transmisión de permisos de acceso entre usuarios.",
          "Los controles de Autorización Discrecional son automáticos y no requieren intervención del administrador.",
          "Los controles de Autorización Discrecional no están basados en permisos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En los mecanismos de Autorización Discrecional, un usuario con un permiso de acceso puede transmitir ese permiso a otros usuarios, lo que puede llevar a riesgos de seguridad.",
      },
      {
        question:
          "La autenticación se basa en alguno, o en combinación, de ciertos factores. ¿Cuál es uno de ellos?",
        options: [
          "Algo que el Usuario es.",
          "Algo que el Usuario conoce.",
          "Algo que el Usuario posee.",
          "Algo que el Usuario desea.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La autenticación se basa en algo que el Usuario es, como sus características biométricas.",
      },
      {
        question:
          "La función del control de accesos se puede resumir en la 'triple A', que proviene de ciertos términos en inglés, ¿cuál es uno de ellos?",
        options: ["Autenticación", "Autorización", "Accountability", "Acceso"],
        answer: [2],
        multi: false,
        explanation:
          "La 'triple A' del control de accesos incluye Autenticación, Autorización y Accountability.",
      },
      {
        question:
          "En la gestión de Cuentas de Usuarios, las contraseñas deben reunir requisitos mínimos para su seguridad. Identifica a uno de estos requisitos.",
        options: [
          "Longitud máxima de la contraseña.",
          "Longitud mínima de la contraseña.",
          "Complejidad de la contraseña.",
          "Frecuencia de cambio de la contraseña.",
        ],
        answer: [1],
        multi: false,
        explanation:
          "En la gestión de cuentas de usuarios, las contraseñas deben tener una longitud mínima para garantizar su seguridad.",
      },
      {
        question: "¿Qué es un Gestor de Contraseñas?",
        options: [
          "Una aplicación especializada en almacenar las credenciales de usuarios.",
          "Un administrador de usuarios en un sistema operativo.",
          "Una base de datos de contraseñas en línea.",
          "Un generador de contraseñas aleatorias.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Gestor de Contraseñas es una aplicación especializada en almacenar y gestionar las credenciales de usuarios de forma segura.",
      },
      {
        question:
          "¿Cómo define la Ley de Protección de Datos Personales de Argentina, el concepto de dato personal?",
        options: [
          "Como información de cualquier tipo referida a personas físicas o de existencia ideal determinadas o determinables.",
          "Como información relacionada únicamente con la salud de una persona.",
          "Como información financiera y bancaria de una persona.",
          "Como información obtenida de fuentes públicas sobre una persona.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Ley de Protección de Datos Personales de Argentina define dato personal como información de cualquier tipo referida a personas físicas o de existencia ideal determinadas o determinables.",
      },
      {
        question:
          "En Argentina, en relación a la Ley de Protección de Datos Personales, esta confiere una serie de derechos a los titulares de los datos. Identifica a uno de ellos.",
        options: [
          "El derecho de Información sobre los datos.",
          "El derecho de Acceso a los datos.",
          "El derecho al Olvido de los datos.",
          "El derecho de Rectificación de los datos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Ley de Protección de Datos Personales en Argentina confiere el derecho de Información sobre los datos a los titulares de los datos.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Tratamiento de los Datos como una serie de operaciones y procedimientos sistemáticos, electrónicos o no, que permitan ciertas operaciones sobre los datos. Identifica correctamente cuáles son esas operaciones. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Recolección de datos personales.",
          "Almacenamiento de datos personales.",
          "Modificación de datos personales.",
          "Evaluación de datos personales.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "El Tratamiento de los Datos, según la Ley de Protección de Datos Personales en Argentina, incluye la recolección, almacenamiento, modificación y evaluación de datos personales.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Datos Sensibles, que abarca una serie de datos de carácter personal. Identifica correctamente uno de estos datos en la siguiente lista. Selecciona la opción correcta.",
        options: [
          "Afiliación sindical",
          "Estado civil",
          "Número de teléfono",
          "Dirección de correo electrónico",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Ley de Protección de Datos Personales en Argentina considera la afiliación sindical como un dato sensible.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Datos Sensibles, que abarca una serie de datos de carácter personal. Identifica correctamente uno de estos datos en la siguiente lista. Selecciona la opción correcta.",
        options: [
          "Convicciones religiosas",
          "Lugar de nacimiento",
          "Nacionalidad",
          "Ocupación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Las convicciones religiosas son consideradas como datos sensibles según la Ley de Protección de Datos Personales en Argentina.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Datos Sensibles, que abarca una serie de datos de carácter personal. Identifica correctamente uno de estos datos en la siguiente lista. Selecciona la opción correcta.",
        options: [
          "Datos que revelen origen racial y étnico",
          "Número de documento de identidad",
          "Estado civil",
          "Dirección de residencia",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los datos que revelen origen racial y étnico son considerados como datos sensibles según la Ley de Protección de Datos Personales en Argentina.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, establece una serie de figuras o roles. Identifica de forma correcta a uno de ellos. Selecciona la opción correcta.",
        options: [
          "Usuario de datos",
          "Responsable de datos",
          "Encargado de datos",
          "Titular de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los roles definidos por la Ley de Protección de Datos Personales en Argentina es el de Usuario de datos.",
      },
      {
        question:
          "¿Cómo se identifica a un Sitio Web Seguro? Seleccione la opción correcta.",
        options: [
          "La URL del Sitio Web inicia con la extensión HTTPS.",
          "La URL del Sitio Web inicia con la extensión HTTP.",
          "La URL del Sitio Web contiene encriptación de datos.",
          "La URL del Sitio Web contiene publicidad.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Sitio Web Seguro se identifica cuando su URL comienza con la extensión HTTPS, lo que indica una conexión segura.",
      },
      {
        question:
          "En relación a la seguridad de los Sitios Web, cuando se implementan protocolos SSL/TLS como mecanismos de seguridad, es posible autenticar ambos extremos de la comunicación, aunque en la práctica, solo el Servidor se autentica. ¿Por qué no se autentica el extremo cliente (usuario)? Selecciona la opción correcta.",
        options: [
          "Porque en SSL/TLS la autenticación del cliente es solo opcional.",
          "Porque en SSL/TLS la autenticación del cliente es obligatoria.",
          "Porque el cliente no puede ser autenticado en un entorno web.",
          "Porque el servidor no permite la autenticación del cliente.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En SSL/TLS, la autenticación del cliente es opcional y no siempre se requiere, por lo que en la práctica, solo el servidor se autentica.",
      },
      {
        question:
          "En relación a los Sitios Web seguros, identifica la afirmación correcta. Selecciona la opción correcta.",
        options: [
          "Si bien el protocolo SSL ofrece autenticación para ambos extremos, en la práctica solo el Servidor se autentica.",
          "En los Sitios Web seguros, la autenticación siempre es bidireccional.",
          "En los Sitios Web seguros, la autenticación del cliente es obligatoria.",
          "La autenticación del cliente en los Sitios Web seguros es siempre opcional.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Aunque el protocolo SSL ofrece autenticación para ambos extremos, en la práctica, solo el servidor se autentica en los Sitios Web seguros.",
      },
      {
        question:
          "Tanto el Protocolo SSL como el Protocolo TLS, son protocolos de nivel de transporte, con lo cual, pueden ser utilizados para el cifrado de protocolos de nivel de aplicación. Identifica correctamente cuales pueden ser estos protocolos. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Protocolo de Transferencia de archivos (FTP)",
          "Protocolo de Hipertexto (HTTP)",
          "Protocolo de Administración Simple de Correo (SMTP)",
          "TELNET",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Tanto SSL como TLS pueden cifrar protocolos de nivel de aplicación como FTP, HTTP y SMTP.",
      },
      {
        question:
          "Identifica en la siguiente lista, las etapas de un Proceso de Peritaje Informático (Informática Forense).",
        options: [
          "Identificar evidencias digitales.",
          "Preservar evidencias digitales.",
          "Analizar evidencias digitales.",
          "Presentar evidencias digitales.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Las etapas de un Proceso de Peritaje Informático incluyen la identificación, preservación y análisis de evidencias digitales.",
      },
      {
        question:
          "El peritaje informático es un proceso que consta de varias etapas ¿Cuáles son esas etapas? Seleccione las 4 (cuatro) opciones correctas.",
        options: ["Identificación", "Análisis", "Preservación", "Presentación"],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las etapas del proceso de peritaje informático incluyen la identificación, análisis, preservación y presentación de evidencias.",
      },
      {
        question:
          "El peritaje Informático (Informática Forense), surge como una disciplina auxiliar de la justicia para proveer ¿Cuáles elementos? Selecciona las 3 (tres) opciones correctas:",
        options: [
          "Técnica",
          "Conocimientos",
          "Garantías sobre la verdad de una evidencia digital",
          "Acceso a la información pública",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "El peritaje informático proporciona elementos técnicos, conocimientos y garantías sobre la verdad de una evidencia digital.",
      },
      {
        question:
          "En un proceso de Peritaje informático, se debe tener especial cuidado con las evidencias volátiles. ¿Cuáles de los elementos se consideran evidencias volátiles? Selecciona las 4 (cuatro) opciones correctas:",
        options: [
          "Usuarios activos dentro del Sistema.",
          "Información de conexiones activas con la interfaz de Red.",
          "Procesos y Servicios en ejecución.",
          "Memoria RAM.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las evidencias volátiles en un proceso de peritaje informático incluyen usuarios activos, información de conexiones activas, procesos y servicios en ejecución, y datos en la memoria RAM.",
      },
      {
        question:
          "En relación a la Preservación de las evidencias digitales ¿Contra qué tipos de daños intenta preservar a la evidencia? Selecciona las 2 (dos) opciones correctas.",
        options: [
          "Daños intencionales.",
          "Daños accidentales",
          "Daños naturales",
          "Daños económicos",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "La preservación de evidencias digitales intenta protegerlas contra daños intencionales y accidentales.",
      },
      {
        question:
          "La Cadena de Custodia informático forense se puede definir como un procedimiento controlado y supervisable. ¿Verdadero o Falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. La Cadena de Custodia en informática forense es un procedimiento controlado y supervisable para garantizar la integridad y confiabilidad de las evidencias digitales.",
      },
      {
        question:
          "La evidencia digital debe reunir ciertas características ¿Cuáles son? Selecciona las 4 (Cuatro) opciones correctas.",
        options: [
          "Debe ser Confiable.",
          "Debe ser Suficiente.",
          "Debe ser Completa.",
          "Debe ser Permisible",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "La evidencia digital debe ser confiable, suficiente, completa y permisible para ser considerada válida.",
      },
      {
        question:
          "La finalidad de la Cadena de Custodia es asegurar la confiabilidad de la evidencia digital recolectada. ¿Verdadero o Falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. La Cadena de Custodia tiene como finalidad asegurar la confiabilidad y la integridad de la evidencia digital recolectada.",
      },
      {
        question:
          "Para que la evidencia digital sea considerada como válida y adquiera valor probatorio ante la Justicia, desde la recolección hasta su disposición final, deben implementarse procedimientos con determinadas características. Identifica esas características de la siguiente lista. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Procedimientos procesalmente adecuados.",
          "Procedimientos con soporte teórico científicos.",
          "Procedimientos estrictamente técnicos.",
          "Procedimientos metodológicos criminalísticos.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Los procedimientos para garantizar la validez de la evidencia digital deben ser procesalmente adecuados, contar con soporte teórico científico, ser estrictamente técnicos y metodológicamente criminalísticos.",
      },
      {
        question:
          "Para que la evidencia digital sea considerada como válida y adquiera valor probatorio ante la Justicia, es necesario garantizar su confiabilidad. ¿Qué implica garantizar su confiabilidad? Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Evitar la destrucción total de la evidencia digital",
          "Evitar suplantación de la evidencia digital",
          "Evitar adulteraciones de la evidencia digital",
          "Evitar modificación de la evidencia digital",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Garantizar la confiabilidad de la evidencia digital implica evitar su destrucción total, suplantación, adulteraciones y modificaciones.",
      },
      {
        question:
          "Considerando que el Protocolo de Transferencia de Archivos (FTP) es un servicio inseguro, ¿qué protocolo utilizarías como alternativa más segura?",
        options: ["SFTP (SSH FTP)", "HTTP", "SMTP", "TELNET"],
        answer: [0],
        multi: false,
        explanation:
          "Como alternativa más segura al FTP, se puede utilizar el SFTP (SSH FTP).",
      },
      {
        question:
          "El criterio para una administración segura de Servidores, sugiere prohibir todo lo que no está permitido. Ahora bien, lo que sí está permitido, ¿en base a qué se determina?",
        options: [
          "En base a la Política de Seguridad de la Información de la organización",
          "En base a la legislación nacional",
          "En base a las mejores prácticas de la industria",
          "En base al criterio del administrador del sistema",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Lo que está permitido en una administración segura de servidores se determina en base a la Política de Seguridad de la Información de la organización.",
      },
      {
        question:
          "En relación a los servicios de Red y el protocolo de Transferencia de Archivos (FTP) ¿cuál afirmación es válida?",
        options: [
          "La comunicación se realiza en texto claro.",
          "La comunicación se realiza de forma encriptada.",
          "El protocolo FTP es inherentemente seguro.",
          "El protocolo FTP utiliza autenticación fuerte.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La afirmación válida es que la comunicación a través del protocolo de Transferencia de Archivos (FTP) se realiza en texto claro, lo que lo hace inseguro.",
      },
      {
        question:
          "En un ataque Activo, en el que solamente se modifica el mensaje, ¿cuáles dimensiones de la seguridad de la información se vulneran?",
        options: [
          "Confidencialidad",
          "Integridad",
          "Disponibilidad",
          "Autenticidad",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "En un ataque activo donde se modifica el mensaje, se vulneran tanto la confidencialidad como la integridad de la información.",
      },
      {
        question:
          "La protección proporcionada por un Sistema Operativo se entiende como la separación entre usuarios. ¿Verdadero o Falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. La protección proporcionada por un Sistema Operativo implica la separación entre usuarios para garantizar la seguridad.",
      },
      {
        question:
          "¿Cuál es la función de las tecnologías de control de acceso?",
        options: [
          "Controlar y restringir el uso de los recursos del sistema de información y el comportamiento de los usuarios en relación al mismo",
          "Proporcionar acceso ilimitado a todos los usuarios",
          "Mejorar el rendimiento del sistema de información",
          "Eliminar por completo el acceso a los recursos del sistema de información",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La función de las tecnologías de control de acceso es controlar y restringir el uso de los recursos del sistema de información y el comportamiento de los usuarios en relación al mismo.",
      },
      {
        question:
          "Una de las topologías de defensa se basa en establecer una zona intermedia entre la red interna y la red externa. ¿Cómo se denomina esa zona intermedia?",
        options: [
          "Zona de Transición",
          "Zona de Seguridad",
          "Zona de Aislamiento",
          "Zona Desmilitarizada (DMZ)",
        ],
        answer: [3],
        multi: false,
        explanation:
          "La zona intermedia entre la red interna y la red externa se denomina Zona Desmilitarizada (DMZ).",
      },
      {
        question:
          "Selecciona la afirmación correcta relacionada con un servidor proxy.",
        options: [
          "Desde el exterior solo se puede acceder al Servidor Proxy. Dado que todos los equipos de la red interna se encuentran ocultos detrás del servidor proxy",
          "El Servidor Proxy permite el acceso directo a los equipos de la red interna sin restricciones.",
          "El Servidor Proxy no tiene ninguna función en la seguridad de la red.",
          "El Servidor Proxy es vulnerable a los ataques de denegación de servicio.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La afirmación correcta es que desde el exterior solo se puede acceder al Servidor Proxy, ya que todos los equipos de la red interna se encuentran ocultos detrás del servidor proxy.",
      },
      {
        question:
          "En una topología de Defensa en Profundidad ¿adónde ubicarías un Servidor de Transferencia de Archivos (FTP) que debe ser accedido por Usuarios externos?",
        options: [
          "En la Zona Desmilitarizada (DMZ)",
          "En la red interna",
          "En la red externa",
          "En la Zona de Aislamiento",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una topología de Defensa en Profundidad, un Servidor de Transferencia de Archivos (FTP) que debe ser accedido por Usuarios externos se ubicaría en la Zona Desmilitarizada (DMZ).",
      },
      {
        question:
          "En relación a la tipología de motivaciones de los atacantes. ¿Cuál es una de ellas?",
        options: ["Diversión", "Integridad", "Colaboración", "Accidental"],
        answer: [0],
        multi: false,
        explanation:
          "Una de las motivaciones de los atacantes puede ser la diversión.",
      },
      {
        question:
          "El protocolo Secure Shell (SSH) ofrece varios mecanismos de autenticación de Usuarios ¿cuál es uno de ellos?",
        options: [
          "Autenticación basada en algoritmos de Clave Pública",
          "Autenticación basada en algoritmos de Clave Privada",
          "Autenticación basada en contraseña",
          "Autenticación basada en dirección IP",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los mecanismos de autenticación de usuarios ofrecidos por el protocolo Secure Shell (SSH) es la autenticación basada en algoritmos de Clave Pública.",
      },
      {
        question: "En relación al Servicio Web ¿Cuál afirmación es válida?",
        options: [
          "Los Servicios Web se ven afectados por errores de programación en las Aplicaciones que publican.",
          "Los Servicios Web son inmunes a cualquier tipo de ataque.",
          "Los Servicios Web no requieren autenticación.",
          "Los Servicios Web son completamente seguros.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La afirmación válida es que los Servicios Web se ven afectados por errores de programación en las Aplicaciones que publican, lo que puede comprometer su seguridad.",
      },
      {
        question:
          "Un ataque en el que no se producen alteraciones a los activos de información, ¿De qué tipo es?",
        options: ["Pasivo", "Activo", "Destructivo", "Externo"],
        answer: [0],
        multi: false,
        explanation:
          "Un ataque en el que no se producen alteraciones a los activos de información se clasifica como pasivo.",
      },
      {
        question:
          "Identifica en la siguiente lista cuáles son Servicios de Red considerados como seguros. Selecciona las Opciones correctas:",
        options: ["SCP", "SFTP", "SSH", "HTTPS"],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Los servicios de red considerados como seguros son SCP, SFTP, SSH y HTTPS.",
      },
      {
        question:
          "Un equipo que actúa como Host Bastión, ¿cuántas interfaces de red posee?",
        options: [
          "Una interfaz de red",
          "Dos interfaces de red",
          "Tres interfaces de red",
          "Cuatro interfaces de red",
        ],
        answer: [1],
        multi: false,
        explanation:
          "Un equipo que actúa como Host Bastión posee dos interfaces de red.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Datos Sensibles, que abarca una serie datos de carácter personal. Identifica correctamente uno de estos datos en la siguiente lista. Selecciona la opción correcta:",
        options: [
          "Afiliación sindical",
          "Convicciones religiosas",
          "Datos que revelen origen racial y étnico",
          "Nivel educativo",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los datos sensibles según la Ley de Protección de Datos Personales Argentina es la afiliación sindical.",
      },
      {
        question:
          "Las redes Inalámbricas se encuentran expuestas a modalidades de análisis tráfico, ¿cuáles son? Selecciona las 2 (dos) opciones correctas:",
        options: [
          "Escaneo Pasivo",
          "Escaneo Activo",
          "Intercepción de paquetes",
          "Inyección de paquetes",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Las redes inalámbricas se encuentran expuestas a modalidades de análisis de tráfico como el escaneo pasivo y el escaneo activo.",
      },
      {
        question:
          "La evidencia digital debe reunir ciertas características ¿cuáles son? Selecciona las 4 (cuatro) opciones correctas:",
        options: [
          "Debe ser Confiable",
          "Debe ser Suficiente",
          "Debe Ser Completa",
          "Debe ser Permisible",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "La evidencia digital debe ser confiable, suficiente, completa y permisible para ser considerada válida.",
      },
      {
        question:
          "En una comunicación entre un Cliente y un Servidor Web, los problemas de seguridad se dividen en tres grupos, en función de los datos que pueden verse comprometidos. Selecciona las 3 (tres) opciones correctas:",
        options: [
          "Seguridad en el Servidor",
          "Seguridad en el Cliente",
          "Seguridad en la Red",
          "Seguridad en la Aplicación",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "En una comunicación entre un Cliente y un Servidor Web, los problemas de seguridad se dividen en seguridad en el servidor, seguridad en el cliente y seguridad en la red.",
      },
      {
        question:
          "La Cadena de Custodia informático forense se puede definir como un procedimiento controlado y supervisable. ¿Verdadero o Falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. La Cadena de Custodia informático forense se define como un procedimiento controlado y supervisable.",
      },
      {
        question:
          "En relación a los Cortafuegos (Firewall), ¿qué implica una Política Restrictiva?",
        options: [
          "Todo el tráfico de red que no esté permitido explícitamente en las reglas de filtrado será descartado",
          "Solo se permitirá el tráfico de red proveniente de determinadas direcciones IP",
          "Se permitirá todo el tráfico de red y solo se bloqueará el tráfico malicioso",
          "Se permitirá todo el tráfico de red y solo se bloqueará el tráfico de puertos específicos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una política restrictiva en los cortafuegos implica que todo el tráfico de red que no esté permitido explícitamente en las reglas de filtrado será descartado.",
      },
      {
        question:
          "En un Sistema Operativo, la separación entre usuarios se puede lograr de varias formas. Identifica a una de ellas. Selecciona la Opción correcta:",
        options: [
          "Separación temporal",
          "Separación física",
          "Separación lógica",
          "Separación criptográfica",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La separación entre usuarios en un Sistema Operativo se puede lograr temporalmente.",
      },
      {
        question:
          "¿Cuál es una alternativa válida para dotar de seguridad al servicio de Red TELNET?",
        options: ["SSL TELNET", "HTTPS TELNET", "SSH TELNET", "SFTP TELNET"],
        answer: [0],
        multi: false,
        explanation:
          "Una alternativa válida para dotar de seguridad al servicio de Red TELNET es SSL TELNET, que se basa en proteger las sesiones con Capa de Sockets Segura (SSL).",
      },
      {
        question:
          "En relación a las redes inalámbricas, un Punto de Acceso puede ser escaneado desde una red cableada Ethernet. ¿Verdadero o Falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. Un Punto de Acceso inalámbrico puede ser escaneado desde una red cableada Ethernet.",
      },
      {
        question:
          "Como se entiende la protección proporcionada por un sistema Operativo?",
        options: [
          "Como la separación entre Usuarios",
          "Como la encriptación de datos",
          "Como la detección de intrusiones",
          "Como la autenticación de usuarios",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La protección proporcionada por un sistema operativo se entiende como la separación entre usuarios.",
      },
      {
        question:
          "En relación a los servicios de Red y el protocolo de Transferencia de Archivos (FTP), ¿cuál afirmación es válida?",
        options: [
          "La comunicación se realiza en texto claro",
          "La comunicación se realiza cifrada",
          "La comunicación se realiza autenticada",
          "La comunicación se realiza con certificados digitales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La comunicación a través del protocolo FTP se realiza en texto claro, lo que lo hace inseguro para la transferencia de datos sensibles.",
      },
      {
        question:
          "En un ataque Activo, en el que solamente se modifica el mensaje, ¿cuáles dimensiones de la seguridad de la información se vulneran?",
        options: [
          "Confidencialidad",
          "Integridad",
          "Disponibilidad",
          "Autenticidad",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "En un ataque activo en el que solamente se modifica el mensaje, se vulneran tanto la confidencialidad como la integridad de la información.",
      },
      {
        question: "¿Qué es una zona Desmilitarizada o DMZ?",
        options: [
          "Una red planteada como una zona intermedia que permite mejorar el aislamiento entre la parte pública y la parte privada de la red de una organización",
          "Una red exclusivamente pública sin restricciones de acceso",
          "Una red interna con restricciones de acceso solo para usuarios autorizados",
          "Una red interna sin restricciones de acceso para empleados",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una zona Desmilitarizada (DMZ) es una red planteada como una zona intermedia que permite mejorar el aislamiento entre la parte pública y la parte privada de la red de una organización.",
      },
      {
        question:
          "En Control de Accesos, la Autenticación se basa en alguno, o en combinación, de ciertos factores. ¿Cuál es uno de ellos?",
        options: [
          "Algo que el usuario conoce",
          "Algo que el usuario es",
          "Algo que el usuario posee",
          "Algo que el usuario desea",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En Control de Accesos, la Autenticación se basa en algo que el usuario conoce, como una contraseña o PIN.",
      },
      {
        question:
          "En Argentina, en relación a la Ley de Protección de Datos Personales, ésta confiere una serie de derechos a los titulares de los datos. Identifica a uno de ellos.",
        options: [
          "El derecho de Información sobre los datos",
          "El derecho de Acceso a los datos",
          "El derecho de Modificación de los datos",
          "El derecho de Eliminación de los datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Ley de Protección de Datos Personales en Argentina confiere el derecho de Información sobre los datos a los titulares de los datos.",
      },
      {
        question:
          "Identifica en la siguiente lista, las etapas de un Proceso de Peritaje Informático (Informática Forense).",
        options: [
          "Identificar evidencias digitales",
          "Preservar evidencias digitales",
          "Analizar evidencias digitales",
          "Presentar evidencias digitales",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las etapas de un Proceso de Peritaje Informático incluyen identificar, preservar, analizar y presentar evidencias digitales.",
      },
      {
        question:
          "El protocolo para redes Inalámbricas WPA2, también conocido como Robust Security Network (RSN) implementa ciertas características de seguridad. ¿Cuáles son?",
        options: [
          "Permite garantizar la confidencialidad y la integridad de los datos transmitidos",
          "Utiliza Claves de Sesión para proteger los datos transmitidos",
          "Utiliza cifrado por bloques en cadena (CBC) para garantizar la integridad de los datos transmitidos",
          "Se basa en algoritmo criptográfico Advanced Encryption Standard (AES)",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "El protocolo WPA2 (RSN) implementa características como garantizar la confidencialidad e integridad de los datos, utilizar Claves de Sesión, cifrado por bloques en cadena (CBC) y algoritmo AES.",
      },
      {
        question: "¿Qué es un ataque Pasivo?",
        options: [
          "Es un tipo de Ataque en el que no se producen cambios en la información y tampoco en la situación de los recursos del Sistema atacado",
          "Es un tipo de Ataque en el que se producen cambios en la información sin afectar la situación de los recursos del Sistema atacado",
          "Es un tipo de Ataque en el que se producen cambios en la información y en la situación de los recursos del Sistema atacado",
          "Es un tipo de Ataque en el que se roban datos del sistema sin dejar rastro",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un ataque Pasivo es un tipo de ataque en el que no se producen cambios en la información y tampoco en la situación de los recursos del Sistema atacado.",
      },
      {
        question:
          "¿Cuál de las siguientes características identifica a un Host Bastión?",
        options: [
          "Un equipo que posee dos interfaces de red. En una conecta a la red interna y en otra a la red externa",
          "Un equipo que actúa como servidor de base de datos",
          "Un equipo que solo permite el acceso remoto desde la red interna",
          "Un equipo que actúa como firewall de la red interna",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Host Bastión es un equipo que posee dos interfaces de red, una conectada a la red interna y otra a la red externa, utilizado como punto de control y protección entre ellas.",
      },
      {
        question:
          "Tanto el Protocolo SSL como el Protocolo TLS, son protocolos de nivel de transporte, con lo cual, pueden ser utilizados para el cifrado de protocolos de nivel de aplicación. Identifica correctamente cuales pueden ser estos protocolos.",
        options: [
          "Protocolo de Transferencia de archivos (FTD)",
          "Protocolo de Hipertexto (HTTP)",
          "Protocolo de Administración Simple de Correo (SMPT)",
          "TELNET",
        ],
        answer: [1, 2, 3],
        multi: true,
        explanation:
          "Tanto SSL como TLS son protocolos de nivel de transporte que pueden ser utilizados para el cifrado de protocolos de nivel de aplicación como HTTP, SMTP y TELNET.",
      },
      {
        question:
          "En Sistemas Trampa o Señuelo, Honeynet y Honeypot son soluciones distintas. ¿Verdadero o Falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. Honeynet y Honeypot son soluciones distintas en Sistemas Trampa o Señuelo.",
      },
      {
        question:
          "En relación a los Sistemas de Detección de Intrusiones (IDS), ¿qué función cumple un IDS basado en Host?",
        options: [
          "Monitorizar el comportamiento de un equipo en busca de comportamiento anómalo",
          "Monitorizar el tráfico de red en busca de comportamiento anómalo",
          "Registrar eventos de seguridad en los servidores de la red",
          "Registrar eventos de seguridad en los dispositivos de red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un IDS basado en Host monitoriza el comportamiento de un equipo en busca de comportamiento anómalo.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, establece una serie de figuras o roles. Identifica de forma correcta a uno de ellos.",
        options: [
          "Usuario de datos",
          "Administrador de datos",
          "Proveedor de datos",
          "Receptor de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la Ley de Protección de Datos Personales Argentina, uno de los roles establecidos es el Usuario de datos.",
      },
      {
        question:
          "En un proceso de Peritaje informático, se debe tener especial cuidado con las evidencias volátiles. ¿Cuáles de los elementos se consideran evidencias volátiles?",
        options: [
          "Usuarios activos dentro del Sistema",
          "Información de conexiones activas en la interfaz de Red",
          "Procesos y Servicios en ejecución",
          "Memoria RAM",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "En un proceso de Peritaje informático, se consideran evidencias volátiles a los usuarios activos dentro del Sistema, información de conexiones activas en la interfaz de Red, procesos y servicios en ejecución, y la memoria RAM.",
      },
      {
        question:
          "Existen causas bien definidas de las vulnerabilidades de las redes informáticas. ¿Cuál es una de ellas?",
        options: [
          "Políticas de Seguridad deficientes o inexistentes",
          "Fallas en los equipos de red",
          "Errores de configuración del firewall",
          "Ataques de fuerza bruta",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las causas bien definidas de las vulnerabilidades de las redes informáticas es la presencia de políticas de Seguridad deficientes o inexistentes.",
      },
      {
        question:
          "En materia de topologías de defensa, ¿qué sucede en una arquitectura de Defensa en Profundidad?",
        options: [
          "Si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema",
          "Si una de las capas falla, las restantes quedan expuestas",
          "Las capas están aisladas y no se comunican entre sí",
          "No existe coordinación entre las capas de defensa",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una arquitectura de Defensa en Profundidad, si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Datos Sensibles, que abarca una serie de datos de carácter personal. ¿Cuál es uno de estos datos?",
        options: [
          "Datos que revelen origen racial y étnico",
          "Datos de ubicación geográfica",
          "Datos de contacto",
          "Datos de identificación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Ley de Protección de Datos Personales en Argentina define como Datos Sensibles aquellos que revelen origen racial y étnico.",
      },
      {
        question:
          "En una comunicación entre un Cliente y un Servidor Web, los problemas de Seguridad se dividen en tres grupos. ¿Cuáles son?",
        options: [
          "Seguridad en el Cliente",
          "Seguridad en el Servidor",
          "Seguridad en la Red",
          "Seguridad en la Interfaz",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "En una comunicación entre un Cliente y un Servidor Web, los problemas de Seguridad se dividen en Seguridad en el Cliente, Seguridad en el Servidor y Seguridad en la Red.",
      },
      {
        question:
          "Un Sistema Operativo Seguro, es un Sistema Operativo diseñado para garantizar cuatro aspectos fundamentales. ¿Cuál es uno de ellos?",
        options: [
          "La precisión funcional",
          "La velocidad de procesamiento",
          "La cantidad de recursos disponibles",
          "La facilidad de uso",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Sistema Operativo Seguro está diseñado para garantizar la precisión funcional, entre otros aspectos.",
      },
      {
        question:
          "Una de las topologías de defensa se basa en establecer una zona intermedia entre la red interna y la red externa, ¿cómo se denomina esa zona intermedia?",
        options: [
          "Zona Desmilitarizada (DMZ)",
          "Zona de Alto Riesgo",
          "Zona de Tránsito",
          "Zona de Cuarentena",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La zona intermedia entre la red interna y la red externa se denomina Zona Desmilitarizada (DMZ).",
      },
      {
        question:
          "El control de acceso se basa principalmente en un dominio de seguridad. ¿Cuál es ese dominio?",
        options: [
          "La confidencialidad",
          "La integridad",
          "La disponibilidad",
          "La autenticidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El control de acceso se basa principalmente en el dominio de seguridad de la confidencialidad.",
      },
      {
        question:
          "Selecciona la afirmación correcta relacionada con un servidor proxy.",
        options: [
          "Desde el exterior solo se puede acceder al Servidor Proxy. Dado que todos los equipos de la red interna se encuentran ocultos detrás del servidor proxy",
          "Desde el exterior se puede acceder directamente a todos los equipos de la red interna sin pasar por el servidor proxy",
          "El servidor proxy solo permite el acceso desde la red interna hacia el exterior",
          "El servidor proxy solo permite el acceso desde el exterior hacia la red interna",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La afirmación correcta relacionada con un servidor proxy es que desde el exterior solo se puede acceder al Servidor Proxy, ya que todos los equipos de la red interna se encuentran ocultos detrás del servidor proxy.",
      },
      {
        question:
          "En relación a la seguridad del Protocolo Simple de Transferencia de Correo (SMTP), ¿cuál afirmación es correcta?",
        options: [
          "SMTP asume que el Remitente es quien dice ser, pero no emplea mecanismos para garantizarlo",
          "SMTP cifra todos los correos electrónicos durante la transferencia para garantizar la seguridad",
          "SMTP requiere autenticación de los remitentes y destinatarios para cada correo electrónico",
          "SMTP verifica la integridad de los correos electrónicos utilizando firmas digitales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La afirmación correcta es que SMTP asume que el Remitente es quien dice ser, pero no emplea mecanismos para garantizarlo, lo que lo hace vulnerable a ataques de suplantación de identidad.",
      },
      {
        question: "Las tecnologías de control de acceso, ¿qué función cumplen?",
        options: [
          "Controlar y restringir el uso de los recursos del sistema de información y el comportamiento de los usuarios en relación al mismo",
          "Monitorizar el tráfico de red en busca de intrusiones",
          "Detectar y eliminar virus y malware de los sistemas",
          "Registrar eventos de seguridad para análisis posterior",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Las tecnologías de control de acceso cumplen la función de controlar y restringir el uso de los recursos del sistema de información y el comportamiento de los usuarios en relación al mismo.",
      },
      {
        question:
          "En relación a los Sistemas de Detección de Intrusiones (IDS), ¿qué función cumple un IDS basado en Red?",
        options: [
          "Monitorizar el tráfico de red en busca de comportamiento anómalo",
          "Monitorizar el comportamiento de un equipo en busca de comportamiento anómalo",
          "Registrar eventos de seguridad en los servidores de la red",
          "Registrar eventos de seguridad en los dispositivos de red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un IDS basado en Red monitoriza el tráfico de red en busca de comportamiento anómalo.",
      },
      {
        question:
          "En relación al protocolo simple de administración de red (SNMP), ¿cuál afirmación es correcta?",
        options: [
          "Su última versión 3 posee características de seguridad más robustas, contempla el envío de la información cifrada a través de la red y la autenticación de los dispositivos",
          "Es un protocolo obsoleto y no se recomienda su uso en entornos modernos",
          "Solo puede ser utilizado para la administración de redes locales",
          "No permite la administración remota de dispositivos de red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La afirmación correcta es que la última versión 3 de SNMP posee características de seguridad más robustas, contempla el envío de la información cifrada a través de la red y la autenticación de los dispositivos.",
      },
      {
        question:
          "En relación al control de accesos, ¿qué se entiende por identificación?",
        options: [
          "Es el proceso mediante el cual el Usuario presenta una identidad concreta para acceder a un Sistema o recurso",
          "Es el proceso de verificar la identidad del Usuario y garantizar que es quien dice ser",
          "Es el proceso de verificar la autenticidad de los datos de acceso proporcionados por el Usuario",
          "Es el proceso de restringir el acceso solo a los usuarios autorizados",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La identificación en el control de accesos es el proceso mediante el cual el Usuario presenta una identidad concreta para acceder a un Sistema o recurso.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, define el concepto de Tratamiento de los Datos como una serie operaciones y procedimientos sistemáticos, electrónicos o no, que permitan ciertas operaciones sobre los datos. Identifica correctamente cuáles son esas operaciones.",
        options: [
          "Recolección de datos personales",
          "Almacenamiento de datos personales",
          "Modificación de datos personales",
          "Evaluación de datos personales",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las operaciones definidas por la Ley de Protección de Datos Personales Argentina sobre los datos son la recolección, almacenamiento, modificación y evaluación de los datos personales.",
      },
      {
        question:
          "El criterio para una administración segura de Servidores sugiere prohibir todo lo que no está permitido. Ahora bien, lo que sí está permitido, ¿en base a qué se determina?",
        options: [
          "En base a la Política de Seguridad de la Información de la organización",
          "En base a las preferencias de los usuarios",
          "En base a la disponibilidad de recursos",
          "En base a la velocidad de procesamiento del servidor",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Lo que está permitido en una administración segura de Servidores se determina en base a la Política de Seguridad de la Información de la organización.",
      },
      {
        question:
          "En relación a los mecanismos de Autorización Discrecional, ¿cuál afirmación es correcta?",
        options: [
          "Los controles son discrecionales en el sentido de que un usuario con un permiso de acceso es capaz de transmitir ese permiso",
          "Los controles son estrictos y no permiten la transmisión de permisos de acceso entre usuarios",
          "Los usuarios no tienen control sobre los permisos de acceso",
          "Los permisos de acceso son asignados automáticamente por el sistema",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En los mecanismos de Autorización Discrecional, un usuario con un permiso de acceso puede transmitir ese permiso a otros usuarios.",
      },
      {
        question:
          "El Peritaje Informático (Informática Forense) surge como una disciplina auxiliar de la justicia para proveer ¿cuáles elementos?",
        options: [
          "Garantías sobre la verdad de una evidencia digital.",
          "Conocimientos.",
          "Técnica.",
          "Recursos financieros.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "El Peritaje Informático (Informática Forense) provee garantías sobre la verdad de una evidencia digital, conocimientos y técnicas para su análisis.",
      },
      {
        question:
          "Para que la evidencia digital sea considerada como válida y adquiera valor probatorio ante la Justicia, ¿cuáles características deben implementarse en los procedimientos?",
        options: [
          "Procedimientos procesalmente adecuados.",
          "Procedimientos con soporte teórico científicos.",
          "Procedimientos estrictamente técnicos.",
          "Procedimientos metodológicos criminalísticos.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Para que la evidencia digital sea considerada válida, los procedimientos deben ser procesalmente adecuados, contar con soporte teórico científico, ser estrictamente técnicos y seguir metodologías criminalísticas.",
      },
      {
        question:
          "¿Cómo se entiende la protección proporcionada por un Sistema Operativo?",
        options: [
          "Como la separación entre Usuarios",
          "Como la velocidad de procesamiento",
          "Como la cantidad de recursos disponibles",
          "Como la facilidad de uso",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La protección proporcionada por un Sistema Operativo se entiende como la separación entre Usuarios.",
      },
      {
        question:
          "Identifica cuáles ataques pueden considerarse como ataques activos.",
        options: [
          "Repetición de mensajes",
          "Modificación de mensajes.",
          "Interrupción o denegación de servicio.",
          "Suplantación de Identidad.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Los ataques activos incluyen la repetición de mensajes, la modificación de mensajes, la interrupción o denegación de servicio y la suplantación de identidad.",
      },
      {
        question:
          "En una comunicación donde se implementan Protocolos SSL/TLS como mecanismos de seguridad, ¿por qué no se autentica el extremo Cliente (usuario)?",
        options: [
          "Porque en SSL/TLS la autenticación del Cliente es solo opcional.",
          "Porque el Cliente no puede ser autenticado en una comunicación segura.",
          "Porque el servidor no confía en la autenticidad del Cliente.",
          "Porque el Cliente no necesita autenticarse en una comunicación segura.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una comunicación donde se implementan Protocolos SSL/TLS, la autenticación del Cliente es opcional, lo que significa que no es necesaria para establecer la comunicación segura.",
      },
      {
        question:
          "En Argentina, en relación a la Ley de Protección de Datos Personales, ¿cuál derecho confiere a los titulares de los datos?",
        options: [
          "El derecho de Información sobre los datos.",
          "El derecho de Acceso a los datos.",
          "El derecho de Rectificación de los datos.",
          "El derecho de Cancelación de los datos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En Argentina, la Ley de Protección de Datos Personales confiere el derecho de Información sobre los datos a los titulares de los datos.",
      },
      {
        question:
          "En relación a la seguridad de los Sitios Web, cuando se implementan Protocolos SSL/TLS como mecanismos de seguridad, ¿por qué no se autentica el extremo Cliente (usuario)?",
        options: [
          "Porque en SSL/TLS la autenticación del Cliente es solo opcional.",
          "Porque el Cliente no puede ser autenticado en una comunicación segura.",
          "Porque el servidor no confía en la autenticidad del Cliente.",
          "Porque el Cliente no necesita autenticarse en una comunicación segura.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Cuando se implementan Protocolos SSL/TLS, la autenticación del Cliente es opcional, lo que significa que no es necesaria para establecer la comunicación segura.",
      },
      {
        question:
          "Identifica de forma correcta cuáles de los siguientes constituyen posibles ataques a las redes Inalámbricas.",
        options: [
          "Instalación de un Punto de Acceso falso.",
          "Análisis de tráfico y sustracción de información.",
          "Interferencias electromagnéticas.",
          "Conexión no autorizada a la red Inalámbrica.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Posibles ataques a las redes Inalámbricas incluyen la instalación de un Punto de Acceso falso, análisis de tráfico y sustracción de información, interferencias electromagnéticas y conexión no autorizada a la red Inalámbrica.",
      },
      {
        question:
          "¿Cuál es la finalidad de la Cadena de Custodia en informática forense?",
        options: [
          "Asegurar la confiabilidad de la evidencia digital recolectada.",
          "Acelerar el proceso de análisis de evidencia digital.",
          "Reforzar la seguridad de los sistemas informáticos.",
          "Detectar la presencia de malware en la red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La finalidad de la Cadena de Custodia en informática forense es asegurar la confiabilidad de la evidencia digital recolectada.",
      },
      {
        question:
          "En una topología de Defensa en Profundidad, ¿dónde ubicarías un Servidor de Transferencia de Archivos (FTP) que debe ser accedido por Usuarios externos?",
        options: [
          "En la Zona Desmilitarizada (DMZ)",
          "En la red interna detrás del cortafuegos",
          "En la red interna frente al cortafuegos",
          "En la red externa frente al cortafuegos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una topología de Defensa en Profundidad, un Servidor de Transferencia de Archivos (FTP) que debe ser accedido por Usuarios externos se ubicaría en la Zona Desmilitarizada (DMZ).",
      },
      {
        question:
          "En relación a la tipología de motivaciones de los atacantes, ¿cuál es una de ellas?",
        options: ["Diversión", "Venganza", "Ganancia financiera", "Fama"],
        answer: [0],
        multi: false,
        explanation:
          "Una de las motivaciones de los atacantes puede ser la diversión.",
      },
      {
        question:
          "En un Sistema Operativo, ¿cómo se puede lograr la separación entre usuarios?",
        options: [
          "Separación temporal.",
          "Separación basada en el uso de criptografía.",
          "Separación por niveles de acceso.",
          "Separación por roles de usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En un Sistema Operativo, la separación entre usuarios se puede lograr de varias formas, una de ellas es la separación temporal.",
      },
      {
        question:
          "¿Cuál es uno de los mecanismos de autenticación de Usuarios que ofrece el protocolo Secure Shell (SSH)?",
        options: [
          "Autenticación basada en algoritmos de Clave Pública",
          "Autenticación mediante contraseña",
          "Autenticación mediante SMS",
          "Autenticación mediante biometría",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los mecanismos de autenticación de Usuarios que ofrece el protocolo Secure Shell (SSH) es la autenticación basada en algoritmos de Clave Pública.",
      },
      {
        question:
          "En relación a los Servicios de Red considerados seguros, ¿cuáles son?",
        options: ["SCP", "SFTP.", "SSH", "HTTPS"],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Los Servicios de Red considerados seguros incluyen SCP, SFTP, SSH y HTTPS.",
      },
      {
        question:
          "¿Cuántas interfaces de red posee un equipo que actúa como Host Bastión?",
        options: [
          "Dos interfaces de Red.",
          "Una interfaz de Red.",
          "Tres interfaces de Red.",
          "Cuatro interfaces de Red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un equipo que actúa como Host Bastión posee dos interfaces de red.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina define el concepto de Datos Sensibles. Identifica uno de estos datos.",
        options: [
          "Afiliación sindical.",
          "Orientación sexual.",
          "Número de teléfono.",
          "Dirección de correo electrónico.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Según la Ley de Protección de Datos Personales Argentina, la afiliación sindical es considerada un dato sensible.",
      },
      {
        question:
          "Las redes Inalámbricas se encuentran expuestas a modalidades de análisis de tráfico, ¿cuáles son?",
        options: [
          "Escaneo Pasivo.",
          "Escaneo Activo.",
          "Análisis de tráfico.",
          "Interceptación de datos.",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Las redes Inalámbricas se encuentran expuestas a modalidades de análisis de tráfico como el Escaneo Pasivo y el Escaneo Activo.",
      },
      {
        question:
          "La evidencia digital debe reunir ciertas características, ¿cuáles son?",
        options: [
          "Debe ser Confiable.",
          "Debe ser Suficiente.",
          "Debe Ser Completa.",
          "Debe ser Permisible.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "La evidencia digital debe ser confiable, suficiente, completa y permisible para ser considerada válida.",
      },
      {
        question:
          "En una comunicación entre un Cliente y un Servidor Web, ¿cuáles problemas de seguridad se dividen en tres grupos?",
        options: [
          "Seguridad en el Servidor.",
          "Seguridad en el Cliente.",
          "Seguridad en la Red.",
          "Seguridad en la Aplicación.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "En una comunicación entre un Cliente y un Servidor Web, los problemas de seguridad se dividen en tres grupos: Seguridad en el Servidor, Seguridad en el Cliente y Seguridad en la Red.",
      },
      {
        question:
          "¿Qué implica una Política Restrictiva en relación a los Cortafuegos (Firewall)?",
        options: [
          "Todo el tráfico de red que no esté permitido explícitamente en las reglas de filtrado será descartado",
          "Todo el tráfico de red que esté permitido explícitamente en las reglas de filtrado será descartado",
          "El Cortafuegos permitirá todo el tráfico de red",
          "El Cortafuegos bloqueará todo el tráfico de red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una Política Restrictiva en relación a los Cortafuegos implica que todo el tráfico de red que no esté permitido explícitamente en las reglas de filtrado será descartado.",
      },
      {
        question:
          "En la gestión de Cuentas de Usuarios, ¿qué requisito mínimo debe reunir una contraseña para su seguridad?",
        options: [
          "Tamaño mínimo de contraseña.",
          "Complejidad de la contraseña.",
          "Frecuencia de cambio de contraseña.",
          "Uso de caracteres especiales.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la gestión de Cuentas de Usuarios, uno de los requisitos mínimos para la seguridad de una contraseña es el tamaño mínimo de la misma.",
      },
      {
        question:
          "En materia de topologías de defensa, ¿qué sucede en una arquitectura de Defensa en Profundidad?",
        options: [
          "Si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema",
          "Todas las capas deben ser vulnerables para que el sistema sea comprometido",
          "Cada capa funciona de manera independiente y no interactúa con las demás",
          "Solo la última capa de defensa es efectiva",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una arquitectura de Defensa en Profundidad, si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema.",
      },
      {
        question:
          "El Peritaje Informático (Informática Forense) surge como una disciplina auxiliar de la justicia para proveer ¿cuáles elementos?",
        options: [
          "Técnica.",
          "Conocimientos.",
          "Garantías sobre la verdad de una evidencia digital.",
          "Recursos financieros.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "El Peritaje Informático (Informática Forense) provee técnica, conocimientos y garantías sobre la verdad de una evidencia digital.",
      },
      {
        question:
          "En Sistemas Trampa o Señuelo, Honeynet y Honeypot son soluciones distintas. ¿Es esto verdadero o falso?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. Honeynet y Honeypot son soluciones distintas en Sistemas Trampa o Señuelo.",
      },
      {
        question:
          "Los Sistemas de Detección de Intrusión (IDS) presentan una serie de problemas, entre ellos las falsas alarmas. ¿Cuál es una de estas falsas alarmas?",
        options: [
          "Falsos Negativos.",
          "Falsos Positivos.",
          "Errores de configuración.",
          "Ataques exitosos no detectados.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las falsas alarmas que pueden presentar los Sistemas de Detección de Intrusión (IDS) son los Falsos Negativos.",
      },
      {
        question:
          "En relación a las redes inalámbricas, ¿es verdadero o falso que un Punto de Acceso puede ser escaneado desde una red cableada ethernet?",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. Un Punto de Acceso puede ser escaneado desde una red cableada ethernet.",
      },
      {
        question:
          "Existen causas bien definidas de las vulnerabilidades de las redes informáticas. ¿Cuál es una de ellas?",
        options: [
          "Políticas de Seguridad deficientes o inexistentes.",
          "Consideraciones económicas.",
          "Errores de configuración.",
          "Fallas en el hardware.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las causas de las vulnerabilidades de las redes informáticas puede ser la falta o deficiencia en las Políticas de Seguridad.",
      },
      {
        question:
          "¿Cuál es la función de un Sistema de Detección de Intrusiones?",
        options: [
          "Detectar y reaccionar de forma automatizada ante un incidente de seguridad que ocurra en la red interna de la organización.",
          "Proteger la red contra ataques de denegación de servicio (DDoS).",
          "Bloquear todo el tráfico de red no autorizado.",
          "Proporcionar acceso seguro a la red mediante autenticación de dos factores.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La función principal de un Sistema de Detección de Intrusiones es detectar y reaccionar de forma automatizada ante incidentes de seguridad en la red interna de la organización.",
      },
      {
        question:
          "El Control de Accesos se basa en dos principios fundamentales. ¿Identifica correctamente a uno de estos principios?",
        options: [
          "Principio de mínimos privilegios",
          "Principio de confidencialidad",
          "Principio de seguridad por diseño",
          "Principio de acceso abierto",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los principios fundamentales en los que se basa el Control de Accesos es el Principio de mínimos privilegios.",
      },
      {
        question:
          "El Control de Accesos se basa en dos principios fundamentales. ¿Identifica correctamente a uno de estos principios?",
        options: [
          "Principio de separación de responsabilidades",
          "Principio de confidencialidad",
          "Principio de seguridad por diseño",
          "Principio de acceso abierto",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los principios fundamentales en los que se basa el Control de Accesos es el Principio de separación de responsabilidades.",
      },
      {
        question:
          "La Autenticación se basa en alguno, o en combinación, de ciertos factores. ¿Cuál es uno de ellos?",
        options: [
          "Algo que el Usuario es",
          "Algo que el Usuario tiene",
          "Algo que el Usuario comparte",
          "Algo que el Usuario piensa",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los factores en los que se basa la Autenticación es 'Algo que el Usuario es'.",
      },
      {
        question:
          "En materia de Control de Accesos, ¿es verdad que Identificación y Autenticación son los mismos?",
        options: ["Verdadero", "Falso"],
        answer: [1],
        multi: false,
        explanation:
          "Falso. La Identificación y la Autenticación son dos procesos distintos en el Control de Accesos.",
      },
      {
        question:
          "En relación a la arquitectura de un Sistema de Detección de Intrusiones, identifica de forma correcta a uno de sus componentes.",
        options: [
          "Base de Datos de Patrones de comportamiento",
          "Servidor de Correo Electrónico",
          "Servidor Web",
          "Servidor DNS",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los componentes de la arquitectura de un Sistema de Detección de Intrusiones es la Base de Datos de Patrones de comportamiento.",
      },
      {
        question:
          "En relación a la Preservación de las evidencias digitales, ¿contra qué tipos de daños se intenta preservar a la evidencia?",
        options: [
          "Daños intencionales.",
          "Daños accidentales.",
          "Daños naturales.",
          "Daños económicos.",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Se intenta preservar la evidencia digital contra daños intencionales y accidentales.",
      },
      {
        question:
          "En relación a la tipología de motivaciones de los atacantes, ¿cuál es una de ellas?",
        options: [
          "Ideología",
          "Ganancia financiera",
          "Reconocimiento",
          "Diversión",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las motivaciones de los atacantes puede ser la ideología.",
      },
      {
        question: "¿Cómo se identifica a un Sitio Web Seguro?",
        options: [
          "La URL del Sitio Web inicia con la extensión HTTPS.",
          "La URL del Sitio Web inicia con la extensión HTTP.",
          "El Sitio Web muestra un ícono de candado verde en la barra de direcciones del navegador.",
          "El Sitio Web solicita la autenticación del usuario mediante un mensaje emergente.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Sitio Web se identifica como seguro cuando su URL inicia con la extensión HTTPS.",
      },
      {
        question:
          "Un Sistema Operativo Seguro, es un Sistema Operativo diseñado para garantizar cuatro aspectos fundamentales. ¿Identifica a uno de estos aspectos?",
        options: [
          "La precisión funcional",
          "La accesibilidad universal",
          "El rendimiento extremo",
          "La interfaz intuitiva",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los aspectos fundamentales de un Sistema Operativo Seguro es la precisión funcional.",
      },
      {
        question: "¿Qué es un Gestor de Contraseñas?",
        options: [
          "Una aplicación especializada en almacenar las credenciales de usuarios.",
          "Un dispositivo físico para generar códigos de autenticación de dos factores.",
          "Un servicio en la nube para compartir contraseñas entre usuarios.",
          "Un protocolo de seguridad para cifrar contraseñas en la red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Gestor de Contraseñas es una aplicación especializada en almacenar las credenciales de usuarios.",
      },
      {
        question:
          "En un Sistema Operativo, la separación entre usuarios se puede lograr de varias formas. ¿Identifica a una de ellas?",
        options: [
          "Separación temporal",
          "Separación geográfica",
          "Separación lingüística",
          "Separación económica",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una forma de lograr la separación entre usuarios en un Sistema Operativo es mediante la separación temporal.",
      },
      {
        question:
          "En un ataque Pasivo, ¿qué dimensión de la Seguridad de la Información se vulnera?",
        options: [
          "Confidencialidad",
          "Integridad",
          "Disponibilidad",
          "Autenticidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En un ataque Pasivo se vulnera la Confidencialidad de la Información.",
      },
      {
        question: "¿Qué es una zona Desmilitarizada o DMZ?",
        options: [
          "Una red planteada como una zona intermedia que permite mejorar el aislamiento entre la parte pública y la parte privada de la red de una organización.",
          "Una red dedicada exclusivamente al tráfico de datos críticos de la organización.",
          "Una red diseñada para almacenar backups de seguridad de forma segura.",
          "Una red para pruebas de penetración y análisis de vulnerabilidades.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una zona Desmilitarizada o DMZ es una red planteada como una zona intermedia que permite mejorar el aislamiento entre la parte pública y la parte privada de la red de una organización.",
      },
      {
        question:
          "En Control de Accesos, la Autenticación se basa en alguno, o en combinación, de ciertos factores. ¿Cuál es uno de ellos?",
        options: [
          "Algo que el usuario conoce",
          "Algo que el usuario tiene",
          "Algo que el usuario comparte",
          "Algo que el usuario piensa",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Autenticación se puede basar en 'Algo que el usuario conoce' como uno de sus factores.",
      },
      {
        question:
          "En Argentina, en relación a la Ley de Protección de Datos Personales, ésta confiere una serie de derechos a los titulares de los datos. Identifica a uno de ellos.",
        options: [
          "El derecho de información sobre los datos",
          "El derecho de transferencia de datos",
          "El derecho de modificación de los datos",
          "El derecho de eliminación de los datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Ley de Protección de Datos Personales en Argentina confiere a los titulares de los datos el derecho de información sobre los datos.",
      },
      {
        question:
          "Identifica en la siguiente lista las etapas de un Proceso de Peritaje Informático (Informática Forense).",
        options: [
          "Identificar evidencias digitales",
          "Preservar evidencias digitales",
          "Analizar evidencias digitales",
          "Presentar evidencias digitales",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las etapas de un Proceso de Peritaje Informático incluyen identificar, preservar, analizar y presentar evidencias digitales.",
      },
      {
        question:
          "El protocolo para redes Inalámbricas WPA2, también conocido como Robust Security Network (RSN) implementa ciertas características de seguridad. ¿Cuáles son?",
        options: [
          "Permite garantizar la confidencialidad y la integridad de los datos transmitidos.",
          "Utiliza Claves de Sesión para proteger los datos transmitidos.",
          "Utiliza cifrado por bloques en cadena (CBC) para garantizar la integridad de los datos transmitidos.",
          "Se basa en el algoritmo criptográfico Advances Encryption Standard (AES).",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "El protocolo WPA2 implementa varias características de seguridad, incluyendo la garantía de confidencialidad e integridad de los datos, el uso de claves de sesión, el cifrado por bloques en cadena y el uso del algoritmo AES.",
      },
      {
        question: "¿Qué es un ataque Pasivo?",
        options: [
          "Es un tipo de Ataque en el que no se producen cambios en la información y tampoco en la situación de los recursos del Sistema atacado.",
          "Es un tipo de Ataque en el que se producen cambios en la información pero no en la situación de los recursos del Sistema atacado.",
          "Es un tipo de Ataque en el que se producen cambios en la información y en la situación de los recursos del Sistema atacado.",
          "Es un tipo de Ataque en el que se intenta saturar los recursos del Sistema atacado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un ataque Pasivo es aquel en el que no se producen cambios en la información ni en la situación de los recursos del Sistema atacado.",
      },
      {
        question:
          "¿Cuál de las siguientes características identifica a un Host Bastión?",
        options: [
          "Un equipo que posee dos interfaces de red. En una conecta a la red interna y en otra a la red externa.",
          "Un equipo que solo se utiliza para almacenar datos sensibles.",
          "Un equipo que actúa como servidor web público.",
          "Un equipo que se utiliza como punto de conexión para usuarios remotos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Host Bastión es un equipo que posee dos interfaces de red, una conectada a la red interna y otra a la red externa.",
      },
      {
        question:
          "Tanto el Protocolo SSL como el Protocolo TLS son protocolos de nivel de transporte, con lo cual, pueden ser utilizados para el cifrado de protocolos de nivel de aplicación. Identifica correctamente cuales pueden ser estos protocolos.",
        options: [
          "Protocolo de Transferencia de archivos (FTP)",
          "Protocolo de Hipertexto (HTTP)",
          "Protocolo de Administración Simple de Correo (SMPT)",
          "TELNET",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Tanto SSL como TLS son protocolos de nivel de transporte que pueden ser utilizados para cifrar protocolos de nivel de aplicación como FTP, HTTP y SMTP.",
      },
      {
        question:
          "En Sistemas Trampa o Señuelo, Honeynet y Honeypot son soluciones distintas.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Verdadero. Honeynet y Honeypot son soluciones distintas dentro de los Sistemas Trampa o Señuelo.",
      },
      {
        question:
          "En relación a los Sistemas de Detección de Intrusiones (IDS), ¿qué función cumple un IDS basado en Host?",
        options: [
          "Monitorizar el comportamiento de un equipo en busca de comportamiento anómalo.",
          "Monitorizar el tráfico de red en busca de patrones de ataque conocidos.",
          "Detectar intrusiones en la red mediante análisis de tráfico en tiempo real.",
          "Bloquear automáticamente el tráfico sospechoso en la red.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un IDS basado en Host monitoriza el comportamiento de un equipo en busca de comportamiento anómalo.",
      },
      {
        question:
          "La Ley de Protección de Datos Personales Argentina, establece una serie de figuras o roles. Idéntica de forma correcta a uno de ellos.",
        options: [
          "Usuario de datos",
          "Responsable de datos",
          "Encargado de datos",
          "Autoridad de aplicación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los roles establecidos por la Ley de Protección de Datos Personales en Argentina es el Usuario de datos.",
      },
      {
        question:
          "En un proceso de Peritaje informático, se debe tener especial cuidado con las evidencias volátiles. ¿Cuáles de los elementos se consideran evidencias volátiles?",
        options: [
          "Usuarios activos dentro del Sistema.",
          "Información de conexiones activas con la interfaz de Red.",
          "Procesos y Servicios en ejecución.",
          "Memoria RAM.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las evidencias volátiles incluyen usuarios activos dentro del sistema, información de conexiones activas con la interfaz de red, procesos y servicios en ejecución, y la memoria RAM.",
      },
      {
        question:
          "En materia de topologías de defensa, ¿qué sucede en una arquitectura de Defensa en Profundidad?",
        options: [
          "Si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema.",
          "Cada capa de seguridad es independiente y no interactúa con las demás.",
          "Las capas de seguridad están dispuestas en línea recta, una detrás de la otra.",
          "La seguridad se basa únicamente en la capa externa de defensa.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una arquitectura de Defensa en Profundidad, si una de las capas falla, las restantes pueden preservar la seguridad de los recursos del sistema.",
      },
    ],
  },
  // Add more quizzes as needed
];
