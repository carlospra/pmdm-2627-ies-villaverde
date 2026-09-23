---
title: "Práctica 1 · Tu primera app"
slug: /android/ut1/primera-app
---

# Práctica 1 · Tu primera app

Una app con un saludo: la creas, la ejecutas y la vas cambiando.

## 1. Crear el proyecto

```text
New Project → Phone and Tablet → Empty Activity → Next
Name:          Greeting Card
Minimum SDK:   el que viene por defecto
→ Finish
```

:::warning Ojo con la plantilla
Elige **Empty Activity**, no *Empty Views Activity*: esa hace las pantallas con XML, la forma antigua. Nosotros usamos Jetpack Compose.
:::

Espera a que Gradle termine sin errores (barra de abajo). Después abre `MainActivity.kt` en la vista **Split** para ver a la vez el código y la vista previa.

## 2. Preparar dónde ejecutar

- **Emulador:** `Tools → Device Manager → + → Create Virtual Device`, un teléfono Pixel y la imagen del sistema recomendada. Pesa más de 1 GB.
- **Tu móvil:** activa las opciones de desarrollador (normalmente, pulsando siete veces en *Número de compilación*, dentro de Ajustes → Información del teléfono), activa la **depuración USB** y conéctalo. Si tu ordenador va justo de memoria, es la mejor opción.

## 3. Ejecutar

Elige el dispositivo en la barra de arriba y pulsa **Run 'app'**. Tiene que aparecer «Hello Android!».

## 4. Cambiar el texto del saludo

En la función `Greeting`:

```kotlin
Text(text = "Hola, me llamo $name!", modifier = modifier)
```

y pon tu nombre donde ahora pone `"Android"`, tanto en `GreetingPreview` como en `setContent`.

## 5. Fondo de color y margen

```kotlin
@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Surface(color = Color.Cyan) {
        Text(
            text = "Hola, me llamo $name!",
            modifier = modifier.padding(24.dp)
        )
    }
}
```

Lo que salga en rojo se importa con el cursor encima y **Alt + Intro**. Si para `Color` te ofrece varias opciones, elige `androidx.compose.ui.graphics.Color`.

## 6. Dos líneas de texto

```kotlin
@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Surface(color = Color.Cyan) {
        Column(modifier = modifier.padding(24.dp)) {
            Text(text = "Hola, me llamo $name!")
            Text(text = "Estudio 2º de DAM en el IES Villaverde")
        }
    }
}
```

Ejecútala otra vez para verla en el emulador o en tu móvil.

## 7. Rompe y arregla

Provoca estos tres errores a propósito. Para cada uno: hazlo, lee el error, apúntalo en un comentario al principio de `MainActivity.kt` y deshazlo.

1. Borra la línea `@Composable` que hay encima de `fun Greeting`.
2. Cambia el primer `Text(text = "Hola, me llamo $name!")` por `Text(text = 5)`.
3. En `setContent`, cambia `Greeting(name = "Ana", ...)` por `Greeting(nombre = "Ana", ...)`.

Con este formato, el mismo que usarás cuando un ejercicio no te salga:

```kotlin
// NO FUNCIONA: no compila.
// ERROR: Unresolved reference Colum, línea 32.
// HE PROBADO: revisar el nombre; era Column, con n al final.
```

La entrega está explicada al final de la [práctica 2](/android/ut1/ejercicios).
