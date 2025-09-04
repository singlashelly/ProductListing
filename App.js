import React, { Suspense } from "react";
import withRouter from "./src/core/common/WithRouter";
import Main from "./src/home/main";
import Header from "./src/components/Header";
import ProductList from "./src/components/ProductList";

function App(props) {
  return (
    <Suspense fallback="">
      <Header />
      <ProductList />
      <div className="App">
        <Main id="content" title={Main} />
      </div>
    </Suspense>
  );
}

export default withRouter(App);
