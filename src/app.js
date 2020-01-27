import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";

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

ReactDOM.render(jsx, document.getElementById("app"));
