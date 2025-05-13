import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext";
import validateInputs from "../../utils/validations/validateInputs";

export default function AddUserModal({ visibility = false, handleVisibility }) {
  const { addUser } = useContext(UsersContext);
  const [form] = Form.useForm();

  const handleModal = (e) => {
    const { isValid, error } = validateInputs(e);

    if (!isValid) {
      console.log(error);
      error.map(({ field, error }) =>
        form.setFields([{ name: field, errors: error.split(".") }])
      );
      return;
    }

    addUser(e);
    handleVisibility();
    return;
  };

  return (
    <Modal
      title="Agregar usuario"
      open={visibility}
      okText="Agregar usuario"
      okType="primary"
      okButtonProps={{ autoFocus: true, htmlType: "submit" }}
      onCancel={handleVisibility}
      onClose={handleVisibility}
      centered
      destroyOnHidden
      modalRender={(dom) => (
        <Form
          layout="vertical"
          form={form}
          onFinish={handleModal}
          clearOnDestroy
        >
          {dom}
        </Form>
      )}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name={"username"}
            label="Usuario"
            layout="vertical"
            rules={[{ required: true, message: "Se requiere un usuario" }]}
          >
            <Input
              placeholder="jonhdoe"
              title="Nombre de usuario"
              aria-label="Nombre de usuario"
            />
          </Form.Item>
          <Form.Item
            name={"name"}
            label="Nombre"
            layout="vertical"
            rules={[{ required: true, message: "Se requiere un nombre" }]}
          >
            <Input
              placeholder="John"
              title="Nombre del usuario"
              aria-label="Nombre del usuario"
            />
          </Form.Item>
          <Form.Item
            name={"status"}
            label="Estado"
            layout="vertical"
            rules={[{ required: true, message: "Se requiere un estado" }]}
          >
            <Select
              placeholder={"Seleccione un estado"}
              options={[
                { value: "active", label: "Activo" },
                { value: "inactive", label: "Inactivo" },
              ]}
              title="Estado del usuario"
              aria-label="Estado del usuario"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={"email"}
            label="Email"
            layout="vertical"
            rules={[{ required: true, message: "Se requiere un email" }]}
          >
            <Input
              placeholder="johndoe@domain.com"
              title="Email del usuario"
              aria-label="Email del usuario"
            />
          </Form.Item>
          <Form.Item
            name={"lastname"}
            label="Apellido"
            layout="vertical"
            rules={[{ required: true, message: "Se requiere un apellido" }]}
          >
            <Input
              placeholder="Doe"
              title="Apellido del usaurio"
              aria-label="Apellido del usuario"
            />
          </Form.Item>
          <Form.Item
            name={"age"}
            label="Edad"
            layout="vertical"
            rules={[{ required: true, message: "Se requiere una edad" }]}
          >
            <Input
              placeholder="43"
              title="Edad del usuario"
              aria-label="Edad del usuario"
            />
          </Form.Item>
        </Col>
      </Row>
    </Modal>
  );
}
