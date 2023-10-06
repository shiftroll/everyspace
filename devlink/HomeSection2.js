import React from "react";
import * as _Builtin from "./_Builtin";

export function HomeSection2({
  as: _Component = _Builtin.Block,

  learnMoreBlockFitLink = {
    href: "#",
  },

  heading4Text = "eResidence",
  text4Text = "Pick & Fit",
  ctaEResidenceText1Text = "Shop Catalog",

  ctaButtonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="plan-fit-home-section"
      tag="div"
      bind="6036fddf-ca81-1abc-62cf-c8dc353ce9ae"
      id="eresidence"
    >
      <_Builtin.Block className="content-10" tag="div">
        <_Builtin.Block className="heading-3" tag="div">
          <_Builtin.Block
            className="heading-22"
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"8f1f2558-2768-2481-2ff8-b9210b17a0e7"}}}'
          >
            {heading4Text}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="subheading" tag="div">
          <_Builtin.Block
            className="text-99"
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"7acf7489-42d5-9833-f180-da72360020d8"}}}'
            id="pick-fit"
          >
            {text4Text}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className="learn-more-block-fit"
          button={false}
          sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"5ab5f700-730e-1bfd-645a-011b6b07342a"}}}'
          options={learnMoreBlockFitLink}
        >
          <_Builtin.Image
            loading="eager"
            width="Auto"
            height="10"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/64252b07e35304518237e8ac_chevron-white-right-solid.svg"
          />
          <_Builtin.Block className="text-block-12" tag="div">
            {"Learn More"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className="learn-shop" tag="div">
        <_Builtin.Link
          className="cta-button white"
          button={false}
          sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"86552e4c-d884-00c7-7bfd-37acd5fdb323"}}}'
          options={ctaButtonLink}
        >
          <_Builtin.Block
            className="cta-eresidence-text-1"
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"38707033-63e3-bfad-45e7-20ec920ff3ff"}}}'
            id="plan-fit"
          >
            {ctaEResidenceText1Text}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
