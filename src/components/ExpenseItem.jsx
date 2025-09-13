import React from 'react';

function ExpenseItem({ expense, onDeleteExpense }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
      <div className="flex-grow">
        <strong className="text-gray-800">{expense.description}</strong>
        <div className="text-sm text-gray-600">
          <span className="font-mono">${expense.amount.toFixed(2)}</span> - <span>{expense.date}</span>
        </div>
      </div>
      <button onClick={() => onDeleteExpense(expense.id)} className="ml-4 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;