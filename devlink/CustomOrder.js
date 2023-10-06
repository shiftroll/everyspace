import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CustomOrder.module.css";

export function CustomOrder({
  as: _Component = _Builtin.Link,

  customOrderLink2 = {
    href: "#",
  },

  customOrderLink = {
    href: "#",
  },

  text = "This is the default text value",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "custom-order")}
      button={true}
      sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"dc3cb847-8eb4-f959-1dae-dde6613ab116"}}}'
      bind="b23edf23-3b96-83cc-6f06-c259eb12327f"
      id="kitchen"
      options={customOrderLink2}
    >
      {"Custom Order"}
    </_Component>
  );
}
