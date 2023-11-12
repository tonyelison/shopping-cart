import { useState, useEffect } from 'react';

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
    });
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <ul>
        {isLoading ? 'Loading...' : data.map((item) => (<li key={item.title}>{item.title}</li>))}
      </ul>
    </>
  );
};

export default Shop;