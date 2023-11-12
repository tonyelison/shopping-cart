const api = (() => {
  const URI = 'https://fakestoreapi.com';

  const getList = async () => {
    const response = await fetch(`${URI}/products/category/electronics`)
    return response.json();
  };

  return { getList };
})();

export default api;