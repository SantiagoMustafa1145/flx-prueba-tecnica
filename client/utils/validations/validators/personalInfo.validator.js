import { isInvalid, isValid } from "../helper";

export default function validatePersonalInfo(value, fieldName) {
  // se eliminan los espacios en blanco al principio y final para validar el nombre.
  if (!value?.trim()) return isInvalid(`${fieldName} es requerido`);

  const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return re.test(value) ? isValid() : isInvalid("Sólo letras y espacios");
}
