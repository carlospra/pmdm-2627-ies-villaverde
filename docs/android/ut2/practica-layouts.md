---
title: "Práctica · Layouts"
sidebar_label: "Práctica: layouts"
slug: /android/ut2/layouts-ejercicios
---

# Práctica · Layouts

**Martes 20/10 · individual · sin nota.** Teoría: [3 · Organizar la pantalla](/android/ut2/layouts). Hacedlos en un fichero nuevo del proyecto Greeting Card (`Layouts.kt`), cada uno en su función con su `@Preview`.

## Ejercicio 1 · Fila de un miembro del equipo (15 min)

Una fila que ocupa todo el ancho, con margen de 16 dp, y dentro, de izquierda a derecha:

1. Vuestra foto de la tarjeta del miércoles, redonda y de 64 dp.
2. Una columna con vuestro nombre (`titleMedium`) y vuestro rol en el equipo (`bodyMedium`), separada 16 dp de la foto.
3. Un botón «Seguir» **pegado al borde derecho**: usad `Spacer(Modifier.weight(1f))` antes del botón.

Todo centrado en vertical dentro de la fila, textos desde `strings.xml`, y el fondo de la fila del color `surfaceVariant` del tema con las esquinas redondeadas.

Esta fila es la que se repite en la pantalla «Acerca de» de vuestro proyecto (sprint 2.2).

## Ejercicio 2 · Cuatro zonas (10 min, y se termina en casa)

Dividid la pantalla entera en tres franjas **de la misma altura**, usando `weight`:

- **Arriba:** una zona de todo el ancho con el texto «Zona 1» en el centro.
- **En medio:** dos zonas lado a lado, la de la izquierda **el doble de ancha** que la de la derecha, con «Zona 2» y «Zona 3» en el centro de cada una.
- **Abajo:** una zona de todo el ancho con «Zona 4» **abajo y centrado**.

Cada zona con un color distinto del tema (`primaryContainer`, `secondaryContainer`, `tertiaryContainer`, `surfaceVariant`), no colores escritos a mano.

## Entrega

No se entrega ni tiene nota: el ejercicio 1 lo reutiliza vuestro equipo en el sprint 2.2.
