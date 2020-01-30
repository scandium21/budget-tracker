import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expensesTotal";

export const ExpensesSumary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>{formattedExpensesTotal}</span>
          <div className="page-header__actions">
            <Link to="/create" className="button">
              Add Expense
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const expenseToShow = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenseToShow.length,
    expensesTotal: selectExpensesTotal(expenseToShow)
  };
};

export default connect(mapStateToProps)(ExpensesSumary);
