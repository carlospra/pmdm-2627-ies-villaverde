---
title: "Versiones, emuladores y fragmentación"
sidebar_label: "Versiones y fragmentación"
slug: /android/ut1/versiones-y-fragmentacion
---

# Versiones, emuladores y fragmentación

## Emuladores

Un emulador ejecuta un aparato virtual en vuestro ordenador: distintos modelos, versiones, tamaños y densidades. Permite probar muchas configuraciones sin comprar nada y simular situaciones difíciles de reproducir —sin cobertura, batería baja, otra zona horaria, una posición concreta—. Se crean y se administran desde el **Device Manager**, y el emulador va empotrado en la ventana del entorno.

:::warning Un error frecuente
Se suele pensar que hace falta un dispositivo físico para desarrollar y probar. No es así. Pero el emulador tampoco lo sustituye: no reproduce el rendimiento real, ni el comportamiento de la cámara y los sensores, ni las capas del fabricante. La práctica profesional combina los dos: emulador para el desarrollo diario, aparato real antes de publicar.
:::

## Configuraciones y perfiles

El currículo del módulo pide conocer las **configuraciones** —tipos, características y dispositivos soportados— y los **perfiles**. Es terminología de **Java ME**, la plataforma de la primera etapa. Os la cuento una vez para que la reconozcáis, y después la traducimos.

Una **configuración** describía el mínimo común garantizado de una familia de aparatos: qué máquina virtual, qué subconjunto del lenguaje y qué librerías básicas estaban aseguradas. Se distinguía **CLDC**, para dispositivos limitados, de **CDC**, para los de más recursos. Sobre esa base, un **perfil** —**MIDP**— añadía interfaz de usuario, almacenamiento persistente, red y ciclo de vida. La combinación de configuración y perfil determinaba a qué aparatos podía dirigirse un programa.

Ese esquema desapareció como tal, y la idea sigue intacta con otros nombres:

| Concepto de Java ME | Hoy en Android | Dónde se declara |
|---|---|---|
| Configuración (CLDC, CDC) | `minSdk` | `build.gradle.kts` del módulo |
| Perfil (MIDP) | `targetSdk` | `build.gradle.kts` del módulo |
| Arquitectura del procesador | ABI: `arm64-v8a`, `x86_64`. Solo si hay código nativo | `build.gradle.kts` |
| Dispositivos soportados | `<uses-feature>`: cámara, GPS, biometría. La tienda filtra los incompatibles | `AndroidManifest.xml` |
| Capacidades de pantalla | Densidades `mdpi` a `xxxhdpi`, y unidades `dp` y `sp` | Carpetas `res/` |

## Qué es un nivel de API

Cada versión de Android trae su propio conjunto de clases y funciones que podéis llamar desde el código. A ese conjunto se le llama **API**, y para no tener que nombrar la versión comercial dentro del proyecto, cada una lleva además un **nivel de API**: un número entero que sube de uno en uno con cada versión.

| Android | Nivel de API | Año |
|---|---|---|
| 13 | 33 | 2022 |
| 14 | 34 | 2023 |
| 15 | 35 | 2024 |
| 16 | 36 | 2025 |

Dos cosas que conviene fijar:

- El nombre comercial —Android 16— es para el usuario. El **nivel de API** —36— es el que escribís vosotros en el `build.gradle.kts`. Es el mismo sistema dicho de dos maneras.
- El número sube siempre y nunca se reutiliza, y cada nivel **incluye todo lo anterior**: una clase que existía en API 24 sigue existiendo en API 36, salvo que Google la haya marcado como obsoleta.

Los tres números del apartado siguiente son niveles de API, no versiones comerciales.

## Los tres números que declara vuestro proyecto

| | Qué significa | Si os equivocáis |
|---|---|---|
| `minSdk` | La versión de Android **más antigua** en la que la aplicación se puede instalar | Demasiado alto y dejáis usuarios fuera; demasiado bajo y no podéis usar nada moderno |
| `targetSdk` | La versión con la que habéis **probado**. El sistema aplica los comportamientos nuevos hasta ahí; por encima os trata en modo compatibilidad | Desactualizado y Google Play no os deja publicar |
| `compileSdk` | La versión del SDK contra la que **compiláis**: qué API podéis escribir. No cambia el comportamiento en ejecución | Bajo y no podéis usar clases nuevas |

Un ejemplo con números: `minSdk 24` · `targetSdk 36` · `compileSdk 36`. La aplicación se instala desde Android 7 en adelante, se comporta como una aplicación moderna en Android 16, y podéis escribir API de Android 16 siempre que comprobéis en ejecución si el aparato concreto la tiene.

La regla es siempre **`minSdk` ≤ `targetSdk` ≤ `compileSdk`**.

Desde el 31 de agosto de 2026, **Google Play exige `targetSdk` 36 (Android 16)** para aplicaciones nuevas y para actualizaciones. Mantener ese número al día no es opcional: es la razón de que haya que revisar una aplicación todos los años aunque no cambie ni una funcionalidad.

En iOS, el equivalente del `minSdk` es el **Deployment Target** y el del `compileSdk` es el **Base SDK**.

## La fragmentación

Es el rasgo que más distingue el desarrollo móvil del de escritorio, y tiene tres caras:

- **De versiones del sistema**, porque el parque está repartido entre muchas.
- **De hardware**, con diferencias enormes de potencia, memoria y sensores.
- **De fabricante**, porque cada uno añade capas propias que alteran comportamientos.

La consecuencia práctica es corta: **probar en un solo dispositivo no demuestra nada**.

:::info Caso real · hasta dónde bajar el mínimo
Un equipo desarrolla una aplicación de consulta de horarios de transporte y necesita decidir el `minSdk` antes de empezar.

Consultan la distribución real de versiones del parque, calculan qué porcentaje de usuarios cubre cada opción y revisan qué funciones del sistema necesitan. Ven que bajar dos versiones más les da un 4 % de usuarios adicionales pero les obliga a implementar dos veces la gestión de permisos.

Fijan el mínimo donde el coste deja de compensar, lo documentan con los datos que usaron y lo revisan una vez al año. La decisión no fue técnica: fue de producto, tomada con datos.
:::
