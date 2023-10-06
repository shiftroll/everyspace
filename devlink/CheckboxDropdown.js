import React from "react";
import * as _Builtin from "./_Builtin";

export function CheckboxDropdown({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="category-wrapper"
      tag="div"
      bind="953e21e2-45aa-4efd-274d-ade2f5d85b05"
    >
      <_Builtin.DropdownWrapper
        className="category-dropdown"
        tag="div"
        bind="953e21e2-45aa-4efd-274d-ade2f5d85b06"
        delay="0"
        hover=""
      >
        <_Builtin.DropdownToggle className="category-toggle dark" tag="div">
          <_Builtin.Block
            className="text-block-81 white"
            tag="div"
            fs-cmsfilter-element="tag-text"
          >
            {" Area"}
          </_Builtin.Block>
          <_Builtin.Block className="chevron-circle" tag="div">
            <_Builtin.Icon
              className="chevron-down white"
              widget={{
                type: "icon",
                icon: "dropdown-toggle",
              }}
              bind="953e21e2-45aa-4efd-274d-ade2f5d85b0b"
            />
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList className="dropdown-list dark" tag="nav">
          <_Builtin.Block className="checkbox-wrapper" tag="div">
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
    </_Component>
  );
}
