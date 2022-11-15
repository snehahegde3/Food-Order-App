import classes from './HeaderCartButton.module.css';

import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';

//HeadCartButton will be reevaluated by react, each time the cartContext changes
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  //reduce takes in a function and a initial value

  //the function iself takes in the currentValue that it keeps updating and the item

  const numberOfCartItems = cartCtx.items.reduce((currrentNumber, item) => {
    return currrentNumber + item.amount;
  }, 0);

  const btnClasees = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasees} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
