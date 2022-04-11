import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import TaskInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";



const App = () => {
  const [todoList, settodoList] = useState([
    { text: "tast1", id: "g1" },
    { text: "Task2", id: "g2" },
  ]);

  const addTaskHandler = (enteredText) => {
    settodoList((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    settodoList((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: "center" }}>Nothing to Show</p>;

  if (todoList.length > 0) {
    content = (
      <CourseGoalList items={todoList} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="full-wrap">
      <section>
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section >
        {content}
      </section>
  
    </div>
  );
};

export default App;
