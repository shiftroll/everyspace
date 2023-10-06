import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      bind="4990a16e-0ffe-6b5d-24e6-cb04cd55b9ef"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navigation-items")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "logo-image")}
            width="65"
            height="auto"
            loading="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/5c6eefaaeddf9248ac13bc72/5c6ef116eddf92775813c297_store-logo%402x.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.Block
          className={_utils.cx(_styles, "navigation-wrap")}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "navigation-items")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"Products"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NotSupported _atom="CommerceCartWrapper" />
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-icon")}
              width="22"
              height="auto"
              loading="auto"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/63fc0698f87ebe80ce32acf1_menu-icon.png"
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
