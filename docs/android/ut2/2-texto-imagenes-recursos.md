---
title: "2 · Texto, imágenes y recursos"
sidebar_label: "2 · Texto, imágenes y recursos"
slug: /android/ut2/texto-imagenes-recursos
---

# 2 · Texto, imágenes y recursos

El criterio RA2 b pide **analizar y utilizar las clases que modelan ventanas, menús, alertas y controles**. En Compose, los controles son funciones: este apartado recoge las dos más básicas, `Text` e `Image`, y los recursos de los que salen sus textos, imágenes y colores.

## 2.1 · Funciones composables y vista previa

```kotlin
@Composable
fun Saludo(nombre: String, modifier: Modifier = Modifier) {
    Text(text = "Hola, $nombre", modifier = modifier)
}

@Preview(showBackground = true, name = "Claro")
@Preview(showBackground = true, uiMode = Configuration.UI_MODE_NIGHT_YES, name = "Oscuro")
@Composable
fun SaludoPreview() {
    GreetingCardTheme { Saludo("Ana") }
}
```

- Una función **`@Composable`** describe un trozo de pantalla. Su nombre empieza por mayúscula y no devuelve nada: en lugar de devolver un objeto, «emite» interfaz.
- Describís **qué** se ve según los datos; cuando los datos cambian, Compose vuelve a ejecutar la función y redibuja. A eso se le llama **recomposición**, y lo veremos a fondo con el estado.
- Por convención reciben un `modifier: Modifier = Modifier`, para que quien las usa pueda cambiar su tamaño o sus márgenes.
- Una función con **`@Preview`** se dibuja en la vista *Split* sin instalar la app. No puede tener parámetros, y se pueden poner varias para ver la misma pantalla en claro y en oscuro o en distintos tamaños (`widthDp`). `Configuration` se importa de `android.content.res`.

## 2.2 · Text

```kotlin
Text(
    text = "PMDM · 2º DAM",
    style = MaterialTheme.typography.headlineMedium,
    color = MaterialTheme.colorScheme.primary,
    fontWeight = FontWeight.Bold,
    textAlign = TextAlign.Center,
    maxLines = 1,
    overflow = TextOverflow.Ellipsis,
)
```

- **Estilo del tema antes que tamaños a mano.** Material 3 define una escala de estilos; usadla y toda la app será coherente:

| Estilo | Para qué |
|---|---|
| `displayLarge` … `displaySmall` | Números o textos muy grandes y cortos |
| `headlineLarge` … `headlineSmall` | Títulos de pantalla |
| `titleLarge` … `titleSmall` | Títulos de tarjetas y secciones |
| `bodyLarge` … `bodySmall` | Texto normal |
| `labelLarge` … `labelSmall` | Botones, etiquetas y pies |

- Si hace falta un tamaño concreto, va en **`sp`** y no en `dp`: los `sp` respetan el tamaño de letra que el usuario ha elegido en su móvil (accesibilidad). Para todo lo demás (márgenes, tamaños de imagen), `dp`.
- `maxLines` y `overflow = TextOverflow.Ellipsis` cortan con «…» los textos que no caben.

## 2.3 · Los textos van en strings.xml

Los textos que ve el usuario no se escriben en el código, sino en `res/values/strings.xml`, y se leen con `stringResource`:

```xml
<!-- res/values/strings.xml -->
<resources>
    <string name="app_name">Recetario</string>
    <string name="saludo">Hola, me llamo %1$s</string>
    <string name="mensajes">Tienes %1$d mensajes sin leer</string>
</resources>
```

```kotlin
Text(text = stringResource(R.string.saludo, "Ana"))     // Hola, me llamo Ana
Text(text = stringResource(R.string.mensajes, 8))
```

**Por qué.** Para traducir la app basta con añadir `res/values-en/strings.xml` con los mismos nombres: Android elige el fichero según el idioma del móvil. Es la idea de los recursos alternativos que vimos en la UT1: el código no cambia, cambia el recurso.

- `%1$s` es el primer argumento como texto y `%1$d`, como número entero; `%2$s`, el segundo, y así.
- Android Studio lo hace por vosotros: cursor sobre el texto, **Alt + Intro › Extract string resource**.
- Para probar la traducción: en el emulador, **Ajustes › Sistema › Idiomas**, y poned el inglés el primero.

## 2.4 · Image

1. Añadid la imagen al proyecto: **Resource Manager › + › Import Drawables**, o copiadla a `app/src/main/res/drawable/`. El nombre solo puede tener minúsculas, números y guion bajo (`logo_equipo.png`).
2. Android genera una referencia en la clase `R`: `R.drawable.logo_equipo`.
3. Se carga con `painterResource` y se muestra con `Image`:

```kotlin
Image(
    painter = painterResource(R.drawable.logo_equipo),
    contentDescription = stringResource(R.string.logo_descripcion),
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .size(120.dp)
        .clip(CircleShape),
)
```

- **`contentDescription`** es lo que lee el lector de pantalla a una persona ciega: describid la imagen si aporta información y poned `null` si es solo decorativa. No es opcional: es accesibilidad.
- **`contentScale`**: `Crop` recorta para llenar sin deformar; `Fit` la muestra entera aunque sobre espacio.
- `size` fija el tamaño en `dp` y `clip(CircleShape)` la recorta en círculo (`RoundedCornerShape(16.dp)`, con esquinas redondeadas).
- Las imágenes vectoriales (iconos) se añaden con **New › Vector Asset**, y se escalan sin perder calidad.
- Usad solo imágenes que podáis usar: propias, o con licencia libre (CC0 o similar), anotando de dónde salen.

## 2.5 · Colores y tema de la app

La plantilla crea en `ui/theme/` el tema de **Material Design 3**: `Color.kt` (los colores), `Type.kt` (la tipografía) y `Theme.kt` (el tema que lo junta todo). En el código, los colores se piden al tema por su **papel**, no por su valor:

```kotlin
Text(text = "…", color = MaterialTheme.colorScheme.primary)
Surface(color = MaterialTheme.colorScheme.surfaceVariant) { … }
```

Así la app funciona en modo claro y oscuro sin tocar nada.

:::warning El color dinámico
En `Theme.kt`, la plantilla trae `dynamicColor = true`: desde Android 12, la app toma los colores del fondo de pantalla del usuario. Si queréis que vuestra app tenga **sus** colores (la identidad de vuestro proyecto), poned `dynamicColor = false` y definid vuestros colores en `Color.kt`.
:::

:::tip Ideas clave
- Una función `@Composable` describe un trozo de pantalla; `@Preview` la dibuja sin instalar la app.
- Estilos de texto del tema (`MaterialTheme.typography`) antes que tamaños a mano; si hace falta, en `sp`.
- Todos los textos en `strings.xml`, leídos con `stringResource`: así se traduce sin tocar el código.
- Imágenes en `res/drawable`, con `painterResource` y siempre con `contentDescription`.
- Colores por su papel en el tema (`MaterialTheme.colorScheme`); `dynamicColor = false` para tener colores propios.
:::

## Para ampliar

- [Texto en Compose](https://developer.android.com/develop/ui/compose/text) · [Imágenes en Compose](https://developer.android.com/develop/ui/compose/graphics/images/loading) · [Recursos de cadenas](https://developer.android.com/guide/topics/resources/string-resource) · [Tema de Material 3 en Compose](https://developer.android.com/develop/ui/compose/designsystems/material3)
