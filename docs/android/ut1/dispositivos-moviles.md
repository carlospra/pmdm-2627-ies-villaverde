---
title: "Dispositivos móviles y sus limitaciones"
sidebar_label: "Dispositivos y limitaciones"
slug: /android/ut1/dispositivos-moviles
---

# Dispositivos móviles y sus limitaciones

Antes de escribir una línea de Kotlin conviene entender dónde vais a programar, porque un móvil es un sitio bastante más raro de lo que parece: un aparato con la batería contada, la conexión intermitente, el almacenamiento limitado y un sistema operativo que puede cerrar vuestra aplicación en cualquier momento sin pediros permiso.

## De dónde venimos

El desarrollo móvil tiene ya tres etapas bien distintas, y conocerlas explica por qué en este módulo aparece vocabulario que hoy nadie usa.

| Etapa | Qué había | Qué se programaba |
|---|---|---|
| Hasta 2007 | Teléfonos con teclado, agendas electrónicas, memoria de kilobytes | **Java ME**, con sus configuraciones y perfiles; aplicaciones diminutas y sin acceso real al aparato |
| 2007–2015 | Pantalla táctil, tiendas de aplicaciones, conexión de datos | Android con Java, iOS con Objective-C. Interfaces descritas en XML o en editores visuales |
| Desde 2015 | Sensores, biometría, cámaras múltiples, aparatos de todos los tamaños | Kotlin y Swift; interfaces **declarativas** con Compose y SwiftUI; multiplataforma con Flutter |

La consecuencia práctica: el currículo de este módulo usa términos de la primera etapa —configuraciones, perfiles— que traduciremos en [versiones y fragmentación](/android/ut1/versiones-y-fragmentacion). No los ignoramos, porque siguen apareciendo en la documentación y en las pruebas.

## Tipos de dispositivo

Hoy «móvil» ya no significa solo teléfono. La misma plataforma se ejecuta en familias muy distintas, y cada una impone lo suyo:

| Tipo | Qué lo caracteriza | Qué os obliga a cambiar |
|---|---|---|
| Teléfono | Pantalla de 5 a 7 pulgadas, uso a una mano, en movimiento | Es la referencia por defecto |
| Tablet | Pantalla grande, uso apoyado, sesiones largas | Diseños de dos paneles, no la pantalla del teléfono estirada |
| Plegable | La pantalla cambia de tamaño **mientras la aplicación corre** | El diseño tiene que rehacerse en caliente |
| Reloj | Pantalla diminuta, batería muy escasa, interacción de segundos | Interfaz propia, no una reducción de la del teléfono |
| Televisión | Se maneja con un mando a distancia, a tres metros | Navegación por foco, tipografía grande |
| Automoción | Atención del conductor limitada por ley | Interfaz restringida y certificada |

Todas comparten el mismo sistema operativo de base, y por eso una decisión como la versión mínima soportada se declara distinta en cada familia.

## Características comunes

Frente a un ordenador, cualquiera de estos aparatos comparte cinco rasgos: **movilidad** (cambia de sitio, de red y de condiciones de luz), **alimentación por batería**, **conectividad intermitente**, **interacción táctil o por voz** y **sensores integrados** que un ordenador no tiene. Sobre esos cinco rasgos se construye todo lo que viene después.

## El hardware y lo que impone

Cada limitación sale de un componente concreto:

| Componente | Qué aporta | Qué limitación impone |
|---|---|---|
| Pantalla | La interfaz y, casi siempre, la entrada | Es el mayor consumidor de batería. Y hay muchísimos tamaños y densidades: el diseño se expresa en `dp`, no en píxeles |
| Procesador | Ejecuta vuestro código | Arquitecturas distintas (ARM de 64 bits, y x86 en emuladores). Se estrangula por temperatura: el rendimiento sostenido no es el del primer segundo |
| Memoria | Donde vive la aplicación mientras corre | Cada aplicación tiene un límite asignado. Superarlo la cierra en el acto |
| Almacenamiento | Datos, caché y la propia aplicación | Es finito y el usuario ve cuánto ocupáis |
| Batería | Alimenta todo | Es el recurso que de verdad escasea. Pantalla, radio y CPU sostenida son los grandes consumidores |
| Cámara y sensores | Acelerómetro, giroscopio, posición, biometría, NFC | Exigen permiso del usuario, consumen mientras están activos y no todos los aparatos los tienen |
| Conectividad | Datos móviles, Wi-Fi, Bluetooth, NFC | La red se pierde, cambia y vuelve. Y puede ser una conexión medida que el usuario paga |

