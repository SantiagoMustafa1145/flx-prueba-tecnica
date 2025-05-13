import UsersContext from "../context/UsersContext";
import useUserList from "../hooks/useUserList";

export default function UserProvider({ children }) {
  const {
    users,
    totalUsers,
    error,
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
  } = useUserList();

  return (
    <UsersContext.Provider
      value={{
        users,
        totalUsers,
        error,
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
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
