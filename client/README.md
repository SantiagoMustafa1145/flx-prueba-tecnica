# Prueba Técnica Flexxus - CRUD de Usuarios en React

- [📝 Instrucciones](#documentación)
- [📝 Instrucciones](#instrucciones)
- [📝 Extra](#extra)
- [📝 Recursos](#recursos)

## Documentación

> [!NOTE]
>
> La solución está completamente configurada para solamente instalar las dependencias y ejecutar el proyecto.
> Se puede usar cualquier package manager para instalar las dependencias.

### 1. Instalación de la solución técnica

Instalar las dependencias necesarias para el proyecto.

```bash
npm install
```

### 2. Hacer la build del proyecto

Iniciar el proyecto en modo desarrollo.

```bash
npm run build
```

### 3. Inicializar la preview del proyecto

```bash
npm run preview
```

Con éstos pasos ya se debería de poder probar la solución en **http://localhost:5173/**

## Instrucciones

### 1. Normas de desarrollo

Desarrolla la aplicación siguiendo las especificaciones proporcionadas. Asegúrate de seguir las siguientes normas de desarrollo:

- Utiliza React para construir la interfaz de usuario.
- La aplicación debe ser un CRUD completo, permitiendo crear, leer, actualizar y eliminar usuarios.
- Implementa validaciones en los formularios para garantizar la integridad de los datos.
- Utiliza componentes funcionales y hooks siempre que sea posible.
- Escribe código limpio y legible. Utiliza nombres de variables descriptivos y sigue las convenciones de estilo de código de JavaScript y React.
- Gestiona el estado de la aplicación de manera eficiente y evita el uso excesivo de prop drilling.
- Comenta tu código cuando sea necesario para explicar partes complejas o importantes del mismo.
- Utiliza React Context o Redux para el estado global de la aplicación.
- Recomendamos utilizar UUID para la generación de indentificadores únicos de los registros de los usuarios.
- Se debe respetar el diseño en Figma que se les adjunto en la sección de [recursos](#sources).
- Se debe utilizar la librería antd y css/less/sass en caso de ser necesario.
- Recomendamos reutilizar la mayor cantidad de componentes posibles, y evitar el código repetitivo.

### 2. Requerimientos del software

A continuación listaremos los requerimientos del software a desarrollar.
Es necesario simular un tiempo de carga entre las peticiones con un setTimeOut, y mostrar un Loader en los componentes afectados.

- [x] Listar usuarios.
- [x] Crear usuarios.
- [x] Editar usuarios.
- [x] Eliminar usuarios.
- [x] Buscar por nombre o apellido por coincidencia.
- [x] Filtrar por el estado del usuario (active/inactive).
- [x] Paginado de registros utilizando limit & offset.

## EXTRA

> [!NOTE] Paginado del listado de usuarios
>
> Para la paginación del listado de usuarios hay dos métodos que se pueden utilizar en éste proyecto,
> uno es utilizando `start` y `limit` y la otra utilizando `page` y `per_page`.
>
> Como lo solicitaba la prueba técnica, opté por implementar la paginación utilizando `start` y `limit`.
> La cual ya se encuentra implementada y en uso en la solución.
>
> Sin embargo, la segunda solución, que utiliza `page` y `per_page` me parece más adecuada.
> Por lo que decidí desarrollarla pero no implementarla, por si les interesa revisarla e implementarla
> para su prueba.

### Configuración del proyecto con `page`y `per_page`

#### 1. Cambiar la función `fetchUsersStartLimit` por `fetchUsersPagePerPage`

> [!WARNING] En la función `addUser` también se utiliza la función `fetchUsersStartLimit` para actualizar la lista de usuarios.
> Por lo que se necesita cambiar la función `fetchUserStartLimit` por la función `fetchUsersPagePerPage` con las mismas variables salvo cambiando `limit`, `offset`, `setLimit`, `setOffset` por `perPage`, `page`, `setPerPage`, `setPage`.

En el archivo `hooks/useUserList.js` cambiar la función `fetchUsersStartLimit` por `fetchUsersPagePerPage`.

Ambas reciben casi las mismas variables, solo debes cambiar `limit`, `offset`, `setLimit`, `setOffset` por `perPage`, `page`, `setPerPage`, `setPage`.

Con ello ya estaría funcionando la paginación utilizando `page` y `per_page`.

#### 2. Cambia las props de la tabla `TableComponent.jsx`

Debes descomentar las variables `page`, `perPage`, `setPage`, `setPerPage` y comentar las variables `offset`, `limit`, `setOffset`, `setLimit`.

En las props que recibe la tabla verás que hay código comentado que utiliza `page` y `perPage` para actualizar la lista de usuarios.
Puedes o descomentarlo y comentar el código que utiliza `offset` y `limit` para actualizar la lista de usuarios para así evitar errores y utilizar unicamente `page` y `perPage` para la paginación.

Con ésto se empieza a utilizar la paginación con page y per_page.

<a id="sources"></a>

## Recursos

[🎨 Link al diseño de Figma](https://shorturl.at/rwxV4)

[🗄️ Documentación `antd`](https://4x.ant.design/components/overview/)
