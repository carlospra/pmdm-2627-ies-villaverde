---
title: "4 · Material 3: Scaffold, barra superior y tema"
sidebar_label: "4 · Material 3: Scaffold y tema"
slug: /android/ut2/material3
---

# 4 · Material 3: Scaffold, barra superior y tema

Hasta ahora las pantallas eran una tarjeta suelta. Una pantalla de verdad tiene una estructura: barra superior, contenido y, a veces, barra inferior o un botón flotante. **Material 3** es el sistema de diseño de Google que da esa estructura y un aspecto coherente. Sigue siendo RA2 b: las clases que modelan **ventanas** y controles.

## 4.1 · Scaffold: el esqueleto de una pantalla

```kotlin
Scaffold(
    topBar = { /* barra superior */ },
    bottomBar = { /* barra inferior (opcional) */ },
    floatingActionButton = { /* botón flotante (opcional) */ },
) { innerPadding ->
    Contenido(modifier = Modifier.padding(innerPadding))
}
```

- `Scaffold` coloca cada pieza en su sitio: la barra arriba, el botón flotante abajo a la derecha y el contenido en medio.
- **`innerPadding`** es el espacio que ocupan las barras (y las del sistema, porque la app se dibuja de borde a borde). Hay que aplicarlo al contenido; si no, queda tapado por la barra superior.
- La plantilla Empty Activity ya trae un `Scaffold` en `setContent`. En una app con varias pantallas, lo normal es que **cada pantalla tenga el suyo**, con su título y sus botones.

## 4.2 · La barra superior

```kotlin
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PantallaTarjeta(modifier: Modifier = Modifier) {
    Scaffold(
        modifier = modifier,
        topBar = {
            CenterAlignedTopAppBar(
                title = { Text(stringResource(R.string.titulo_tarjeta)) },
                actions = {
                    IconButton(onClick = { }) {
                        Icon(
                            painter = painterResource(R.drawable.ic_info),
                            contentDescription = stringResource(R.string.informacion),
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.onPrimaryContainer,
                ),
            )
        },
    ) { innerPadding ->
        Tarjeta(modifier = Modifier.padding(innerPadding))
    }
}
```

- Hay cuatro barras superiores: `TopAppBar` (título a la izquierda), `CenterAlignedTopAppBar` (centrado), `MediumTopAppBar` y `LargeTopAppBar` (título más grande). Todas llevan `@OptIn(ExperimentalMaterial3Api::class)`: Google aún puede cambiar su API.
- `navigationIcon` va a la izquierda (la flecha de volver) y `actions`, a la derecha.
- **Los iconos**: en Android Studio, **clic derecho en `res` › New › Vector Asset › Clip art** y elegís uno de la colección de Material. Se guarda como `res/drawable/ic_info.xml` y se usa con `painterResource`. Como toda imagen, con su `contentDescription`.

## 4.3 · El tema completo de la app

El tema de Material 3 son tres cosas: **colores** (`colorScheme`), **tipografía** (`typography`) y **formas** (`shapes`). La plantilla los crea en `ui/theme/` y los junta en la función del tema:

```kotlin
MaterialTheme(
    colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme,
    typography = Typography,
    content = content,
)
```

Un esquema de color de Material 3 no son dos o tres colores: son unos treinta **papeles** (`primary`, `onPrimary`, `primaryContainer`, `surface`, `surfaceVariant`…), en claro y en oscuro, pensados para que siempre haya contraste. No se hacen a mano:

1. Entrad en el [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) y elegid un color base (el de vuestra app).
2. **Export › Jetpack Compose (Theme.kt)**: descarga `Color.kt`, `Theme.kt` y `Type.kt`.
3. Sustituid los de `ui/theme/`, cambiando el nombre del paquete y el de la función del tema por los de vuestro proyecto.
4. Comprobad que `dynamicColor` sea `false` si queréis que se vean vuestros colores (apartado 2.5).

## 4.4 · Card: agrupar contenido

```kotlin
Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    colors = CardDefaults.cardColors(
        containerColor = MaterialTheme.colorScheme.surfaceVariant,
    ),
) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text("Tortilla de patatas", style = MaterialTheme.typography.titleMedium)
        Text("Plato español · 45 min", style = MaterialTheme.typography.bodyMedium)
    }
}
```

- `Card` es una superficie con esquinas redondeadas para agrupar lo que va junto: exactamente lo que será cada elemento de vuestro catálogo.
- Hay tres: `Card` (con relleno), `ElevatedCard` (con sombra; `CardDefaults.cardElevation(defaultElevation = 4.dp)`) y `OutlinedCard` (con borde).
- Las esquinas salen de `MaterialTheme.shapes`: si cambiáis las formas del tema, cambian en toda la app.

:::tip Ideas clave
- `Scaffold` da la estructura de una pantalla; su `innerPadding` se aplica siempre al contenido.
- Las barras superiores llevan `@OptIn(ExperimentalMaterial3Api::class)`; los iconos se añaden con Vector Asset y se usan con `painterResource`.
- El tema son colores, tipografía y formas; el esquema de color se genera con el Material Theme Builder, no a mano.
- `Card`, `ElevatedCard` y `OutlinedCard` agrupan contenido: cada elemento del catálogo irá en una.
:::

## Para ampliar

- [Material Design 3 en Compose](https://developer.android.com/develop/ui/compose/designsystems/material3) · [Barras de aplicación](https://developer.android.com/develop/ui/compose/components/app-bars) · [Tarjetas](https://developer.android.com/develop/ui/compose/components/card) · [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
