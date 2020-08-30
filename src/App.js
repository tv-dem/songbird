import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import birdsData from "./birdsData";
import Levels from "./components/Levels";
import CurrQuestion from "./components/CurrQuestion";
import Answers from "./components/Answers";
import Info from "./components/Info";
import NextLevel from "./components/NextLevel";
import AgainButton from "./components/AgainButton"

function getRandomBird(arr) {
  const index = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[index];
}

function App() {
  const bird = getRandomBird(birdsData[0]);
  const [score, setScore] = useState({ CurrScore: 0, scoreAdd: 5 });
  const [isEnd, setEnd] = useState(false);
  const [current, setCurrent] = useState({
    bird,
    category: 0,
    name: "******",
    img: "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg",
  });
  const [info, setInfo] = useState({
    isBegin: true,
    name: "",
    image: "",
    latinName: "",
    audio: "",
    description: "",
  });
  const [audioAnswer] = useState({
    correct: new Audio("audio/correct.mp3"),
    error: new Audio("audio/error.mp3"),
  });
  const [nextLevel, setNextLevel] = useState(false);
  function handleAnswer(event) {
    const element = event.target;
    const name = element.textContent;
    const index = Number(element.dataset.index);
    const inf = birdsData[current.category][index];
    setInfo({
      isBegin: false,
      name: inf.name,
      description: inf.description,
      latinName: inf.species,
      audio: inf.audio,
      image: inf.image,
    });

    if (
      element.classList.contains("success") ||
      element.classList.contains("error") ||
      nextLevel
    )
      return;

    let classAdd = "";
    if (index + 1 === current.bird.id) {
      audioAnswer.correct.play();
      setCurrent({
        isEnd: false,
        bird: current.bird,
        category: current.category,
        name: name,
        img: current.bird.image,
      });
      setNextLevel(true);
      setScore({
        CurrScore: score.CurrScore + score.scoreAdd,
        scoreAdd: 5,
      });
      classAdd = "success";
    } else {
      audioAnswer.error.play();
      setScore({
        CurrScore: score.CurrScore,
        scoreAdd: --score.scoreAdd,
      });
      classAdd = "error";
    }
    element.classList.add(classAdd);
  }
  function handleAgain(){
    const bird = getRandomBird(birdsData[0]);
    setScore({ CurrScore: 0, scoreAdd: 5 });
    setEnd(false);
    setCurrent({
      bird,
      category: 0,
      name: "******",
      img: "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg",
    });
    setInfo({
      isBegin: true,
      name: "",
      image: "",
      latinName: "",
      audio: "",
      description: "",
    });
    setNextLevel(false);
  }
  function handleNextLevel() {
    clearAnswers();
    if (current.category + 1 === birdsData.length) {
      setEnd(true);
      return;
    }
    setCurrent({
      bird: getRandomBird(birdsData[current.category + 1]),
      category: current.category + 1,
      name: "*******",
      img: "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg",
    });
    setNextLevel(false);
    setInfo({
      name: "******",
    });
    setInfo({
      ...info,
      isBegin: true,
    });
  }

  function clearAnswers() {
    const mas = document.querySelectorAll("li.answer");
    mas.forEach((el) => {
      el.classList.remove("success", "error");
    });
  }

  useEffect(()=>{
    console.log(current.bird.name);
  })

  return (
    <div className="wrapper">
      <Header score={score.CurrScore} />
      <Levels id={current.category} />
      {!isEnd ? (
        <>
          <CurrQuestion
            name={current.name}
            bird={current.bird}
            img={current.img}
          />
          <div className="answers-and-info">
            <Answers
              handleClick={handleAnswer}
              birds={birdsData[current.category]}
            />
            <Info info={info} />
          </div>

          <NextLevel
            active={nextLevel}
            onClick={() => {
              handleNextLevel();
            }}
          />
        </>
      ) : (
        <div>
          <div className="gratulate">
            <h2>поздравляем</h2>
            <div>вы набрали {score.CurrScore} из 30 возможных очков!</div>
            {score.CurrScore>=30 && <img src="win.jpg" alt="теперь вы знаете кто чирикнул"/>}
          </div>
          <AgainButton onClick={handleAgain}/>
        </div>
      )}
    </div>
  );
}

export default App;
