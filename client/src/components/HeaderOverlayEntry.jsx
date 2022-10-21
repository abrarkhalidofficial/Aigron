import React from "react";
import { Link } from "react-router-dom";

export function HeaderOverlayEntry({ icon, info, title, small, to, onClick }) {
  return to ? (
    <Link to={to} className="header__content__overlay__entry" onClick={onClick}>
      <div className="header__content__overlay__entry__icon">{icon}</div>
      <div
        className="header__content__overlay__entry__heading"
        style={small ? { marginBottom: "0em" } : null}
      >
        {title}
      </div>
      <div className="header__content__overlay__entry__info">{info}</div>
    </Link>
  ) : (
    <Link to="/" className="header__content__overlay__entry" onClick={onClick}>
      <div className="header__content__overlay__entry__icon">{icon}</div>
      <div
        className="header__content__overlay__entry__heading"
        style={small ? { marginBottom: "0em" } : null}
      >
        {title}
      </div>
      <div className="header__content__overlay__entry__info">{info}</div>
    </Link>
  );
}
