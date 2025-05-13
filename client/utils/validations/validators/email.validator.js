import { isInvalid, isValid } from "../helper";

export default function validateEmail(email) {
  if (!email) return isInvalid("El email es requerido");

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) ? isValid() : isInvalid("El email no es válido");
}
