# Proyecto #1 - GuitarLA
[React de Principiante a Experto - Juan Pablo De la torre Valdez](https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/)

Trabajando en manejo de estados en React.


## Carrito de Compras
Iniciar la creación de una aplicacion con un proyecto en blanco, desde Vite + React. con 

`npm create vite@latest`

### Pasar de un HTML & CSS estatico a componentes basicos

====

## React Hooks

Los hooks son controladores de logica.

React provee de por si algunos muy sencillos con los que se pueden realizar multiples tareas, e incluso combinarlos para expandir nuevos hooks.

- useState   => Manejo de Estados 
- useEffect  => Despacho de Eventos
- useMemo    => Performance
- useReducer =>
- useContext =>
- useRef     =>

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

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

En este caso se crea el `useCart` para envolver la logica de los componentes del carrito

#### Consideraciones:
Los hooks al momento de instanciarse es como hacerlo con una clase, por lo que su contexto va a estar vinculado a ello.


## Migracion de CustomHook a Reducer (cart-reducer)
OBS: 
Las acciones de los reducers se ejecutan dos veces, por tanto en una accion como añadir e incrementar un item en el estado, se debe manipular el array con un array map de modo que la logica no se vea afectada

===


## Eventos en JSX
onClick

## Local Storage
Persistencia de datos en el listado del carrito

`localStorage.setItem()`
`localStorage.getItem()`

# TypeScript
Migrar codigo de JavaScript a TypeScript

`!` = Assertiong Not-Null Opeator
Indica a TypeScript a no permitir valores nulos

TypeScript al estar basado sobre JavaScript, infiere el tipo de datos.
Lo cual hay que evitarlo, para aprovechar las ventajas de TS, lo ideal es ser declarativos con los tipos para nuestros elementos.

- Declarar Tipos en un archivo de definiciones `types/index.ts`
- Componentes pueden tener definiciones de sus tipos internamente. `ej. GuitarProps`
- Heredad y Extender un tipo, cuando se comparten muchos atributos es mejor ver donde se puede aplicar. `ej. Guitar => CartItem`
- Atributos `Pick` & `Omit` para controlar las propiedades que se extienden o heredan
- Castear objetos, tomar un tipo de dato y transformarlo a otro `newType<T> = {... item}`
- Type Lookup, `Guitar[property]` un tipo abstracto que se vincula a una propiedad de una definicion, util para asegurar la facil mantencion de codigo en diferentes partes 

(OBS: Creo que es mejor utilizar `Interface` aque `Type` ya que es más explicito, por ejemplo al momento de extender se utiliza el keyword `extends` en lugar de un `&` que si bien es mas conciso no es tan descriptivo. Lo mismo con `implements` para definir clases desde una interfaz )

[TypeScript - Interface vs Type declarations](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)

===

# Deploy a Netlify

Ejecutar el comando de buildeo `npm run build` para obtener la versión optimizada de la aplicación lista para distribuir, subir a un servicio como Netlify.

[Live Site](https://frabjous-dieffenbachia-03843d.netlify.app/)