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

## Cómo se califican

Las tres cuentan como **ejercicios de clase del RA1**, que son el 25 % de la nota de ese RA.

- Si entregáis fuera de plazo, la nota máxima es un 5.
- Si la entrega viene con errores o incompleta, os pongo un 5 **solo si me explicáis** por qué no llegasteis a la solución. Así que entregad siempre, aunque no os salga: escribid al principio qué habéis intentado y dónde os habéis quedado.
- Una práctica copiada es un 1 para quien copia y para quien se deja copiar.

---

## Práctica 1 · Auditoría de vuestro móvil

**20 minutos.** Vamos a medir la fragmentación con datos reales de esta clase, en vez de que os la cuente yo.

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

Cuando lo tengáis, lo pasamos todo a la pizarra y contamos.

### Preguntas

1. En la tabla de la pizarra, ¿cuántas versiones distintas de Android hay en esta clase? ¿Y cuántas capas de fabricante distintas?
2. Si pusierais la versión mínima de vuestra app en la más alta de la clase, ¿a cuántos compañeros dejaríais fuera? ¿Y si la pusierais en la más baja, a qué renunciaríais vosotros?
3. ¿Cuánto hace que vuestro móvil recibió el último parche de seguridad? ¿Se os ocurre por qué unos reciben parches más tiempo que otros?
4. La versión de banda base es un código raro que no se parece a la versión de Android. ¿Qué pensáis que identifica?
5. Comparad la versión de vuestro kernel con la de un Linux de escritorio actual. ¿Por qué creéis que hay esa diferencia?

**Entrega:** vuestra tabla y las cinco respuestas.

---

## Práctica 2 · La ficha técnica de una app

**20 minutos.** Una aplicación real publica un montón de datos técnicos. Vamos a leerlos y a deducir qué significan.

[F-Droid](https://f-droid.org) es un repositorio de aplicaciones libres que publica la ficha técnica completa de cada versión. Google Play y la App Store no dan este nivel de detalle, así que es la mejor forma de verlo.

### Pasos

1. Entrad en f-droid.org y buscad **VLC**.
2. Bajad hasta la lista de versiones y abrid la última.
3. Rellenad la columna de VLC de la tabla.
4. Buscad después una app **sin código nativo** —una calculadora, un lector de RSS, un bloc de notas— y rellenad la otra columna.

| Dato | VLC | App sin código nativo |
|---|---|---|
| Versión mínima de Android que exige | | |
| Nivel de API que le corresponde | | |
| Arquitecturas que ofrece | | |
| Tamaño de cada descarga | | |
| Número de permisos que pide | | |
| Licencia | | |

### Preguntas

1. La misma versión de VLC tiene cuatro descargas distintas. ¿Qué cambia entre ellas? ¿Por qué creéis que existe esa división?
2. La app sin código nativo ofrece una sola descarga. ¿Por qué ella sí y VLC no?
3. Abrid una versión de VLC de hace varios años. ¿Ha subido la versión mínima de Android con el tiempo? ¿Qué gana el desarrollador subiéndola y qué pierde?
4. Con la versión mínima que declara VLC hoy, ¿se instalaría en el móvil más antiguo de los que hemos apuntado en la pizarra?
5. F-Droid publica la versión mínima, pero no publica otro número que también declara todo proyecto y que dice con qué versión se ha probado. ¿Se os ocurre por qué no se puede deducir de la ficha?

**Entrega:** la tabla rellenada y las cinco respuestas.

---

## Práctica 3 · El caso dontkillmyapp

**15 minutos.** Por qué el mismo código se comporta distinto según el fabricante, y qué se puede hacer al respecto.

1. Entrad en [dontkillmyapp.com](https://dontkillmyapp.com) y buscad **vuestro** fabricante.
2. Anotad qué hace con las aplicaciones en segundo plano y qué tiene que desactivar el usuario para que funcionen.
3. En vuestro propio móvil, buscad el ajuste de «inicio automático» o de «sin restricciones de batería». Contad cuántos toques hacen falta para llegar y anotad el camino completo.

### Para el debate

> Una aplicación de alarmas no suena en un móvil porque el sistema mató su proceso de madrugada. El usuario le pone una estrella en Google Play.

Escribid **medio folio** con vuestra postura sobre de quién es la culpa, teniendo en cuenta las tres partes implicadas: el fabricante, el desarrollador y Google. No hay una respuesta correcta; lo que miro es que el argumento use lo que hemos visto en clase.

**Entrega:** los datos de vuestro fabricante, el camino hasta el ajuste y el medio folio.

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
