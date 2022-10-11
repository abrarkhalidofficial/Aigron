import React from "react";

export function HeaderOverlayEntry({ icon, info, title, small }) {
  return (
    <div className="header__content__overlay__entry">
      <div className="header__content__overlay__entry__icon">{icon}</div>
      <div
        className="header__content__overlay__entry__heading"
        style={small ? { marginBottom: "0em" } : null}
      >
        {title}
      </div>
      <div className="header__content__overlay__entry__info">{info}</div>
     
    </div>
  );
}
