import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DropdownIcon.module.css";

export function DropdownIcon({ as: _Component = _Builtin.Icon }) {
  return (
    <_Component
      className={_utils.cx(_styles, "t-navigation-arrow-icon")}
      widget={{
        type: "icon",
        icon: "dropdown-toggle",
      }}
      bind="46fdb659-86b6-776c-666d-97fb1e42fa15"
    />
  );
}
