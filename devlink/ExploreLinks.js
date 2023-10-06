import React from "react";
import * as _Builtin from "./_Builtin";

export function ExploreLinks({
  as: _Component = _Builtin.Link,
  footerLinksVisibility = true,
}) {
  return footerLinksVisibility ? (
    <_Component
      className="footer-links"
      button={false}
      sym-bind='{"visibility":{"type":"Record","val":{"conditions":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"0bfeece7-af6a-b61f-085a-d0ecc29f12da"}}}}}'
      bind="603cf6dd-4f0e-18b7-e287-130dbf820c83"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block className="footer-link-2" tag="div" id="Pick-Fit">
        {"Pick & Fit"}
      </_Builtin.Block>
      <_Builtin.Block className=" footer-link-2" tag="div" id="Plan-Fit">
        {"Plan & Fit"}
      </_Builtin.Block>
      <_Builtin.Block className=" footer-link-2" tag="div" id="eVRspace">
        {"eVRspace"}
      </_Builtin.Block>
      <_Builtin.Block className=" footer-link-2" tag="div" id="Everycash">
        {"Everycash"}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
