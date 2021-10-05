import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { RootStateOrAny, useDispatch, useSelector  } from "react-redux";
import { uiActions  } from "../../store/uiSlice";

const Cart = (props: any) => {
  const cartSlice   = useSelector((state: RootStateOrAny) => state.cartSlice);

  const q1 = cartSlice.totCartQty;

  const dispatch   = useDispatch()

  const buttonHandler = (event: any) => {
    console.log("CartButton.buttonHandler");
    dispatch(uiActions.hide());
  }

  return (
    <Card className={classes.cart}>
      <div> 
         <h2>Your Shopping Cart</h2>
         <button onClick={buttonHandler}>X</button>
      </div>
      <ul  className={classes.clear}>
        <CartItem
          item={{ title: 'Test Item', quantity: cartSlice.totCartQty, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
