export function isValid() {
  return {
    isValid: true,
    error: "",
  };
}

export function isInvalid(error) {
  return {
    isValid: false,
    error: error,
  };
}
