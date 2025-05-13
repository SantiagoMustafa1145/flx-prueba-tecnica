import { isInvalid, isValid } from "../helper";

export default function validateStatus(status) {
  return ["active", "inactive"].includes(status)
    ? isValid()
    : isInvalid("Estado no válido");
}
