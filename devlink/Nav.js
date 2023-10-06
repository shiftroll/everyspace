import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({
  as: _Component = _Builtin.NavbarWrapper,
  navbarVisibility2 = true,
  navbarLinkText = "",
  navbarVisibility = true,
}) {
  return navbarVisibility ? (
    <_Component
      className={_utils.cx(_styles, "navbars")}
      tag="div"
      sym-bind='{"visibility":{"type":"Record","val":{"conditions":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"f4221b34-872d-bc64-7a7e-fe7b5fb5cd46"}}}}}'
      bind="d2187b39-4b64-ea21-f02a-9ee2fa0cfff0"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar-content-home")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar-brand-home")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "logo")}
            loading="eager"
            height="100"
            width="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63f71c3a5cb0bf65898c4896/63f8ed26ab2473ad339ac145_Vectors-Wrapper.svg"
          />
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar-menu-home")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link-home")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "nav-link")}
              tag="div"
            >
              {"Plan & Fit"}
            </_Builtin.Block>
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link-home")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "nav-link")}
              tag="div"
            >
              {"About Us"}
            </_Builtin.Block>
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link-home")}
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"73cea947-e1c6-63b5-8e63-9f4e64e9ac73"}}}'
            options={{
              href: "#",
            }}
          >
            {navbarLinkText}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar-link-home")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-link")}
              tag="div"
            >
              {"Pick & Fit"}
            </_Builtin.Block>
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar-right-menu-home")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "login-div-home")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-login-home")}
              tag="div"
            >
              {"Login"}
            </_Builtin.Block>
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "cart-div-home")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "vectors-wrapper-cart-home")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/63f71c3a5cb0bf65898c4896/63f92c51f794d589220d6184_Vectors-Wrapper.svg"
            />
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "language-home")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "text")}
              tag="div"
            >
              {"EN"}
            </_Builtin.Block>
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
