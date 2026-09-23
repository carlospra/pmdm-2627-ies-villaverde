---
title: "Kotlin para quien sabe Java"
slug: /android/ut1/kotlin
---

# Kotlin para quien sabe Java

Kotlin es el lenguaje que Google recomienda para Android. Funciona sobre la misma máquina que Java y usa las mismas clases de Android: cambia sobre todo la forma de escribir.

| Java | Kotlin |
|---|---|
| `int n = 0;` | `var n = 0` |
| `final String s = "hola";` | `val s = "hola"` (un `val` no se puede cambiar) |
| `String nombre = null;` | `var nombre: String? = null` (el `?` permite null) |
| `"Hola, " + nombre + "!"` | `"Hola, $nombre!"` |
| `int suma(int a, int b) { return a + b; }` | `fun suma(a: Int, b: Int): Int { return a + b }` |
| `System.out.println("hola");` | `println("hola")` |
| `class Main extends AppCompatActivity` | `class Main : ComponentActivity()` |
| `switch (x) { case 1: ...; break; }` | `when (x) { 1 -> ... }` |
| `for (int i = 0; i < 5; i++)` | `for (i in 0 until 5)` |

Sin punto y coma y sin `new`.

## Argumentos con nombre y por defecto

Las funciones pueden tener valores por defecto, y al llamarlas puedes decir a qué parámetro va cada valor:

```kotlin
fun saludar(nombre: String = "mundo", veces: Int = 1) {
    repeat(veces) { println("Hola, $nombre") }
}

fun main() {
    saludar()             // Hola, mundo
    saludar("Ana")        // Hola, Ana
    saludar(veces = 3)    // Hola, mundo (tres veces)
}
```

Compose usa esta forma de llamar en todas sus funciones.

## Nulos

Una variable de tipo `String` nunca puede valer null; una de tipo `String?` sí. Para usarla:

```kotlin
val longitud = nombre?.length      // null si nombre es null
val seguro = nombre ?: "anónimo"   // valor por defecto si es null
```

:::tip Truco
Si encuentras un ejemplo en Java, pégalo en un fichero `.kt`: Android Studio te ofrece convertirlo a Kotlin.
:::
