import { useSelector, RootStateOrAny } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const uiSlice   = useSelector((state: RootStateOrAny) => state.uiSlice);

  return (
    <Layout>
      {uiSlice.cartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
