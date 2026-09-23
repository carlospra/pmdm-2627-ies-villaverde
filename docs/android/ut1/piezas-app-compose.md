---
title: "Las piezas de una app con Compose"
slug: /android/ut1/piezas-app-compose
---

# Las piezas de una app con Compose

- **`AndroidManifest.xml`**: declara la app y la activity que se abre al tocar el icono.
- **`MainActivity.kt`**: el punto de entrada. En `onCreate`, `setContent` dice qué se dibuja en pantalla.
- **Funciones `@Composable`**: cada trozo de pantalla es una función con esa anotación y nombre en mayúscula, como `Greeting`. Describen **qué** se ve, no cómo se dibuja.
- **`@Preview`**: una función con esa anotación se dibuja en la vista previa de Android Studio sin ejecutar la app.
- **`Modifier`**: decora un elemento: márgenes, tamaño, fondo...
- **`ui/theme`**: colores, tipografía y tema de la app.

Así es, más o menos, la Greeting Card (puede variar un poco según la versión de Android Studio):

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {                          // lo que se dibuja
            GreetingCardTheme {               // el tema de ui/theme
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Greeting(name = "Ana", modifier = Modifier.padding(innerPadding))
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(text = "Hola, me llamo $name!", modifier = modifier)
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    GreetingCardTheme {
        Greeting("Ana")
    }
}
```

`Scaffold` es la estructura básica de una pantalla, y `innerPadding` deja el margen necesario para que el contenido no quede debajo de las barras del sistema.
