---
title: "Tu primera app"
slug: /android/ut1/primera-app
---

# Tu primera app: Greeting Card

Una app que muestra un saludo con tu nombre. Haz cada paso **en tu propio ordenador** y una captura al terminarlo: las necesitas para el cuaderno del día 1.

## Paso 1. Abrir Android Studio y ver la versión

Abre Android Studio, entra en `Help → About` y apunta la versión.

## Paso 2. Crear el proyecto

En la pantalla de bienvenida, pulsa **New Project** (con un proyecto abierto: `File → New → New Project`) y rellena así:

```text
Phone and Tablet → Empty Activity → Next
Name:          Greeting Card
Minimum SDK:   el que viene por defecto
→ Finish
```

:::warning Ojo con la plantilla
Elige **Empty Activity**, no *Empty Views Activity*: esa hace las pantallas con XML, la forma antigua. Nosotros usamos Jetpack Compose.
:::

Al pulsar Finish, Android Studio descarga lo que necesita (Gradle). La primera vez tarda varios minutos; verás el progreso en la barra de abajo.

## Paso 3. Localizar MainActivity.kt y la vista previa

En el panel Project, con la vista Android, abre:

```text
app → kotlin+java (o java) → com.example.greetingcard → MainActivity.kt
```

Pasa a la vista **Split** (arriba a la derecha del editor) para ver a la vez el código y la vista previa. Si la vista previa pide compilar, pulsa **Build & Refresh**.

## Paso 4. Cambiar el texto del saludo

En la función `Greeting`, cambia el texto:

```kotlin
Text(text = "Hola, me llamo $name!", modifier = modifier)
```

y pon tu nombre donde ahora pone `"Android"`, tanto en `GreetingPreview` como en `setContent`. La vista previa se actualiza sola.

## Paso 5. Cambiar el color de fondo y el margen

Envuelve el texto en un `Surface` de color y dale un margen:

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

Lo que salga en rojo se importa poniendo el cursor encima y pulsando **Alt + Intro**. Si para `Color` te ofrece varias opciones, elige `androidx.compose.ui.graphics.Color`.

## Paso 6. Ejecutar la app en el emulador

1. Abre `Tools → Device Manager` y pulsa **+ → Create Virtual Device**.
2. Elige un teléfono Pixel → Next → la imagen del sistema recomendada → Next → Finish.
3. Elige ese dispositivo en la barra de arriba y pulsa **Run 'app'** (el triángulo verde).

:::tip Si el emulador no arranca
Usa tu móvil: activa las opciones de desarrollador (normalmente, pulsando siete veces en *Número de compilación*, dentro de Ajustes → Información del teléfono), activa la **depuración USB**, conéctalo y elígelo en la barra de arriba.
:::

## Paso 7. Entregar el cuaderno

El cuaderno del día 1 recoge, para cada paso del 1 al 6, tu captura y tres respuestas: **qué** has hecho, **por qué** y **para qué** sirve. La plantilla y la tarea están en el aula virtual. Sube solo el cuaderno en PDF, no el proyecto.
