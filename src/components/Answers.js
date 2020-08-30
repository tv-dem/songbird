import React from "react";

const Answer = ({ handleClick, birdName, id }) => {
  return <li data-index={id} className="answer" onClick={handleClick}>{birdName}</li>;
};

export default function Answers({ handleClick, birds }) {
  function renderItems(){
    return birds.map((item, i) => {
      return (
        <Answer id={i} birdName={item.name} key={item.id} handleClick={handleClick} />
      );
    });
  };
  return (
    <div className="answers">
      <ul>{renderItems()}</ul>
    </div>
  );
}
