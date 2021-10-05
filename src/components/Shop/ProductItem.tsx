import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch  } from "react-redux";
import { cartActions  } from "../../store/cartSlice";
import CartItemDef from '../../models/cartItemsDef';

const ProductItem = (item: CartItemDef) => {
  const dispatch   = useDispatch()

  const buttonHandler = (event: any) => {
    console.log("ProductItem.buttonHandler:itemId:" + item.cartItemId);
    dispatch(cartActions.addItem({item: item}));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.cartItemName}</h3>
          <div className={classes.price}>${item.cartItemPrice.toFixed(2)}</div>
        </header>
        <p>{item.cartItemDesc}</p>
        <div className={classes.actions}>
          <button onClick={buttonHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
