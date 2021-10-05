import classes from './CartItem.module.css';

import { useDispatch  } from "react-redux";
import { cartActions  } from "../../store/cartSlice";
import CartItemDef from '../../models/cartItemsDef';

const CartItem = (props: any) => {
  const { title, quantity, total, price } = props.item;
  const dispatch   = useDispatch()
  
  const buttonHandlerAdd = (event: any) => {
    console.log("CartItem.buttonHandlerAdd:itemId:" );
    const tmpItem = new CartItemDef("1");
    dispatch(cartActions.addItem({item: tmpItem}));
  }

  const buttonHandlerDel = (event: any) => {
    console.log("CartItem.buttonHandlerDel:itemId:" );
    dispatch(cartActions.delItem({itemId: "1"}));
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={buttonHandlerDel}>-</button>
          <button onClick={buttonHandlerAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
