const api = (() => {
  const URL = 'https://fakestoreapi.com';

  const getList = async () => {
    const response = await fetch(`${URL}/products/category/electronics`)
    return response.json();
  };

  return { getList };
})();

export default api;