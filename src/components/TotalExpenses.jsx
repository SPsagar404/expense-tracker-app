import React from 'react';

function TotalExpenses({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="mt-6 pt-4 border-t-2 border-gray-200 text-right">
      <h3 className="text-xl font-bold text-green-600">Total Expenses: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default TotalExpenses;