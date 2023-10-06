import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EverycashLeftSideFloating.module.css";

export function EverycashLeftSideFloating({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "left-side-floating")}
      tag="div"
      bind="f7d74b03-cd09-30e1-bbf7-97b4be561fea"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "everycash-dummy")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "everycash-button")}
          button={false}
          options={{
            href: "#",
            preload: "none",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "everycash-button-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6429070bf9d51a35f3907a47_everycash.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "everycash-button-text")}
            tag="div"
          >
            {"everycash"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
