import "./App.css";
import React from "react";
import Started from "./components/Started";
import NotStarted from "./components/NotStarted";
import axios from "axios";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

function App() {
  const [isStarted, setIsStarted] = useState(true);
  const [rerender, setRerender] = useState(0);
  const [questions, setQuestions] = React.useState([]);
  const url = "https://opentdb.com/api.php?amount=5";
  let questionDiv;


  // console.log(questionDiv);
 
  React.useEffect(() => {
    const loadPost = async () => {
      fetch(url)
      .then((res) => res.json())
      .then((d) =>{
        setQuestions(()=> d.results)
      })
    }
    
    loadPost();
  }, [rerender]);

  console.log(questions)
    questionDiv = questions.map( () =>

      (
        {
        category,
        type,
        difficulty,
        question,
        incorrect_answers,
        correct_answer,
      }
      ) => {
        return (
        <Started
          rerenderTrigger={rerenderTrigger}
          question={question}
          incorrect_answers={incorrect_answers}
          correct_answer={correct_answer}
        />
        );
      }
    );

  
  console.log(questionDiv)
  console.log("ALo");

  // function Start() {
  //   if (doStart) {
  //     return <div>{questionDiv}</div>;
  //   }
  //   return <NotStarted />;
  // }

  function rerenderTrigger() {
    setRerender((prevRerender) => prevRerender++);
  }

  return (
    <div className="h-full">
      {questionDiv}
    </div>
  )
}

export default App;
