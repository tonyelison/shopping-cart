const api = (() => {
  const URI = 'https://fakestoreapi.com';

  const getList = async () => {
    const response = await fetch(`${URI}/products/category/electronics`)
    return response.json();
  };

  const getImg = async (src) => {
    return await fetch(src);
  };

  return { getList, getImg };
})();

export default api;