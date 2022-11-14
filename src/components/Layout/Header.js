//importing images

//the extension matters since it is not a js file
import mealsImg from '../../assets/meals.jpg';

import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img className={classes['main-image']} src={mealsImg} alt='food' />
      </div>
    </>
  );
};

export default Header;
