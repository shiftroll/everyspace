import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DropdownSelect.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-832":{"id":"e-832","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-147","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-833"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"},"targets":[{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651724104936},"e-833":{"id":"e-833","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-148","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-832"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"},"targets":[{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651724104937}},"actionLists":{"a-147":{"id":"a-147","title":"Navigation / Arrow / ON","actionItemGroups":[{"actionItems":[{"id":"a-147-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-24,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-147-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-147-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-147-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-147-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"id":"6309fc849da4261b42652888|cadeeded-9fe3-8e11-1b89-82e4e187abee"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1651724109047},"a-148":{"id":"a-148","title":"Navigation / Arrow / OFF","actionItemGroups":[{"actionItems":[{"id":"a-148-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"xValue":-24,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-148-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"value":0,"unit":""}},{"id":"a-148-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"id":"6309fc849da4261b42652888|cadeeded-9fe3-8e11-1b89-82e4e187abee"},"globalSwatchId":"b37e6d8f","rValue":247,"bValue":253,"gValue":249,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651724109047}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DropdownSelect({
  as: _Component = _Builtin.Link,

  mNavigationLinkPlainLink = {
    href: "#",
  },

  text = "(featured product) title goes in here",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "m-navigation-link-plain")}
      button={false}
      sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"00675dba-89f0-5de0-79cb-e3f9e96bc9c9"}}}'
      bind="6e7d3dac-6c73-4ccc-84ff-7cd2fbe05e4a"
      options={mNavigationLinkPlainLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "m-paragraph-regular", "pick-fit")}
        tag="div"
        sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"974f2070-6bb1-2f3f-13bf-038fbb247cd0"}}}'
      >
        {text}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "m-icon-regular")}
        bind="6e7d3dac-6c73-4ccc-84ff-7cd2fbe05e4d"
        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
