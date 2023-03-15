//Bad solution
# Errors onLoad HomePage

El problema consiste en que la función load() carga todos los usuarios(cachedPlayers) que se encuentran almacenados en la DB, eso hace que solicite datos de demasiados Players,  ocasionando un error a la hora de enviar toda la informcaion solicitada a la vez.

# Issue Analysis

La funcion load() puede ocasionar problemas a medio/largo plazo, debido a la cantidad de respuestas que puede solicitar, relentizando las cargas y pidiendo mucha informacion innecesaria hasta el momento de la busqueda especifica por cada Player Name en este caso.

# Solution Proposal

Hacer que no cargue ningun tipo de informacion de la base de datos hasta que, al escribir una letra, se muestren los resultados de la búsqueda con un maximo de carga de 3 usuarios.

--------------------------------------------------------------------------------------------

//Correct solution

# Errors onLoad Home Page

Cuado accedes a la página principal, se muestran varios errores 429 en la consola de las peticiones `GET /level-image`.

# Analysis

La página principal `/routes/+page.svelte` carga información en `routes/+page.ts` mediante el método `load()` de SvelteKit.

El método `load()` ejecuta:
    1. Obtiene de Redis todas las keys almacenadas -> de las que se extrae `server` y `name` de cada jugador
    2. Por cada pareja `server` y `name` -> se ejecuta una petición a `/level-image` endpoint para obtener la imagen y el nivel de ese jugador

Como al acceder a la página principal se ejecuta la búsqueda para TODOS los jugadores que haya almacenados sin límite, se ejecutan muchas peticiones a la vez y se supera el límite de peticiones por segundo, resultando en un error 429 a partir de las primeras iteraciones del bucle.

# Solution

Se eliminará el paso `2` del método `load()`, de forma que solo almacenaremos `name` y `server`, no la imagen y el nivel. Esto representa 1 única peticion (paso `1`)

Después, cuando se escriba en el `input` para buscar un jugador, mediante un `onChange` se ejecutará la petición a `/level-image` para obtener la imagen y el nivel del jugador buscado.

Esto hará que solo se carguen las peticiones de las personas mostradas (máx 3) bajo el input, y no de TODOS los jugadores almacenados en Redis.