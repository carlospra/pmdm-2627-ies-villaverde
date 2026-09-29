---
title: "Práctica · Kotlin"
sidebar_label: "Práctica: Kotlin"
slug: /android/ut2/kotlin-ejercicios
---

# Práctica · Kotlin

**Martes 13/10 · individual · ejercicio de clase del RA2.** Teoría: [1 · Kotlin para Android](/android/ut2/kotlin).

Hacedlos en [Kotlin Playground](https://play.kotlinlang.org/) o en Android Studio, y guardadlos todos en un fichero `kotlin_basico.kt`, con una función por ejercicio y una `main` que las llame. Si alguno no os sale, entregadlo igual con un comentario al principio:

```kotlin
// NO FUNCIONA: no compila.
// ERROR: Unresolved reference Colum, línea 32.
// HE PROBADO: revisar el nombre; era Column, con n al final.
```

## Ciclo 1 · Variables, plantillas y nulos

**1. Corrige los errores.** Este programa tiene tres errores. Arregladlo para que imprima las tres líneas:

```kotlin
fun main() {
    println("Hoy es martes"
    printLine("Mañana es miércoles")
    println(Tengo clase de PMDM)
}
```

**2. Variables y plantillas de texto.** Cread un `val` con vuestro nombre y un `var mensajesSinLeer` que empiece en 5. Sumadle 3 e imprimid, sin usar `+` para unir texto:

```text
Ana, tienes 8 mensajes sin leer.
```

Después intentad cambiar el valor del `val`. ¿Qué dice el error?

**3. Precio final.** Escribid `fun precioFinal(precio: Double, descuento: Int?, iva: Double = 0.21): Double`. El descuento es un porcentaje que puede no existir (`null`): en ese caso se aplica un 0 %. Se aplica primero el descuento y después el IVA. Imprimid el resultado con dos decimales (`"%.2f".format(total)`) para:

- `precioFinal(100.0, 10)` → 108.90
- `precioFinal(100.0, null)` → 121.00
- `precioFinal(50.0, 20, iva = 0.10)` → 44.00

## Ciclo 2 · if, when y bucles

**4. Notificaciones.** Escribid `fun mostrarNotificaciones(numero: Int)`. Con menos de 100, imprime «Tienes N notificaciones»; con 100 o más, «Tienes 99+ notificaciones». Probadla con 51 y con 135. Usad `if` como expresión.

**5. Precio de la entrada.** Escribid `fun precioEntrada(edad: Int, esLunes: Boolean): Int` que devuelva el precio con un `when`:

- Hasta 12 años: 5 €.
- De 13 a 60: 9 €, y 7 € si es lunes.
- Desde 61: 6 €.
- Una edad negativa o mayor de 120 devuelve -1.

**6. Estaciones.** Escribid `fun estacion(mes: Int): String` con un `when` (diciembre, enero y febrero son invierno; de marzo a mayo, primavera; de junio a agosto, verano; de septiembre a noviembre, otoño; cualquier otro número, «mes no válido»). Con un bucle `for`, imprimid los doce meses con su estación: `enero: invierno`…

## Ciclo 3 · Funciones y colecciones

**7. Argumentos con nombre y por defecto.** Escribid `fun saludar(nombre: String = "mundo", veces: Int = 1)` que imprima «Hola, nombre» tantas veces como diga `veces`. Llamadla así y comprobad qué imprime cada llamada:

```kotlin
saludar()
saludar("Ana")
saludar(veces = 3)
```

**8. Notas.** Con `val notas = listOf(4.5, 7.0, 9.25, 3.0, 6.5)` y **sin bucles**, imprimid: las notas aprobadas (`filter`), las notas redondeadas (`map` y `roundToInt`), la media con dos decimales, si hay algún 10 (`any`) y cuántos suspensos hay (`count`).

## Ciclo 4 · Clases, data class y enum · RA2 a

**9. Agenda de contactos.** Generad la estructura de clases de una agenda:

- Una `enum class TipoContacto` con `FAMILIA`, `AMIGO` y `TRABAJO`.
- Una `data class Contacto` con nombre, teléfono, tipo y un correo que puede no existir (`String?`, por defecto `null`).
- Una `class Agenda` con la lista de contactos **privada** y:
  - `agregar(contacto): Boolean`, que no añade un teléfono repetido y devuelve si lo ha añadido;
  - `buscar(texto): List<Contacto>`, por nombre y sin distinguir mayúsculas;
  - `porTipo(tipo): List<Contacto>`;
  - `cambiarTelefono(telefono, nuevo): Boolean`, usando `copy`;
  - `eliminar(telefono): Boolean`;
  - una propiedad `total` con el número de contactos.

En `main`, cread tres contactos, intentad añadir uno con un teléfono repetido, buscad, filtrad por tipo, cambiad un teléfono, imprimid el correo de alguien que no lo tiene mostrando «sin correo» (`?:`) y eliminad uno.

## Entrega

En la tarea **«UT2 · Kotlin básico»** del aula virtual, hoy antes de las 23:59:

- `MainActivity.kt` de la [práctica de la primera app](/android/ut2/primera-app) (07/10), con los tres comentarios del «rompe y arregla», y la captura de la app en vuestro móvil.
- `kotlin_basico.kt`, con los nueve ejercicios.

**Cómo se califica.** Es un ejercicio de clase del RA2. El ejercicio 9 (estructura de clases, RA2 a) vale la mitad de la nota; los ejercicios 1 a 8 y la primera app, la otra mitad. Norma de siempre: incompleto con explicación al principio, hasta un 8; sin explicación, suspenso; fuera de plazo, máximo 5.
