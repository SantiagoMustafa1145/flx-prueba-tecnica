import { isInvalid, isValid } from "../helper";

export default function validateUsername(username) {
  if (!username) return isInvalid("El usuario es requerido");

  const re = /^[a-zA-Z0-9]+$/;
  return re.test(username) ? isValid() : isInvalid("Sólo números y letras");
}
