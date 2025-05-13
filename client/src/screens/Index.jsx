import { Breadcrumb, Button, Input, Select } from "antd";
import { useContext, useState } from "react";
import UsersContext from "../../context/UsersContext";
import AddUserModal from "../components/AddUserModal";
import TableComponent from "../components/TableComponent";
import ErrorView from "../screens/ErrorView";

export default function Index() {
  const [addUserModalVisibility, setAddUserModalVisibility] = useState(false);
  const { error, setNameOrLastNameFilter, setStatusFilter } =
    useContext(UsersContext);

  if (error) return <ErrorView />;

  return (
    <div>
      <header className="header">
        <img
          src="https://camo.githubusercontent.com/dca1d655abd7ea1708ae59b18cbd35b9192018d30b82a53ab32427c7484573c3/68747470733a2f2f666c65787875732e636f6d2e61722f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f6c6f676f2d666c65787875732d6865616465722d7076386c696168386b6876367866796e767a3033736f39763938736b327472353068747339776537646b2e706e67"
          alt="Logo de la empresa Flexxus"
          aria-label="Logo de la empresa Flexxus"
        />
      </header>
      <main className="main">
        <div>
          <Breadcrumb
            items={[{ title: "Usuarios" }, { title: "Lista de usuarios" }]}
          />
        </div>
        <section className="actions">
          <div className="actions-filter">
            <Input.Search
              size="large"
              allowClear
              placeholder="Buscar usuarios"
              title="Buscar por usuarios"
              aria-label="Buscar por usuarios"
              onChange={(e) => setNameOrLastNameFilter(e.target.value)}
              onSearch={(value) => setNameOrLastNameFilter(value)}
            />
            <Select
              placeholder="Filtrar por estado"
              options={[
                { value: "all", label: "Todos" },
                { value: "active", label: "Activos" },
                { value: "inactive", label: "Inactivos" },
              ]}
              size="large"
              title="Filtrar por estado"
              aria-label="Filtrar por estado"
              onChange={(value) => setStatusFilter(value)}
            />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={() => setAddUserModalVisibility(true)}
          >
            Agregar usuario
          </Button>
        </section>
        <TableComponent />
      </main>
      <AddUserModal
        visibility={addUserModalVisibility}
        handleVisibility={() => setAddUserModalVisibility(false)}
      />
    </div>
  );
}
