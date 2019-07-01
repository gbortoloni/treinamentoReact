export function changeValue(e) {
  const retorno = {
    type: "VALUE_CHANGED",
    payload: e.target.value
  };
  return retorno;
}
