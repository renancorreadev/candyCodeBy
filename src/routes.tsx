import { Switch, Route } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
