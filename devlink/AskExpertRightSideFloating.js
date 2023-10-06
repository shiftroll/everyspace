import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AskExpertRightSideFloating.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4668":{"id":"e-4668","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-466","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4669"}},"mediaQueries":["main"],"target":{"id":"d2b3c0cf-76a6-1c56-ef20-1036cc7a364e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2b3c0cf-76a6-1c56-ef20-1036cc7a364e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681491848843},"e-4669":{"id":"e-4669","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-467","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4668"}},"mediaQueries":["main"],"target":{"id":"d2b3c0cf-76a6-1c56-ef20-1036cc7a364e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2b3c0cf-76a6-1c56-ef20-1036cc7a364e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681491848865},"e-4670":{"id":"e-4670","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-468","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4671"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d2b3c0cf-76a6-1c56-ef20-1036cc7a364f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2b3c0cf-76a6-1c56-ef20-1036cc7a364f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681492546010}},"actionLists":{"a-466":{"id":"a-466","title":"floating info hover","actionItemGroups":[{"actionItems":[{"id":"a-466-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ask-expert-info","selectorGuids":["1f56a84e-1165-29b7-14c4-d3719a4e2097"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-466-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".ask-expert-info","selectorGuids":["1f56a84e-1165-29b7-14c4-d3719a4e2097"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681491857323},"a-467":{"id":"a-467","title":"floating info hover out","actionItemGroups":[{"actionItems":[{"id":"a-467-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".ask-expert-info","selectorGuids":["1f56a84e-1165-29b7-14c4-d3719a4e2097"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681491857323},"a-468":{"id":"a-468","title":"New Timed Animation","actionItemGroups":[],"useFirstGroupAsInitialState":false,"createdOn":1681492558933}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AskExpertRightSideFloating({
  as: _Component = _Builtin.Block,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "right-side-floating")}
      tag="div"
      bind="dcb10ac4-e8e7-bbd9-23dd-140f05db2261"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "ask-expert-info")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-120")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "expert-icon")}
            loading="eager"
            width="23"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/643058a0ca8aeb35e222c3e1_icons8-consultation.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "ask-our-expert-floating")}
            tag="div"
          >
            {"Ask Our Expert"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "ask-expert-floating-button")}
        data-w-id="d2b3c0cf-76a6-1c56-ef20-1036cc7a364e"
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "ask-expert-link")}
          data-w-id="d2b3c0cf-76a6-1c56-ef20-1036cc7a364f"
          button={false}
          options={{
            href: "https://wa.me/6281112111101",
            target: "_blank",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "ask-icon")}
            loading="eager"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/643912ffa4d5fe1870588d7d_square%20chat%20bubble.svg"
          />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
