const ShopItem = ({ item }) => (
  <li>
    {item.title}<br />
    <img src={item.image} />
  </li>
);

export default ShopItem;