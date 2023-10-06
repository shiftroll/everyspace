import React from "react";
import * as _Builtin from "./_Builtin";

export function ProductVariantFilter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="product-var-wrapper"
      tag="div"
      bind="d5dde054-e7b6-98ee-cb23-3ba3756e597b"
    >
      <_Builtin.Block className="color-container" tag="div">
        <_Builtin.DropdownWrapper
          className="category-dropdown"
          tag="div"
          bind="d5dde054-e7b6-98ee-cb23-3ba3756e597d"
          delay="0"
          hover=""
        >
          <_Builtin.DropdownToggle
            className="style-picker-dropdown light"
            tag="div"
          >
            <_Builtin.Block
              className="text-block-81 dark"
              tag="div"
              fs-cmsfilter-element="tag-text"
            >
              {"Pick Styles"}
            </_Builtin.Block>
            <_Builtin.Block className="chevron-circle" tag="div">
              <_Builtin.Icon
                className="chevron-down black"
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
                bind="d5dde054-e7b6-98ee-cb23-3ba3756e5982"
              />
            </_Builtin.Block>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList className="dropdown-list white" tag="nav">
            <_Builtin.Block className="checkbox-wrapper white" tag="div">
              <_Builtin.FormCheckboxWrapper className="style-checkbox-1 light">
                <_Builtin.FormCheckboxInput
                  className="checkbox-style-1"
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
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e5986"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className="style-label black"
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e5987"
                >
                  {"Nightfall"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
              <_Builtin.FormCheckboxWrapper className="style-checkbox-1 light">
                <_Builtin.FormCheckboxInput
                  className="checkbox-style-1"
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
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e598a"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className="style-label black"
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e598b"
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
              <_Builtin.FormCheckboxWrapper className="style-checkbox-1 light">
                <_Builtin.FormCheckboxInput
                  className="checkbox-style-1"
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
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e598f"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className="style-label black"
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e5990"
                >
                  {"Spectrum"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
              <_Builtin.FormCheckboxWrapper className="style-checkbox-1 light">
                <_Builtin.FormCheckboxInput
                  className="checkbox-style-1"
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
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e5993"
                  id="Style-Checkbox-1"
                />
                <_Builtin.FormInlineLabel
                  className="style-label black"
                  dyn={{
                    bind: {},
                  }}
                  htmlFor="Category "
                  fs-cmsfilter-field="accent-1"
                  bind="d5dde054-e7b6-98ee-cb23-3ba3756e5994"
                >
                  {"Woodsense"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
            </_Builtin.Block>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
        <_Builtin.Block className="text-15" tag="div">
          {"Colorways"}
        </_Builtin.Block>
        <_Builtin.Block className="color-swatches" tag="div">
          <_Builtin.Image
            className=" color-selector"
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
          <_Builtin.Image
            className=" color-selector"
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
          <_Builtin.Image
            className=" color-selector"
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
          <_Builtin.Image
            className=" color-selector"
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6400180d50edd80b98cbc936_Vectors-Wrapper.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.FormButton
        className="submit-button-6"
        type="submit"
        value="Submit"
        data-wait="Please wait..."
      />
      <_Builtin.Block className="sizes-container" tag="div">
        <_Builtin.Block className=" text-15" tag="div">
          {"Sizes"}
        </_Builtin.Block>
        <_Builtin.Block className="size-buttons" tag="div">
          <_Builtin.Block className="selector" tag="div">
            <_Builtin.Block className="size" tag="div">
              {"1,8 m"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="selector" tag="div">
            <_Builtin.Block className="size" tag="div">
              {"2,4 m"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className=" selector" tag="div">
            <_Builtin.Block className=" size" tag="div">
              {"3 m"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="sizes-container-2" tag="div">
        <_Builtin.Block className=" text-15" tag="div">
          {"Stove Sizes (mm)"}
        </_Builtin.Block>
        <_Builtin.Block className="size-buttons-2" tag="div">
          <_Builtin.Block className="selector-2" tag="div">
            <_Builtin.Block className="size" tag="div">
              {"295 x 510 "}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="selector-2" tag="div">
            <_Builtin.Block className=" size" tag="div">
              {"730 x 420 "}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className=" selector-2" tag="div">
            <_Builtin.Block className=" size" tag="div">
              {"865 x 510 "}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="sizes-container-3" tag="div">
        <_Builtin.Block className=" text-15" tag="div">
          {"Sink Sizes (mm)"}
        </_Builtin.Block>
        <_Builtin.Block className="grid-2-x-2" tag="div">
          <_Builtin.Block className="_2-columns f2wf-columns-3" tag="div">
            <_Builtin.Block className="selector-2" tag="div">
              <_Builtin.Block className=" size" tag="div">
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="selector-2" tag="div">
              <_Builtin.Block className=" size" tag="div">
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="selector-2" tag="div">
              <_Builtin.Block className=" size" tag="div">
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className=" selector-2" tag="div">
              <_Builtin.Block className=" size" tag="div">
                {"295 x 510"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
