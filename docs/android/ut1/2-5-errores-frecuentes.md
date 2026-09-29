---
title: "2.5 · Los errores que más se repiten al empezar"
sidebar_label: "2.5 · Los diez errores"
sidebar_position: 25
slug: /android/ut1/2-5-errores-frecuentes
---

# 2.5 · Los errores que más se repiten al empezar

Una lista corta que resume la unidad. Pasadla como comprobación antes de dar por terminada cualquier entrega del módulo.

1. Operaciones lentas en el hilo principal → la aplicación se congela y el sistema ofrece cerrarla.
2. Cargar imágenes a tamaño completo → cierre por falta de memoria.
3. No contemplar la rotación → se pierde lo que el usuario había escrito.
4. Suponer que hay conexión → excepción no controlada en cuanto se entra en un ascensor.
5. Pedir todos los permisos al arrancar → el usuario los deniega y la aplicación no funciona.
6. No comprobar el permiso antes de cada uso → fallo cuando el usuario lo revoca.
7. Probar en un solo dispositivo → fallos en producción en versiones y tamaños no probados.
8. Dejar credenciales o claves en el código → aparecen en cuanto alguien descompila el paquete.
9. No liberar recursos —reproductores, cámara, sensores, *listeners*— al pasar a segundo plano.
10. Olvidar la clave de firma → imposibilidad definitiva de publicar actualizaciones.
