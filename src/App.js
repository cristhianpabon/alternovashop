import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductsPage from "./pages/ProductsPage";

import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <ProductsPage />
    </Provider>
  );
}

export default App;
