import React from "react";

import { ModularCardProps } from "./ModularCard.types";

import "./ModularCard.css";

const ModularCard: React.FC<ModularCardProps> = ({
  headerPath,
  headerName,
  headerButtons,
  filtersOfCard,
  contentOfCard,
}) => (
  <div className="container__card__navigate">
    <div className="header__card__navigate">
      <div>
        <div className="d-flex">
          {headerPath.map((item) => (
            <span className="header__text__path">{item}</span>
          ))}
        </div>
        <div className="d-flex header__container__name">
          <span className="header__item__name">{headerName}</span>
        </div>
      </div>
      {headerButtons ? (
        <div className="header__container__button">{headerButtons}</div>
      ) : null}
    </div>
    {filtersOfCard ? (
      <div className="filters__card__navigate">{filtersOfCard}</div>
    ) : null}
    {contentOfCard ? (
      <div className="content__cardnavigate">{contentOfCard}</div>
    ) : null}
  </div>
);

export default ModularCard;