De ahí salen las cinco limitaciones que tenéis que saber explicar:

- **Desconexión.** En un ordenador la red se da por supuesta. En móvil la aplicación cambia de red, la pierde y la recupera constantemente, y lo más difícil de tratar no es la ausencia de cobertura sino una conexión lenta e intermitente. Tres consecuencias de diseño: toda operación de red con plazo máximo, la interfaz informa sin bloquear, y la aplicación es útil sin conexión aunque sea en modo consulta.
- **Seguridad.** El aparato guarda información personal por definición. Tiene apartado propio más abajo.
- **Memoria.** Los consumidores principales son, por este orden, las imágenes sin comprimir, las cachés sin acotar y las fugas. Una fotografía de doce megapíxeles ocupa poco como fichero y decenas de megabytes descomprimida para dibujarla: por eso se carga a la escala necesaria en lugar de cargar el original y encogerlo.
- **Consumo de batería.** Se agrupan las comunicaciones en lugar de hacer peticiones constantes, se usa el trabajo planificado del sistema, se retiran sensores y ubicación en cuanto no se usan, y no se impide que la pantalla se apague salvo que la función lo exija.
- **Almacenamiento.** Conviene distinguir tres categorías: los datos, que hay que conservar; la caché, que el sistema puede borrar cuando necesite espacio y que debe estar acotada; y los ficheros temporales, que se borran al terminar la operación.

Y una regla común a las tres últimas: **se mide en el aparato más modesto que queráis soportar**, no en vuestro ordenador ni en un emulador con recursos de sobra.

:::warning Un error frecuente
Se suele pensar que programar para móvil es igual que para escritorio, solo que con la pantalla más pequeña. En realidad la diferencia no es el tamaño: es que **no controláis el entorno**. La batería se agota, la red desaparece, el sistema os cierra y el usuario gira el aparato. Vuestra aplicación tiene que dar por hecho que todo eso va a pasar.
:::

### La fuga de memoria característica de Android

Merece que la conozcáis desde ya, porque la vais a provocar. Si guardáis una referencia a una pantalla en un objeto que vive más que ella —un *listener* registrado y nunca retirado, una variable estática, un hilo que sigue en marcha—, el sistema no puede liberar esa pantalla al cerrarla. Y como cada rotación del aparato destruye y vuelve a crear la pantalla, **cada giro acumula una copia más**. Se localiza con el Memory Profiler de Android Studio.

## Seguridad en el dispositivo

El modelo de seguridad del móvil no se parece al de un ordenador:

- **Aislamiento por aplicación.** Cada aplicación se ejecuta con su propia identidad y en su propio espacio: no puede leer los ficheros de otra ni acceder a su memoria. Lo que en un ordenador es una convención, aquí lo impone el sistema.
- **Firma del paquete.** Toda aplicación se firma con una clave del desarrollador, y el sistema comprueba que las actualizaciones vienen firmadas con la misma. Esa clave, guardada en un *keystore*, es el activo más crítico de un proyecto móvil: perderla impide publicar actualizaciones para siempre, y filtrarla permite a un tercero suplantar vuestra aplicación. Nunca va en el repositorio de código.
- **Permisos.** Los peligrosos se conceden en tiempo de ejecución y **se pueden revocar**. Pedid lo mínimo, pedidlo en el momento en que se necesita, explicad para qué, y comprobadlo antes de cada uso y no solo al arrancar.
- **Almacenamiento seguro.** El espacio privado de la aplicación no es accesible por otras, y aun así no es el lugar para credenciales: para eso existe un almacén protegido por el hardware del aparato.
- **Comunicación cifrada.** Las plataformas bloquean por defecto el tráfico sin cifrar. La configuración que lo permite existe para casos muy concretos y documentados, no para rodear el problema.
- **Ofuscación.** Reduce la facilidad de la ingeniería inversa y no la impide. La conclusión práctica conviene fijarla: **nada que esté en el dispositivo es secreto**. Las claves de servicios ajenos y la lógica sensible van en el servidor.
- **Protección de datos.** Se aplican el RGPD y la LO 3/2018: recoger lo mínimo, informar de qué se recoge y para qué, permitir retirar el consentimiento y no almacenar más tiempo del necesario.
