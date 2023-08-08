export const getProductIdWithoutColor = (itemId: string) => {
  const result = itemId.split('-');
  result.length = result.length - 1;

  return result.join('-') + '-';
};

export const replaceProderty = (itemId: string, oldProp: string, newProp: string) => {
  const result = itemId.split('-');
  const index = result.indexOf(oldProp.toLowerCase());

  result[index] = newProp.toLowerCase();

  return result.join('-');
}
