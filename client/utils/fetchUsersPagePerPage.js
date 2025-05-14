import fetchData from "./fetchData";
import { filterUsers } from "./filterUsers";

const fetchUsersPagePerPage = async ({
  setUsers,
  setTotalUsers,
  setError,
  nameOrLastNameFilter,
  statusFilter,
  page,
  perPage,
}) => {
  // Comprobamos si se está realizando el filtrado de datos
  const isFiltering = nameOrLastNameFilter !== "" || statusFilter !== "all";

  // Esta solución es, en mi opinión, la mejor, permite un mejor escalado y manejo de paginación.
  const baseUrl = isFiltering
    ? `?status=${statusFilter !== "all" ? statusFilter : ""}`
    : `?_page=${page}&_per_page=${perPage}`;

  try {
    const { data } = await fetchData({ url: baseUrl });

    // Se actualiza la lista de usuarios con los datos de la respuesta
    setUsers(
      isFiltering
        ? // Si hay filtros, filtramos primero por nombre y luego por apellido.
          filterUsers({ users: data, nameOrLastNameFilter })
        : // caso contrario devuelvo el listado de usuarios obtenidos por el paginado.
          data.data
    );

    // Actualizamos la cantidad de usuarios disponibles para así actualizar el número de páginas disponibles
    setTotalUsers(
      isFiltering
        ? // En caso de que haya filtros, devuelvo el número de usuarios que cumplen los filtros
          filterUsers({ users: data, nameOrLastNameFilter }).length
        : // en caso de que no haya filtros devuelvo el número de usuarios que hay en la respuesta paginada.
          data.items
    );
  } catch (error) {
    setError(error.message);
  }
};

export default fetchUsersPagePerPage;
