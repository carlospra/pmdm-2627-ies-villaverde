---
title: "Tecnologías de desarrollo: nativo y multiplataforma"
sidebar_label: "Nativo y multiplataforma"
slug: /android/ut1/tecnologias-y-plataformas
---

# Tecnologías de desarrollo: nativo y multiplataforma

Es la decisión con la que arranca cualquier proyecto móvil real.

**Desarrollo nativo.** Usa el lenguaje y las herramientas propias de cada plataforma: Kotlin con Android Studio, Swift con Xcode. Da el máximo rendimiento y acceso completo a las capacidades del aparato, y obliga a desarrollar dos veces.

**Desarrollo multiplataforma.** Un solo código que funciona en Android y en iOS, y a veces también en web y escritorio: Flutter con el lenguaje Dart, React Native con JavaScript, y Kotlin Multiplatform, que comparte la lógica y mantiene la interfaz nativa de cada sistema. Menos esfuerzo para llegar a las dos plataformas, a cambio de ir por detrás en lo más nuevo de cada una.

| Opción | Lenguaje e interfaz | Alcance | Qué cuesta |
|---|---|---|---|
| Android moderno | Kotlin y Jetpack Compose | Solo Android | Lo que damos este curso. Máximo acceso al aparato |
| Android clásico | Java o Kotlin con vistas XML | Solo Android | Es lo que hay escrito en casi todo el código que vais a mantener |
| iOS nativo | Swift y SwiftUI | Solo iOS | Exige un Mac y Xcode. Mismo paradigma declarativo que Compose |
| Multiplataforma | Flutter con Dart, o Kotlin Multiplatform | Android e iOS | Un solo código, a cambio de depender de una capa intermedia |

:::warning Un error frecuente
Se suele pensar que hay que elegir obligatoriamente entre Android o iOS y hacerlo todo dos veces. Existen tecnologías multiplataforma que permiten desarrollar para ambos con un solo código, y la elección se hace según el proyecto, no por costumbre.
:::

## Android e iOS, lado a lado

Los vamos a ir comparando durante todo el curso, porque casi todo lo que veamos en Android tiene su gemelo en iOS con otro nombre.

| | Android | iOS |
|---|---|---|
| Kernel | Linux | Darwin, con base BSD |
| Cómo se ejecuta el código | ART, una máquina virtual que traduce DEX | Compilado a código nativo. No hay máquina virtual |
| Memoria | Recolector de basura | Conteo automático de referencias |
| El paquete | APK y AAB | IPA, que también es un ZIP |
| El descriptor | `AndroidManifest.xml` | `Info.plist` |
| Lenguaje e interfaz de hoy | Kotlin y Compose | Swift y SwiftUI |
| La interfaz clásica | Vistas en XML | UIKit con Storyboards |
| Versión mínima soportada | `minSdk` | Deployment Target |
| Al girar el aparato | La pantalla se destruye y se recrea | La pantalla no se destruye |
| Fragmentación | Alta: muchos fabricantes y capas propias | Baja: pocos modelos y actualiza Apple |

**Kotlin y Swift se parecen mucho** como lenguajes: inferencia de tipos, seguridad frente a nulos, funciones lambda, extensiones. Quien sabe uno puede leer el otro. Y Compose y SwiftUI describen la interfaz de la misma manera, como función del estado.

Eso no significa que podáis hacer aplicaciones de iPhone desde aquí: para eso hacen falta un Mac y Xcode. Pero sí significa que lo que aprendáis este curso se traslada con bastante poco esfuerzo.
