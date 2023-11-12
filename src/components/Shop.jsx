import { useState, useEffect } from 'react';
import api from "../api";
import ShopItem from './ShopItem';
import "../styles/shop.css";

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
        <ShopItem key={item.title} item={item} />
        ))}
      </ul>
    </>
  );
};

export default Shop;