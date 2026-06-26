
Componente: Para modular de forma limpia la interfazroEspecie`.Permite separar las responsabilidades de la UI, haciendo que el código sea ordenado, reutilizable y fácil de mantener.
JSX:  el retorno de todos los componentes para estructurar las tarjetas, botones y buscador. Es el estándar de React para describir visualmente la pantalla de recepción mediante una sintaxis muy similar a HTML. 
Props: ara pasar la información de cada mascota desde `App` hacia la lista y las tarjetas individuales. Evita dejar datos fijos (quemados), permitiendo que un mismo diseño (`MascotaCard`) sirva de molde para cualquier animal. 
Estado (useState) En `App.jsx` para almacenar el texto de búsqueda por nombre y la especie seleccionada. Es el adecuado porque React necesita reaccionar y volver a renderizar la pantalla dinámicamente cuando el usuario interactúa. 
Renderizado de listas En `ListaMascotas.jsx` usando `.map()` junto con la `key={mascota.id}`. Permite iterar eficientemente el array de 12 mascotas del refugio. Usar el ID como key ayuda a React a optimizar el rendimiento. 
Renderizado condicional Para mostrar el badge "URGENTE" en las tarjetas y el mensaje de "No hay mascotas que coincidan". Evita mostrar elementos de forma innecesaria, controlando qué ve el usuario según los filtros aplicados en tiempo real. 






1. ¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?
Su ventaja es la mantenibilidad y legibilidad. En lugar de tener un archivo gigante con muchas líneas este lo divide permitiendo aislar la lógica. Si falla el diseño de una tarjeta de mascota, solo tocas `MascotaCard.jsx` sin arriesgarte a romper el buscador o el estado global de la aplicación.


2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno.
Props: Son datos externo que un componente recibe de su padre.
Estado: Es una variable interna dministrada por el propio componente para controlar datos que cambian con el tiempo.