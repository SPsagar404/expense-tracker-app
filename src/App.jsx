import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import './index.css';

function App() {
  // Initialize expenses from localStorage or with an empty array
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    console.log('Loaded expenses from localStorage:', savedExpenses);
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense , ...prevExpenses]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <hr className="my-6" /> {/* Horizontal rule for separation */}
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        <TotalExpenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;