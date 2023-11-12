import PropTypes from 'prop-types';

const ShopItem = ({ item }) => (
  <li>
    {item.title}<br />
    <img src={item.image} />
  </li>
);

ShopItem.propTypes = {
  item: PropTypes.object,
};

export default ShopItem;