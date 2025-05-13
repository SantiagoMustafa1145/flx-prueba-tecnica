import { useEffect, useState } from "react";
import { v4 } from "uuid";
import fetchData from "../utils/fetchData";
import { filterUsers } from "../utils/filterUsers";

export default function useUserList() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [error, setError] = useState("");
  const [nameOrLastNameFilter, setNameOrLastNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [perPage, setPerPage] = useState(9);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(1);

  // Esta solución está lista para ser usada, solo debe descomentar el useEffect y las variables en TableComponent.jsx
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     // Comprobamos si se está realizando el filtrado de datos
  //     const isFiltering = nameOrLastNameFilter !== "" || statusFilter !== "all";

  //     // Genero una url para la petición de los datos, en caso de que haya filtros agregamos el filtro de estado,
  //     // ya que no se puede hacer un filtro por semejanza de nombres y apellidos.
  //     // En caso de que no haya filtros generamos una url con los datos del paginado actualizados.
  //     // He realizado las consultas por paginado usando el _page y el _per_page
  //     // Consideré hacer una petición para obtener todos los datos y así hacer la paginación con
  //     // _page y _per_page, ésta solución me parece la más adecuada
  //     // aclaro esto porque en el README.md se aclara que se debe utilizar offset y limit para paginar.
  //     // Como lo ejemplifico en el useEffect de abajo.
  //     const baseUrl = isFiltering
  //       ? `?status=${statusFilter !== "all" ? statusFilter : ""}`
  //       : `?_page=${page}&_per_page=${perPage}`;

  //     try {
  //       const { data } = await fetchData({ url: baseUrl });

  //       // Se actualiza la lista de usuarios con los datos de la respuesta
  //       setUsers(
  //         isFiltering
  //           ? // Si hay filtros, filtramos primero por nombre y luego por apellido.
  //             filterUsers({ users: data, nameOrLastNameFilter })
  //           : // caso contrario devuelvo el listado de usuarios obtenidos por el paginado.
  //             data.data
  //       );

  //       // Actualizamos la cantidad de usuarios disponibles para así actualizar el número de páginas disponibles
  //       setTotalUsers(
  //         isFiltering
  //           ? // En caso de que haya filtros, devuelvo el número de usuarios que cumplen los filtros
  //             filterUsers({ users: data, nameOrLastNameFilter }).length
  //           : // en caso de que no haya filtros devuelvo el número de usuarios que hay en la respuesta paginada.
  //             data.items
  //       );
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchUsers();
  // }, [page, perPage, nameOrLastNameFilter, statusFilter]);

  useEffect(() => {
    // Al hacer la petición con try catch ocurría un error el cual no supe solucionar, por ende terminé optando
    // por eliminar el try catch y hacer la petición sin él.
    const fetchUsers = async () => {
      // Comprobamos si se está realizando el filtrado de datos
      const isFiltering = nameOrLastNameFilter !== "" || statusFilter !== "all";

      // Genero una url para la petición de los datos, en caso de que haya filtros agregamos el filtro de estado,
      // ya que no se puede hacer un filtro por semejanza de nombres y apellidos.
      // En caso de que no haya filtros generamos una url con los datos del paginado actualizados.
      // He realizado las consultas por start y limit ya que offset no me funcionaba.
      // Consideré hacer dos peticiones para obtener todos los datos y saber así la longitud de la lista de usuarios,
      // además de hacer la paginación con_limit y _start, ésto requiere dos peticiones.
      // Aclaro que en mí opinión es mejor hacer una sola petición como lo tengo ejemplificado en el useEffect de arriba.
      const baseUrl = isFiltering
        ? `?status=${statusFilter !== "all" ? statusFilter : ""}`
        : `?_start=${offset - 1}&_limit=${limit}`;

      const { data } = await fetchData({ url: baseUrl, setError });

      const { data: totalUsers } = await fetchData({});

      // Se actualiza la lista de usuarios con los datos de la respuesta
      setUsers(
        isFiltering
          ? // Si hay filtros, filtramos primero por nombre y luego por apellido.
            filterUsers({ users: data, nameOrLastNameFilter })
          : // caso contrario devuelvo el listado de usuarios obtenidos por el paginado.
            data
      );

      // Actualizamos la cantidad de usuarios disponibles para así actualizar el número de páginas disponibles
      setTotalUsers(
        isFiltering
          ? // En caso de que haya filtros, devuelvo el número de usuarios que cumplen los filtros
            filterUsers({ users: data, nameOrLastNameFilter }).length
          : // en caso de que no haya filtros devuelvo el número de usuarios que hay en la respuesta de todos los usuarios.
            totalUsers.length
      );
    };

    // debounce para evitar que se ejecute la petición cada vez que se escribe en el input
    const debounce = setTimeout(() => {
      fetchUsers();
    }, 500);
    return () => {
      return clearTimeout(debounce);
    };
  }, [limit, offset, nameOrLastNameFilter, statusFilter]);

  // Agrego un usuario nuevo
  const addUser = (userData) => {
    fetchData({
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          id: v4(),
        }),
      },
      setError,
    }).then(({ data }) => {
      setUsers([...users, data]);
      setTotalUsers(totalUsers + 1);
    });
  };

  // Actualizo la información de un usuario existente
  const updateUser = (userData) => {
    fetchData({
      url: `/${userData.id}`,
      options: {
        method: "PUT",
        body: JSON.stringify(userData),
      },
      setError,
    }).then(({ data }) => {
      setUsers((prev) =>
        prev.map((user) => (user.id === userData.id ? data : user))
      );
    });
  };

  // Elimino un usuario
  const deleteUser = (userId) => {
    fetchData({
      url: `/${userId}`,
      options: { method: "DELETE" },
      setError,
    }).then(({ data }) => {
      setUsers((prev) => prev.filter((user) => user.id !== data.id));
      setTotalUsers(totalUsers - 1);
    });
  };

  return {
    users,
    totalUsers,
    error,
    nameOrLastNameFilter,
    statusFilter,
    page,
    perPage,
    offset,
    limit,
    addUser,
    updateUser,
    deleteUser,
    setStatusFilter,
    setNameOrLastNameFilter,
    setPage,
    setPerPage,
    setOffset,
    setLimit,
  };
}
