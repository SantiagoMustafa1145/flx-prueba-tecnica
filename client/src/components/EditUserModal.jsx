import { Col, Form, Input, Modal, Row } from "antd";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext";
import validateInputs from "../../utils/validations/validateInputs";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export default function EditUserModal({
  visibility,
  data = {
    username: "",
    name: "",
    lastname: "",
    email: "",
    status: "",
    age: 0,
  },
  handleVisibility,
}) {
  const { updateUser } = useContext(UsersContext);
  const [form] = Form.useForm();
  const handleModal = (e) => {
    const { isValid, error } = validateInputs(e);

    if (!isValid) {
      error.map(({ field, error }) =>
        form.setFields([{ name: field, errors: error.split(".") }])
      );
      return;
    }

    updateUser(e);
    handleVisibility();
    return;
  };

  return (
    <Modal
      title="Editar usuario"
      open={visibility}
      okText="Editar usuario"
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
        <Form.Item hidden name={"id"} initialValue={data.id}>
          <Input />
        </Form.Item>
        <Col span={12}>
          <FormInput
            name="username"
            label="Usuario"
            initialValue={data.username}
            rules={[{ required: true, message: "Se requiere un usuario" }]}
            placeholder="jonhdoe"
            accessibility="Nombre de usuario"
          />
          <FormInput
            name="name"
            label="Nombre"
            initialValue={data.name}
            rules={[{ required: true, message: "Se requiere un nombre" }]}
            placeholder="John"
            accessibility="Nombre del usuario"
          />
          <FormSelect
            name="status"
            label="Estado"
            initialValue={data.status}
            rules={[{ required: true, message: "Se requiere un estado" }]}
            placeholder="Seleccione un estado"
            accessibility="Estado del usuario"
            options={[
              { value: "active", label: "Activos" },
              { value: "inactive", label: "Inactivos" },
            ]}
          />
        </Col>
        <Col span={12}>
          <FormInput
            name="email"
            label="Email"
            initialValue={data.email}
            rules={[{ required: true, message: "Se requiere un email" }]}
            placeholder="johndoe@domain.com"
            accessibility="Email del usuario"
          />
          <FormInput
            name="lastname"
            label="Apellido"
            initialValue={data.lastname}
            rules={[{ required: true, message: "Se requiere un apellido" }]}
            placeholder="Doe"
            accessibility="Apellido del usuario"
          />
          <FormInput
            name="age"
            label="Edad"
            initialValue={data.age}
            rules={[{ required: true, message: "Se requiere una edad" }]}
            placeholder="43"
            accessibility="Edad del usuario"
          />
        </Col>
      </Row>
    </Modal>
  );
}
