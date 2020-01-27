export default expenses => expenses.reduce((acc, i) => acc + i.amount, 0);
