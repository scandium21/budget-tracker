import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";

const store = configureStore();

// store.dispatch(
//   addExpense({
//     description: "water bill",
//     amount: 200
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "gas bill",
//     amount: 400,
//     createdAt: 1000
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "Rent",
//     amount: 109500
//   })
// );

// console.log(
//   getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      // fetch user's expenses
      // redirecting to dashboard
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
