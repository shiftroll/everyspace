import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HomeSection.module.css";

export function HomeSection({
  as: _Component = _Builtin.Block,

  learnMoreBlockFitLink = {
    href: "#",
  },

  title = "Pick & Fit",
  heading = "Experience our exhibition \nin 360° virtual reality",

  button2Link = {
    href: "#",
  },

  shopCatalog = "plan-fit",
  shopCatalogVisibility = true,
  shopCatalogText = "Shop Catalog",
  planFitHomeSectionId = "plan-fit",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "plan-fit-home-section")}
      tag="div"
      bind="ce2cc2e2-ea49-29a1-806c-8df749a80457"
      id="pick-fit"
    >
      <_Builtin.Block className={_utils.cx(_styles, "content-10")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "subheading")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text-4")}
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"2211c20b-f864-32e3-b3ff-0fbdd14af0ba"}}}'
            id="pick-fit"
          >
            {title}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "heading-3")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-4")}
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"9906dfbf-963b-6355-c2ae-7b83739af2c4"}}}'
          >
            {heading}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "learn-more-block-fit")}
          button={false}
          sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"2226702d-469d-0245-8d8d-dca5abfc445c"}}}'
          options={learnMoreBlockFitLink}
        >
          <_Builtin.Image
            loading="eager"
            width="Auto"
            height="10"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/64252b07e35304518237e8ac_chevron-white-right-solid.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-12")}
            tag="div"
          >
            {"Learn More"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "learn-shop")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "cta-button", "white")}
          button={false}
          sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"8110c129-2d38-0e90-82b0-4f4745d1a69e"}}}'
          options={button2Link}
        >
          {shopCatalogVisibility ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "shop-catalog")}
              tag="div"
              sym-bind='{"attr":{"type":"Record","val":{"id":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"cfcb9083-16b5-5a6f-7a1d-ee8137e50fc2"}}}},"visibility":{"type":"Record","val":{"conditions":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"d02db54c-5337-dd82-ade5-ffc73496010f"}}}},"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"b8202f7f-68bb-f4ae-81a0-9bdd041b13de"}}}'
              id={shopCatalog}
            >
              {shopCatalogText}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
