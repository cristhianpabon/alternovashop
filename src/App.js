import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductsPages from "./pages/ProductsPages";

import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <ProductsPages />
    </Provider>
  );
}

export default App;
