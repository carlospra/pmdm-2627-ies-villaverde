---
title: "Fabricantes, capas y custom ROMs"
sidebar_label: "Fabricantes y custom ROMs"
slug: /android/ut1/fabricantes-y-custom-roms
---

# Fabricantes, capas y custom ROMs

Esto no entra en el currículo del módulo, pero sí en la prueba del RA1 como parte de la fragmentación, y explica la mitad de los fallos raros que os vais a encontrar.

## Qué es una custom ROM

Android es abierto, así que cualquiera puede compilarlo. Una **custom ROM** es eso: AOSP con parches. **LineageOS** es la más extendida, **GrapheneOS** va de privacidad y **/e/OS** de prescindir de Google.

Se instalan por tres razones: un aparato que funciona pero ya no recibe actualizaciones, un sistema lleno de aplicaciones que no se pueden desinstalar, y no querer mandar datos a Google.

Para ponerla hay que **desbloquear el bootloader**, y el proceso borra todos los datos. No es un castigo: si no los borrara, sería la forma de saltarse el cifrado de un móvil robado.

A partir de ahí el arranque verificado falla, y ahí aparece lo que os interesa como desarrolladores: Google ofrece la **Play Integrity API**, que le dice a una aplicación si el aparato es de confianza. La banca, algunos servicios de streaming y los juegos con antitrampas la usan y se niegan a funcionar en un móvil con el bootloader desbloqueado.

Pensadlo desde el otro lado: el día que programéis vosotros la aplicación, activar esa comprobación significa decidir que un usuario que cuida su privacidad no puede usarla.

## Por qué un móvil deja de actualizarse

Los drivers del fabricante son binarios cerrados compilados contra una versión concreta del kernel. Cuando sale un Android nuevo no basta con que Google lo publique: hace falta que el fabricante del procesador adapte sus drivers, que el fabricante del aparato rehaga su capa y que el operador lo valide.

**Project Treble** (Android 8) separó el sistema de la parte del fabricante con interfaces estables, y la imagen genérica de kernel (Android 11) fue un paso más, pero sigue siendo la causa de que un móvil de gama media deje de actualizarse en tres años.

:::info Firmware y por qué vuestra app no lo es
El firmware es el software que va pegado al hardware y que el fabricante instala: el cargador de arranque, los drivers, la radio. Vive por debajo del sistema y se actualiza con el sistema, no desde una tienda.

Vuestra aplicación está en la capa de más arriba, se instala y se desinstala como cualquier otra y no puede tocar nada de eso. Por eso una app no puede «arreglar» un móvil que ya no recibe parches de seguridad.
:::

## El problema de verdad: la gestión de batería

Las capas de fabricante —HyperOS, One UI, ColorOS— añaden lanzador, aplicaciones propias y temas, que es lo que se ve.

Lo que no se ve es que **matan procesos en segundo plano**, retrasan o ignoran el trabajo planificado y exigen que el usuario active a mano un permiso de «inicio automático» enterrado en los ajustes.

El resultado: una alarma que no suena, una aplicación de fichaje que deja de registrar, una de deporte que pierde medio recorrido. Y solo en algunos fabricantes: el mismo código, en otro aparato, funciona.

Esto no se arregla programando mejor: se arregla sabiendo que pasa y diseñando la aplicación para que no dependa de seguir viva. Lo trabajamos en la [práctica 3](/android/ut1/practicas).

## Distribución y publicación

El ciclo de vida externo ocurre casi siempre a través de una tienda:

- La compilación de distribución es distinta de la de desarrollo: optimizada, sin trazas, con el código reducido y ofuscado, firmada con la clave de publicación.
- La ficha de la tienda es parte del trabajo y condiciona la visibilidad.
- Las tiendas revisan y rechazan por motivos previsibles.
- La publicación escalonada permite liberar primero a un grupo pequeño, de modo que un fallo detectado con el cinco por ciento de los usuarios se detiene y con el cien por cien ya no.

Publicar no cierra el trabajo: lo empieza.
