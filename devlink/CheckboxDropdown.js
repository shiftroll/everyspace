import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CheckboxDropdown.module.css";

export function CheckboxDropdown({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "category-wrapper")} tag="div">
      <_Builtin.DropdownWrapper
        className={_utils.cx(_styles, "category-dropdown")}
        tag="div"
        bind="f7bb0970-8a7c-8713-0060-c338968c525e"
        delay="0"
        hover=""
      >
        <_Builtin.DropdownToggle
          className={_utils.cx(_styles, "category-toggle", "dark")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-81", "white")}
            tag="div"
            fs-cmsfilter-element="tag-text"
          >
            {" Area"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "chevron-circle")}
            tag="div"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "chevron-down", "white")}
              widget={{
                type: "icon",
                icon: "dropdown-toggle",
              }}
              bind="f7bb0970-8a7c-8713-0060-c338968c5263"
            />
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className={_utils.cx(_styles, "dropdown-list", "dark")}
          tag="nav"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "checkbox-wrapper")}
            tag="div"
          >
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
    </_Component>
  );
}
