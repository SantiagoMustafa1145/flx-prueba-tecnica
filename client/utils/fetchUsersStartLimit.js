import fetchData from "./fetchData";
import { filterUsers } from "./filterUsers";

const fetchUsersStartLimit = async ({
  setUsers,
  setTotalUsers,
  setError,
  nameOrLastNameFilter,
  statusFilter,
  offset,
  limit,
}) => {
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

export default fetchUsersStartLimit;
