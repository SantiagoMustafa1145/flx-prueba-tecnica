import constants from "../constant/constants";

export default async function fetchData({
  url = "/",
  options = {},
  setError = () => {},
  setIsLoading = () => {},
}) {
  let response = await fetch(constants.API_URL + url, options);

  if (!response.ok) {
    setError("Error en la petición de datos al EndPoint");
    return {
      status: response.status,
      data: null,
    };
  }
  response = await response.json();

  setIsLoading(false);

  return {
    status: response.status,
    data: response,
  };
}
