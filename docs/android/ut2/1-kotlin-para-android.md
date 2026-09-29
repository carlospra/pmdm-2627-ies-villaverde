---
title: "1 · Kotlin para Android"
sidebar_label: "1 · Kotlin para Android"
slug: /android/ut2/kotlin
---

# 1 · Kotlin para Android

Kotlin es el lenguaje que Google recomienda para Android desde 2019. Funciona sobre la misma máquina que Java y usa las mismas clases de Android: lo que cambia es la forma de escribir, que es más corta y más segura. Este apartado recoge lo que necesitáis del lenguaje para programar apps, contado desde lo que ya sabéis de Java.

Para practicar sin crear un proyecto está [Kotlin Playground](https://play.kotlinlang.org/), un editor de Kotlin en el navegador. También vale un fichero `.kt` con una función `main` dentro de vuestro proyecto de Android Studio: se ejecuta con el triángulo verde que aparece a su izquierda.

| Java | Kotlin |
|---|---|
| `int n = 0;` | `var n = 0` |
| `final String s = "hola";` | `val s = "hola"` |
| `String nombre = null;` | `var nombre: String? = null` |
| `"Hola, " + nombre + "!"` | `"Hola, $nombre!"` |
| `int suma(int a, int b) { return a + b; }` | `fun suma(a: Int, b: Int): Int { return a + b }` |
| `System.out.println("hola");` | `println("hola")` |
| `class Main extends AppCompatActivity` | `class Main : ComponentActivity()` |
| `switch (x) { case 1: ...; break; }` | `when (x) { 1 -> ... }` |
| `for (int i = 0; i < 5; i++)` | `for (i in 0 until 5)` |

Sin punto y coma y sin `new`.

## 1.1 · Variables, tipos y nulos

```kotlin
val nombre = "Ana"            // val: no se puede reasignar (como final)
var mensajes = 5              // var: se puede cambiar
mensajes += 3
val media: Double = 7.5       // el tipo se puede escribir, pero Kotlin lo deduce
println("$nombre tiene $mensajes mensajes")      // plantilla de texto
println("El doble es ${mensajes * 2}")          // expresión dentro de ${ }
```

- **`val` antes que `var`.** Usad `val` siempre que el valor no vaya a cambiar: el código es más fácil de seguir y el compilador os avisa si intentáis reasignarlo.
- **Tipos.** `Int`, `Long`, `Double`, `Boolean`, `Char` y `String`. No hay tipos primitivos aparte: todo es un objeto, y el compilador lo optimiza.
- **Conversiones explícitas.** Un `Int` no se convierte solo en `Double`: `n.toDouble()`, `"42".toInt()`, y `"hola".toIntOrNull()`, que devuelve `null` en lugar de fallar.

### Nulos

La diferencia más importante con Java. Una variable de tipo `String` **nunca** puede valer `null`; una de tipo `String?` sí, y el compilador os obliga a tratar ese caso antes de usarla:

```kotlin
var email: String? = null
val longitud = email?.length          // ?.  : si es null, el resultado es null
val mostrar = email ?: "sin correo"   // ?:  : valor por defecto si es null (operador Elvis)
```

Así desaparece casi entera la `NullPointerException`. Existe `!!` («confío en que no es null»), pero si os equivocáis la app se cierra: evitadlo.

## 1.2 · Decisiones y repeticiones

En Kotlin, `if` y `when` **devuelven un valor**, así que se pueden asignar:

```kotlin
val texto = if (numero < 100) "$numero" else "99+"

val precio = when (edad) {
    in 0..12 -> 5            // rango: de 0 a 12, ambos incluidos
    in 13..60 -> 9
    else -> 6                // como expresión, when necesita else
}
```

`when` sustituye al `switch` de Java, sin `break` y aceptando valores, varios valores separados por comas y rangos.

Los rangos también sirven para repetir:

```kotlin
for (i in 1..5) println(i)             // 1 2 3 4 5
for (i in 0 until 5) println(i)        // 0 1 2 3 4
for (i in 10 downTo 0 step 2) println(i)
for (nombre in listOf("Ana", "Luis")) println(nombre)
```

`while` y `do … while` funcionan como en Java, con `break` y `continue`.

## 1.3 · Funciones y lambdas

```kotlin
fun area(base: Double, altura: Double): Double {
    return base * altura / 2
}

fun doble(x: Int) = x * 2                      // función de una sola expresión

fun saludar(nombre: String = "mundo", veces: Int = 1) {   // valores por defecto
    repeat(veces) { println("Hola, $nombre") }
}

saludar()                  // Hola, mundo
saludar("Ana")             // Hola, Ana
saludar(veces = 3)         // argumento con nombre
```

Una función que no devuelve nada devuelve `Unit`, y no hace falta escribirlo.

Una **lambda** es una función sin nombre que se pasa como valor, entre llaves. Si tiene un solo parámetro, se llama `it`:

```kotlin
val cuadrado = { x: Int -> x * x }
println(cuadrado(4))                     // 16
listOf(1, 2, 3).forEach { println(it) }
```

Esto es lo que veréis en Compose todo el tiempo: `Button(onClick = { contador++ })` pasa una lambda que se ejecuta al pulsar. Y los argumentos con nombre y por defecto son la forma en que se llaman todas sus funciones.

## 1.4 · Colecciones

```kotlin
val notas = listOf(4.5, 7.0, 9.25, 3.0)          // lista de solo lectura
val tareas = mutableListOf("Estudiar")           // lista que se puede cambiar
tareas.add("Entregar")

val capitales = mapOf("España" to "Madrid", "Francia" to "París")
println(capitales["España"])                     // Madrid

val aprobadas = notas.filter { it >= 5 }         // [7.0, 9.25]
val redondeadas = notas.map { it.roundToInt() }  // import kotlin.math.roundToInt
println(notas.average())
println(notas.any { it == 10.0 })                // false
println(notas.count { it < 5 })                  // 2
```

Por defecto las colecciones son **de solo lectura** (`List`, `Set`, `Map`), y solo las `mutable…` se pueden modificar. En Compose esto importa: en lugar de cambiar una lista, se crea una nueva, y así la pantalla sabe que tiene que redibujarse.

## 1.5 · Clases, data class y enum · RA2 a

El criterio RA2 a pide **generar la estructura de clases que necesita una aplicación**. En Kotlin se escribe mucho más corto que en Java:

```kotlin
class Agenda {
    private val contactos = mutableListOf<Contacto>()   // propiedad privada

    val total: Int                                       // propiedad calculada
        get() = contactos.size

    fun agregar(contacto: Contacto) {                    // método
        contactos.add(contacto)
    }
}
```

El constructor va en la misma línea que el nombre, y cada parámetro marcado con `val` o `var` es ya una propiedad: no hacen falta getters ni setters.

Una **data class** es una clase pensada para guardar datos. Kotlin le genera `toString`, `equals`, `hashCode` y `copy`:

```kotlin
enum class TipoContacto { FAMILIA, AMIGO, TRABAJO }

data class Contacto(
    val nombre: String,
    val telefono: String,
    val tipo: TipoContacto,
    val email: String? = null,
)

val ana = Contacto("Ana", "600111222", TipoContacto.AMIGO)
println(ana)                                   // Contacto(nombre=Ana, telefono=600111222, …)
val anaNueva = ana.copy(telefono = "699000000") // copia cambiando un campo
println(ana == Contacto("Ana", "600111222", TipoContacto.AMIGO))   // true: compara el contenido
```

Una **enum class** es un tipo con un conjunto cerrado de valores, perfecto para `when`.

Dos detalles más: las clases son **cerradas por defecto** (para heredar de una hay que marcarla `open`), y la herencia se escribe con dos puntos, como en `class MainActivity : ComponentActivity()`.

En vuestro proyecto, cada elemento del catálogo será una `data class`, y el estado de cada pantalla (el `UiState` de la UT3) también.

:::tip Ideas clave
- `val` antes que `var`; Kotlin deduce los tipos.
- `String` nunca es null; `String?` sí, y se trata con `?.` y `?:`.
- `if` y `when` devuelven valor; `when` admite rangos.
- Funciones con parámetros por defecto y con nombre; las lambdas van entre llaves, y `it` es su parámetro.
- Colecciones de solo lectura por defecto; `filter`, `map`, `any` y `count` sustituyen a muchos bucles.
- `data class` para los datos, `enum class` para los valores cerrados: la estructura de clases de la app (RA2 a).
:::

:::info Truco
Si encontráis un ejemplo en Java, pegadlo en un fichero `.kt`: Android Studio os ofrece convertirlo a Kotlin.
:::

## Para ampliar

- [Documentación de Kotlin](https://kotlinlang.org/docs/home.html), con un recorrido inicial para quien viene de Java.
- [Kotlin desde cero, en vídeo](https://www.youtube.com/watch?v=i1PNVWd_dTY) (opcional, en castellano): del minuto 17 al 3:43 cubre todo este apartado, con ejercicios.
