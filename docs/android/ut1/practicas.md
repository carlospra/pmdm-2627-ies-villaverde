---
title: "Prácticas de la sesión"
sidebar_label: "Prácticas de la sesión"
slug: /android/ut1/practicas
---

# Prácticas de la sesión

Tres actividades para hacer en clase, cada una **antes** de su bloque de teoría. Ninguna lleva código ni necesita Android Studio: se trata de mirar, medir y razonar, y después explicamos juntos lo que habéis encontrado.

| | Tiempo | Actividad | Qué necesitáis |
|---|---|---|---|
| Práctica 1 | 20 min | Auditoría de vuestro móvil | Vuestro propio teléfono |
| Práctica 2 | 20 min | La ficha técnica de una app | Navegador |
| Práctica 3 | 15 min | El caso dontkillmyapp | Navegador y el teléfono |

:::tip Dónde escribís
Esta página es **el enunciado**: no hay que copiarla ni transcribir las preguntas.

Lo que rellenáis y entregáis es la **plantilla** que tenéis en el aula virtual, que ya lleva las tablas y un hueco debajo de cada pregunta. Cada uno la suya, aunque hayáis mirado las cosas en equipo.
:::

## Cómo se califican

Las tres cuentan como **ejercicios de clase del RA1**, que son el 25 % de la nota de ese RA.

- Entregad siempre, aunque no os salga. Un ejercicio incompleto se califica por lo que hayáis hecho: si explicáis al principio **qué habéis intentado y dónde os habéis quedado**, puede llegar hasta un 8. Sin esa explicación, el máximo es un 5.
- Si entregáis fuera de plazo, la nota máxima es un 5.
- Una práctica copiada es un 1 para quien copia y para quien se deja copiar.

---

## Práctica 1 · Auditoría de vuestro móvil

**20 minutos.** Vamos a medir la fragmentación con datos reales de esta clase, en vez de que os la cuente yo.

### Paso 1 · Vuestros datos

En vuestro móvil: **Ajustes → Acerca del teléfono → Información del software**. El camino cambia un poco según el fabricante.

| Dato | El vuestro |
|---|---|
| Fabricante y modelo | |
| Capa y versión (HyperOS, One UI, ColorOS…) | |
| Versión de Android | |
| Nivel de API correspondiente | |
| Nivel de parche de seguridad | |
| Versión de banda base | |
| Versión del kernel | |

Niveles de API: Android 13 = 33 · 14 = 34 · 15 = 35 · 16 = 36.

### Paso 2 · Lo ponemos en común

Cuando todos tengáis vuestra fila, la pasamos a la pizarra y contamos cuántas versiones y cuántas capas distintas hay en la clase. **Esto no se entrega**: es para tener los datos con los que responder a las dos primeras preguntas.

### Paso 3 · Las preguntas

Las dos primeras se responden con la tabla de la pizarra, así que esperad al paso 2. Las tres últimas, con vuestros propios datos, podéis irlas contestando ya.

1. ¿Cuántas versiones distintas de Android hay en esta clase? ¿Y cuántas capas de fabricante distintas?
2. Si pusierais la versión mínima de vuestra app en la más alta de la clase, ¿a cuántos compañeros dejaríais fuera? ¿Y si la pusierais en la más baja, a qué renunciaríais vosotros?
3. ¿Cuánto hace que vuestro móvil recibió el último parche de seguridad? ¿Se os ocurre por qué unos reciben parches más tiempo que otros?
4. La versión de banda base es un código raro que no se parece a la versión de Android. ¿Qué pensáis que identifica?
5. Comparad la versión de vuestro kernel con la de un Linux de escritorio actual. ¿Por qué creéis que hay esa diferencia?

**Qué entregáis:** vuestra fila de la tabla del paso 1 y las cinco respuestas del paso 3.

---

## Práctica 2 · La ficha técnica de una app

**20 minutos.** Una aplicación real publica un montón de datos técnicos. Vamos a leerlos y a deducir qué significan.

**F-Droid** (f-droid.org) es un repositorio de aplicaciones libres que publica la ficha técnica completa de cada versión. Google Play y la App Store no dan este nivel de detalle, así que es la mejor forma de verlo.

### Pasos

1. Entrad en f-droid.org y buscad **VLC**.
2. Bajad hasta la lista de versiones y abrid la última. Fijaos en que **no hay una sola descarga**: hay varias, cada una con un nombre raro al lado.
3. Rellenad la columna de VLC.
4. Buscad ahora una app que ofrezca **una sola descarga**. Os vale **Fossify Calculator**, o cualquier otra que encontréis con esa característica. Rellenad la segunda columna.

