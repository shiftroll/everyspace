import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductVariantFilter.module.css";

export function ProductVariantFilter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "product-var-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "color-container")}
        tag="div"
      >
        <_Builtin.DropdownWrapper
          className={_utils.cx(_styles, "category-dropdown")}
          tag="div"
          bind="f7bb0970-8a7c-8713-0060-c338968c525e"
          delay="0"
          hover=""
        >
          <_Builtin.DropdownToggle
            className={_utils.cx(_styles, "style-picker-dropdown", "light")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-81", "dark")}
              tag="div"
              fs-cmsfilter-element="tag-text"
            >
              {"Pick Styles"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "chevron-circle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "chevron-down", "black")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
                bind="f7bb0970-8a7c-8713-0060-c338968c5263"
              />
            </_Builtin.Block>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList
            className={_utils.cx(_styles, "dropdown-list", "white")}
            tag="nav"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "checkbox-wrapper", "white")}
              tag="div"
            >
              <_Builtin.FormCheckboxWrapper
                className={_utils.cx(_styles, "style-checkbox-1", "light")}
              >
                <_Builtin.FormCheckboxInput
                  className={_utils.cx(_styles, "checkbox-style-1")}
                  inputType="custom"
                  dyn={{
                    bind: {},
                  }}
                  type="checkbox"
                  name="Area-2"
                  data-name="Area 2"
                  required={false}
                  checked={true}
                  fs-mirrorinput-element="trigger-1"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className={_utils.cx(_styles, "style-label", "black")}
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="1073b7c0-3f18-7c12-6c28-e729aca8f99e"
                >
                  {"Nightfall"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
              <_Builtin.FormCheckboxWrapper
                className={_utils.cx(_styles, "style-checkbox-1", "light")}
              >
                <_Builtin.FormCheckboxInput
                  className={_utils.cx(_styles, "checkbox-style-1")}
                  inputType="custom"
                  dyn={{
                    bind: {},
                  }}
                  type="checkbox"
                  name="Area-2"
                  data-name="Area 2"
                  required={false}
                  checked={true}
                  fs-mirrorinput-element="trigger-2"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className={_utils.cx(_styles, "style-label", "black")}
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="1073b7c0-3f18-7c12-6c28-e729aca8f99e"
                >
                  {"Purewhite"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
              <_Builtin.FormSelect
                name="field-3"
                data-name="Field 3"
                required={false}
                multiple={false}
                id="field-3"
                options={[
                  {
                    t: "Select one...",
                    v: "",
                  },
                  {
                    t: "First choice",
                    v: "First",
                  },
                  {
                    t: "Second choice",
                    v: "Second",
                  },
                  {
                    t: "Third choice",
                    v: "Third",
                  },
                ]}
              />
              <_Builtin.FormCheckboxWrapper
                className={_utils.cx(_styles, "style-checkbox-1", "light")}
              >
                <_Builtin.FormCheckboxInput
                  className={_utils.cx(_styles, "checkbox-style-1")}
                  inputType="custom"
                  dyn={{
                    bind: {},
                  }}
                  type="checkbox"
                  name="Area-2"
                  data-name="Area 2"
                  required={false}
                  checked={true}
                  fs-mirrorinput-element="trigger-3"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className={_utils.cx(_styles, "style-label", "black")}
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="1073b7c0-3f18-7c12-6c28-e729aca8f99e"
                >
                  {"Spectrum"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
              <_Builtin.FormCheckboxWrapper
                className={_utils.cx(_styles, "style-checkbox-1", "light")}
              >
                <_Builtin.FormCheckboxInput
                  className={_utils.cx(_styles, "checkbox-style-1")}
                  inputType="custom"
                  dyn={{
                    bind: {},
                  }}
                  type="checkbox"
                  name="Area-2"
                  data-name="Area 2"
                  required={false}
                  checked={true}
                  fs-mirrorinput-element="trigger-4"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className={_utils.cx(_styles, "style-label", "black")}
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="1073b7c0-3f18-7c12-6c28-e729aca8f99e"
                >
                  {"Woodsense"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
            </_Builtin.Block>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
        <_Builtin.Block className={_utils.cx(_styles, "text-15")} tag="div">
          {"Colorways"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "color-swatches")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "", "color-selector")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            bind="a7b5a698-991c-6c1e-f263-0527d400acc1"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "", "color-selector")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            bind="a7b5a698-991c-6c1e-f263-0527d400acc1"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "", "color-selector")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            bind="a7b5a698-991c-6c1e-f263-0527d400acc1"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "", "color-selector")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            bind="a7b5a698-991c-6c1e-f263-0527d400acc1"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.FormButton
        className={_utils.cx(_styles, "submit-button-6")}
        type="submit"
        value="Submit"
        data-wait="Please wait..."
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "sizes-container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "", "text-15")} tag="div">
          {"Sizes"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "size-buttons")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "selector")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "size")} tag="div">
              {"1,8 m"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "selector")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "size")} tag="div">
              {"2,4 m"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "selector")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "size")}
              tag="div"
            >
              {"3 m"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sizes-container-2")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "", "text-15")} tag="div">
          {"Stove Sizes (mm)"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "size-buttons-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "selector-2")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "size")} tag="div">
              {"295 x 510 "}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "selector-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "size")}
              tag="div"
            >
              {"730 x 420 "}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "selector-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "size")}
              tag="div"
            >
              {"865 x 510 "}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sizes-container-3")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "", "text-15")} tag="div">
          {"Sink Sizes (mm)"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "grid-2-x-2")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "_2-columns", "f2wf-columns-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "selector-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "size")}
                tag="div"
              >
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "selector-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "size")}
                tag="div"
              >
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "selector-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "size")}
                tag="div"
              >
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "selector-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "size")}
                tag="div"
              >
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
