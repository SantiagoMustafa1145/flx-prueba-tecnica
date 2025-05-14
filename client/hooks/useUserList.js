import { useEffect, useState } from "react";
import { v4 } from "uuid";
import fetchData from "../utils/fetchData";
import fetchUsersStartLimit from "../utils/fetchUsersStartLimit";

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

  useEffect(() => {
    // debounce para evitar que se ejecute la petición cada vez que se escribe en el input
    const debounce = setTimeout(() => {
      fetchUsersStartLimit({
        setUsers,
        setTotalUsers,
        setError,
        nameOrLastNameFilter,
        statusFilter,
        offset,
        limit,
      });
    }, 250);
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
    }).then(() => {
      // Se llama a la función fetchUsersStartLimit para actualizar la lista de usuarios
      // Ésto para evitar que se sume un usuario nuevo a la lista de usuarios paginada, dando un error
      // en la visualización de los datos en la tabla.
      fetchUsersStartLimit({
        setUsers,
        setTotalUsers,
        setError,
        nameOrLastNameFilter,
        statusFilter,
        offset,
        limit,
      });
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
