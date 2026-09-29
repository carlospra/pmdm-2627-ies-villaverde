---
title: "1.1 · Dispositivos móviles: evolución, tipos y características"
sidebar_label: "1.1 · Dispositivos móviles"
sidebar_position: 11
slug: /android/ut1/1-1-dispositivos-moviles
---

# 1.1 · Dispositivos móviles: evolución, tipos y características

## De dónde venimos

El desarrollo móvil tiene ya tres etapas bien distintas, y conocerlas explica por qué en este módulo aparece vocabulario que hoy nadie usa.

| Etapa | Qué había | Qué se programaba |
|---|---|---|
| Hasta 2007 | Teléfonos con teclado, agendas electrónicas, memoria de kilobytes | **Java ME**, con sus configuraciones y perfiles; aplicaciones diminutas y sin acceso real al aparato |
| 2007–2015 | Pantalla táctil, tiendas de aplicaciones, conexión de datos | Android con Java, iOS con Objective-C. Interfaces descritas en XML o en editores visuales |
| Desde 2015 | Sensores, biometría, cámaras múltiples, aparatos de todos los tamaños | Kotlin y Swift; interfaces **declarativas** con Compose y SwiftUI; multiplataforma con Flutter |

La consecuencia práctica: el currículo de este módulo usa términos de la primera etapa —configuraciones, perfiles— que traduciremos en [versiones y fragmentación](/android/ut1/1-6-emuladores-configuraciones-perfiles). No los ignoramos, porque siguen apareciendo en la documentación y en las pruebas.

## Tipos de dispositivo

Hoy «móvil» ya no significa solo teléfono. La misma plataforma se ejecuta en familias muy distintas, y cada una impone lo suyo:

| Tipo | Qué lo caracteriza | Qué os obliga a cambiar |
|---|---|---|
| Teléfono | Pantalla de 5 a 7 pulgadas, uso a una mano, en movimiento | Es la referencia por defecto |
| Tablet | Pantalla grande, uso apoyado, sesiones largas | Diseños de dos paneles, no la pantalla del teléfono estirada |
| Plegable | La pantalla cambia de tamaño **mientras la aplicación corre** | El diseño tiene que rehacerse en caliente |
| Reloj | Pantalla diminuta, batería muy escasa, interacción de segundos | Interfaz propia, no una reducción de la del teléfono |
| Televisión | Se maneja con un mando a distancia, a tres metros | Navegación por foco, tipografía grande |
| Automoción | Atención del conductor limitada por ley | Interfaz restringida y certificada |

Todas comparten la misma base de Android, así que los **niveles de API son los mismos** en todas: API 34 es API 34 en un móvil, en un reloj y en un televisor. Lo que aprendáis sobre la versión mínima vale para las seis familias.

Lo que sí cambia de una a otra son dos cosas. La primera, **dónde conviene poner ese mínimo**: el parque de aparatos de cada familia se renueva a un ritmo distinto, así que el mismo número deja fuera a distinta gente según el tipo de aparato. La segunda, que **cada familia se declara aparte en el manifiesto**, con una etiqueta `<uses-feature>` que dice para qué tipo de aparato es la aplicación (`android.hardware.type.watch` para reloj, `android.hardware.type.television` para televisor). La tienda usa esa etiqueta para no ofrecer una aplicación de reloj a quien tiene un móvil.

## Características comunes

Frente a un ordenador, cualquiera de estos aparatos comparte cinco rasgos: **movilidad** (cambia de sitio, de red y de condiciones de luz), **alimentación por batería**, **conectividad intermitente**, **interacción táctil o por voz** y **sensores integrados** que un ordenador no tiene. Sobre esos cinco rasgos se construye todo lo que viene después.
