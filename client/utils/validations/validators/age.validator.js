import { isInvalid, isValid } from "../helper";

export default function validateAge(age) {
  const num = Number(age);
  return !isNaN(num) && num >= 0 && num <= 120
    ? isValid()
    : isInvalid("Edad debe ser entre 0 y 120");
}
