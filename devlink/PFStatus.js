import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-690":{"id":"e-690","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-691"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b16e94e1-98f1-ccc1-50ec-38fabb06f00e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b16e94e1-98f1-ccc1-50ec-38fabb06f00e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680670777622}},"actionLists":{"a-94":{"id":"a-94","title":"New Timed Animation","actionItemGroups":[],"useFirstGroupAsInitialState":false,"createdOn":1680670783263}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PFStatus({
  as: _Component = _Builtin.Block,
  textBlock77Visibility = true,
  text2 = "Click/tap anywhere to see the magic",
}) {
  _interactions.useInteractions(_interactionsData);

  return textBlock77Visibility ? (
    <_Component
      className="text-block-77"
      data-w-id="b16e94e1-98f1-ccc1-50ec-38fabb06f00e"
      tag="div"
      sym-bind='{"visibility":{"type":"Record","val":{"conditions":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"9ecd937a-3108-0f3c-e0c1-f29814eae3f1"}}}},"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"a29324b8-8034-f1f7-12c0-36a45de1921c"}}}'
      bind="b16e94e1-98f1-ccc1-50ec-38fabb06f00e"
    >
      {text2}
    </_Component>
  ) : null;
}
