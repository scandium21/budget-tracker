import uuid from "uuid";
import database from "../firebase/firebase";
// update redux store
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// update firebase databse
// component calls action generator
// action generator returns function
// conponent dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// add_expense
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// edit_expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
