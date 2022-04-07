import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MyLibrary from "./components/organisms/mylibrary/mylibrary";
import store from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-r4xuuydx.us.auth0.comN";
const clientId = "4mD5nQhhMGe0FATZlR7NnbHg797tI8OE";

console.log(domain, clientId);
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <React.Fragment>
        <MyLibrary></MyLibrary>
      </React.Fragment>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
