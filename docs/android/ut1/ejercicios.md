---
title: "Práctica · Kotlin básico"
sidebar_label: "Práctica: Kotlin básico"
slug: /android/ut2/kotlin-ejercicios
---

# Práctica · Kotlin básico

Si alguno no te sale, entrégalo igual con un comentario al principio:

```kotlin
// NO FUNCIONA: no compila.
// ERROR: Unresolved reference Colum, línea 32.
// HE PROBADO: revisar el nombre; era Column, con n al final.
```

Hazlos en [Kotlin Playground](https://play.kotlinlang.org/), un editor de Kotlin en el navegador, o en Android Studio. Guárdalos todos en `kotlin_basico.kt`, con una función por ejercicio y una `main` que las llame.

**1. Corrige los errores.** Este programa tiene tres errores. Arréglalo para que imprima las tres líneas:

```kotlin
fun main() {
    println("Hoy es martes"
    printLine("Mañana es miércoles")
    println(Tengo clase de PMDM)
}
```

**2. Variables y plantillas de texto.** Crea un `val` con tu nombre y un `var mensajesSinLeer` que empiece en 5. Súmale 3 e imprime, sin usar `+` para unir texto:

```text
Ana, tienes 8 mensajes sin leer.
```

Después intenta cambiar el valor del `val`. ¿Qué dice el error?

**3. Notificaciones.** Escribe `fun mostrarNotificaciones(numero: Int)`. Con menos de 100, imprime «Tienes N notificaciones»; con 100 o más, «Tienes 99+ notificaciones». Pruébala con 51 y con 135.

**4. Precio de la entrada.** Escribe `fun precioEntrada(edad: Int, esLunes: Boolean): Int` que devuelva el precio con un `when`:

- Hasta 12 años: 5 €.
- De 13 a 60: 9 €, y 7 € si es lunes.
- Desde 61: 6 €.
- Una edad negativa o mayor de 120 devuelve -1.

Pista: en un `when` se comprueban rangos con `in 0..12`.

**5. Argumentos con nombre y por defecto.** Escribe `fun saludar(nombre: String = "mundo", veces: Int = 1)` que imprima «Hola, nombre» tantas veces como diga `veces`. Llámala así y comprueba qué imprime cada llamada:

```kotlin
saludar()
saludar("Ana")
saludar(veces = 3)
```

## Entrega

En la tarea **«UT2 · Kotlin básico»** del aula virtual, al acabar la sesión:

- `MainActivity.kt`, de la [práctica de la primera app](/android/ut2/primera-app), con los tres comentarios del «rompe y arregla».
- `kotlin_basico.kt`, con los cinco ejercicios de esta práctica.
