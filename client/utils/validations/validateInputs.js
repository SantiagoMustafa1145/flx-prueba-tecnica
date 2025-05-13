import validateAge from "./validators/age.validator";
import validateEmail from "./validators/email.validator";
import validatePersonalInfo from "./validators/personalInfo.validator";
import validateStatus from "./validators/status.validator";
import validateUsername from "./validators/username.validator";

/**
 * @param {{
 *  username: string,
 *  name: string,
 *  lastname: string,
 *  email: string,
 *  status: string,
 *  age: number
 * }} inputs
 * @returns {{
 *  isValid: boolean,
 *  errors: Array<{field: string, error: string}>
 * }}
 */
export default function validateInputs(inputs) {
  const errors = [];

  // Se comprueba cada valor del input y se almacena en un objeto
  // con la validación de cada valor.
  const validations = {
    email: validateEmail(inputs.email),
    username: validateUsername(inputs.username),
    name: validatePersonalInfo(inputs.name, "Nombre"),
    lastname: validatePersonalInfo(inputs.lastname, "Apellido"),
    status: validateStatus(inputs.status),
    age: validateAge(inputs.age),
  };

  // Almaceno los errores en un array de objetos con el nombre del campo y su error.
  Object.entries(validations).forEach(([field, result]) => {
    if (!result.isValid) {
      errors.push({ field, error: result.error });
    }
  });

  // Si no hay errores, devuelvo true, sino false además de los errores en el caso de que haya.
  return {
    isValid: errors.length === 0,
    errors,
  };
}
