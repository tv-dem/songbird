import React from "react";

export default function Levels({id}) {
  let levels = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];

  function renderItems() {
    return levels.map((item, i) => {
      return <Level question={item}
       key={i} 
       className={id===i ? "active" : ""}/>;
    });
  }
  return <ul className="levels-block">{renderItems()}</ul>;
}

function Level({question, className}){
    return <li className={`levels-block__level ${className}`}>{question}</li>;
};