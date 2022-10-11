import React from "react";
import { Link, NavLink } from "react-router-dom";

export function HeaderOverlayEntry({ icon, info, title, small, to, onClick }) {
  return to ? (
    <NavLink
      to={to}
      className="header__content__overlay__entry"
      onClick={onClick}
    >
      <div className="header__content__overlay__entry__icon">{icon}</div>
      <div
        className="header__content__overlay__entry__heading"
        style={small ? { marginBottom: "0em" } : null}
      >
        {title}
      </div>
      <div className="header__content__overlay__entry__info">{info}</div>
    </NavLink>
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
