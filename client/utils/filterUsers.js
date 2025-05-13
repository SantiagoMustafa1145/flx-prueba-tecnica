export function filterUsers({ users, nameOrLastNameFilter }) {
  return users.filter((user) => {
    const matchNameOrLastName =
      nameOrLastNameFilter === "" ||
      user.name.toLowerCase().includes(nameOrLastNameFilter.toLowerCase()) ||
      user.lastname.toLowerCase().includes(nameOrLastNameFilter.toLowerCase());
    return matchNameOrLastName;
  });
}
