---
title: "Práctica · Tu tarjeta de presentación"
sidebar_label: "Práctica: tarjeta de presentación"
slug: /android/ut2/tarjeta
---

# Práctica · Tu tarjeta de presentación

**Miércoles 14/10 · individual · sin nota.** Sobre el proyecto **Greeting Card**. Teoría: [2 · Texto, imágenes y recursos](/android/ut2/texto-imagenes-recursos). Lo que aprendéis aquí es lo que necesita vuestro equipo en los sprints 2.1 y 2.2.

## Ejercicio 1 · Textos en recursos (15 min)

1. Pasad todos los textos de `Greeting` a `strings.xml` con **Alt + Intro › Extract string resource**.
2. El saludo tiene que usar formato: `<string name="saludo">Hola, me llamo %1$s</string>` y `stringResource(R.string.saludo, name)`.
3. Dadle al saludo el estilo `MaterialTheme.typography.headlineMedium` y el color `MaterialTheme.colorScheme.primary`; a la segunda línea, `bodyLarge`.
4. Cread `res/values-en/strings.xml` con los mismos nombres en inglés (en Android Studio: clic derecho en `strings.xml` › **Open Translations Editor** › globo › English). Cambiad el idioma del emulador a inglés y comprobad que la app cambia sin tocar el código.

## Ejercicio 2 · Imagen y tarjeta (10 min, y se termina en casa)

1. Importad una imagen vuestra (o con licencia libre) a `res/drawable` con el **Resource Manager**.
2. Convertid `Greeting` en una tarjeta centrada: la imagen redonda de 120 dp arriba, vuestro nombre debajo y, debajo, «2º DAM · IES Villaverde» y vuestro correo.
3. La imagen lleva `contentDescription` desde `strings.xml`.
4. Añadid dos `@Preview`: una en claro y otra en oscuro.

Para centrar, envolved todo en `Column(horizontalAlignment = Alignment.CenterHorizontally)`. Los layouts los vemos a fondo el martes 20/10.

## Entrega

No se entrega ni tiene nota: es la base de la pantalla «Acerca de» de vuestro proyecto (sprint 2.2). Guardadla.
