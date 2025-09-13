import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Expense History</h2>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500 p-5 border-2 border-dashed border-gray-300 rounded-lg">No expenses added yet. Start adding some!</p>
      ) : (
        <ul className="space-y-3">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;