---
title: "2.4 · Modificación de aplicaciones existentes"
sidebar_label: "2.4 · Modificar una app"
sidebar_position: 24
slug: /android/ut1/2-4-modificar-aplicaciones
---

# 2.4 · Modificación de aplicaciones existentes

El currículo lo incluye expresamente, y es lo que haréis con más frecuencia en vuestros primeros años: casi nadie empieza un proyecto desde cero, casi todos entran en uno en marcha. El método tiene un orden que ahorra semanas:

1. **Compilar y ejecutar antes de tocar nada.** Si el proyecto no arranca tal cual, lo primero es dejarlo funcionando: versiones de las herramientas, dependencias, claves de firma y configuración del entorno. Ahí se pierden los primeros días.
2. **Recorrer la aplicación como usuario**, anotando pantallas y flujos. El mapa mental se construye desde fuera, no leyendo código.
3. **Leer el manifiesto y localizar el punto de entrada**, con el vocabulario del [apartado 2.1](/android/ut1/2-1-estructura-y-clases): qué componentes declara, qué permisos pide, qué `Activity` abre.
4. **Identificar la arquitectura**, aunque sea imperfecta: dónde está la interfaz, dónde la lógica, dónde el acceso a datos y a la red.
5. **Cambiar lo mínimo y comprobar.** Un cambio pequeño, ejecutado y verificado, enseña más sobre el proyecto que una tarde de lectura.

Los encargos que llegan en la práctica son de cuatro tipos, con dificultad creciente:

| Tipo | Qué implica |
|---|---|
| Cambios de apariencia: textos, colores, iconos, traducciones | Los más seguros |
| Añadir una pantalla o un campo | Exige entender la navegación y el modelo de datos |
| Integrar un servicio remoto nuevo | Toca la capa de red y los permisos |
| Subir la aplicación a una versión nueva del sistema | El más ingrato, y el único obligatorio y periódico |

Ese último merece atención: las tiendas exigen mantener el `targetSdk` actualizado, y cada versión del sistema restringe algo —el acceso al almacenamiento, la ejecución en segundo plano, los identificadores del aparato— que puede romper una aplicación que llevaba años funcionando.
