---
title: "1.3 · Seguridad en el dispositivo"
sidebar_label: "1.3 · Seguridad"
sidebar_position: 13
slug: /android/ut1/1-3-seguridad
---

# 1.3 · Seguridad en el dispositivo

El modelo de seguridad del móvil no se parece al de un ordenador:

- **Aislamiento por aplicación.** Cada aplicación se ejecuta con su propia identidad y en su propio espacio: no puede leer los ficheros de otra ni acceder a su memoria. Lo que en un ordenador es una convención, aquí lo impone el sistema.
- **Firma del paquete.** Toda aplicación se firma con una clave del desarrollador, y el sistema comprueba que las actualizaciones vienen firmadas con la misma. Esa clave, guardada en un *keystore*, es el activo más crítico de un proyecto móvil: perderla impide publicar actualizaciones para siempre, y filtrarla permite a un tercero suplantar vuestra aplicación. Nunca va en el repositorio de código.
- **Permisos.** Los peligrosos se conceden en tiempo de ejecución y **se pueden revocar**. Pedid lo mínimo, pedidlo en el momento en que se necesita, explicad para qué, y comprobadlo antes de cada uso y no solo al arrancar.
- **Almacenamiento seguro.** El espacio privado de la aplicación no es accesible por otras, y aun así no es el lugar para credenciales: para eso existe un almacén protegido por el hardware del aparato.
- **Comunicación cifrada.** Las plataformas bloquean por defecto el tráfico sin cifrar. La configuración que lo permite existe para casos muy concretos y documentados, no para rodear el problema.
- **Ofuscación.** Reduce la facilidad de la ingeniería inversa y no la impide. La conclusión práctica conviene fijarla: **nada que esté en el dispositivo es secreto**. Las claves de servicios ajenos y la lógica sensible van en el servidor.
- **Protección de datos.** Se aplican el RGPD y la LO 3/2018: recoger lo mínimo, informar de qué se recoge y para qué, permitir retirar el consentimiento y no almacenar más tiempo del necesario.
