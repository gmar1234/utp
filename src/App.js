import { Switch, Route } from "react-router-dom";
import Welcome from "./presentation/container/welcome/WelcomeView";
import Shop from "./presentation/container/shop/ShopView";
import { Layout } from "antd";
import HeaderComponent from "./presentation/components/header/HeaderComponent";

function App() {
  return (
    <Layout>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Layout>
  );
}

export default App;
