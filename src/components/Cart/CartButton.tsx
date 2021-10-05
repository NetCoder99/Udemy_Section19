import classes from './CartButton.module.css';
import { RootStateOrAny, useDispatch, useSelector  } from "react-redux";
import { uiActions  } from "../../store/uiSlice";

const CartButton = (props: any) => {
  const dispatch  = useDispatch()
  const cartSlice = useSelector((state: RootStateOrAny) => state.cartSlice);

  const buttonHandler = (event: any) => {
    console.log("CartButton.buttonHandler");
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={buttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSlice.totCartQty}</span>
    </button>
  );
};

export default CartButton;
