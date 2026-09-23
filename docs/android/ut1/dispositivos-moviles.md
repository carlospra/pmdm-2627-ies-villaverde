---
title: "Dispositivos móviles y Android"
slug: /android/ut1/dispositivos-moviles
---

# Dispositivos móviles y Android

## Limitaciones de un móvil

Una app móvil no puede hacer lo mismo que un programa de escritorio. Hay que diseñarla pensando en:

- **Batería limitada**: cada cálculo, cada acceso a la red y cada segundo de pantalla encendida gastan.
- **Menos potencia y memoria** que un ordenador. Si una app consume demasiado, el sistema la cierra.
- **Almacenamiento reducido**.
- **Conexión intermitente**: la red puede ir lenta o desaparecer en cualquier momento.
- **Pantalla pequeña y entrada táctil**, sin teclado físico.

A cambio, un móvil ofrece lo que un ordenador no tiene: va siempre encima, tiene cámara, GPS y sensores, y está siempre conectado.

## El panorama actual

Hoy prácticamente todo el mercado se reparte entre **Android** e **iOS**. Para desarrollar apps hay dos caminos:

- **Nativo**: una app para cada sistema, con sus herramientas oficiales. En Android, **Kotlin** con **Jetpack Compose**; en iOS, Swift con SwiftUI. Es lo que hacemos en este módulo.
- **Multiplataforma**: un único código para los dos sistemas, con herramientas como Flutter, React Native o Kotlin Multiplatform.

## Cómo es Android por dentro

- Está basado en el **núcleo de Linux**, que gestiona la memoria, los procesos y el hardware.
- Cada app se ejecuta en su propio proceso, dentro de **ART** (Android Runtime), el entorno que ejecuta el código de las apps. Sustituyó a la antigua máquina virtual Dalvik en Android 5.0.
- Cada app está **aislada** de las demás: solo accede a los datos de otras apps o a funciones sensibles (cámara, ubicación, contactos) si el usuario le da **permiso**.

## Los componentes de una app Android

| Componente | Para qué sirve |
|---|---|
| **Activity** | Una pantalla con la que interactúa el usuario. Con Compose, lo habitual es una sola activity que dibuja todas las pantallas. |
| **Service** | Trabajo en segundo plano, sin interfaz; por ejemplo, reproducir música. |
| **Broadcast receiver** | Reacciona a avisos del sistema o de otras apps: batería baja, SMS recibido, fin del arranque... |
| **Content provider** | Comparte datos con otras apps sin mostrar cómo están guardados. Así se accede, por ejemplo, a los contactos. |
| **Intent** | El mensaje con el que se comunican los componentes: abrir una activity, pedir a otra app que haga algo, etc. |

Todos los componentes se declaran en el fichero `AndroidManifest.xml`, que es el carné de identidad de la app.
