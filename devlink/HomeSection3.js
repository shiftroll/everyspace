import React from "react";
import * as _Builtin from "./_Builtin";

export function HomeSection3({
  as: _Component = _Builtin.Block,

  learnMoreBlockFitLink = {
    href: "#",
  },

  ctaEResidenceText1Text = "Explore Now",

  ctaButtonLink = {
    href: "#",
  },

  ctaEResidenceText1Text2 = "Explore Now",

  ctaButtonLink2 = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="plan-fit-home-section"
      tag="div"
      bind="0246c941-325c-969b-2862-e57a88637c11"
      id="eresidence"
    >
      <_Builtin.Block className="content-10" tag="div">
        <_Builtin.Block className="heading-3" tag="div">
          <_Builtin.Block
            className="heading-22"
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"06e6538e-df53-5fa1-d7a3-0828822565ff"}}}'
          >
            {"Verified Units"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="subheading" tag="div">
          <_Builtin.Block
            className="text-99"
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"ac150c84-1da2-4c44-3e32-771203d43965"}}}'
            id="pick-fit"
          >
            {"Book or rent a unit with our living experience "}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className="learn-more-block-fit"
          button={false}
          sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"f6b10df5-7edd-275f-3b73-c8faab090cb7"}}}'
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
      <_Builtin.Block className="rent-book" tag="div">
        <_Builtin.Block className="rent-book-buttons" tag="div">
          <_Builtin.Link
            className="cta-button white _50"
            button={false}
            sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"fd0b893f-7cd4-6f18-2e7f-5f5e8261d191"}}}'
            options={ctaButtonLink}
          >
            <_Builtin.Block
              className="cta-eresidence-text-1"
              tag="div"
              sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"d9ba1cbf-a4b7-2b8c-a626-c4b266c27dea"}}}'
              id="plan-fit"
            >
              {ctaEResidenceText1Text}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className="cta-button blue _50"
            button={false}
            sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"5dddaab3-52d8-9373-18db-47a4fff4a5fc"}}}'
            options={ctaButtonLink2}
          >
            <_Builtin.Block
              className="cta-eresidence-text-1 rent"
              tag="div"
              sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"b12ef99c-e1e2-5c8a-bbdb-a66f9a72974b"}}}'
              id="plan-fit"
            >
              {ctaEResidenceText1Text2}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