| Dato | VLC | La de una sola descarga |
|---|---|---|
| Nombre de la app | VLC | |
| Cuántas descargas distintas ofrece | | |
| Qué pone al lado de cada descarga | | |
| Tamaño de la descarga | | |
| Versión mínima de Android que exige | | |
| Nivel de API que le corresponde | | |
| Número de permisos que pide | | |
| Licencia | | |

:::warning No confundáis con «Código fuente»
Arriba de la ficha hay un enlace que pone **Código fuente**. Ese lleva al repositorio donde está escrito el programa y no dice nada de esto. Lo que nos interesa está **abajo**, en la lista de versiones.
:::

### Preguntas

1. Las descargas de VLC se llaman `arm64-v8a`, `armeabi-v7a`, `x86` y `x86_64`. ¿Qué creéis que son esos nombres? ¿Qué cambia de una descarga a otra, si la app es la misma?
2. Sumad el tamaño de las cuatro descargas de VLC y comparadlo con el tamaño de la otra app. ¿Qué ventaja le veis a partir la descarga en cuatro, en vez de publicar una sola que valga para todos?
3. La otra app se apaña con una sola descarga que funciona en cualquier móvil. ¿Qué pensáis que tiene VLC dentro que la otra no tiene?
4. Comparad la versión mínima de Android de las dos. Mirad la tabla de la pizarra de la práctica 1: ¿alguna de las dos dejaría fuera a algún compañero de clase? ¿Cuál y a cuántos?
5. Abrid una versión de VLC de hace varios años y mirad su versión mínima. ¿Ha cambiado con el tiempo? ¿Qué gana el desarrollador subiéndola y qué pierde?

**Qué entregáis:** la tabla rellenada y las cinco respuestas.

---

## Práctica 3 · El caso dontkillmyapp

**15 minutos.** Por qué el mismo código se comporta distinto según el fabricante, y qué se puede hacer al respecto.

1. Entrad en **dontkillmyapp.com** y buscad **vuestro** fabricante.
2. Anotad qué hace con las aplicaciones en segundo plano y qué tiene que desactivar el usuario para que funcionen.
3. En vuestro propio móvil, buscad el ajuste de «inicio automático» o de «sin restricciones de batería». Contad cuántos toques hacen falta para llegar y anotad el camino completo.

| Dato | Vuestra respuesta |
|---|---|
| Vuestro fabricante | |
| Qué hace con las apps en segundo plano | |
| Qué tiene que desactivar el usuario | |
| Camino completo hasta el ajuste en vuestro móvil | |
| Número de toques hasta llegar | |

### Para el debate

> Una aplicación de alarmas no suena en un móvil porque el sistema mató su proceso de madrugada. El usuario le pone una estrella en Google Play.

Escribid **medio folio** con vuestra postura sobre de quién es la culpa, teniendo en cuenta las tres partes implicadas: el fabricante, el desarrollador y Google. No hay una respuesta correcta; lo que miro es que el argumento use lo que hemos visto en clase.

**Qué entregáis:** la tabla y el medio folio.

---

## Para repasar en casa

No se entregan, pero de aquí salen las preguntas de la prueba del RA1.

1. ¿Cuál de estas **no** es una limitación propia del entorno móvil? a) Batería · b) Conectividad variable · c) Ausencia de sistema de ficheros · d) Diversidad de pantallas.
2. En Java ME, ¿qué definía una *configuración* como CLDC? ¿Y un *perfil* como MIDP? ¿Con qué parámetros de Android se corresponden hoy?
3. Un proyecto declara `minSdk 24` y `targetSdk 36`. Explicad qué significa cada uno y qué pasa si se intenta instalar en un dispositivo con Android 6 (API 23).
4. Enumerad las tres caras de la fragmentación y decid qué consecuencia práctica tienen sobre las pruebas.
5. Citad los cuatro componentes de una aplicación Android y para qué sirve cada uno.
6. Escribid la cadena de herencia desde `Context` hasta `ComponentActivity` y explicad qué aporta cada eslabón.
7. ¿Por qué una aplicación de Android no se puede ejecutar en un Linux de escritorio, si Android usa el kernel de Linux?
8. Explicad qué es Zygote y qué dos ventajas concretas aporta.
