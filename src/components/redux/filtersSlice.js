export function setSearchValue(value) {
  return {
    type: 'filters/setSearchValue',
    payload: value,
  };
}
