import classes from './HeaderCartButton.module.css';

import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';

//HeadCartButton will be reevaluated by react, each time the cartContext changes
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  //reduce takes in a function and a initial value

  //the function iself takes in the currentValue that it keeps updating and the item

  const numberOfCartItems = cartCtx.items.reduce((currrentNumber, item) => {
    return currrentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
