---
title: "3 · Organizar la pantalla: Row, Column, Box y Modifier"
sidebar_label: "3 · Row, Column, Box y Modifier"
slug: /android/ut2/layouts
---

# 3 · Organizar la pantalla: Row, Column, Box y Modifier

Una pantalla de verdad tiene muchos elementos colocados unos respecto a otros. En Compose no hay un editor de arrastrar y soltar: la disposición se escribe con tres contenedores que se meten unos dentro de otros, y se ajusta con modificadores. Sigue siendo RA2 b: los controles y cómo se organizan.

## 3.1 · Los tres contenedores

| Contenedor | Coloca a sus hijos… | Se ajusta con |
|---|---|---|
| `Column` | Uno debajo de otro | `verticalArrangement` y `horizontalAlignment` |
| `Row` | Uno al lado de otro | `horizontalArrangement` y `verticalAlignment` |
| `Box` | Unos encima de otros | `contentAlignment` y, en cada hijo, `Modifier.align(…)` |

```kotlin
Row(verticalAlignment = Alignment.CenterVertically) {
    Image(
        painter = painterResource(R.drawable.foto),
        contentDescription = null,
        modifier = Modifier.size(64.dp).clip(CircleShape),
    )
    Column(modifier = Modifier.padding(start = 16.dp)) {
        Text(text = "Ana García", style = MaterialTheme.typography.titleMedium)
        Text(text = "Scrum Master", style = MaterialTheme.typography.bodyMedium)
    }
}
```

## 3.2 · Arrangement y Alignment

La regla para no liarse: **Arrangement reparte en el eje principal** del contenedor (vertical en `Column`, horizontal en `Row`) y **Alignment alinea en el eje contrario**.

| En el eje principal (`Arrangement`) | Qué hace |
|---|---|
| `Start` / `Top`, `Center`, `End` / `Bottom` | Todos juntos al principio, en el centro o al final |
| `SpaceBetween` | El primero pegado al principio, el último al final y el resto repartido |
| `SpaceAround` · `SpaceEvenly` | Espacio repartido alrededor o entre todos por igual |
| `spacedBy(8.dp)` | Una separación fija entre cada dos |

| En el eje contrario (`Alignment`) | En `Row` | En `Column` |
|---|---|---|
| Principio | `Top` | `Start` |
| Centro | `CenterVertically` | `CenterHorizontally` |
| Final | `Bottom` | `End` |

En un `Box`, `contentAlignment = Alignment.Center` coloca a todos los hijos en el centro, y cada hijo puede ir a otro sitio con `Modifier.align(Alignment.BottomEnd)`.

## 3.3 · Modifier: el orden importa

Un `Modifier` cambia el tamaño, los márgenes, el fondo o el comportamiento de un elemento. Se encadenan con puntos y **se aplican en orden**, de fuera hacia dentro:

```kotlin
Modifier.padding(16.dp).background(Color.Yellow)   // margen FUERA del amarillo
Modifier.background(Color.Yellow).padding(16.dp)   // el amarillo lleva el margen DENTRO
```

| Modificador | Qué hace |
|---|---|
| `fillMaxSize()` · `fillMaxWidth()` · `fillMaxHeight()` | Ocupa todo el espacio disponible, todo el ancho o todo el alto |
| `size(64.dp)` · `width(…)` · `height(…)` | Tamaño fijo |
| `padding(16.dp)` · `padding(horizontal = 16.dp, vertical = 8.dp)` | Margen alrededor |
| `background(color, shape)` | Fondo, con forma opcional |
| `clip(CircleShape)` · `border(1.dp, color, shape)` | Recorta o dibuja un borde |
| `clickable { … }` | Hace pulsable cualquier elemento |

Por convención, cada función composable recibe un `modifier: Modifier = Modifier` y lo aplica a su contenedor exterior: así quien la usa decide su tamaño y su posición.

## 3.4 · Repartir el espacio: weight y Spacer

Dentro de un `Row` o una `Column`, `Modifier.weight(1f)` reparte **el espacio que sobra** en proporción a los pesos:

```kotlin
Row(modifier = Modifier.fillMaxWidth()) {
    Box(Modifier.weight(2f).height(80.dp).background(MaterialTheme.colorScheme.primaryContainer))
    Box(Modifier.weight(1f).height(80.dp).background(MaterialTheme.colorScheme.tertiaryContainer))
}   // el primero ocupa dos tercios y el segundo, uno
```

- `weight` solo funciona en los **hijos directos** de un `Row` o una `Column`: fuera de ellos no compila.
- Un **`Spacer`** es un hueco vacío: `Spacer(Modifier.height(16.dp))` separa dos elementos, y `Spacer(Modifier.weight(1f))` dentro de un `Row` empuja lo que venga detrás hasta el final.

## 3.5 · Cómo se construye una pantalla

1. **Dibujadla** en papel o sobre una captura, y marcad las filas y las columnas.
2. Id **de fuera hacia dentro**: el contenedor exterior (casi siempre una `Column` que ocupa toda la pantalla), después cada fila o bloque.
3. Cada bloque que se repite o tiene sentido propio, **su propia función composable** con su parámetro `modifier`: `TarjetaMiembro`, `CabeceraApp`…
4. Comprobad cada bloque en su `@Preview` antes de juntarlos.

:::tip Ideas clave
- `Column` (vertical), `Row` (horizontal) y `Box` (apilado), metidos unos dentro de otros.
- Arrangement reparte en el eje principal; Alignment alinea en el contrario.
- Los modificadores se aplican en orden: `padding` antes o después de `background` no es lo mismo.
- `weight` reparte el espacio que sobra entre los hijos de un `Row` o una `Column`; `Spacer` deja huecos.
- Una pantalla se construye de fuera hacia dentro, con una función composable por bloque.
:::

## Para ampliar

- [Conceptos básicos de diseño en Compose](https://developer.android.com/develop/ui/compose/layouts/basics) · [Modificadores de Compose](https://developer.android.com/develop/ui/compose/modifiers)
