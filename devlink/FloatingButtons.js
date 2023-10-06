import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FloatingButtons.module.css";

export function FloatingButtons({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "ask-expert-floating-wrapper")}
      tag="div"
      bind="032a0112-274e-de00-1dc5-f7e0c72f0c02"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "left-side-floating")}
        tag="div"
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
              target: "_blank",
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
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "right-side-floating")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "ask-expert-floating-button")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "ask-expert-link")}
            button={false}
            options={{
              href: "https://wa.me/6281112111101",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-37")}
              loading="eager"
              width="auto"
              height="auto"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/643912ffa4d5fe1870588d7d_square%20chat%20bubble.svg"
            />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
