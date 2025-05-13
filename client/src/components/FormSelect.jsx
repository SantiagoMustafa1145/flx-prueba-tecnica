import { Form, Select } from "antd";
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
 * accessibility:string,
 * options:{value:string | number | boolean | null, label:string}[]
 * }} param0
 * @returns {JSX.Element}
 */
export default function FormSelect({
  name,
  label,
  layout,
  rules,
  initialValue,
  placeholder,
  accessibility,
  options,
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      layout={layout}
      initialValue={initialValue}
      rules={[...rules]}
    >
      <Select
        placeholder={placeholder}
        options={options}
        title={accessibility}
        aria-label={accessibility}
      />
    </Form.Item>
  );
}
