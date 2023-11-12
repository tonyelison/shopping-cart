import { useState, useEffect } from 'react';
import api from "../api";
import "../styles/shop.css"

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getList().then((data) => {
      setIsLoading(false);
      setData(data);
    });
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <ul>
        {isLoading ? 'Loading...' : data.map((item) => (
        <li key={item.title}>
          {item.title}<br />
          <img src={item.image} />
        </li>
        ))}
      </ul>
    </>
  );
};

export default Shop;