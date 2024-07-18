const quizzes = [
  {
    name: "Redes",
    questions: [
      {
        question: "La sigla 2P2 significa:",
        options: [
          "Peer to Peer",
          "Protocol to Protocol",
          "Point to Point",
          "Process to Process",
        ],
        answer: [0],
        multi: false,
        explanation:
          "2P2 stands for Peer to Peer, a decentralized communication model.",
      },
      {
        question: "La sigla P2P significa:",
        options: [
          "Peer to Peer",
          "Protocol to Protocol",
          "Point to Point",
          "Process to Process",
        ],
        answer: [0],
        multi: false,
        explanation:
          "P2P stands for Peer to Peer, a decentralized communication model.",
      },
      {
        question:
          "LAN es una sigla en inglés que en castellano se traduce como.",
        options: [
          "Red de Área Local",
          "Red de Área Limitada",
          "Red de Acceso Local",
          "Red de Administración Local",
        ],
        answer: [0],
        multi: false,
        explanation:
          "LAN stands for Local Area Network, translated as Red de Área Local in Spanish.",
      },
      {
        question:
          "VPN es una sigla en inglés que en castellano se traduce como:",
        options: [
          "Red Privada Virtual",
          "Red Pública Virtual",
          "Red Personal Virtual",
          "Red Permanente Virtual",
        ],
        answer: [0],
        multi: false,
        explanation:
          "VPN stands for Virtual Private Network, translated as Red Privada Virtual in Spanish.",
      },
      {
        question:
          "ATM es una sigla en inglés que en castellano se traduce como:",
        options: [
          "Modo de Transferencia Asíncrono",
          "Modo de Transferencia Alternativa",
          "Método de Transferencia Asíncrono",
          "Método de Transmisión Asíncrono",
        ],
        answer: [0],
        multi: false,
        explanation:
          "ATM stands for Asynchronous Transfer Mode, translated as Modo de Transferencia Asíncrono in Spanish.",
      },
      {
        question:
          "PAN es una sigla en inglés que en castellano se traduce como:",
        options: [
          "Red de Área Personal",
          "Red de Área Privada",
          "Red de Área Pública",
          "Red de Área Portátil",
        ],
        answer: [0],
        multi: false,
        explanation:
          "PAN stands for Personal Area Network, translated as Red de Área Personal in Spanish.",
      },
      {
        question:
          "WAN es una sigla en inglés que en castellano se traduce como:",
        options: [
          "Red de Área Amplia",
          "Red de Área Ancha",
          "Red de Área Accesible",
          "Red de Área Automática",
        ],
        answer: [0],
        multi: false,
        explanation:
          "WAN stands for Wide Area Network, translated as Red de Área Amplia in Spanish.",
      },
      {
        question:
          "MAN es una sigla en inglés que en castellano se traduce como:",
        options: [
          "Red de Área Metropolitana",
          "Red de Área Municipal",
          "Red de Área Mediática",
          "Red de Área Mixta",
        ],
        answer: [0],
        multi: false,
        explanation:
          "MAN stands for Metropolitan Area Network, translated as Red de Área Metropolitana in Spanish.",
      },
      {
        question:
          "¿Cómo se llama la red que para interconectar dos estaciones se establece un camino dedicado a través de los nodos de la red?",
        options: [
          "Red de Conmutación de Circuitos",
          "Red de Conmutación de Paquetes",
          "Red de Conmutación de Datos",
          "Red de Conmutación Digital",
        ],
        answer: [0],
        multi: false,
        explanation:
          "This type of network is called a Circuit-Switched Network.",
      },
      {
        question:
          "¿Cómo se llama la red en la que los datos se envían en secuencias de pequeñas unidades?",
        options: [
          "Red de Conmutación de Paquetes",
          "Red de Conmutación de Circuitos",
          "Red de Conmutación de Datos",
          "Red de Conmutación de Mensajes",
        ],
        answer: [0],
        multi: false,
        explanation:
          "This type of network is called a Packet-Switched Network.",
      },
      {
        question:
          "El CMTS (Sistema de Terminación del Módem de Cable) utiliza la red del sistema:",
        options: [
          "De TV por cable",
          "De telefonía fija",
          "De satélite",
          "De fibra óptica",
        ],
        answer: [0],
        multi: false,
        explanation: "CMTS uses the Cable TV system network.",
      },
      {
        question:
          "Una de las formas más populares para brindar acceso a Internet desde teléfonos móviles es el sistema:",
        options: ["GSM", "CDMA", "LTE", "UMTS"],
        answer: [0],
        multi: false,
        explanation:
          "GSM is one of the most popular systems for providing internet access from mobile phones.",
      },
      {
        question: "La tecnología RFID es una tecnología:",
        options: ["Inalámbrica", "Alámbrica", "Óptica", "Magnética"],
        answer: [0],
        multi: false,
        explanation: "RFID is a wireless technology.",
      },
      {
        question:
          "El acceso a Internet con una velocidad mucho mayor que la de marcación (telefónica) se le llama:",
        options: ["Banda ancha", "Dial-up", "ISDN", "DSL"],
        answer: [0],
        multi: false,
        explanation: "High-speed internet access is referred to as broadband.",
      },
      {
        question: "¿En qué década aparece la WWW (World Wide Web)?",
        options: ["1.990", "1.980", "2.000", "1.970"],
        answer: [0],
        multi: false,
        explanation: "The World Wide Web appeared in the 1990s.",
      },
      {
        question:
          "Respecto del modelo TCP/IP, para la capa de transporte se definieron dos protocolos de transporte de extremo a extremo, estos son:",
        options: ["TCP y UDP", "TCP y IP", "UDP y ICMP", "IP y ICMP"],
        answer: [0],
        multi: false,
        explanation:
          "The transport layer of the TCP/IP model defines two end-to-end transport protocols: TCP and UDP.",
      },
      {
        question:
          "Respecto del modelo TCP/IP, la principal tarea la capa de interred es:",
        options: [
          "Entregar los paquetes IP a donde se supone que deben ir",
          "Establecer la conexión entre los dispositivos",
          "Gestionar la dirección IP",
          "Controlar el flujo de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The main task of the internet layer in the TCP/IP model is to deliver IP packets to their intended destinations.",
      },
      {
        question:
          "Respecto del modelo OSI, la capa de sesión permite a los usuarios en distintas máquinas establecer:",
        options: [
          "Sesiones entre ellos",
          "Conexiones directas",
          "Intercambios de datos",
          "Protocolo de comunicaciones",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The session layer in the OSI model allows users on different machines to establish sessions between them.",
      },
      {
        question:
          "Un servicio es un conjunto de primitivas (operaciones) que una capa proporciona a la capa que está encima de ella. El servicio define qué operaciones puede realizar la capa en beneficio de sus usuarios, pero:",
        options: [
          "No dice nada sobre cómo se implementan estás operaciones",
          "No proporciona seguridad",
          "No asegura la entrega de datos",
          "No mantiene la conexión",
        ],
        answer: [0],
        multi: false,
        explanation:
          "A service defines the operations a layer can perform for its users, but it does not specify how these operations are implemented.",
      },
      {
        question:
          "Respecto del modelo OSI, a diferencia de las capas inferiores, que se enfocan principalmente en mover los bits de un lado a otro, la capa de presentación se enfoca en:",
        options: [
          "La sintaxis y la semántica",
          "La transmisión de datos",
          "El control de errores",
          "El establecimiento de conexiones",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The presentation layer in the OSI model focuses on the syntax and semantics, unlike the lower layers that mainly move bits from one side to another.",
      },
      {
        question:
          "En el modelo TCP/IP, el protocolo FTP (File Transfer Protocol) pertenece a la capa:",
        options: [
          "De aplicación",
          "De transporte",
          "De red",
          "De enlace de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "In the TCP/IP model, the FTP protocol belongs to the application layer.",
      },
      {
        question:
          "Las capas pueden ofrecer dos tipos distintos de servicio a las capas superiores, estos son:",
        options: [
          "Orientado a conexión y sin conexión",
          "Con control de flujo y sin control de flujo",
          "Con enrutamiento y sin enrutamiento",
          "Con establecimiento de sesión y sin establecimiento de sesión",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Layers can offer two different types of service to upper layers: connection-oriented and connectionless.",
      },
      {
        question:
          "Un protocolo es un conjunto de reglas que rigen el formato y el significado de los paquetes o mensajes que intercambian las entidades:",
        options: [
          "Iguales en una capa",
          "Diferentes en una capa",
          "De diferentes redes",
          "De diferentes dispositivos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "A protocol is a set of rules governing the format and meaning of packets or messages exchanged by entities at the same layer.",
      },
      {
        question: "En el modelo TCP/IP las capas de sesión y presentación:",
        options: [
          "No están presentes",
          "Están combinadas",
          "Están separadas",
          "Son opcionales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "In the TCP/IP model, the session and presentation layers are not present.",
      },
      {
        question:
          "Para reducir la complejidad de su diseño, la mayoría de las redes se organizan como una pila de capas o niveles, cada una construida a partir de la que está abajo. ¿Cuál es el propósito de cada capa?",
        options: [
          "Ofrecer ciertos servicios a las capas superiores",
          "Controlar el flujo de datos",
          "Gestionar las direcciones IP",
          "Asegurar la conexión",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The purpose of each layer is to offer certain services to the layers above it.",
      },
      {
        question: "El modelo OSI se basa en una propuesta desarrollada por:",
        options: ["ISO", "IEEE", "IETF", "ITU"],
        answer: [0],
        multi: false,
        explanation:
          "The OSI model is based on a proposal developed by the International Organization for Standardization (ISO).",
      },
      {
        question:
          "Respecto del modelo OSI, en la capa de red una cuestión clave de diseño es:",
        options: [
          "Determinar cómo se encaminan los paquetes desde el origen hasta el destino",
          "Gestionar las direcciones MAC",
          "Controlar el acceso al medio",
          "Establecer conexiones seguras",
        ],
        answer: [0],
        multi: false,
        explanation:
          "A key design issue in the network layer of the OSI model is determining how packets are routed from the source to the destination.",
      },
      {
        question: "Las 4 capas del modelo TCP/IP son:",
        options: [
          "Capa de enlace, capa de interred, capa de transporte, capa de aplicación",
          "Capa física, capa de enlace, capa de red, capa de transporte",
          "Capa de red, capa de transporte, capa de sesión, capa de aplicación",
          "Capa de enlace, capa de red, capa de sesión, capa de presentación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The four layers of the TCP/IP model are: link layer, internet layer, transport layer, and application layer.",
      },
      {
        question:
          "Uno de los estándares para comunicación infrarroja se denomina:",
        options: ["IrDA", "Bluetooth", "WiFi", "ZigBee"],
        answer: [0],
        multi: false,
        explanation:
          "IrDA (Infrared Data Association) is a standard for infrared communication.",
      },
      {
        question:
          "Respecto de la Ethernet conmutada, los switches sólo envían tramas a los puertos para los cuales están destinadas:",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "In switched Ethernet, switches only send frames to the ports for which they are intended.",
      },
      {
        question:
          "El teléfono móvil en sí es dividido en el teléfono y un chip removible con información del suscriptor y la cuenta, conocido como:",
        options: [
          "Tarjeta SIM",
          "Tarjeta de memoria",
          "Módulo de seguridad",
          "Chip de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The mobile phone is divided into the phone itself and a removable chip containing subscriber and account information, known as a SIM card.",
      },
      {
        question: "El sistema telefónico tradicional está basado en la:",
        options: [
          "Conmutación de circuitos",
          "Conmutación de paquetes",
          "Conmutación de mensajes",
          "Conmutación de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The traditional telephone system is based on circuit switching.",
      },
      {
        question:
          "La sigla MAC en castellano significa Control de Acceso al Medio:",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation: "MAC stands for Media Access Control in Spanish.",
      },
      {
        question:
          "La sigla VLAN en castellano significa Red de Área Local Virtual:",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation: "VLAN stands for Virtual Local Area Network in Spanish.",
      },
      {
        question:
          "En general y en el ámbito de las comunicaciones existen 3 tipos de satélites, estos son: Seleccione las 3 (tres) respuestas correctas.",
        options: [
          "Los satélites LEO",
          "Los satélites MEO",
          "Los satélites GEO",
          "Los satélites HEO",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "In communications, there are three types of satellites: Low Earth Orbit (LEO), Medium Earth Orbit (MEO), and Geostationary Orbit (GEO).",
      },
      {
        question: "La aplicación más común del par trenzado es:",
        options: [
          "El Sistema Telefónico",
          "La Red de Computadoras",
          "La Televisión por Cable",
          "La Transmisión de Datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The most common application of twisted pair cable is in the telephone system.",
      },
      {
        question:
          "Si bien la fibra óptica se utiliza para redes troncales existe una implementación para hogares, esta se llama:",
        options: ["FTTH", "FTTP", "FTTB", "FTTC"],
        answer: [0],
        multi: false,
        explanation:
          "Fiber to the Home (FTTH) is an implementation of fiber optic cable for homes.",
      },
      {
        question:
          "Los datos analógicos pueden tomar valores en un intervalo continuo y los datos digitales toman valores discretos:",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Analog data can take on continuous values, while digital data takes on discrete values.",
      },
      {
        question:
          "Hay dos tipos de cable coaxial que se utilizan ampliamente: El de 50 ohms y el de:",
        options: ["75 Ohms", "100 Ohms", "25 Ohms", "150 Ohms"],
        answer: [0],
        multi: false,
        explanation:
          "There are two types of coaxial cable that are widely used: 50 ohms and 75 ohms.",
      },
      {
        question:
          "En cualquier sistema de comunicaciones se debe aceptar que la señal que se recibe diferirá de la señal transmitida debido a varias adversidades y dificultades sufridas en la transmisión. En las señales analógicas, estas dificultades pueden degradar la calidad de la señal. En las señales digitales, se generarán bits erróneos. Las dificultades más significativas son: Seleccione las 3 (tres) respuestas correctas.",
        options: [
          "El ruido",
          "La distorsión de retardo",
          "La atenuación y la distorsión de atenuación",
          "La interferencia",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "The most significant difficulties in communication systems are noise, delay distortion, and attenuation distortion.",
      },
      {
        question:
          "Respecto de la capacidad del canal, hay cuatro conceptos en juego relacionados entre sí, que son: Seleccione las 4 (cuatro) respuestas correctas.",
        options: [
          "El ruido",
          "El ancho de banda",
          "La velocidad de transmisión de los datos",
          "La tasa de errores",
          "La latencia",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "The four interrelated concepts regarding channel capacity are noise, bandwidth, data transmission speed, and error rate.",
      },
      {
        question:
          "La fórmula del teorema de Nyquist establece que la tasa de datos máxima es igual a:",
        options: [
          "2B log2 V bits/seg",
          "B log2 V bits/seg",
          "2B log2 (1+S/N) bits/seg",
          "B log2 (1+S/N) bits/seg",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The Nyquist theorem formula states that the maximum data rate is 2B log2 V bits/second.",
      },
      {
        question:
          "MPLS es una sigla en inglés que en castellano se traduce como:",
        options: [
          "Conmutación Multiprotocolo Mediante Etiquetas",
          "Protocolo de Transferencia de Múltiples Etiquetas",
          "Sistema de Conmutación de Múltiples Protocolos",
          "Conmutación de Etiquetas de Múltiples Protocolos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "MPLS stands for Multiprotocol Label Switching, translated as Conmutación Multiprotocolo Mediante Etiquetas in Spanish.",
      },
      {
        question:
          "Respecto de IP v4, en el datagrama, el campo 'Versión' ¿cuántos bits posee?",
        options: ["4", "8", "16", "32"],
        answer: [0],
        multi: false,
        explanation:
          "In IPv4, the 'Version' field in the datagram is 4 bits long.",
      },
      {
        question:
          "En relación a las redes de datagramas, si los paquetes tienden a ser bastante cortos, incluir una dirección de destino completa en cada paquete puede representar una cantidad considerable de sobrecarga y, por ende, un desperdicio de:",
        options: [
          "Ancho de banda",
          "Memoria",
          "Tiempo de procesamiento",
          "Espacio de almacenamiento",
        ],
        answer: [0],
        multi: false,
        explanation:
          "In datagram networks, if packets are quite short, including a full destination address in each packet can represent a significant amount of overhead and thus a waste of bandwidth.",
      },
      {
        question: "¿Quién administra y asigna el espacio de direcciones?",
        options: ["ICANN", "IETF", "IEEE", "ISO"],
        answer: [0],
        multi: false,
        explanation:
          "ICANN (Internet Corporation for Assigned Names and Numbers) administers and assigns the address space.",
      },
      {
        question:
          "La dirección IP 128.14.3.16 corresponde a una dirección clase:",
        options: ["B'", "A'", "C'", "D'"],
        answer: [0],
        multi: false,
        explanation: "The IP address 128.14.3.16 belongs to class B.",
      },
      {
        question:
          "La dirección IP 192.168.0.1 corresponde a una dirección clase:",
        options: ["C'", "A'", "B'", "D'"],
        answer: [0],
        multi: false,
        explanation: "The IP address 192.168.0.1 belongs to class C.",
      },
      {
        question: "La dirección IP 255.255.255.0 se corresponde con una:",
        options: [
          "Máscara de subred",
          "Dirección de red",
          "Dirección de broadcast",
          "Dirección de host",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The IP address 255.255.255.0 corresponds to a subnet mask.",
      },
      {
        question:
          "En relación a un servicio sin conexión, los paquetes se transmiten por separado en la red y se enrutan de manera independiente. No se necesita una configuración por adelantado. En este contexto, por lo general los paquetes se conocen como:",
        options: ["Datagramas", "Frames", "Cells", "Segments"],
        answer: [0],
        multi: false,
        explanation:
          "In a connectionless service, packets are usually referred to as datagrams.",
      },
      {
        question:
          "Seleccione las direcciones IP v4 correctas. Seleccione las 3 (tres) respuestas correctas.",
        options: ["197.3.23.234", "10.4.6.3", "4.4.4.4", "256.1.1.1"],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "The correct IPv4 addresses are 197.3.23.234, 10.4.6.3, and 4.4.4.4.",
      },
      {
        question:
          "Respecto de IP v4, ¿Cómo se llama el diseño en el que es responsabilidad de cada enrutador tener la información del prefijo correspondiente?",
        options: ["CIDR", "VLSM", "NAT", "ARP"],
        answer: [0],
        multi: false,
        explanation:
          "CIDR (Classless Inter-Domain Routing) is the design where each router must have the prefix information.",
      },
      {
        question:
          "El rango de direcciones IPs privadas para la clase A se encuentra en el rango de:",
        options: [
          "10.0.0.0 - 10.255.255.255/8",
          "172.16.0.0 - 172.31.255.255/12",
          "192.168.0.0 - 192.168.255.255/16",
          "169.254.0.0 - 169.254.255.255/16",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The private IP address range for class A is 10.0.0.0 - 10.255.255.255/8.",
      },
      {
        question:
          "El rango de direcciones IPs privadas para la clase B se encuentra en el rango de:",
        options: [
          "172.16.0.0 - 172.31.255.255/12",
          "10.0.0.0 - 10.255.255.255/8",
          "192.168.0.0 - 192.168.255.255/16",
          "169.254.0.0 - 169.254.255.255/16",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The private IP address range for class B is 172.16.0.0 - 172.31.255.255/12.",
      },
      {
        question:
          "El rango de direcciones IPs privadas para la clase C se encuentra en el rango de:",
        options: [
          "192.168.0.0 - 192.168.255.255/16",
          "10.0.0.0 - 10.255.255.255/8",
          "172.16.0.0 - 172.31.255.255/12",
          "169.254.0.0 - 169.254.255.255/16",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The private IP address range for class C is 192.168.0.0 - 192.168.255.255/16.",
      },
      {
        question:
          "Respecto de los prefijos en direcciones IP v4, cada dirección de 32 bits está compuesta de una porción de red de longitud variable en los bits superiores, y de una porción de host en los:",
        options: [
          "Bits inferiores",
          "Bits superiores",
          "Bytes superiores",
          "Bytes inferiores",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Each 32-bit IPv4 address consists of a network portion of variable length in the upper bits and a host portion in the lower bits.",
      },
      {
        question:
          "En relación a DHCP, en forma muy parecida al ARP, la computadora difunde una solicitud de una dirección IP en su red. Para ello usa un paquete llamado:",
        options: ["DHCP DISCOVER", "DHCP REQUEST", "DHCP OFFER", "DHCP ACK"],
        answer: [0],
        multi: false,
        explanation:
          "In DHCP, a computer broadcasts a request for an IP address using a packet called DHCP DISCOVER.",
      },
      {
        question:
          "¿Cuáles de las siguientes son direcciones IP v4 clase C? Seleccione las 2 (dos) respuestas correctas.",
        options: ["192.168.4.79", "192.168.37.255", "172.16.0.1", "10.0.0.1"],
        answer: [0, 1],
        multi: true,
        explanation:
          "The correct IPv4 class C addresses are 192.168.4.79 and 192.168.37.255.",
      },
      {
        question:
          "Un datagrama IPv4 consiste en dos partes: el cuerpo o carga útil y:",
        options: [
          "El encabezado",
          "La dirección IP",
          "La secuencia de datos",
          "El checksum",
        ],
        answer: [0],
        multi: false,
        explanation:
          "An IPv4 datagram consists of two parts: the payload and the header.",
      },
      {
        question:
          "Respecto de IP v4, en el datagrama, el campo 'Identificador' ¿Cuántos bits posee?",
        options: ["16", "8", "32", "64"],
        answer: [0],
        multi: false,
        explanation:
          "In an IPv4 datagram, the 'Identifier' field is 16 bits long.",
      },
      {
        question:
          "Según la asignación de direccionamiento con clases, ¿Cuántas clases de direcciones IP v4 existen?",
        options: ["5", "3", "4", "6"],
        answer: [0],
        multi: false,
        explanation:
          "According to classful addressing, there are 5 classes of IPv4 addresses: A, B, C, D, and E.",
      },
      {
        question:
          "El estándar IP específica que una implementación que cumpla las especificaciones del protocolo debe también implementar ICMP.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "The IP standard specifies that an implementation must also implement ICMP.",
      },
      {
        question:
          "La idea básica detrás de NAT es que el ISP asigne a cada hogar o negocio:",
        options: [
          "Una sola dirección IP",
          "Un rango de direcciones IP",
          "Una dirección IP por dispositivo",
          "Una dirección IP dinámica",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The basic idea behind NAT is that the ISP assigns a single IP address to each home or business.",
      },
      {
        question:
          "Dentro de una red dividida en subredes, los dispositivos de encaminamiento locales deben encaminar sobre la base de un número de red extendido consistente en la porción de red de la dirección IP y el número de:",
        options: ["Subred", "Host", "Segmento", "Gateway"],
        answer: [0],
        multi: false,
        explanation:
          "In a network divided into subnets, local routing devices route based on an extended network number consisting of the network portion of the IP address and the subnet number.",
      },
      {
        question:
          "En un servicio orientado a conexión, hay que establecer una ruta del enrutador de origen al enrutador de destino antes de poder enviar cualquier paquete de datos. Está conexión se conoce como:",
        options: [
          "Circuito virtual",
          "Ruta dinámica",
          "Conexión directa",
          "Camino dedicado",
        ],
        answer: [0],
        multi: false,
        explanation:
          "In a connection-oriented service, a route from the source router to the destination router must be established before sending any data packets. This connection is known as a virtual circuit.",
      },
      {
        question:
          "NAT es una sigla que traducida del inglés significa Traducción de Direcciones de Red.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "NAT stands for Network Address Translation, translated as Traducción de Direcciones de Red in Spanish.",
      },
      {
        question:
          "La dirección IP 10.0.0.178 corresponde a una dirección clase:",
        options: ["A'", "B'", "C'", "D'"],
        answer: [0],
        multi: false,
        explanation: "The IP address 10.0.0.178 belongs to class A.",
      },
      {
        question:
          "¿Cuál de las siguientes son algunas de las extensiones de la cabecera de IP v6? Seleccione las 4 (cuatro) respuestas correctas.",
        options: [
          "Versión",
          "Longitud de la carga útil",
          "Clase de tráfico",
          "Etiqueta de flujo",
          "Protocolo",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Some of the extensions of the IPv6 header are Version, Payload Length, Traffic Class, and Flow Label.",
      },
      {
        question:
          "Respecto del datagrama en IP v6, ¿Cuál es la primera cabecera?",
        options: [
          "Cabecera IPv6",
          "Cabecera de Transporte",
          "Cabecera de Enlace",
          "Cabecera de Aplicación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "In an IPv6 datagram, the first header is the IPv6 header.",
      },
      {
        question:
          "La dirección IP v6 8000:0000:0000:0000:0123:4567:89AB:CDEF optimizada podría verse como:",
        options: [
          "8000::123:4567:89AB:CDEF",
          "8000:0:0:0:123:4567:89AB:CDEF",
          "8000:0:0:0:0123:4567:89AB:CDEF",
          "8000:0:0:123:4567:89AB:CDEF",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The IPv6 address 8000:0000:0000:0000:0123:4567:89AB:CDEF can be optimized to 8000::123:4567:89AB:CDEF.",
      },
      {
        question: "Las direcciones IP v6 son de 122 bits.",
        options: ["Falso", "Verdadero"],
        answer: [0],
        multi: false,
        explanation: "IPv6 addresses are 128 bits, not 122 bits.",
      },
      {
        question:
          "IPv6 permite tres tipos de direcciones, estos son: Seleccione las 3 (tres) respuestas correctas.",
        options: ["Multidifusión", "Unidifusión", "Monodifusión", "Anycast"],
        answer: [0, 1, 3],
        multi: true,
        explanation:
          "IPv6 allows three types of addresses: Multicast, Unicast, and Anycast.",
      },
      {
        question: "DHCP es una sigla que en castellano significa:",
        options: [
          "Protocolo de Configuración Dinámica de Host",
          "Protocolo de Control Dinámico de Host",
          "Protocolo de Comunicación Dinámica de Host",
          "Protocolo de Configuración Directa de Host",
        ],
        answer: [0],
        multi: false,
        explanation:
          "DHCP stands for Dynamic Host Configuration Protocol, translated as Protocolo de Configuración Dinámica de Host in Spanish.",
      },
      {
        question:
          "Respecto de ICMP (Protocolo de Mensajes de Control en Internet), ¿Qué herramienta se utiliza para ver si un destino dado es alcanzable y está vivo?",
        options: ["Ping", "Traceroute", "Netstat", "Nslookup"],
        answer: [0],
        multi: false,
        explanation:
          "Ping is used to check if a given destination is reachable and alive.",
      },
      {
        question:
          "Respecto de ICMP (Protocolo de Mensajes de Control en Internet) ¿Qué herramienta permite detectar que los paquetes se están repitiendo o que los valores establecidos en el contador TTL son muy bajos?",
        options: ["Traceroute", "Ping", "Netstat", "Nslookup"],
        answer: [0],
        multi: false,
        explanation:
          "Traceroute allows detecting packet repetition or low TTL values.",
      },
      {
        question:
          "Respecto del enrutamiento, OSPF es una sigla que en castellano significa:",
        options: [
          "Abrir primero la ruta más corta",
          "Protocolo de ruta abierta",
          "Sistema de ruta más corta",
          "Protocolo de enrutamiento abierto",
        ],
        answer: [0],
        multi: false,
        explanation:
          "OSPF stands for Open Shortest Path First, translated as Abrir primero la ruta más corta in Spanish.",
      },
      {
        question:
          "Respecto de los algoritmos de enrutamiento, uno de éstos se debe a Dijkstra (1959) y se conoce como:",
        options: [
          "Algoritmo de la ruta más corta",
          "Algoritmo de la ruta óptima",
          "Algoritmo de Dijkstra",
          "Algoritmo de camino más rápido",
        ],
        answer: [0],
        multi: false,
        explanation:
          "One of the routing algorithms, known as the shortest path algorithm, is due to Dijkstra (1959).",
      },
      {
        question:
          "Respecto de los algoritmos de enrutamiento, cuando cada paquete entrante se envía en todas las líneas de salida, excepto en la línea por la que llegó estamos haciendo referencia, ¿A qué técnica?",
        options: ["Inundación", "Difusión", "Multiplexación", "Unicast"],
        answer: [0],
        multi: false,
        explanation:
          "Flooding is the technique where each incoming packet is sent out on all outgoing lines except the one it arrived on.",
      },
      {
        question:
          "¿Cómo se llama el algoritmo en el que los enrutadores se dividen en lo que llamaremos regiones? Cada enrutador conoce todos los detalles para enrutar paquetes a destinos dentro de su propia región, pero no sabe nada de la estructura interna de las otras regiones.",
        options: [
          "Enrutamiento jerárquico",
          "Enrutamiento por vector de distancia",
          "Enrutamiento por estado de enlace",
          "Enrutamiento dinámico",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Hierarchical routing is the algorithm where routers are divided into regions.",
      },
      {
        question:
          "¿Cómo se llama el algoritmo en el que los hosts necesitan enviar mensajes a varios o a todos los hosts en la red enviando simultáneamente paquetes a todos los destinos? Por ejemplo, el servicio de distribución de informes sobre el clima.",
        options: ["Difusión", "Inundación", "Multiplexación", "Unicast"],
        answer: [0],
        multi: false,
        explanation:
          "Broadcasting is the algorithm where hosts need to send messages to several or all hosts on the network.",
      },
      {
        question:
          "En relación a los algoritmos de enrutamiento, podemos agruparlos en dos clases principales: (seleccione la opción correcta)",
        options: [
          "No adaptativos y adaptativos",
          "Estáticos y dinámicos",
          "Centralizados y descentralizados",
          "Locales y globales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Routing algorithms can be grouped into two main classes: non-adaptive and adaptive.",
      },
      {
        question:
          "¿Cómo se llama el algoritmo que opera haciendo que cada enrutador mantenga una tabla que proporcione la mejor distancia conocida a cada destino y el enlace que se puede usar para llegar ahí?",
        options: [
          "Algoritmo de enrutamiento por vector de distancia",
          "Algoritmo de enrutamiento por estado de enlace",
          "Algoritmo de enrutamiento adaptativo",
          "Algoritmo de enrutamiento estático",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The distance-vector routing algorithm operates by having each router maintain a table providing the best-known distance to each destination and the link to use to get there.",
      },
      {
        question:
          "¿Con que otro nombre se conoce al algoritmo de enrutamiento por vector de distancia?",
        options: ["RIP", "OSPF", "EIGRP", "BGP"],
        answer: [0],
        multi: false,
        explanation:
          "The distance-vector routing algorithm is also known as RIP (Routing Information Protocol).",
      },
      {
        question:
          "Respecto del enrutamiento, dentro de un solo sistema autónomo, OSPF e IS-IS son los protocolos de uso común. Entre los sistemas autónomos se utiliza un protocolo diferente, conocido como:",
        options: ["BGP", "EIGRP", "RIP", "OSPF"],
        answer: [0],
        multi: false,
        explanation:
          "Within a single autonomous system, OSPF and IS-IS are commonly used protocols. Between autonomous systems, a different protocol known as BGP (Border Gateway Protocol) is used.",
      },
      {
        question:
          "¿Cuál de las siguientes es una organización dedicada a los estándares en telecomunicaciones?",
        options: ["IEEE", "ISO", "IETF", "ITU"],
        answer: [0],
        multi: false,
        explanation:
          "IEEE (Institute of Electrical and Electronics Engineers) is an organization dedicated to telecommunications standards.",
      },
      {
        question:
          "Respecto del modelo OSI, ¿Cuál es la principal tarea de la capa de enlace de datos?",
        options: [
          "Transformar un medio de transmisión puro en una línea que esté libre de errores de transmisión",
          "Encaminar los paquetes desde el origen hasta el destino",
          "Gestionar las conexiones entre máquinas",
          "Asegurar la entrega de los paquetes",
        ],
        answer: [0],
        multi: false,
        explanation:
          "The main task of the data link layer in the OSI model is to transform a raw transmission medium into a line that appears free of transmission errors.",
      },
      {
        question:
          "Todas las técnicas 802:11 usan radios de corto alcance para transmitir señales en dos bandas de frecuencias ISM de: Seleccione las 2 (dos) respuestas correctas.",
        options: ["5GHz", "2.4 GHz", "3.6 GHz", "4.9 GHz"],
        answer: [0, 1],
        multi: true,
        explanation:
          "All 802.11 techniques use short-range radios to transmit signals in the 5GHz and 2.4GHz ISM frequency bands.",
      },
    ],
  },

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
          "Cual de las siguientes opciones corresponde la definición de un ataque? 'falsear la dirección fuente de un correo o email, enviando por tanto mensajes en nombre de otra persona",
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
  {
    name: "Seguridad informatica Parcial 1",
    questions: [
      {
        question:
          "Además de los aspectos específicos inherentes a la seguridad de los activos de información, cuando se habla de seguridad informática, deben considerarse también otros aspectos. Identifica correctamente uno de esos aspectos en la siguiente lista:",
        options: [
          "Regulaciones legales aplicables a cada sector o tipo de organización",
          "El costo de los activos de información",
          "La velocidad de los sistemas",
          "La accesibilidad de la información",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La seguridad informática no solo se centra en los activos de información, sino también en las regulaciones legales aplicables a cada sector o tipo de organización.",
      },
      {
        question:
          "A la hora de analizar y gestionar los riesgos, ¿Cuáles recursos deberían tenerse en cuenta? Seleccione la opción correcta:",
        options: [
          "Recursos de Hardware",
          "Recursos humanos",
          "Recursos financieros",
          "Recursos de software",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la gestión de riesgos, es fundamental considerar los recursos de hardware como parte de la infraestructura tecnológica.",
      },
      {
        question: "¿Cuál es el objetivo de una medida de seguridad activa?",
        options: [
          "Anular o reducir el riesgo de una amenaza",
          "Monitorear el tráfico de la red",
          "Realizar copias de seguridad",
          "Educar a los empleados sobre la seguridad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Las medidas de seguridad activa buscan anular o reducir el riesgo de una amenaza antes de que se materialice.",
      },
      {
        question: "¿Cuál es el objetivo de una medida de seguridad pasiva?",
        options: [
          "Reducir el impacto cuando se produzca un incidente de seguridad",
          "Prevenir accesos no autorizados",
          "Mejorar la eficiencia del sistema",
          "Aumentar la velocidad de la red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Las medidas de seguridad pasiva están diseñadas para mitigar el impacto de un incidente de seguridad una vez que ocurre.",
      },
      {
        question:
          "Cuando hablamos de datos que se encuentran guardados en un equipo, nos referimos al servicio de seguridad de la información de...",
        options: [
          "Protección a la réplica",
          "Autenticación",
          "Encriptación",
          "Monitoreo",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La protección a la réplica se refiere a la seguridad de los datos almacenados en un equipo para evitar su pérdida o corrupción.",
      },
      {
        question:
          "Cuando pretendemos garantizar la identidad de un usuario y/o terminal que se intenta conectar a la red, nos estamos refiriendo al servicio de...",
        options: [
          "Autenticación",
          "Autorización",
          "Integridad",
          "Disponibilidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El servicio de autenticación es el que garantiza la identidad de un usuario y/o terminal que se intenta conectar a la red.",
      },
      {
        question:
          "¿Cuáles son los puntos que integran el triángulo de la seguridad?",
        options: [
          "Integridad, disponibilidad, confidencialidad",
          "Accesibilidad, rapidez, integridad",
          "Confidencialidad, velocidad, disponibilidad",
          "Confidencialidad, rapidez, accesibilidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El triángulo de la seguridad se compone de integridad, disponibilidad y confidencialidad.",
      },
      {
        question:
          "¿Cuáles propiedades de la información intenta preservar la seguridad informática?",
        options: [
          "Confidencialidad, Integridad, Disponibilidad",
          "Velocidad, Accesibilidad, Integridad",
          "Confidencialidad, Velocidad, Accesibilidad",
          "Integridad, Accesibilidad, Disponibilidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La seguridad informática intenta preservar la confidencialidad, integridad y disponibilidad de la información.",
      },
      {
        question: "El servicio de no-repudio...",
        options: [
          "Permite demostrar la autoría de un mensaje, de tal modo que el usuario que lo ha creado y enviado no pueda luego negar dicha acción",
          "Protege los datos almacenados en un equipo",
          "Garantiza la identidad de un usuario que se conecta a la red",
          "Anula o reduce el riesgo de una amenaza",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El servicio de no-repudio permite demostrar la autoría de un mensaje, evitando que el usuario que lo ha creado y enviado niegue dicha acción.",
      },
      {
        question:
          "En el contexto del Análisis de Riesgos, una amenaza se puede clasificar en función del grado de intencionalidad que representa. Identifica correctamente a una de estas clasificaciones en la siguiente lista.",
        options: [
          "Actuaciones malintencionadas",
          "Errores humanos",
          "Fallas técnicas",
          "Desastres naturales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las clasificaciones de amenazas en el análisis de riesgos se basa en el grado de intencionalidad, como las actuaciones malintencionadas.",
      },
      {
        question: "En el contexto del Análisis de Riesgos, ¿Qué es el Impacto?",
        options: [
          "La medición y valoración del daño que podría producir a la organización un incidente de seguridad",
          "La probabilidad de que una amenaza se materialice sobre una vulnerabilidad",
          "El proceso de identificación de activos a proteger",
          "El análisis de las medidas de seguridad existentes",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El impacto en el análisis de riesgos se refiere a la medición y valoración del daño que podría producir a la organización un incidente de seguridad.",
      },
      {
        question: "En el contexto del Análisis de Riesgos, ¿Qué es un riesgo?",
        options: [
          "La probabilidad de que una amenaza se materialice sobre una vulnerabilidad",
          "La medición y valoración del daño que podría producir a la organización un incidente de seguridad",
          "El proceso de identificación de activos a proteger",
          "El análisis de las medidas de seguridad existentes",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un riesgo es la probabilidad de que una amenaza se materialice sobre una vulnerabilidad en el contexto del análisis de riesgos.",
      },
      {
        question:
          "En el contexto del Análisis de Riesgos, ¿Qué son los recursos?",
        options: [
          "Activos a proteger del sistema informático de la organización",
          "Los usuarios del sistema",
          "Las medidas de seguridad implementadas",
          "Los datos almacenados",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En el análisis de riesgos, los recursos son los activos a proteger del sistema informático de la organización.",
      },
      {
        question: "En el marco del Análisis de Riesgo, ¿Qué es el Impacto?",
        options: [
          "La medición y valoración del daño que podría producir a la organización un incidente de seguridad",
          "La probabilidad de que una amenaza se materialice sobre una vulnerabilidad",
          "El proceso de identificación de activos a proteger",
          "El análisis de las medidas de seguridad existentes",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El impacto en el análisis de riesgos se refiere a la medición y valoración del daño que podría producir a la organización un incidente de seguridad.",
      },
      {
        question:
          "En el contexto del Análisis de Riesgos, una amenaza se puede clasificar en función del grado de intencionalidad que representa. Identifica correctamente a una de estas clasificaciones en la siguiente lista.",
        options: [
          "Actuaciones malintencionadas",
          "Errores humanos",
          "Fallas técnicas",
          "Desastres naturales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las clasificaciones de amenazas en el análisis de riesgos se basa en el grado de intencionalidad, como las actuaciones malintencionadas.",
      },
      {
        question:
          "En el contexto de la Gestión de Riesgos ¿Cómo es la secuencia de procesos en la apreciación del riesgo?",
        options: [
          "Identificar, Analizar, Evaluar",
          "Planificar, Ejecutar, Monitorear",
          "Analizar, Evaluar, Implementar",
          "Evaluar, Identificar, Mitigar",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La secuencia de procesos en la apreciación del riesgo es Identificar, Analizar, Evaluar.",
      },
      {
        question: "En relación al Riesgo, indica cuál afirmación es correcta.",
        options: [
          "No se pueden eliminar totalmente, pero si se pueden gestionar",
          "Se pueden eliminar completamente",
          "No se pueden gestionar de ninguna manera",
          "Son siempre inevitables",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los riesgos no se pueden eliminar totalmente, pero si se pueden gestionar.",
      },
      {
        question:
          "En relación a la implementación de un sistema de gestión de seguridad de la información, ¿Cuáles son sus fases o etapas? Identifica las 4 (cuatro) opciones correctas.",
        options: [
          "Establecer un programa de mejora de la seguridad",
          "Identificación y registro de activos",
          "Definición de responsabilidades y asignación de recursos",
          "Definición de las políticas de seguridad y del alcance del sistema de gestión de la seguridad de la información",
          "Monitoreo continuo de las amenazas",
          "Implementación de un sistema de backup automático",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las fases o etapas de un sistema de gestión de seguridad de la información incluyen establecer un programa de mejora de la seguridad, identificación y registro de activos, definición de responsabilidades y asignación de recursos, y definición de las políticas de seguridad y del alcance del sistema de gestión de la seguridad de la información.",
      },
      {
        question:
          "En relación a la Gestión de Riesgos, ¿Cuáles son los componentes? Identifica las 4 (cuatro) opciones correctas.",
        options: [
          "Análisis y detección de vulnerabilidades del sistema de información",
          "Detección de amenazas",
          "Definición e implementación de medidas de seguridad",
          "Evaluación y gestión del riesgo",
          "Reducción del costo operativo",
          "Optimización de recursos humanos",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Los componentes de la gestión de riesgos incluyen análisis y detección de vulnerabilidades del sistema de información, detección de amenazas, definición e implementación de medidas de seguridad, y evaluación y gestión del riesgo.",
      },
      {
        question:
          "En relación a una Medida de seguridad, identifica cuál es la afirmación correcta.",
        options: [
          "Es cualquier medio empleado para eliminar o reducir un riesgo",
          "Es un procedimiento de backup de datos",
          "Es un sistema de monitoreo de red",
          "Es una auditoría de seguridad anual",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una medida de seguridad es cualquier medio empleado para eliminar o reducir un riesgo.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista.",
        options: ["No repudio", "Accesibilidad", "Rapidez", "Costo-eficiencia"],
        answer: [0],
        multi: false,
        explanation:
          "El servicio de no repudio permite demostrar la autoría de un mensaje, evitando que el usuario que lo ha creado y enviado niegue dicha acción.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista.",
        options: [
          "Reclamación de Origen",
          "Velocidad",
          "Redundancia",
          "Flexibilidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La reclamación de origen es un servicio de seguridad de la información que asegura la procedencia de los datos.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista.",
        options: [
          "Disponibilidad",
          "Escalabilidad",
          "Usabilidad",
          "Costo-beneficio",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La disponibilidad es un servicio de seguridad de la información que garantiza que los datos y servicios estén accesibles cuando se necesiten.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista.",
        options: ["Integridad", "Eficiencia", "Velocidad", "Compatibilidad"],
        answer: [0],
        multi: false,
        explanation:
          "La integridad es un servicio de seguridad de la información que asegura que los datos no sean alterados de manera no autorizada.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista.",
        options: [
          "Protección a la réplica",
          "Reducción de costos",
          "Optimización de recursos",
          "Mejora de la eficiencia",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La protección a la réplica se refiere a la seguridad de los datos almacenados en un equipo para evitar su pérdida o corrupción.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista.",
        options: ["Autorización", "Aceleración", "Escalabilidad", "Usabilidad"],
        answer: [0],
        multi: false,
        explanation:
          "La autorización es un servicio de seguridad de la información que permite conceder o denegar el acceso a recursos específicos.",
      },
      {
        question: "Identifica cuáles son desastres naturales.",
        options: [
          "Terremotos, inundaciones y humedad, tormentas eléctricas",
          "Incendios forestales, caídas de rayos, avalanchas",
          "Derrumbes, explosiones, incendios",
          "Accidentes industriales, derrames químicos, incendios",
        ],
        answer: [0],
        multi: true,
        explanation:
          "Los desastres naturales incluyen terremotos, inundaciones, humedad y tormentas eléctricas.",
      },
      {
        question:
          "La seguridad de un sistema informático depende de varios factores. Identifica de manera correcta a uno de ellos en la siguiente lista.",
        options: [
          "El soporte de los fabricantes de hardware y software",
          "El costo de los activos",
          "La velocidad de la red",
          "La accesibilidad de la información",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La seguridad de un sistema informático depende, entre otros factores, del soporte de los fabricantes de hardware y software.",
      },
      {
        question:
          "La seguridad de un sistema informático depende de varios factores. Identifica de manera correcta a uno de ellos en la siguiente lista.",
        options: [
          "La sensibilización de los directivos y responsables de la organización",
          "La cantidad de empleados",
          "El costo de implementación",
          "La accesibilidad de la red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La sensibilización de los directivos y responsables de la organización es un factor clave para la seguridad de un sistema informático.",
      },
      {
        question:
          "La Seguridad Informática se plantea una serie de objetivos. Identifica correctamente a uno de éstos objetivos en la siguiente lista.",
        options: [
          "Minimizar y gestionar los riesgos y detectar los posibles problemas y amenazas a la seguridad",
          "Aumentar la velocidad de la red",
          "Reducir los costos de operación",
          "Mejorar la usabilidad del sistema",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los objetivos de la seguridad informática es minimizar y gestionar los riesgos, así como detectar los posibles problemas y amenazas a la seguridad.",
      },
      {
        question:
          "Para cumplir con los objetivos de la seguridad informática, una organización debe contemplar cuatro planos de actuación. Identifica correctamente cuales son:",
        options: [
          "Plano técnico, plano legal, plano humano y plano organizativo",
          "Plano financiero, plano operativo, plano estratégico, plano tecnológico",
          "Plano de cumplimiento, plano de riesgos, plano de control, plano de desarrollo",
          "Plano operacional, plano de gestión, plano de recursos, plano de comunicaciones",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los planos técnico, legal, humano y organizativo abarcan los aspectos más relevantes que una organización debe considerar para asegurar la protección de la información.",
      },
      {
        question:
          "¿Qué comprende un Sistema de Gestión de la Seguridad de la Información?",
        options: [
          "La política, estructura organizativa, recursos, procedimientos y procesos",
          "El análisis de riesgos, protocolos de seguridad, métodos de control, y legislación",
          "Los métodos de cifrado, las redes seguras, el personal capacitado y las auditorías",
          "La planificación estratégica, los procedimientos operacionales, la formación continua y la revisión de políticas",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un Sistema de Gestión de la Seguridad de la Información incluye la política, estructura organizativa, recursos, procedimientos y procesos necesarios para gestionar la seguridad.",
      },
      {
        question:
          "Seguridad Informática y seguridad de la información no son la misma actividad, aunque se complementan",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Es verdadero porque la seguridad informática se enfoca más en la protección de infraestructuras computacionales y la seguridad de la información se centra en proteger la información misma.",
      },
      {
        question:
          "¿A cuál de las siguientes amenazas se refiere la siguiente afirmación? 'Un ataque se clasifica de esta manera si un elemento no autorizado además de conseguir el acceso consigue modificar el objeto'",
        options: [
          "Interceptación",
          "Intrusión",
          "Usurpación",
          "Ataque de modificación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La amenaza descrita se refiere a una 'Interceptación', donde se accede y modifica la información sin autorización.",
      },
      {
        question:
          "En relación a los procedimientos de seguridad, selecciona la opción correcta",
        options: [
          "Se descomponen en tareas y operaciones concretas",
          "Están basados únicamente en teorías generales",
          "No necesitan ser revisados regularmente",
          "Deben ser vagos para permitir flexibilidad",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los procedimientos de seguridad efectivos se descomponen en tareas y operaciones concretas para garantizar que se puedan implementar correctamente.",
      },
      {
        question:
          "Las políticas de seguridad deben cumplir con una serie de características y principios básicos. Identifica correctamente una de ellas en la siguiente lista.",
        options: [
          "Aplicación del principio de defensa en Profundidad",
          "Implementación de software sin licencia",
          "Uso de tecnologías obsoletas",
          "Evitar auditorías y evaluaciones",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El principio de 'Defensa en Profundidad' es un enfoque fundamental en las políticas de seguridad para proporcionar múltiples capas de protección.",
      },
      {
        question: "¿Cómo se define a un plan de seguridad?",
        options: [
          "Como un conjunto de decisiones que definen cursos de acción futuros",
          "Como un documento legal que se debe seguir sin cambios",
          "Como un protocolo de reacción ante incidentes ya ocurridos",
          "Como una lista de posibles amenazas sin estrategias de mitigación",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un plan de seguridad define un conjunto de decisiones estratégicas que orientan las acciones futuras en materia de seguridad.",
      },
      {
        question:
          "Dentro de la estructura de una política de seguridad, ¿cuáles componentes deben estar incluidas? Identifica las 4 opciones correctas:",
        options: [
          "Objetivos perseguidos, Alcance, Compromiso de la dirección de la organización, Análisis y gestión de riesgos",
          "Alcance",
          "Compromiso de la dirección de la organización",
          "Análisis y gestión de riesgos",
          "Politicas de negocio",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Una política de seguridad debe incluir los objetivos perseguidos, el alcance, el compromiso de la dirección y la gestión de riesgos para ser efectiva.",
      },
      {
        question:
          "Las Políticas de Seguridad deben cumplir con una serie de características y principios básicos. Identifica correctamente una de ellas en la siguiente lista:",
        options: [
          "Asignación de mínimos privilegios",
          "Ignorar amenazas conocidas",
          "Permitir accesos indiscriminados",
          "Reducir la vigilancia de recursos críticos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La asignación de mínimos privilegios es un principio clave en las políticas de seguridad, permitiendo solo el acceso necesario para realizar una función.",
      },
      {
        question:
          "Los procedimientos de seguridad ¿Qué permiten? Selecciona la opción correcta.",
        options: [
          "Aplicar e implementar las políticas de seguridad que han sido aprobadas por la organización",
          "Evitar la creación de políticas de seguridad",
          "Ignorar las normativas legales vigentes",
          "Fomentar prácticas inseguras",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los procedimientos de seguridad permiten aplicar e implementar eficazmente las políticas de seguridad aprobadas por la organización.",
      },
      {
        question:
          "¿Qué aspecto NO corresponde a aquellos que debe tener en cuenta al momento de implantar un sistema de gestión de seguridad de la información?",
        options: [
          "Contratar los servicios de auditoria externas",
          "Considerar la integridad de la información",
          "Asegurar la confidencialidad de los datos",
          "Mejorar la usabilidad del sistema",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Contratar servicios de auditoría externa no es un aspecto directamente relacionado con la implantación de un sistema de gestión de seguridad de la información.",
      },
      {
        question: "¿Qué es la fiabilidad de un sistema?",
        options: [
          "La probabilidad de que un sistema se comporte tal y como se espera de él",
          "La capacidad de un sistema de ser hackeado fácilmente",
          "La frecuencia con la que un sistema falla",
          "El costo de mantenimiento de un sistema",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La fiabilidad de un sistema se refiere a su probabilidad de funcionar correctamente según lo esperado bajo condiciones especificadas.",
      },
      {
        question: "¿Qué definen las políticas de seguridad?",
        options: [
          "Qué se debe proteger en el sistema",
          "Cómo aprovechar las vulnerabilidades",
          "Cuáles son los beneficios de no seguir las normas",
          "Cómo evitar la implementación de controles",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Las políticas de seguridad definen qué elementos y recursos del sistema deben ser protegidos.",
      },
      {
        question: "¿Cuál es una descripción de seguridad física?",
        options: [
          "Todos aquellos mecanismos – generalmente de prevención y detección – destinados a proteger físicamente cualquier recurso del sistema",
          "Métodos para asegurar la seguridad digital solamente",
          "Protocolos que solo se aplican en entornos virtuales",
          "Prácticas que ignoran la protección física de los recursos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La seguridad física incluye mecanismos de prevención y detección para proteger los recursos del sistema de daños físicos o acceso no autorizado.",
      },
      {
        question:
          "¿De qué depende la implementación de Control de Acceso en un sistema informático?",
        options: [
          "De la Gestión de Cuentas de Usuarios y de la Gestión de Permisos y Privilegios",
          "Del estado del tiempo",
          "De la política económica del país",
          "De la preferencia personal del administrador del sistema",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La implementación de Control de Acceso depende críticamente de la gestión adecuada de cuentas de usuarios y la asignación de permisos y privilegios.",
      },
      {
        question:
          "En relación al Control de Accesos, en los tipos de Acceso Discrecional (DAC), ¿Cómo operan?",
        options: [
          "Los controles de acceso los controla y configura el propietario de cada objeto",
          "Se asignan aleatoriamente",
          "No existen restricciones ni regulaciones",
          "Todos los usuarios tienen el mismo nivel de acceso",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En el Acceso Discrecional (DAC), el propietario de cada objeto tiene la autoridad para controlar y configurar quién puede acceder a dicho objeto.",
      },
      {
        question:
          "En relación al Control de Accesos, en un proceso de Identificacion ¿Cuáles elementos pueden utilizarse para identificar a un Usuario?",
        options: [
          "Algo que el Usuario posee",
          "Algo que el Usuario conoce",
          "Algo que el Usuario es",
          "Algo que el Usuario sabe hacer",
          "Algo que el Usuario desea",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Los elementos de identificación incluyen algo que el usuario posee (como una tarjeta), algo que conoce (como una contraseña), algo que es (como una huella digital), y algo que sabe hacer (como firmar).",
      },
      {
        question:
          "En relación al Control de Accesos, identifica correctamente cuál es el principio de seguridad básico",
        options: [
          "Todo lo que no está expresamente permitido en el sistema debería estar prohibido",
          "Permitir todo a menos que se indique lo contrario",
          "Ignorar las solicitudes de acceso no usuales",
          "No verificar las credenciales",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un principio de seguridad básico en el control de accesos es que todo lo que no está expresamente permitido debería estar prohibido, asegurando así la máxima seguridad.",
      },
      {
        question: "¿Qué se entiende por Defensa Física?",
        options: [
          "Se refiere a las medidas que implican el control de acceso físico a los recursos y las condiciones ambientales en que tienen que ser utilizados",
          "Solo implica el uso de guardias de seguridad",
          "Se limita a la protección contra desastres naturales",
          "Consiste únicamente en el cifrado de datos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Defensa Física incluye medidas para controlar el acceso físico a los recursos y gestionar las condiciones ambientales para su uso seguro y eficiente.",
      },
      {
        question: "Se define como 'Incidentes de seguridad'",
        options: [
          "Cualquier evento, ya sea accidental o intencional, que pueda provocar algún daño en el sistema informático, ocasionando pérdidas a la organización",
          "Solo ataques intencionales por parte de hackers",
          "Eventos que no tienen impacto en la seguridad",
          "Solo errores operativos que no implican ataques externos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un incidente de seguridad puede ser cualquier evento, accidental o intencional, que cause daño al sistema informático y resulte en pérdidas para la organización.",
      },
      {
        question: "Se define como 'incidentes de Seguridad'...",
        options: [
          "La materialización de una Amenaza que provoque pérdidas a la organización",
          "Solo errores menores que no afectan operaciones",
          "Eventos sin consecuencias financieras",
          "Situaciones controladas fácilmente sin pérdidas",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los incidentes de seguridad se definen como la materialización de una amenaza que efectivamente provoca pérdidas a la organización.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones contiene una definición que NO corresponde a una estrategia de protección?",
        options: [
          "Estrategia de protección al nivel logístico",
          "Estrategia de protección a nivel de datos",
          "Estrategia de protección a nivel de aplicación",
          "Estrategia de protección a nivel de red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La 'Estrategia de protección al nivel logístico' no es típicamente considerada una estrategia de protección en el contexto de seguridad informática, que generalmente se centra en niveles como datos, aplicación y red.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones contiene una definición que NO corresponde a una estrategia de protección?",
        options: [
          "Al nivel de comunicación",
          "Al nivel de infraestructura",
          "Al nivel de software",
          "Al nivel de hardware",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una 'Estrategia de protección al nivel de comunicación' es ambigua en este contexto y no se ajusta claramente a las categorías establecidas de estrategias de protección que incluyen infraestructura, software y hardware.",
      },
      {
        question:
          "En relación a los sistemas de detección de intrusiones (IDS), ¿cuáles son sus características? Identifica las 3 (tres) opciones correctas.",
        options: [
          "Son capaces de emitir alertas automáticas",
          "Son soluciones basadas en reglas",
          "Son capaces de detectar y prevenir anomalías y violaciones a las políticas de seguridad",
          "Requieren intervención manual para todas las operaciones",
          "No pueden operar en tiempo real",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Los sistemas de detección de intrusiones son automáticos, basados en reglas, y pueden detectar y prevenir violaciones a la seguridad.",
      },
      {
        question:
          "En relación a los sistemas de detección de intrusiones (IDS), ¿qué tipos existen? Identifica las 2 (dos) opciones.",
        options: [
          "IDS a nivel de equipo",
          "IDS a nivel de red",
          "IDS a nivel de software",
          "IDS a nivel de usuario",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Los tipos principales de sistemas IDS incluyen los que operan a nivel de equipo y a nivel de red.",
      },
      {
        question:
          "La protección conseguida con distintas técnicas y herramientas informáticas, ¿a qué tipo de defensa corresponde?",
        options: [
          "Defensa Lógica",
          "Defensa Física",
          "Defensa Estratégica",
          "Defensa Operativa",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Las técnicas y herramientas informáticas proporcionan una Defensa Lógica al transformar datos en formatos protegidos y gestionar accesos.",
      },
      {
        question:
          "En relación a las herramientas de detección y protección, selecciona la opción correcta acerca de los sistemas de detección de intrusos.",
        options: [
          "Cuentan con un motor de análisis encargado de detectar evidencia de intentos de intrusión",
          "Operan sin ningún tipo de análisis automatizado",
          "Solo pueden detectar intrusos conocidos",
          "Requieren autorización del intruso para detectar",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los sistemas de detección de intrusos incluyen un motor de análisis que automáticamente detecta intentos de intrusión analizando patrones de comportamiento y datos.",
      },
      {
        question:
          "En relación a los tipos de medidas de protección, identifica correctamente cuales son los tipos válidos en la siguiente lista. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Administración",
          "Detección",
          "Recuperación",
          "Minimización/Limitación del impacto",
          "Incremento de amenazas",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las medidas de protección válidas incluyen la administración de la seguridad, la detección de amenazas, la recuperación de daños y la minimización del impacto de las brechas de seguridad.",
      },
      {
        question:
          "August Kerckhoffs, en la Teoría de los Algoritmos Públicos, propone una serie de principios. Identifica correctamente uno de estos principios.",
        options: [
          "La única fortaleza de un Algoritmo Criptográfico debe residir en la clave utilizada",
          "La fortaleza reside en la complejidad del algoritmo",
          "No se deben usar claves en la criptografía",
          "El algoritmo debe ser público y conocido por todos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Según Kerckhoffs, la seguridad de un algoritmo criptográfico no debe depender de su secreto, sino de la secrecía de la clave.",
      },
      {
        question:
          "¿Cómo se conoce a la Ciencia que inventa sistemas de cifrado de la información y criptoanálisis?",
        options: [
          "Criptología",
          "Infoseguridad",
          "Dataciencia",
          "Programación segura",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La Criptología es la ciencia que estudia el cifrado de la información y el criptoanálisis.",
      },
      {
        question:
          "¿Cómo se conoce a la Ciencia que se ocupa de estudiar herramientas y técnicas para vulnerar a un sistema criptográfico?",
        options: [
          "Criptoanálisis",
          "Criptografía",
          "Análisis de Seguridad",
          "Hacking Ético",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El Criptoanálisis es la disciplina que estudia cómo vulnerar los sistemas criptográficos para encontrar debilidades.",
      },
      {
        question:
          "¿Cómo se denominan los algoritmos de cifrado, donde los símbolos cambian su orden dentro del texto cifrado?",
        options: [
          "Algoritmos de Transposición",
          "Algoritmos de Sustitución",
          "Algoritmos de Encriptación",
          "Algoritmos de Compresión",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los Algoritmos de Transposición son aquellos en los cuales los símbolos del texto original cambian de posición.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones describe correctamente a la criptografía?",
        options: [
          "Es la ciencia que se encarga de la protección de datos mediante la transformación de los mismos a un formato ilegible",
          "Es la técnica de hackear sistemas para obtener datos",
          "Es el estudio de cómo evitar el uso de cualquier forma de cifrado",
          "Es un método para transmitir mensajes abiertamente sin protección",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La criptografía es la ciencia que se enfoca en proteger datos transformándolos en formatos que no pueden ser leídos sin una clave específica.",
      },
      {
        question:
          "En relación a los sistemas de detección de intrusiones (IDS) ¿Cuáles son sus características? Identifica las 3(tres) opciones correctas.",
        options: [
          "Son capaces de emitir alertas automáticas.",
          "Son soluciones basadas en reglas.",
          "Son capaces de detectar y prevenir anomalías y violaciones a las políticas de seguridad.",
          "Son difíciles de configurar.",
          "Solo funcionan en grandes redes.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Las características clave de los sistemas de detección de intrusiones incluyen la capacidad de emitir alertas automáticas, basarse en reglas, y detectar y prevenir anomalías y violaciones a las políticas de seguridad.",
      },
      {
        question:
          "En relación a los sistemas de detección de intrusiones (IDS) ¿Qué tipos existen? Identifica las 2 (dos) opciones",
        options: [
          "IDS a nivel de equipo",
          "IDS a nivel de red",
          "IDS basados en firmas",
          "IDS híbridos",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Existen IDS a nivel de equipo y a nivel de red, cada uno enfocado en detectar intrusiones en diferentes niveles de la infraestructura de TI.",
      },
      {
        question:
          "La protección conseguida con distintas técnicas y herramientas informáticas, ¿A que tipo de defensa corresponde? Seleccione la opción correcta.",
        options: [
          "Defensa Lógica",
          "Defensa Física",
          "Defensa Perimetral",
          "Defensa Administrativa",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La defensa lograda con técnicas y herramientas informáticas se considera una defensa lógica, ya que protege los sistemas de información a nivel lógico.",
      },
      {
        question:
          "En relación a las herramientas de detección y protección, selecciona la opción correcta acerca de los sistemas de detección de intrusos.",
        options: [
          "Cuentan con un motor de análisis encargado de detectar evidencia de intentos de intrusión.",
          "Se basan únicamente en patrones predefinidos.",
          "No requieren actualizaciones constantes.",
          "Son completamente automáticos sin intervención humana.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los sistemas de detección de intrusos cuentan con un motor de análisis que detecta evidencias de intentos de intrusión, lo que es fundamental para su efectividad.",
      },
      {
        question:
          "En relación a los tipos de medidas de protección, identifica correctamente cuales son los tipos validos en la siguiente lista. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Administración",
          "Detección",
          "Recuperación",
          "Minimización/Limitación del impacto",
          "Prevención",
          "Auditoría",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las medidas de protección válidas incluyen la administración, detección, recuperación y minimización/limitación del impacto, cada una de las cuales juega un papel crucial en la seguridad informática.",
      },
      {
        question:
          "August Kerckhoffs, en la Teoría de los Algoritmos Públicos, propone una serie de principios. Identifica correctamente uno de estos principios. Selecciona la opción correcta.",
        options: [
          "La única fortaleza de un Algoritmo Criptográfico debe residir en la clave utilizada.",
          "El algoritmo debe ser mantenido en secreto absoluto.",
          "La seguridad del sistema depende de la complejidad del algoritmo.",
          "Solo las organizaciones gubernamentales deben usar criptografía avanzada.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los principios de Kerckhoffs es que la única fortaleza de un algoritmo criptográfico debe residir en la clave utilizada, no en el secreto del algoritmo.",
      },
      {
        question:
          "¿Cómo se conoce a la Ciencia que inventa sistemas de cifrado de la información y criptoanálisis?",
        options: [
          "Criptología",
          "Criptoanálisis",
          "Criptografía",
          "Esteganografía",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La ciencia que inventa sistemas de cifrado de la información y criptoanálisis se conoce como criptología.",
      },
      {
        question:
          "¿Cómo se conoce a la Ciencia que se ocupa de estudiar herramientas y técnicas para vulnerar a un sistema criptográfico?",
        options: [
          "Criptoanálisis",
          "Criptografía",
          "Criptología",
          "Seguridad informática",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La ciencia que estudia herramientas y técnicas para vulnerar a un sistema criptográfico se llama criptoanálisis.",
      },
      {
        question:
          "¿Cómo se denominan los algoritmos de cifrado, adonde los símbolos cambian su orden dentro del texto cifrado? Selecciona la opcion correcta.",
        options: [
          "Algoritmos de Transposición",
          "Algoritmos de Sustitución",
          "Algoritmos Asimétricos",
          "Algoritmos Simétricos",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los algoritmos de cifrado donde los símbolos cambian su orden dentro del texto cifrado se denominan algoritmos de transposición.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones describe correctamente a la criptografía?",
        options: [
          "Es la ciencia que se encarga de la protección de datos mediante la transformación de los mismos a un formato ilegible.",
          "Es la técnica de esconder información dentro de otro medio.",
          "Es el estudio de las contraseñas y claves de seguridad.",
          "Es el análisis de vulnerabilidades de los sistemas de información.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La criptografía es la ciencia que se encarga de la protección de datos mediante la transformación de los mismos a un formato ilegible.",
      },
      {
        question:
          "De las siguientes opciones. ¿Cual es un método de criptografía visual?",
        options: [
          "Grafología",
          "Esteganografía",
          "Cifrado de César",
          "Cifrado Vigenère",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La grafología es un método de criptografía visual, utilizado para analizar y autenticar documentos manuscritos.",
      },
      {
        question:
          "De las siguientes opciones, ¿Cuál es un método de criptografía visual?",
        options: [
          "Imagen Partida",
          "Esquema de Vigenère",
          "Cifrado RSA",
          "Cifrado AES",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La imagen partida es un método de criptografía visual, donde una imagen se divide en partes que deben ser reunidas para obtener el mensaje completo.",
      },
      {
        question: "En Criptografía ¿Qué se entiende por confusión?",
        options: [
          "Es la acción de reducir la relación entre el texto claro y el texto cifrado dificultando el análisis de patrones estadísticos.",
          "Es el proceso de mezclar los datos en una forma no predecible.",
          "Es el uso de múltiples claves para encriptar datos.",
          "Es la técnica de esconder información dentro de otro medio.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía, la confusión se refiere a la acción de reducir la relación entre el texto claro y el texto cifrado, dificultando el análisis de patrones estadísticos.",
      },
      {
        question:
          "¿En que se basa la robustez de un sistema criptográfico? Seleccione la opción correcta.",
        options: [
          "En la clave criptográfica utilizada.",
          "En la complejidad del algoritmo.",
          "En el tamaño del texto cifrado.",
          "En la cantidad de usuarios.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La robustez de un sistema criptográfico se basa en la clave criptográfica utilizada, ya que esta es la base para la seguridad del cifrado.",
      },
      {
        question:
          "En relación a los algoritmos de sustitución monoalfabética, identifica la afirmación correcta:",
        options: [
          "Cada uno de los símbolos se representa con otro símbolo en una relación de uno a uno.",
          "Los símbolos se cambian en bloques de tamaño variable.",
          "La clave cambia con cada símbolo cifrado.",
          "Se utilizan múltiples alfabetos para la sustitución.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En los algoritmos de sustitución monoalfabética, cada símbolo del texto claro se representa con otro símbolo en una relación de uno a uno.",
      },
      {
        question:
          "En relación a los algoritmos de Transposición, ¿Qué añaden al texto cifrado? Seleccione la opción correcta:",
        options: ["Difusión.", "Confusión.", "Redundancia.", "Integridad."],
        answer: [0],
        multi: false,
        explanation:
          "Los algoritmos de transposición añaden difusión al texto cifrado, que se refiere a la dispersión de la información del texto claro en el texto cifrado.",
      },
      {
        question:
          "Identifica correctamente una de las técnicas de criptoanálisis entre las siguientes opciones.",
        options: [
          "Criptoanálisis lineal",
          "Criptoanálisis diferencial",
          "Criptoanálisis algebraico",
          "Criptoanálisis estadístico",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El criptoanálisis lineal es una técnica utilizada para analizar y vulnerar sistemas criptográficos.",
      },
      {
        question:
          "La teoría de los algoritmos públicos definida por Auguste Kerckhoffs define una serie de principios. ¿Cuáles son? Identifica la opción correcta.",
        options: [
          "La fortaleza de un algoritmo criptográfico no debe estar basada en el conocimiento de su diseño.",
          "El algoritmo debe ser mantenido en secreto absoluto.",
          "La seguridad del sistema depende de la complejidad del algoritmo.",
          "Solo las organizaciones gubernamentales deben usar criptografía avanzada.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los principios de Kerckhoffs es que la fortaleza de un algoritmo criptográfico no debe estar basada en el conocimiento de su diseño, sino en la clave utilizada.",
      },
      {
        question: "¿Qué es el criptoanálisis? Selecciona la opción correcta.",
        options: [
          "Es la ciencia que se ocupa de estudiar herramienta y técnicas para vulnerar a un sistema criptográfico.",
          "Es el estudio de la creación de algoritmos criptográficos.",
          "Es la técnica de ocultar información dentro de otros datos.",
          "Es el análisis de la eficiencia de los sistemas criptográficos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El criptoanálisis es la ciencia que se ocupa de estudiar herramientas y técnicas para vulnerar a un sistema criptográfico.",
      },
      {
        question: "¿Qué es un criptograma? Selecciona la opción correcta.",
        options: [
          "Es el texto modificado producido por un Criptosistema.",
          "Es la clave utilizada para cifrar un mensaje.",
          "Es el mensaje original antes de ser cifrado.",
          "Es el algoritmo utilizado para cifrar el mensaje.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un criptograma es el texto modificado producido por un criptosistema, resultante del proceso de cifrado.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones contiene una afirmación correcta acerca de los algoritmos de claves simétricas?",
        options: [
          "Son excelentes para cifrar datos de manera rápida y segura. Sin embargo, su punto débil reside en que el remitente y el destinatario deben intercambiar una clave secreta antes de intercambiar datos.",
          "Son lentos pero extremadamente seguros.",
          "Utilizan claves diferentes para cifrar y descifrar.",
          "No requieren intercambio previo de claves entre remitente y destinatario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los algoritmos de claves simétricas son rápidos y seguros, pero su debilidad está en la necesidad de que el remitente y el destinatario intercambien una clave secreta antes de la comunicación.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones contiene una afirmación correcta sobre el algoritmo DES?",
        options: [
          "Es un sistema de clave privado tanto de cifrado como de descifrado.",
          "Utiliza una clave pública para el cifrado y una privada para el descifrado.",
          "Es un algoritmo de clave asimétrica.",
          "Se basa en la factorización de grandes números primos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El algoritmo DES (Data Encryption Standard) utiliza una clave privada tanto para cifrar como para descifrar, siendo un sistema de clave simétrica.",
      },
      {
        question:
          "¿Cuál es el principal problema que presenta la criptografía simétrica? Identifica la opción correcta:",
        options: [
          "El intercambio de la clave de cifrado a través de un canal seguro.",
          "La longitud de las claves utilizadas.",
          "La complejidad de los algoritmos.",
          "La velocidad de cifrado y descifrado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El principal problema de la criptografía simétrica es el intercambio seguro de la clave de cifrado, ya que ambas partes deben conocer y mantener en secreto la misma clave.",
      },
      {
        question:
          "En criptografía Simétrica, las claves públicas y privadas de cada usuario están relacionadas matemáticamente entre sí.",
        options: ["Verdadero", "Falso"],
        answer: [1],
        multi: false,
        explanation:
          "En criptografía simétrica, solo se utiliza una clave para el cifrado y descifrado, por lo que no hay claves públicas y privadas relacionadas matemáticamente.",
      },
      {
        question:
          "En criptografía Simétrica ¿Cuántas claves se emplean para el cifrado y descifrado?",
        options: [
          "Una sola clave tanto para el cifrado como para el descifrado.",
          "Dos claves diferentes: una para cifrar y otra para descifrar.",
          "Tres claves: una para cifrar, otra para descifrar y una clave de sesión.",
          "No se utilizan claves en la criptografía simétrica.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la criptografía simétrica, se emplea una sola clave tanto para el cifrado como para el descifrado del mensaje.",
      },
      {
        question:
          "En relación a la criptografía simétrica, identifica cual afirmación es correcta:",
        options: [
          "Toda la seguridad del Sistema depende de la confidencialidad de la Clave.",
          "Se utiliza una clave pública para el cifrado y una privada para el descifrado.",
          "Las claves utilizadas son mucho más largas que en la criptografía asimétrica.",
          "El algoritmo es público y no necesita mantener ninguna parte en secreto.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía simétrica, la seguridad del sistema depende completamente de la confidencialidad de la clave utilizada.",
      },
      {
        question:
          "En relación a la criptografía simétrica, identifica cual afirmación es correcta:",
        options: [
          "Se emplea la misma clave para cifrar y descifrar.",
          "Utiliza dos claves diferentes: una para cifrar y otra para descifrar.",
          "Requiere más tiempo de procesamiento que la criptografía asimétrica.",
          "No depende de la confidencialidad de la clave.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía simétrica, se utiliza la misma clave para cifrar y descifrar, lo que es una de sus principales características.",
      },
      {
        question:
          "Identifica correctamente una de las ventajas de la Criptografía simétrica:",
        options: [
          "Son algoritmos muy rápidos y eficientes desde el punto de vista computacional.",
          "No requieren intercambio previo de claves.",
          "Son más seguros que los algoritmos de clave pública.",
          "Permiten una encriptación sin claves.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las ventajas de la criptografía simétrica es que sus algoritmos son muy rápidos y eficientes desde el punto de vista computacional.",
      },
      {
        question:
          "Identifica correctamente una de las ventajas de la Criptografía simétrica. Selecciona la opción correcta:",
        options: [
          "Requieren de un reducido tiempo de cálculo para realizar el cifrado y descifrado de los mensajes.",
          "No dependen de la confidencialidad de la clave.",
          "Utilizan dos claves diferentes para mayor seguridad.",
          "Son completamente invulnerables a ataques criptográficos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las ventajas de la criptografía simétrica es que requiere de un reducido tiempo de cálculo para realizar el cifrado y descifrado de los mensajes.",
      },
      {
        question:
          "Identifica correctamente una de las propiedades que debe cumplir una función resumen:",
        options: [
          "No es factible encontrar dos mensajes originales que generen la misma huella digital.",
          "Es fácilmente reversible.",
          "Genera una huella digital de longitud variable.",
          "Utiliza una clave secreta para generar el resumen.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una función resumen debe cumplir con la propiedad de que no sea factible encontrar dos mensajes originales que generen la misma huella digital, asegurando la integridad y unicidad del resumen.",
      },
      {
        question:
          "¿Qué es una función resumen o hash? Seleccione la opción correcta.",
        options: [
          "Es un algoritmo que realiza una serie de operaciones matemáticas sobre el mensaje original para obtener un valor de tamaño fijo.",
          "Es un método para cifrar mensajes usando una clave secreta.",
          "Es un proceso para intercambiar claves de manera segura.",
          "Es un algoritmo que garantiza la confidencialidad de los datos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una función resumen o hash es un algoritmo que realiza una serie de operaciones matemáticas sobre el mensaje original para obtener un valor de tamaño fijo, utilizado para asegurar la integridad de los datos.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones es una afirmación correcta sobre firma digital?",
        options: [
          "Es un medio para que los creadores de un mensaje, archivo y otra información codificada digitalmente vinculen su identidad a la información.",
          "Es un método para cifrar datos utilizando una clave pública.",
          "Es un proceso de autenticar usuarios en una red.",
          "Es una técnica para ocultar información dentro de otro mensaje.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La firma digital es un medio para que los creadores de un mensaje, archivo y otra información codificada digitalmente vinculen su identidad a la información, asegurando su autenticidad y no repudio.",
      },
      {
        question:
          "¿Cuál es el principal problema que representa la Criptografía Asimétrica? Indica la opción correcta.",
        options: [
          "Los algoritmos son lentos y consumen recursos computacionales.",
          "Es difícil intercambiar las claves de manera segura.",
          "Las claves son demasiado cortas para garantizar la seguridad.",
          "No proporciona autenticación.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El principal problema de la criptografía asimétrica es que los algoritmos son lentos y consumen muchos recursos computacionales, lo que puede ser un inconveniente en ciertas aplicaciones.",
      },
      {
        question:
          "En Criptografía Asimétrica ¿Cuántas claves se emplean para el cifrado y descifrado?",
        options: [
          "Una clave para cifrado y otra clave distinta para el descifrado.",
          "Una sola clave para ambos procesos.",
          "Dos claves idénticas para cifrar y descifrar.",
          "Ninguna clave, se utilizan contraseñas en su lugar.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía asimétrica se emplean dos claves diferentes: una para cifrar y otra distinta para descifrar, lo que permite asegurar la comunicación sin necesidad de compartir una clave secreta.",
      },
      {
        question:
          "El principal problema de los criptosistemas asimétricos es que los algoritmos son lentos y consumen recursos computacionales.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Es cierto que el principal problema de los criptosistemas asimétricos es que los algoritmos son lentos y consumen recursos computacionales, lo que puede limitar su uso en ciertas aplicaciones.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones indica un aspecto importante en la criptografía asimétrica?",
        options: [
          "La longitud de las claves.",
          "La velocidad de los algoritmos.",
          "La simplicidad de las operaciones matemáticas.",
          "La necesidad de una única clave para cifrado y descifrado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía asimétrica, la longitud de las claves es un aspecto importante, ya que una mayor longitud generalmente proporciona una mayor seguridad.",
      },
      {
        question: "¿Cuál es la utilidad de un certificado digital?",
        options: [
          "Demostrar que una clave pública pertenece a un usuario concreto.",
          "Cifrar datos utilizando una clave secreta.",
          "Autenticar a usuarios en una red privada.",
          "Generar claves de cifrado automáticamente.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La utilidad de un certificado digital es demostrar que una clave pública pertenece a un usuario concreto, asegurando la autenticidad y la confianza en la comunicación.",
      },
      {
        question:
          "En una Infraestructura de clave pública (KPI) ¿Cuál elemento está constituido por una clave pública y un identificador firmados digitalmente por una autoridad de certificación? Seleccione la opción correcta.",
        options: [
          "Certificado digital.",
          "Clave privada.",
          "Token de seguridad.",
          "Contraseña.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una Infraestructura de Clave Pública (KPI), un certificado digital está constituido por una clave pública y un identificador firmados digitalmente por una autoridad de certificación.",
      },
      {
        question:
          "Identifica correctamente uno de los campos de un certificado digital, entre las siguientes opciones.",
        options: [
          "Periodo de validez del certificado digital.",
          "Clave privada del usuario.",
          "Dirección IP del usuario.",
          "Historial de navegación del usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los campos de un certificado digital es el periodo de validez del certificado digital, que indica el tiempo durante el cual el certificado es considerado válido y confiable.",
      },
      {
        question:
          "Identifica correctamente uno de los campos de un certificado digital, entre las siguientes opciones.",
        options: [
          "Nombre común (CN).",
          "Clave privada del usuario.",
          "Dirección física del usuario.",
          "Número de teléfono del usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El nombre común (CN) es uno de los campos de un certificado digital, que identifica al propietario del certificado de manera única.",
      },
      {
        question:
          "¿Cuál de las siguientes opciones tiene las siglas del protocolo que da seguridad a las transacciones por internet?",
        options: ["SSL", "HTTP", "FTP", "SMTP"],
        answer: [0],
        multi: false,
        explanation:
          "SSL (Secure Sockets Layer) es el protocolo que proporciona seguridad a las transacciones por internet mediante el cifrado de los datos transmitidos entre el servidor y el cliente.",
      },
      {
        question:
          "¿Cuáles servicios de seguridad ofrece una infraestructura de clave pública (KPI)? Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Confidencialidad",
          "Integridad",
          "No repudio",
          "Autenticación",
          "Disponibilidad",
          "Encriptación",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Una infraestructura de clave pública (KPI) ofrece servicios de confidencialidad, integridad, no repudio y autenticación, todos ellos esenciales para asegurar la comunicación y el intercambio de datos.",
      },
      {
        question:
          "¿Cómo está constituida una Infraestructura de Clave Publica (KPI)?",
        options: [
          "Está constituida por Autoridades de Certificación, Autoridades de Registro y tecnología de certificados digitales.",
          "Está compuesta únicamente por servidores de claves.",
          "Está formada por usuarios y sus claves privadas.",
          "Consiste solo en un repositorio central de claves.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una Infraestructura de Clave Pública (KPI) está constituida por Autoridades de Certificación, Autoridades de Registro y tecnología de certificados digitales, todos ellos necesarios para gestionar y distribuir las claves públicas de manera segura.",
      },
      {
        question:
          "En una infraestructura de clave pública (PKI) ¿Quién garantiza que la clave publica enviada por un determinado sujeto se corresponde con dicho sujeto? Seleccione la opción correcta.",
        options: [
          "La autoridad de certificación (AC) que actúa como tercera parte de confianza.",
          "El usuario que envía la clave.",
          "El destinatario de la clave.",
          "El servidor de correo.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En una infraestructura de clave pública (PKI), la autoridad de certificación (AC) actúa como tercera parte de confianza para garantizar que la clave pública enviada por un sujeto se corresponde efectivamente con dicho sujeto.",
      },
      {
        question:
          "Identifica correctamente una de las funciones de una Autoridad de Certificación, entre las siguientes opciones:",
        options: [
          "Gestión del Directorio y distribución de las Claves.",
          "Generación de claves privadas para usuarios.",
          "Auditoría de sistemas de información.",
          "Intercambio de claves de cifrado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las funciones de una Autoridad de Certificación es la gestión del Directorio y la distribución de las claves, asegurando que las claves públicas sean válidas y estén correctamente asociadas a sus propietarios.",
      },

      {
        question:
          "Identifica correctamente uno de los campos de un certificado digital, entre las siguientes opciones.",
        options: [
          "Nombre común (CN).",
          "Clave privada del usuario.",
          "Dirección física del usuario.",
          "Número de teléfono del usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El nombre común (CN) es uno de los campos de un certificado digital, que identifica al propietario del certificado de manera única.",
      },
      {
        question:
          "En firma digital, para enviar un mensaje cifrado, el origen cifra el texto en claro con la clave pública del destinatario.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Es verdadero que para enviar un mensaje cifrado, el origen cifra el texto en claro con la clave pública del destinatario, asegurando que solo el destinatario pueda descifrarlo con su clave privada.",
      },
      {
        question:
          "¿Cuáles son las propiedades que debe cumplir una firma digital para considerarse equiparable a la firma manuscrita? Identifica las 3 (tres) opciones correctas.",
        options: [
          "Va ligada indisolublemente al mensaje",
          "Solo puede ser generada por su legítimo titular",
          "Es públicamente verificable.",
          "Es fácilmente editable.",
          "No requiere autenticación.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Una firma digital debe estar ligada indisolublemente al mensaje, solo puede ser generada por su legítimo titular y debe ser públicamente verificable para ser equiparable a una firma manuscrita.",
      },
      {
        question:
          "Identifica de manera correcta, cuales fases intervienen en un proceso de obtención de una Firma Electrónica. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Cifrado del resumen de clave privada en origen.",
          "Envío del texto claro con la firma adjunta al destino.",
          "Generación del Resumen del texto en claro en origen.",
          "Generación del resumen del mensaje en destino.",
          "Envío del resumen cifrado únicamente.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las fases en el proceso de obtención de una firma electrónica incluyen el cifrado del resumen con la clave privada en origen, el envío del texto claro con la firma adjunta al destino, la generación del resumen del texto en claro en origen y la generación del resumen del mensaje en destino.",
      },
      {
        question:
          "Identifica de manera correcta, cuales fases intervienen en un proceso de autenticación de una firma electrónica. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "El receptor compara el Resumen generado por él, con el Resumen descifrado.",
          "El receptor descifra el Resumen cifrado asociado al mensaje recibido, utilizando la Clave Pública del origen.",
          "Si ambos resúmenes coinciden, el origen es auténtico y el mensaje es íntegro.",
          "El receptor genera un resumen del mensaje recibido.",
          "El receptor utiliza su clave privada para generar el resumen.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las fases en el proceso de autenticación de una firma electrónica incluyen que el receptor descifre el resumen cifrado asociado al mensaje con la clave pública del origen, genere un resumen del mensaje recibido, compare ambos resúmenes y determine la autenticidad del origen y la integridad del mensaje.",
      },
      {
        question:
          "Los estándares de criptografía de clave pública (#PKCS), ¿Qué fin tienen? Identifica la opción correcta.",
        options: [
          "Impulsar el desarrollo de la firma electrónica, la criptografía de clave pública y los servicios de certificación electrónicos.",
          "Establecer métodos para el cifrado de datos de forma simétrica.",
          "Proveer un marco para la gestión de contraseñas seguras.",
          "Definir algoritmos de cifrado de clave privada.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los estándares PKCS (Public-Key Cryptography Standards) tienen como fin impulsar el desarrollo de la firma electrónica, la criptografía de clave pública y los servicios de certificación electrónicos.",
      },
      {
        question:
          "¿Qué involucra un proceso de autenticación? Identifica las dos (2) opciones correctas.",
        options: [
          "Verificar la integridad de los mensajes recibidos de un interlocutor.",
          "Verificar la identidad de un interlocutor.",
          "Cifrar los mensajes con una clave pública.",
          "Generar una firma digital para cada mensaje enviado.",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Un proceso de autenticación involucra verificar la integridad de los mensajes recibidos y verificar la identidad de un interlocutor, asegurando que la comunicación es segura y confiable.",
      },
      {
        question:
          "Dentro de los servicios que brinda Internet, nos encontramos con:",
        options: [
          "La web o 'WWW' (World Wide Web).",
          "El correo físico.",
          "Los servicios de mensajería tradicional.",
          "El transporte de bienes y productos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los servicios que brinda Internet es la web o 'WWW' (World Wide Web), que permite el acceso y la navegación de contenido en línea.",
      },
      {
        question:
          "Internet utiliza en su red de ordenadores y redes un protocolo particular llamado:",
        options: [
          "TCP/IP (Transmission Control Protocol / Internet Protocol).",
          "HTTP (HyperText Transfer Protocol).",
          "FTP (File Transfer Protocol).",
          "SMTP (Simple Mail Transfer Protocol).",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Internet utiliza el protocolo TCP/IP (Transmission Control Protocol / Internet Protocol) para la comunicación y transferencia de datos en su red de ordenadores y redes.",
      },
      {
        question:
          "En razón de la escasez de los números asignados en versión 4 (IPv4), el mismo será reemplazado por otra versión que permitirá mayor conectividad de manera ilimitada, se lo conoce como:",
        options: [
          "IPv6, de 128 bits y admite números y letras.",
          "IPv5, de 64 bits y admite solo números.",
          "IPv7, de 256 bits y admite números y letras.",
          "IPv3, de 32 bits y admite solo letras.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "IPv6, de 128 bits, es la versión que reemplazará a IPv4, permitiendo mayor conectividad de manera ilimitada y admitiendo tanto números como letras.",
      },
      {
        question:
          "Dentro de la estructura TLD, se encuentran dominios que operan bajo algunas de las siguientes direcciones, seleccione 4 de ellas: Seleccione 4 (cuatro) respuesta correcta.",
        options: [".Edu.", ".Org.", ".Com.", ".Net.", ".Biz.", ".Info."],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Dentro de la estructura de TLD (Top-Level Domains), se encuentran dominios como .Edu, .Org, .Com y .Net, que son utilizados para diferentes propósitos en la red.",
      },
      {
        question:
          "Dentro de la Seguridad de la Información, se deben preservar tres pilares o características importantes:",
        options: [
          "Confidencialidad, Integridad y Disponibilidad.",
          "Velocidad, Eficiencia y Seguridad.",
          "Redundancia, Escalabilidad y Compatibilidad.",
          "Accesibilidad, Transparencia y Flexibilidad.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la Seguridad de la Información, los tres pilares fundamentales son la Confidencialidad, la Integridad y la Disponibilidad, que aseguran la protección de los datos contra accesos no autorizados, modificaciones indebidas y la disponibilidad de la información cuando se necesita.",
      },
      {
        question:
          "Identifica correctamente uno de los campos de un certificado digital, entre las siguientes opciones.",
        options: [
          "Nombre común (CN).",
          "Clave privada del usuario.",
          "Dirección física del usuario.",
          "Número de teléfono del usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El nombre común (CN) es uno de los campos de un certificado digital, que identifica al propietario del certificado de manera única.",
      },
      {
        question:
          "En firma digital, para enviar un mensaje cifrado, el origen cifra el texto en claro con la clave pública del destinatario.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Es verdadero que para enviar un mensaje cifrado, el origen cifra el texto en claro con la clave pública del destinatario, asegurando que solo el destinatario pueda descifrarlo con su clave privada.",
      },
      {
        question:
          "¿Cuáles son las propiedades que debe cumplir una firma digital para considerarse equiparable a la firma manuscrita? Identifica las 3 (tres) opciones correctas.",
        options: [
          "Va ligada indisolublemente al mensaje",
          "Solo puede ser generada por su legítimo titular",
          "Es públicamente verificable.",
          "Es fácilmente editable.",
          "No requiere autenticación.",
        ],
        answer: [0, 1, 2],
        multi: true,
        explanation:
          "Una firma digital debe estar ligada indisolublemente al mensaje, solo puede ser generada por su legítimo titular y debe ser públicamente verificable para ser equiparable a una firma manuscrita.",
      },
      {
        question:
          "Identifica de manera correcta, cuales fases intervienen en un proceso de obtención de una Firma Electrónica. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "Cifrado del resumen de clave privada en origen.",
          "Envío del texto claro con la firma adjunta al destino.",
          "Generación del Resumen del texto en claro en origen.",
          "Generación del resumen del mensaje en destino.",
          "Envío del resumen cifrado únicamente.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las fases en el proceso de obtención de una firma electrónica incluyen el cifrado del resumen con la clave privada en origen, el envío del texto claro con la firma adjunta al destino, la generación del resumen del texto en claro en origen y la generación del resumen del mensaje en destino.",
      },
      {
        question:
          "Identifica de manera correcta, cuales fases intervienen en un proceso de autenticación de una firma electrónica. Selecciona las 4 (cuatro) opciones correctas.",
        options: [
          "El receptor compara el Resumen generado por él, con el Resumen descifrado.",
          "El receptor descifra el Resumen cifrado asociado al mensaje recibido, utilizando la Clave Pública del origen.",
          "Si ambos resúmenes coinciden, el origen es auténtico y el mensaje es íntegro.",
          "El receptor genera un resumen del mensaje recibido.",
          "El receptor utiliza su clave privada para generar el resumen.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las fases en el proceso de autenticación de una firma electrónica incluyen que el receptor descifre el resumen cifrado asociado al mensaje con la clave pública del origen, genere un resumen del mensaje recibido, compare ambos resúmenes y determine la autenticidad del origen y la integridad del mensaje.",
      },
      {
        question:
          "Los estándares de criptografía de clave pública (#PKCS), ¿Qué fin tienen? Identifica la opción correcta.",
        options: [
          "Impulsar el desarrollo de la firma electrónica, la criptografía de clave pública y los servicios de certificación electrónicos.",
          "Establecer métodos para el cifrado de datos de forma simétrica.",
          "Proveer un marco para la gestión de contraseñas seguras.",
          "Definir algoritmos de cifrado de clave privada.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los estándares PKCS (Public-Key Cryptography Standards) tienen como fin impulsar el desarrollo de la firma electrónica, la criptografía de clave pública y los servicios de certificación electrónicos.",
      },
      {
        question:
          "¿Qué involucra un proceso de autenticación? Identifica las dos (2) opciones correctas.",
        options: [
          "Verificar la integridad de los mensajes recibidos de un interlocutor.",
          "Verificar la identidad de un interlocutor.",
          "Cifrar los mensajes con una clave pública.",
          "Generar una firma digital para cada mensaje enviado.",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Un proceso de autenticación involucra verificar la integridad de los mensajes recibidos y verificar la identidad de un interlocutor, asegurando que la comunicación es segura y confiable.",
      },
      {
        question:
          "Dentro de los servicios que brinda Internet, nos encontramos con:",
        options: [
          "La web o 'WWW' (World Wide Web).",
          "El correo físico.",
          "Los servicios de mensajería tradicional.",
          "El transporte de bienes y productos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los servicios que brinda Internet es la web o 'WWW' (World Wide Web), que permite el acceso y la navegación de contenido en línea.",
      },
      {
        question:
          "Internet utiliza en su red de ordenadores y redes un protocolo particular llamado:",
        options: [
          "TCP/IP (Transmission Control Protocol / Internet Protocol).",
          "HTTP (HyperText Transfer Protocol).",
          "FTP (File Transfer Protocol).",
          "SMTP (Simple Mail Transfer Protocol).",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Internet utiliza el protocolo TCP/IP (Transmission Control Protocol / Internet Protocol) para la comunicación y transferencia de datos en su red de ordenadores y redes.",
      },
      {
        question:
          "En razón de la escasez de los números asignados en versión 4 (IPv4), el mismo será reemplazado por otra versión que permitirá mayor conectividad de manera ilimitada, se lo conoce como:",
        options: [
          "IPv6, de 128 bits y admite números y letras.",
          "IPv5, de 64 bits y admite solo números.",
          "IPv7, de 256 bits y admite números y letras.",
          "IPv3, de 32 bits y admite solo letras.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "IPv6, de 128 bits, es la versión que reemplazará a IPv4, permitiendo mayor conectividad de manera ilimitada y admitiendo tanto números como letras.",
      },
      {
        question:
          "Dentro de la estructura TLD, se encuentran dominios que operan bajo algunas de las siguientes direcciones, seleccione 4 de ellas: Seleccione 4 (cuatro) respuesta correcta.",
        options: [".Edu.", ".Org.", ".Com.", ".Net.", ".Biz.", ".Info."],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Dentro de la estructura de TLD (Top-Level Domains), se encuentran dominios como .Edu, .Org, .Com y .Net, que son utilizados para diferentes propósitos en la red.",
      },
      {
        question:
          "Dentro de la Seguridad de la Información, se deben preservar tres pilares o características importantes:",
        options: [
          "Confidencialidad, Integridad y Disponibilidad.",
          "Velocidad, Eficiencia y Seguridad.",
          "Redundancia, Escalabilidad y Compatibilidad.",
          "Accesibilidad, Transparencia y Flexibilidad.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la Seguridad de la Información, los tres pilares fundamentales son la Confidencialidad, la Integridad y la Disponibilidad, que aseguran la protección de los datos contra accesos no autorizados, modificaciones indebidas y la disponibilidad de la información cuando se necesita.",
      },
      {
        question:
          "Los procedimientos de manejo o control de la Información deben confeccionarse en base a ciertos elementos, entre algunos de ellos podemos nombrar 4: Seleccione la respuesta correcta.",
        options: [
          "Sistemas informáticos, redes, computación móvil, correo.",
          "Servidores, dispositivos móviles, aplicaciones, usuarios.",
          "Bases de datos, sistemas operativos, software de seguridad, empleados.",
          "Hardware, redes sociales, dispositivos personales, administración.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los procedimientos de manejo o control de la información deben incluir elementos como sistemas informáticos, redes, computación móvil y correo para asegurar una gestión integral y segura.",
      },
      {
        question:
          "Dentro del Inventario de activos que es necesario para garantizar lo más valioso de la empresa, se debe tener presente los siguientes activos asociados a sistemas de información:",
        options: [
          "Recursos de información, recursos de software, activos físicos y servicios.",
          "Equipos de oficina, personal de TI, aplicaciones móviles y políticas de seguridad.",
          "Redes, dispositivos de almacenamiento, bases de datos y documentación.",
          "Hardware, software, procesos de negocio y infraestructura.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Para garantizar lo más valioso de la empresa, el inventario de activos debe incluir recursos de información, recursos de software, activos físicos y servicios asociados a los sistemas de información.",
      },
      {
        question:
          "Dentro de los recursos de la empresa y que brindan un gran aporte al momento de brindar mayor seguridad en la información, se encuentran los siguientes:",
        options: [
          "Información, procesos, sistemas y redes.",
          "Hardware, software, usuarios y políticas.",
          "Equipos, datos, redes y usuarios.",
          "Aplicaciones, dispositivos, procedimientos y empleados.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los recursos de la empresa que brindan mayor seguridad en la información incluyen información, procesos, sistemas y redes, ya que todos estos elementos contribuyen a proteger los datos y la infraestructura de TI.",
      },
      {
        question:
          "Dentro de los delitos informáticos, se pueden identificar dos tipologías, éstos son:",
        options: [
          "Como instrumento y como objeto del delito.",
          "Delitos personales y corporativos.",
          "Delitos internos y externos.",
          "Delitos físicos y digitales.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los delitos informáticos se pueden clasificar en dos tipologías: como instrumento, donde se utiliza la tecnología para cometer el delito, y como objeto, donde el delito se dirige contra sistemas o datos informáticos.",
      },
      {
        question:
          "Al momento de llegar a la escena del crimen, es importante cumplir con un proceso, si luego debemos realizar un informe forense informático, ello es:",
        options: [
          "Reconocimiento de la Evidencia Digital.",
          "Aseguramiento del lugar.",
          "Notificación a las autoridades.",
          "Recopilación de testimonios.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El reconocimiento de la Evidencia Digital es el primer paso crucial en un proceso forense informático, ya que permite identificar y preservar los datos y dispositivos relevantes para la investigación.",
      },
      {
        question:
          "Dentro de las partes intervinientes en el lugar del hecho, existe una de ellas, la cual tiene las facultades para garantizar el cumplimiento de la ley, identifique la correcta.",
        options: [
          "El Fiscal interviniente.",
          "El oficial de policía.",
          "El perito forense.",
          "El abogado defensor.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El Fiscal interviniente tiene las facultades para garantizar el cumplimiento de la ley en el lugar del hecho, asegurando que todas las acciones se realicen conforme a los procedimientos legales.",
      },
      {
        question:
          "Un sistema de aseguramiento que tiene como fin garantizar la autenticidad de la evidencia, se lo conoce como:",
        options: [
          "Cadena de custodia.",
          "Control de calidad.",
          "Gestión de incidentes.",
          "Auditoría de seguridad.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La cadena de custodia es un sistema de aseguramiento que garantiza la autenticidad de la evidencia, documentando cada paso de su manejo y preservación desde la recogida hasta su presentación en el tribunal.",
      },
      {
        question:
          "¿Cómo se la conoce a la técnica que puede engañar a cualquier usuario llamando por ejemplo por teléfono bajo la identificación de un número 'seguro' de un remitente conocido?",
        options: ["Spoofing.", "Phishing.", "Sniffing.", "Hacking."],
        answer: [0],
        multi: false,
        explanation:
          "Spoofing es una técnica utilizada para engañar a los usuarios, haciéndoles creer que están recibiendo comunicación de una fuente segura cuando en realidad es de un remitente malicioso.",
      },
      {
        question:
          "Otra de las técnicas conocidas es en determinados días especiales solicitar a los usuarios que naveguen por determinados buscadores y que:",
        options: [
          "Descarguen e instalen expresiones maliciosas que simulan ser de temas reales.",
          "Envíen información personal a través de formularios.",
          "Cambien sus contraseñas regularmente.",
          "Participen en encuestas online.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una técnica común en días especiales es solicitar a los usuarios que descarguen e instalen software malicioso que simula ser de temas reales, con el objetivo de infectar sus sistemas.",
      },
      {
        question:
          "Cuando se refiere a herramientas que permite al desarrollador proyectar programas informáticos, utilizando diferentes idiomas artificiales, se lo denomina:",
        options: [
          "Software de programación.",
          "Editor de texto.",
          "Compilador de código.",
          "Entorno de desarrollo integrado (IDE).",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El software de programación es la herramienta que permite a los desarrolladores proyectar y crear programas informáticos utilizando diversos lenguajes de programación.",
      },
      {
        question:
          "¿Cómo se denominan los documentos digitales que dan fe en la vinculación entre una clave Pública y una persona u organismo?",
        options: [
          "Certificados Digitales.",
          "Firmas Digitales.",
          "Tokens de Seguridad.",
          "Claves Privadas.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los certificados digitales son documentos que autentican la vinculación entre una clave pública y una persona u organismo, asegurando la identidad del propietario de la clave.",
      },
      {
        question:
          "Dentro de los elementos que componen a la firma digital, encontramos a 2 muy importantes para lograr que un mensaje encriptado viaje seguro a destino:",
        options: [
          "Clave secreta y clave Pública.",
          "Hash y resumen.",
          "Certificado y token.",
          "Contraseña y pin.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los elementos clave para que una firma digital asegure que un mensaje encriptado viaje seguro a destino son la clave secreta y la clave pública.",
      },
      {
        question:
          "Dentro de lo que se conoce como bienes inmateriales o intangibles, podemos ubicar a: Seleccione las 2 (dos) respuestas correctas.",
        options: [
          "El Software.",
          "Páginas Web.",
          "Hardware.",
          "Equipos de redes.",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Los bienes inmateriales o intangibles incluyen elementos como el software y las páginas web, que no tienen una presencia física pero son cruciales para el funcionamiento y el valor de una empresa.",
      },
      {
        question:
          "¿Qué se entiende como un idioma artificial que expresa instrucciones y que sean llevadas a cabo por ordenadores?",
        options: [
          "Lenguaje de programación.",
          "Lenguaje natural.",
          "Protocolo de comunicación.",
          "Algoritmo.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un lenguaje de programación es un idioma artificial diseñado para expresar instrucciones que un ordenador puede llevar a cabo para realizar tareas específicas.",
      },
      {
        question:
          "Se dice que la Propiedad Intelectual abarca solo cuestiones atinentes al derecho de autor.",
        options: ["Falso", "Verdadero"],
        answer: [0],
        multi: false,
        explanation:
          "Es falso que la Propiedad Intelectual abarque solo el derecho de autor. La Propiedad Intelectual también incluye patentes, marcas registradas, diseños industriales y secretos comerciales.",
      },
      {
        question:
          "A la hora de analizar y gestionar los Riesgos ¿cuáles recursos deberían tenerse en cuenta? Selecciona la opción correcta:",
        options: [
          "Recursos Hardware.",
          "Recursos Humanos.",
          "Recursos Financieros.",
          "Recursos Naturales.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Al analizar y gestionar los riesgos, es crucial considerar los recursos hardware ya que estos son fundamentales para la operación y seguridad de los sistemas informáticos.",
      },
      {
        question: "¿Cómo se define a una Política de Seguridad?",
        options: [
          "Como una declaración de intenciones de alto nivel.",
          "Como un conjunto de normas y procedimientos detallados.",
          "Como un manual de operación diaria.",
          "Como un documento técnico especializado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una política de seguridad se define como una declaración de intenciones de alto nivel que establece el marco general y las directrices para asegurar los sistemas y la información.",
      },
      {
        question:
          "¿Cómo se denominan los documentos digitales que dan fe en la vinculación entre clave pública y una persona u organismo?",
        options: [
          "Certificados digitales.",
          "Firmas digitales.",
          "Tokens de seguridad.",
          "Claves privadas.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los certificados digitales son documentos que autentican la vinculación entre una clave pública y una persona u organismo, asegurando la identidad del propietario de la clave.",
      },
      {
        question: "¿Cuál es el objetivo de una medida de seguridad activa?",
        options: [
          "Anular o reducir el riesgo de una amenaza.",
          "Registrar los eventos de seguridad.",
          "Recuperar datos perdidos.",
          "Monitorear la red continuamente.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El objetivo de una medida de seguridad activa es anular o reducir el riesgo de una amenaza, tomando acciones preventivas para evitar incidentes de seguridad.",
      },
      {
        question: "¿Cuál es el objetivo de una Medida de Seguridad Pasiva?",
        options: [
          "Reducir el impacto cuando se produzca un incidente de seguridad.",
          "Prevenir accesos no autorizados.",
          "Actualizar el software regularmente.",
          "Monitorear la red en tiempo real.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El objetivo de una medida de seguridad pasiva es reducir el impacto cuando se produce un incidente de seguridad, permitiendo la recuperación y continuidad de las operaciones.",
      },
      {
        question:
          "¿Cuál es el principal problema que presenta la criptografía simétrica?",
        options: [
          "El intercambio de la clave de cifrado a través de un canal seguro.",
          "La velocidad de los algoritmos.",
          "La longitud de las claves.",
          "La complejidad de la implementación.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El principal problema de la criptografía simétrica es el intercambio seguro de la clave de cifrado, ya que ambas partes deben conocer y mantener en secreto la misma clave.",
      },
      {
        question:
          "Cuando se refiere a herramientas que permite al desarrollador proyectar programas informáticos, utilizando diferentes idiomas artificiales, se lo denomina:",
        options: [
          "Software de programación.",
          "Editor de texto.",
          "Compilador de código.",
          "Entorno de desarrollo integrado (IDE).",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El software de programación es la herramienta que permite a los desarrolladores proyectar y crear programas informáticos utilizando diversos lenguajes de programación.",
      },
      {
        question:
          "¿De qué depende la implementación de control de acceso en un sistema informático?",
        options: [
          "De la gestión de cuentas de usuarios y de la gestión de permisos y privilegios.",
          "De la calidad del hardware y software.",
          "De la velocidad de la red.",
          "De la ubicación física de los servidores.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La implementación de control de acceso en un sistema informático depende de la gestión de cuentas de usuarios y de la gestión de permisos y privilegios, asegurando que solo los usuarios autorizados tengan acceso a los recursos adecuados.",
      },
      {
        question:
          "Dentro de la Seguridad Informática, se deben preservar tres pilares o características importantes",
        options: [
          "Confidencialidad, integridad, Disponibilidad.",
          "Velocidad, Eficiencia, Seguridad.",
          "Redundancia, Escalabilidad, Compatibilidad.",
          "Accesibilidad, Transparencia, Flexibilidad.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En la Seguridad Informática, los tres pilares fundamentales son la Confidencialidad, la Integridad y la Disponibilidad, que aseguran la protección de los datos contra accesos no autorizados, modificaciones indebidas y la disponibilidad de la información cuando se necesita.",
      },
      {
        question:
          "Dentro de la estructura TLD, se encuentran dominios que operan bajo algunas de las siguientes direcciones, seleccione 4 de ellas: Seleccione las 4 respuestas correctas.",
        options: [".Edu", ".Org", ".Com", ".Net", ".Biz", ".Info"],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Dentro de la estructura de TLD (Top-Level Domains), se encuentran dominios como .Edu, .Org, .Com y .Net, que son utilizados para diferentes propósitos en la red.",
      },
      {
        question:
          "Dentro de las partes intervinientes en el lugar del hecho, existe una de ellas, la cual tiene las facultades para garantizar el cumplimiento de la ley, identifique la correcta.",
        options: [
          "El fiscal interviniente.",
          "El oficial de policía.",
          "El perito forense.",
          "El abogado defensor.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El fiscal interviniente tiene las facultades para garantizar el cumplimiento de la ley en el lugar del hecho, asegurando que todas las acciones se realicen conforme a los procedimientos legales.",
      },
      {
        question:
          "Dentro de lo que se conoce como bienes inmateriales o intangibles, podemos ubicar a: Selecciones las 2 respuestas correctas.",
        options: ["El software", "Páginas web", "Hardware", "Equipos de redes"],
        answer: [0, 1],
        multi: true,
        explanation:
          "Los bienes inmateriales o intangibles incluyen elementos como el software y las páginas web, que no tienen una presencia física pero son cruciales para el funcionamiento y el valor de una empresa.",
      },
      {
        question:
          "Dentro de los delitos informáticos, se pueden identificar dos tipologías, estas son:",
        options: [
          "Como instrumento y como objeto del delito.",
          "Delitos personales y corporativos.",
          "Delitos internos y externos.",
          "Delitos físicos y digitales.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los delitos informáticos se pueden clasificar en dos tipologías: como instrumento, donde se utiliza la tecnología para cometer el delito, y como objeto, donde el delito se dirige contra sistemas o datos informáticos.",
      },
      {
        question:
          "Dentro de los elementos que componen a la firma digital, encontramos 2 muy importantes para lograr que un mensaje encriptado viaje seguro a destino:",
        options: [
          "Clave secreta y clave pública.",
          "Hash y resumen.",
          "Certificado y token.",
          "Contraseña y pin.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los elementos clave para que una firma digital asegure que un mensaje encriptado viaje seguro a destino son la clave secreta y la clave pública.",
      },
      {
        question:
          "Dentro de los recursos de la empresa y que brindan un gran aporte al momento de brindar mayor seguridad en la información, se encuentran los siguientes:",
        options: [
          "Información, procesos, sistemas y redes.",
          "Hardware, software, usuarios y políticas.",
          "Equipos, datos, redes y usuarios.",
          "Aplicaciones, dispositivos, procedimientos y empleados.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los recursos de la empresa que brindan mayor seguridad en la información incluyen información, procesos, sistemas y redes, ya que todos estos elementos contribuyen a proteger los datos y la infraestructura de TI.",
      },
      {
        question:
          "Dentro de los servicios que brinda Internet, nos encontramos con:",
        options: [
          "La web o WWW (World Wide Web).",
          "El correo físico.",
          "Los servicios de mensajería tradicional.",
          "El transporte de bienes y productos.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los servicios que brinda Internet es la web o 'WWW' (World Wide Web), que permite el acceso y la navegación de contenido en línea.",
      },
      {
        question:
          "Dentro del inventario de activos que es necesario para garantizar lo más valioso de la empresa se debe tener presente los siguientes activos asociados a sistemas de información:",
        options: [
          "Recursos no declarados, recursos de información, bases de información, servicios.",
          "Equipos de oficina, personal de TI, aplicaciones móviles y políticas de seguridad.",
          "Redes, dispositivos de almacenamiento, bases de datos y documentación.",
          "Hardware, software, procesos de negocio e infraestructura.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Para garantizar lo más valioso de la empresa, el inventario de activos debe incluir recursos no declarados, recursos de información, bases de información y servicios asociados a los sistemas de información.",
      },
      {
        question:
          "El principal problema de los criptosistemas asimétricos es que los algoritmos son lentos y consumen muchos recursos computacionales.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Es verdadero que el principal problema de los criptosistemas asimétricos es que los algoritmos son lentos y consumen muchos recursos computacionales, lo que puede limitar su uso en ciertas aplicaciones.",
      },
      {
        question:
          "En Criptografía Simétrica, las Claves Públicas y Privadas de cada usuario están relacionadas matemáticamente entre sí.",
        options: ["Verdadero", "Falso"],
        answer: [1],
        multi: false,
        explanation:
          "En criptografía simétrica, solo se utiliza una clave para el cifrado y descifrado, por lo que no hay claves públicas y privadas relacionadas matemáticamente.",
      },
      {
        question:
          "En Criptografía Asimétrica, dado dos Usuarios A y B, si B desea enviar datos cifrados a A ¿cómo se debe proceder? Selecciona la afirmación correcta:",
        options: [
          "B debe cifrar los datos con la Clave Pública de A.",
          "B debe cifrar los datos con su propia Clave Privada.",
          "B debe usar una clave compartida entre A y B.",
          "B debe cifrar los datos con la Clave Privada de A.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía asimétrica, B debe cifrar los datos con la Clave Pública de A para que solo A pueda descifrarlos con su Clave Privada.",
      },
      {
        question:
          "En criptografía asimétrica, dado dos usuarios A y B, si A desea enviar datos cifrados a B. ¿Cómo se debe proceder? Seleccione las dos respuestas correctas:",
        options: [
          "A cifra con la clave pública de B.",
          "A cifra con su clave privada.",
          "B descifra con su clave pública.",
          "B descifra con su clave privada.",
        ],
        answer: [0, 3],
        multi: true,
        explanation:
          "En criptografía asimétrica, A debe cifrar los datos con la clave pública de B, y B debe descifrar los datos con su clave privada.",
      },
      {
        question:
          "En el contexto de la gestión de riesgos. ¿Cómo es la secuencia de procesos en la apreciación de riesgos?",
        options: [
          "Identificar, analizar, evaluar.",
          "Evaluar, analizar, identificar.",
          "Analizar, identificar, evaluar.",
          "Evaluar, identificar, analizar.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La secuencia correcta en la apreciación de riesgos es identificar, analizar y evaluar, para gestionar adecuadamente los riesgos en una organización.",
      },
      {
        question: "En el contexto del análisis de riesgos. ¿Qué es un riesgo?",
        options: [
          "La probabilidad de que una amenaza se materialice sobre una vulnerabilidad.",
          "La certeza de que un incidente de seguridad ocurrirá.",
          "La cantidad de dinero necesario para mitigar una amenaza.",
          "El tiempo que se necesita para recuperarse de un incidente.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un riesgo es la probabilidad de que una amenaza se materialice sobre una vulnerabilidad, afectando potencialmente la seguridad de la información.",
      },
      {
        question:
          "En el contexto del análisis de riesgos. ¿Qué mide el impacto?",
        options: [
          "El daño que podría causar a la organización un incidente de seguridad.",
          "La probabilidad de ocurrencia de un incidente de seguridad.",
          "El costo de implementar medidas de seguridad.",
          "El número de incidentes de seguridad ocurridos en el pasado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El impacto mide el daño que podría causar a la organización un incidente de seguridad, permitiendo evaluar la gravedad de las amenazas y vulnerabilidades.",
      },
      {
        question:
          "En el contexto del Análisis de Riesgos, ¿qué es una Vulnerabilidad?",
        options: [
          "Cualquier debilidad en el sistema informático que puede ser explotada por una Amenaza.",
          "Una medida de protección insuficiente.",
          "Un tipo de malware específico.",
          "Una política de seguridad mal implementada.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una vulnerabilidad es cualquier debilidad en el sistema informático que puede ser explotada por una amenaza, poniendo en riesgo la seguridad de la información.",
      },
      {
        question:
          "En razón de la escasez de los números asignados en versión 4 (IPv4), el mismo será reemplazado por otra versión que permitirá mayor conectividad de manera ilimitada, se lo conoce como:",
        options: [
          "IPv6, de 128 bits y admite números y letras.",
          "IPv5, de 64 bits y admite solo números.",
          "IPv7, de 256 bits y admite números y letras.",
          "IPv3, de 32 bits y admite solo letras.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "IPv6, de 128 bits, es la versión que reemplazará a IPv4, permitiendo mayor conectividad de manera ilimitada y admitiendo tanto números como letras.",
      },
      {
        question:
          "En relación a la Criptografía Simétrica, identifica cuál afirmación es correcta:",
        options: [
          "Se emplea la misma clave para cifrar y descifrar.",
          "Se utilizan dos claves diferentes para cifrar y descifrar.",
          "No depende de la confidencialidad de la clave.",
          "Utiliza una clave pública para el cifrado y una privada para el descifrado.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía simétrica, se utiliza la misma clave para cifrar y descifrar, lo que es una de sus principales características.",
      },
      {
        question:
          "En relación a la Criptografía Simétrica, identifica cuál afirmación es correcta:",
        options: [
          "Toda la seguridad del Sistema depende de la confidencialidad de la Clave.",
          "Se utiliza una clave pública para el cifrado y una privada para el descifrado.",
          "Las claves utilizadas son mucho más largas que en la criptografía asimétrica.",
          "El algoritmo es público y no necesita mantener ninguna parte en secreto.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En criptografía simétrica, la seguridad del sistema depende completamente de la confidencialidad de la clave utilizada.",
      },
      {
        question:
          "En relación a la criptografía Asimétrica, identifica cuál afirmación es correcta:",
        options: [
          "Utiliza dos claves criptográficas, de las cuales una es privada y otra es pública.",
          "Utiliza una única clave para cifrar y descifrar.",
          "No requiere intercambio de claves entre las partes.",
          "Es más rápida que la criptografía simétrica.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La criptografía asimétrica utiliza dos claves criptográficas: una clave privada que se mantiene en secreto y una clave pública que se puede compartir libremente.",
      },
      {
        question:
          "En relación a los procedimientos de seguridad, seleccione la opción correcta:",
        options: [
          "Se descomponen en tareas y operaciones concretas.",
          "Son abstractos y generales.",
          "No requieren documentación.",
          "Son específicos para cada usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los procedimientos de seguridad se descomponen en tareas y operaciones concretas para asegurar que cada paso sea claro y ejecutable.",
      },
      {
        question:
          "En relación al Control de Accesos, en los tipos de Acceso Discrecional (DAC), ¿cómo operan? Selecciona la opción correcta:",
        options: [
          "Los Controles de Acceso los controla y configura el propietario de cada objeto.",
          "Los Controles de Acceso son gestionados por el administrador del sistema.",
          "Los Controles de Acceso son automáticos y no requieren intervención humana.",
          "Los Controles de Acceso son iguales para todos los usuarios.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "En los sistemas de Acceso Discrecional (DAC), los controles de acceso los controla y configura el propietario de cada objeto, permitiendo flexibilidad en la gestión de permisos.",
      },
      {
        question:
          "En relación a las herramientas de detección y protección, un Sistema de Detección de Intrusos (IDS) cuenta con una versión basada en Host.",
        options: ["Verdadero", "Falso"],
        answer: [0],
        multi: false,
        explanation:
          "Es verdadero que un Sistema de Detección de Intrusos (IDS) cuenta con una versión basada en Host, que monitoriza y analiza actividades dentro de un solo equipo o dispositivo.",
      },
      {
        question:
          "En relación al Control de Accesos, en un proceso de Identificación ¿cuáles elementos pueden utilizarse para identificar a un Usuario? Selecciona las 4 (cuatro) opciones correctas:",
        options: [
          "Algo que el Usuario sabe hacer.",
          "Algo que el Usuario conoce.",
          "Algo que el Usuario es.",
          "Algo que el Usuario posee.",
          "Algo que el Usuario desea.",
          "Algo que el Usuario prefiere.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "En un proceso de identificación, se pueden utilizar varios elementos para identificar a un usuario: algo que el usuario sabe hacer (habilidades), algo que el usuario conoce (contraseñas), algo que el usuario es (biometría) y algo que el usuario posee (tarjetas de acceso).",
      },
      {
        question:
          "En relación a las herramientas de detección y protección, selecciona la opción correcta acerca de los Sistemas de Detección de Intrusos (IDS):",
        options: [
          "Cuentan con un motor de análisis encargado de detectar evidencia de intentos de intrusión.",
          "Son completamente pasivos y no realizan ninguna acción.",
          "No necesitan actualizaciones regulares.",
          "Solo funcionan en redes pequeñas.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los Sistemas de Detección de Intrusos (IDS) cuentan con un motor de análisis encargado de detectar evidencia de intentos de intrusión, lo que les permite identificar y alertar sobre posibles ataques.",
      },
      {
        question:
          "En relación a los Procedimientos de Seguridad, selecciona la opción correcta:",
        options: [
          "Se descomponen en tareas y operaciones concretas.",
          "Son abstractos y generales.",
          "No requieren documentación.",
          "Son específicos para cada usuario.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Los procedimientos de seguridad se descomponen en tareas y operaciones concretas para asegurar que cada paso sea claro y ejecutable.",
      },
      {
        question:
          "Identifica correctamente una de las ventajas de la Criptografía Simétrica.",
        options: [
          "Son algoritmos muy rápidos y eficientes desde el punto de vista computacional.",
          "No requieren intercambio previo de claves.",
          "Son más seguros que los algoritmos de clave pública.",
          "Permiten una encriptación sin claves.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una de las ventajas de la criptografía simétrica es que sus algoritmos son muy rápidos y eficientes desde el punto de vista computacional.",
      },
      {
        question:
          "Identifica correctamente una de las técnicas de criptoanálisis entre las siguientes opciones:",
        options: [
          "Criptoanálisis Lineal",
          "Criptoanálisis Diferencial",
          "Criptoanálisis Algebraico",
          "Criptoanálisis Estadístico",
        ],
        answer: [0],
        multi: false,
        explanation:
          "El criptoanálisis lineal es una técnica utilizada para analizar y vulnerar sistemas criptográficos.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista:",
        options: [
          "Referencia temporal (Certificación de fechas)",
          "Encriptación de datos",
          "Protección contra malware",
          "Análisis de vulnerabilidades",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La referencia temporal o certificación de fechas es un servicio de seguridad de la información que asegura la integridad y autenticidad del momento en que un documento o dato fue creado.",
      },
      {
        question:
          "Identifica cuál es un Servicio de Seguridad de la Información válido en la siguiente lista:",
        options: [
          "Reclamación de Origen",
          "Auditoría de Seguridad",
          "Gestión de Contraseñas",
          "Monitoreo de Red",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La reclamación de origen es un servicio de seguridad de la información que verifica la autenticidad del remitente de la información.",
      },
      {
        question:
          "Identifica cuál es un servicio de seguridad de la información válido en la siguiente lista:",
        options: ["Disponibilidad", "Backup", "Firewall", "Autenticación"],
        answer: [0],
        multi: false,
        explanation:
          "La disponibilidad es un servicio de seguridad de la información que garantiza que los datos y sistemas estén accesibles cuando se necesiten.",
      },
      {
        question:
          "Identifica de manera correcta cuál de los siguientes es un tipo de ataque contra un sistema criptográfico:",
        options: [
          "Ataque basado solo en texto cifrado",
          "Ataque DDoS",
          "Phishing",
          "Malware",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Un ataque basado solo en texto cifrado es un tipo de ataque contra un sistema criptográfico donde el atacante intenta descifrar el texto sin conocer el texto original ni la clave.",
      },
      {
        question:
          "Identifica de manera correcta, cuáles fases intervienen en un proceso de autenticación de una Firma Electrónica. Selecciona las 4 (cuatro) opciones correctas:",
        options: [
          "El Receptor genera un Resumen del mensaje recibido.",
          "El Receptor compara el Resumen generado por él, con el Resumen descifrado.",
          "Si ambos Resúmenes coinciden, el origen es auténtico y el mensaje es íntegro.",
          "El Receptor descifra el Resumen cifrado asociado al mensaje recibido, utilizando la Clave Pública del origen.",
          "El Receptor envía el Resumen al emisor para su verificación.",
          "El Receptor cifra nuevamente el mensaje recibido.",
        ],
        answer: [0, 1, 2, 3],
        multi: true,
        explanation:
          "Las fases en el proceso de autenticación de una firma electrónica incluyen que el receptor descifre el resumen cifrado asociado al mensaje con la clave pública del origen, genere un resumen del mensaje recibido, compare ambos resúmenes y determine la autenticidad del origen y la integridad del mensaje.",
      },
      {
        question:
          "Internet utiliza en su red de ordenadores y redes un protocolo particular llamado:",
        options: ["TCP/IP", "HTTP", "FTP", "SMTP"],
        answer: [0],
        multi: false,
        explanation:
          "Internet utiliza el protocolo TCP/IP (Transmission Control Protocol / Internet Protocol) para la comunicación y transferencia de datos en su red de ordenadores y redes.",
      },
      {
        question: "La Seguridad Informática debe ser entendida como:",
        options: [
          "Un proceso.",
          "Un producto.",
          "Un servicio.",
          "Un software.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La seguridad informática debe ser entendida como un proceso continuo de identificación, análisis y mitigación de riesgos para proteger la información y los sistemas.",
      },
      {
        question:
          "La seguridad informática se plantea una serie de objetivos. Identifica correctamente a uno de la siguiente lista:",
        options: [
          "Minimizar y gestionar los riesgos y detectar los posibles problemas y amenazas a la seguridad.",
          "Aumentar la velocidad de la red.",
          "Reducir el costo de hardware.",
          "Incrementar el número de usuarios.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Uno de los objetivos de la seguridad informática es minimizar y gestionar los riesgos y detectar los posibles problemas y amenazas a la seguridad, asegurando así la protección de los sistemas y datos.",
      },
      {
        question: "¿Qué es la Fiabilidad de un Sistema?",
        options: [
          "La probabilidad de que un Sistema se comporte tal y como se espera de él.",
          "La velocidad a la que un sistema procesa los datos.",
          "La capacidad de un sistema para integrarse con otros sistemas.",
          "El costo de mantenimiento de un sistema.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "La fiabilidad de un sistema es la probabilidad de que el sistema se comporte tal y como se espera de él, sin fallos, durante un periodo de tiempo determinado.",
      },
      {
        question:
          "¿Qué involucra un proceso de Autenticación? Identifica las dos (2) opciones correctas:",
        options: [
          "Verificar la identidad de un interlocutor.",
          "Verificar la integridad de los mensajes recibidos de un interlocutor.",
          "Cifrar los mensajes con una clave pública.",
          "Generar una firma digital para cada mensaje enviado.",
        ],
        answer: [0, 1],
        multi: true,
        explanation:
          "Un proceso de autenticación involucra verificar la identidad de un interlocutor y verificar la integridad de los mensajes recibidos, asegurando que la comunicación es segura y confiable.",
      },
      {
        question:
          "¿Qué proporciona una Infraestructura de Clave Pública (PKI)?",
        options: [
          "Proporciona un mecanismo para la generación y distribución de claves y gestión de Certificados Digitales.",
          "Proporciona únicamente servicios de cifrado de datos.",
          "Ofrece un repositorio centralizado de claves privadas.",
          "Gestiona contraseñas para usuarios.",
        ],
        answer: [0],
        multi: false,
        explanation:
          "Una Infraestructura de Clave Pública (PKI) proporciona un mecanismo para la generación y distribución de claves y la gestión de certificados digitales, asegurando la seguridad de las comunicaciones.",
      },
    ],
  },
];
