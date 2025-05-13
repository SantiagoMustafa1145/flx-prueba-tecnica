import { Modal } from "antd";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext";

export default function DeleteUserModal({
  data,
  visibility,
  handleVisibility,
}) {
  const { deleteUser } = useContext(UsersContext);

  const handleModal = () => {
    deleteUser(data.id);
    handleVisibility();
  };

  return (
    <Modal
      okText="Eliminar"
      okButtonProps={{
        danger: true,
      }}
      okType="primary"
      cancelText="Cancelar"
      open={visibility}
      onCancel={handleVisibility}
      onOk={handleModal}
      onClose={handleVisibility}
      centered
    >
      <p>
        ¿Está seguro de eliminar el usuario{" "}
        <span className="deleteUserModal-username">@{data.username}</span>?
      </p>
    </Modal>
  );
}
