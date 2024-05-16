# Proyecto #1 - GuitarLA
[React de Principiante a Experto - Juan Pablo De la torre Valdez](https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/)

Trabajando en manejo de estados en React.


## Carrito de Compras
Iniciar la creación de una aplicacion con un proyecto en blanco, desde Vite + React. con 

`npm create vite@latest`

### Pasar de un HTML & CSS estatico a componentes basicos

=========================================================================================

## React Hooks

Los hooks son controladores de logica.

React provee de por si algunos muy sencillos con los que se pueden realizar multiples tareas, e incluso combinarlos para expandir nuevos hooks.

- useState  => Manejo de Estados 
- useEffect => Despacho de Eventos
- useMemo   => Performance

### Manejo de estados:
El estado en React es asincrono, por ello es util el useEffect() hook

### Creación de Propios Hooks
Proporciona organización al codigo.
Se encarga de toda la logica, mientras que el componente se encarga solo de la vista.
Permite la reutilización de codigo en otros proyectos o componentes

### Reglas de los Hooks:
- Nomenclatura `use{hookName}` ej. `useState` ==> Habilita el linter para escanear validaciones al hook 
- No pueden estar en condicionales
- Un hook (custom) solo debe tener logica, no logica, no presentación.
- Disponer dentro de la carpeta `src/hooks`

En este caso se crea el `useCart` para envolver la logica de los componentes del carrito

#### Consideraciones:
Los hooks al momento de instanciarse es como hacerlo con una clase, por lo que su contexto va a estar vinculado a ello.

=========================================================================================


## Eventos en JSX
onClick

## Local Storage
Persistencia de datos en el listado del carrito

`localStorage.setItem()`
`localStorage.getItem()`

# Deploy a Netlify

Ejecutar el comando de buildeo `npm run build` para obtener la versión optimizada de la aplicación lista para distribuir, subir a un servicio como Netlify.

[Live Site](https://frabjous-dieffenbachia-03843d.netlify.app/)