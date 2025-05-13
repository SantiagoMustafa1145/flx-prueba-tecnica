# Prueba Técnica Flexxus - CRUD de Usuarios en React

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

## 2. Requerimientos del software

A continuación listaremos los requerimientos del software a desarrollar.
Es necesario simular un tiempo de carga entre las peticiones con un setTimeOut, y mostrar un Loader en los componentes afectados.

- [x] Listar usuarios.
- [x] Crear usuarios.
- [x] Editar usuarios.
- [x] Eliminar usuarios.
- [x] Buscar por nombre o apellido por coincidencia.
- [x] Filtrar por el estado del usuario (active/inactive).
<!--
    Hice dos soluciones para el paginado de los usuarios, una utilizando start y limit y la otra utilizando page y per_page.
    La segunda me parece más adecuada, por lo que decidí implementar la solución pero comentada, por si les interesa evaluarla.
    Sin embargo, como se pedía para la prueba técnica, adapté la paginación a la solución de start y limit.
    ACLARO QUE OFFSET NO FUNCIONA, POR LO CUAL NO PUDE HACER EL FILTRADO CON ÉSTE.
-->
- [x] Paginado de registros utilizando limit & offset.

## EXTRA

### Utilizar el paginado de registros utilizando page y per_page

#### useUserList.js

1. Comentar el useEffect que utiliza offset y limit.
2. Descomentar el useEffect que utiliza page y perPage.

#### TableComponent.jsx

1. Comentar las variables offset, limit, setOffset, setLimit.
2. Descomentar las variables page, perPage, setPage, setPerPage.
3. Comentar los setOffset y setLimit que se encuentran en el "onChange" de la paginación de la tabla.
4. Descomentar los setPage y setPerPage que se encuentran en el "onChange" de la paginación de la tabla.
5. Comentar los `defaultPageSize: limit`y `current: offset / limit + 1`.
6. Descomentar los `defaultPageSize: perPage`y `current: page`.

Con ésto se empieza a utilizar la paginación con page y per_page.

<a id="sources"></a>

## Recursos

[🎨 Link al diseño de Figma](https://shorturl.at/rwxV4)

[🗄️ Documentación `antd`](https://4x.ant.design/components/overview/)
