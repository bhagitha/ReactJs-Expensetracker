import React,{useState} from 'react';

import NewExpense  from "./NewExpense/NewExpense";
import Expenses from './Expenses/Expenses';

const Dummy_Array = [
    {
      id: 'e1',
      title: 'News Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {

const[expenses,setExpenses]=useState(Dummy_Array)

const addExpenseHandler = expense=>{
console.log(('In App.js'))
console.log(expense)
// setExpenses([expense,...expenses])
setExpenses((prevExpenses)=>{
  return [expense,...prevExpenses]})

}
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';

// import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
// import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
// import './App.css';

// const App = () => {
//   const [courseGoals, setCourseGoals] = useState([
//     { text: 'Do all exercises!', id: 'g1' },
//     { text: 'Finish the course!', id: 'g2' }
//   ]);

//   const addGoalHandler = enteredText => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = [...prevGoals];
//       updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
//       return updatedGoals;
//     });
//   };

//   const deleteItemHandler = goalId => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
//       return updatedGoals;
//     });
//   };

//   let content = (
//     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//   );

//   if (courseGoals.length > 0) {
//     content = (
//       <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
//     );
//   }

//   return (
//     <div>
//       <section id="goal-form">
//         <CourseInput onAddGoal={addGoalHandler} />
//       </section>
//       <section id="goals">
//         {content}
//         {/* {courseGoals.length > 0 && (
//           <CourseGoalList
//             items={courseGoals}
//             onDeleteItem={deleteItemHandler}
//           />
//         ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//         } */}
//       </section>
//     </div>
//   );
// };

// export default App;




