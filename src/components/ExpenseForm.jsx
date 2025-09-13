import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      alert('Please fill in all fields.');
      return;
    }

    const newExpense = {
      id: Math.random().toString(), // Simple unique ID for now
      description,
      amount: parseFloat(amount), // Convert amount to a number
      date,
    };

    onAddExpense(newExpense); // Pass new expense to parent
    setDescription(''); // Clear form
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700">Add New Expense</h2>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-600 mb-1">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., Groceries, Rent, Utilities"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-600 mb-1">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 50.00"
          min="0.01"
          step="0.01"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-1">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;