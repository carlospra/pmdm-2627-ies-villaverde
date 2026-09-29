---
title: "1.2 · El hardware y las limitaciones que impone"
sidebar_label: "1.2 · Hardware y limitaciones"
sidebar_position: 12
slug: /android/ut1/1-2-hardware-y-limitaciones
---

# 1.2 · El hardware y las limitaciones que impone

El currículo pide conocer el hardware del dispositivo y las limitaciones que plantea la ejecución de aplicaciones sobre él. Van juntos, porque cada limitación sale de un componente concreto.

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
- **Seguridad.** El aparato guarda información personal por definición. Tiene apartado propio, el [1.3](/android/ut1/1-3-seguridad).
- **Memoria.** Los consumidores principales son, por este orden, las imágenes sin comprimir, las cachés sin acotar y las fugas. Una fotografía de doce megapíxeles ocupa poco como fichero y decenas de megabytes descomprimida para dibujarla: por eso se carga a la escala necesaria en lugar de cargar el original y encogerlo.
- **Consumo de batería.** Se agrupan las comunicaciones en lugar de hacer peticiones constantes, se usa el trabajo planificado del sistema, se retiran sensores y ubicación en cuanto no se usan, y no se impide que la pantalla se apague salvo que la función lo exija.
- **Almacenamiento.** Conviene distinguir tres categorías: los datos, que hay que conservar; la caché, que el sistema puede borrar cuando necesite espacio y que debe estar acotada; y los ficheros temporales, que se borran al terminar la operación.

Y una regla común a las tres últimas: **se mide en el aparato más modesto que queráis soportar**, no en vuestro ordenador ni en un emulador con recursos de sobra.

:::warning Un error frecuente
Se suele pensar que programar para móvil es igual que para escritorio, solo que con la pantalla más pequeña. En realidad la diferencia no es el tamaño: es que **no controláis el entorno**. La batería se agota, la red desaparece, el sistema os cierra y el usuario gira el aparato. Vuestra aplicación tiene que dar por hecho que todo eso va a pasar.
:::

## La fuga de memoria característica de Android

Merece que la conozcáis desde ya, porque la vais a provocar. Si guardáis una referencia a una pantalla en un objeto que vive más que ella —un *listener* registrado y nunca retirado, una variable estática, un hilo que sigue en marcha—, el sistema no puede liberar esa pantalla al cerrarla. Y como cada rotación del aparato destruye y vuelve a crear la pantalla, **cada giro acumula una copia más**. Se localiza con el Memory Profiler de Android Studio.
