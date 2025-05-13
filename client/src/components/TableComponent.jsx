import { Button, Space, Table, Tag } from "antd";
import { useContext, useState } from "react";
import UsersContext from "../../context/UsersContext";
import DeleteUserModal from "./DeleteUserModal";
import EditUserModal from "./EditUserModal";

/**
 *
 * @param {Array} data Array de datos de los usuarios
 * @param {string} search Nombre de usuario a buscar
 * @param {string} status Estado del usuario (active/inactive)
 * @returns
 */
export default function TableComponent() {
  const {
    users,
    totalUsers,
    //  page, setPage, perPage, setPerPage,
    offset,
    setOffset,
    limit,
    setLimit,
  } = useContext(UsersContext);
  const [editUser, setEditUser] = useState({
    visibility: false,
    data: {
      id: "",
    },
  });
  const [deleteUser, setDeleteUser] = useState({
    visibility: false,
    data: {
      id: "",
    },
  });

  const tableHeaders = [
    {
      title: "Usuario",
      dataIndex: "username",
      key: "username",
      width: "26%",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      width: "26%",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
      width: "26%",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (_, render) => (
        <Tag
          color={render.status === "inactive" ? "red" : "green"}
          style={{ textTransform: "capitalize" }}
        >
          {render.status == "active" ? "Activo" : "Inactivo"}
        </Tag>
      ),
      width: "80px",
    },
    {
      title: "Acciones",
      key: "action",
      render: (_, render) => {
        return (
          <Space size="middle">
            <Button
              size="small"
              type="link"
              onClick={() => {
                setEditUser({ visibility: true, data: { ...render } });
              }}
            >
              Editar
            </Button>
            <Button
              size="small"
              type="link"
              onClick={() =>
                setDeleteUser({ visibility: true, data: { ...render } })
              }
            >
              Eliminar
            </Button>
          </Space>
        );
      },
      width: "160px",
    },
  ];

  return (
    <>
      <Table
        dataSource={users}
        columns={tableHeaders}
        tableLayout="fixed"
        className="table"
        size="default"
        pagination={{
          // defaultPageSize: perPage,
          // current: page,
          defaultPageSize: limit,
          current: offset / limit + 1,
          showSizeChanger: false,
          total: totalUsers,
          onChange: (page, pageSize) => {
            // setPage(page);
            // setPerPage(pageSize);
            setOffset(pageSize * (page - 1) + 1);
            setLimit(pageSize);
          },
        }}
      />
      <EditUserModal
        visibility={editUser.visibility}
        data={editUser.data}
        handleVisibility={() =>
          setEditUser({ visibility: false, data: { id: "" } })
        }
      />
      <DeleteUserModal
        visibility={deleteUser.visibility}
        data={deleteUser.data}
        handleVisibility={() => {
          setDeleteUser({
            visibility: false,
            data: {
              id: "",
            },
          });
        }}
      />
    </>
  );
}
