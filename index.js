import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./src/core/AppStore";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
