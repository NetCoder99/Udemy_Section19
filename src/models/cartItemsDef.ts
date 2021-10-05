//import { useCounter } from "../hooks/useCounter";
//const taskCounter = useCounter();

class CartItemDef {

  cartItemId: string;
  cartItemName: string;
  cartItemDesc: string;
  cartItemPrice: number;
  cartItemQty: number;
  cartItemAmt: number;

  constructor(cartItemId: string);

  constructor(cartItemId: string, cartItemName?: string, cartItemDesc?: string, cartItemPrice?: number, cartItemQty?: number) {
    this.cartItemId    = cartItemId;
    this.cartItemName  = cartItemName  || '';
    this.cartItemDesc  = cartItemDesc  || '';
    this.cartItemPrice = cartItemPrice || 0.0;
    this.cartItemQty   = cartItemQty   || 0;
    this.cartItemAmt   = this.cartItemPrice * this.cartItemQty;
  }

}

//function getNextId(): string {
//  taskCounter.increment();
//  return "m" + taskCounter.counter.toString();
//}

export default CartItemDef;
