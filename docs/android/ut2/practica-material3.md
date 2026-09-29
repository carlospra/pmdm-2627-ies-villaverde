---
title: "Práctica · Material 3"
sidebar_label: "Práctica: Material 3"
slug: /android/ut2/material3-ejercicios
---

# Práctica · Material 3

**Miércoles 21/10 · individual · sin nota.** Teoría: [4 · Material 3](/android/ut2/material3). Sobre Greeting Card, con la tarjeta del 14/10.

## Ejercicio 1 · Scaffold y barra superior (15 min)

1. Añadid un icono con **New › Vector Asset › Clip art** (por ejemplo, *info*) y llamadlo `ic_info`.
2. Cread `PantallaTarjeta` con un `Scaffold` y una `CenterAlignedTopAppBar`: título «Mi tarjeta» (desde `strings.xml`), el icono como acción a la derecha y colores `primaryContainer` / `onPrimaryContainer`.
3. El contenido del `Scaffold` es vuestra tarjeta, con el `innerPadding` aplicado.
4. En `setContent`, sustituid el `Scaffold` de la plantilla por `PantallaTarjeta()`.
5. Comprobad en claro y en oscuro que la barra no tapa nada.

## Ejercicio 2 · Vuestro tema y una Card (10 min, y se termina en casa)

1. Generad un tema en el [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) con un color base que os guste y exportadlo para Jetpack Compose.
2. Sustituid `Color.kt` y `Theme.kt` de `ui/theme/`, ajustando el paquete y el nombre de la función del tema. `dynamicColor = false`.
3. Meted vuestra tarjeta dentro de un `ElevatedCard` con 4 dp de elevación.
4. Comprobad la app en claro y en oscuro.

## Entrega

No se entrega ni tiene nota: es lo que vuestro equipo necesita en el sprint 2.2 para la pantalla «Acerca de».
