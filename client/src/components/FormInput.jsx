import { Form, Input } from "antd";
import Rule from "antd/es/form";

/**
 *
 * @param {{
 * name:string,
 * label:string,
 * layout:"horizontal" | "vertical",
 * rules:Rule[],
 * initialValue:string | number | boolean | null,
 * placeholder:string,
 * accessibility:string
 * }} param0
 * @returns {JSX.Element}
 */
export default function FormInput({
  name,
  label,
  layout,
  rules,
  initialValue,
  placeholder,
  accessibility,
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      layout={layout}
      rules={[...rules]}
      initialValue={initialValue}
    >
      <Input
        placeholder={placeholder}
        title={accessibility}
        aria-label={accessibility}
      />
    </Form.Item>
  );
}
