import ProductItem from './ProductItem';
import classes from './Products.module.css';
import CartItemDef from '../../models/cartItemsDef';

const Products = (props: any) => {
  const tmpItem = new CartItemDef("1");
  tmpItem.cartItemName = "Test";
  tmpItem.cartItemDesc = "Test First Product";
  tmpItem.cartItemPrice = 6.00;
  tmpItem.cartItemQty = 1;

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem {...tmpItem} />
      </ul>
    </section>
  );
};

export default Products;
