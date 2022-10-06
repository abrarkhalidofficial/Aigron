import React from "react";

export function HeaderOverlayEntry({ icon, info, title }) {
  return (
    <div className="header__content__overlay__entry">
      <div className="header__content__overlay__entry__icon">{icon}</div>
      <div className="header__content__overlay__entry__heading">{title}</div>
      <div className="header__content__overlay__entry__info">{info}</div>
    </div>
  );
}
