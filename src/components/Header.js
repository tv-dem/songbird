import React from "react";

export default function Header({ score }) {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>
          SONGBIRD
        </h1>
      </div>
      <div className="header__score">{`score:${score}`}</div>
    </header>
  );
}
