import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-482":{"id":"e-482","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-370","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-370-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1680275964430}},"actionLists":{"a-370":{"id":"a-370","title":"Image scroll verdes","continuousParameterGroups":[{"id":"a-370-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-370-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image---pick.verdes","selectorGuids":["cbe23d23-e1a4-9c68-d252-33407e4c3a13","c086e505-1b45-371b-0807-3f5ee635aec0"]},"yValue":-30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":20,"actionItems":[{"id":"a-370-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image---pick.verdes","selectorGuids":["cbe23d23-e1a4-9c68-d252-33407e4c3a13","c086e505-1b45-371b-0807-3f5ee635aec0"]},"yValue":172,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1680033676594},"a-30":{"id":"a-30","title":"Rising Title","actionItemGroups":[{"actionItems":[{"id":"a-30-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65654616-305f-01e4-9fb1-9a05bad58b47"},"yValue":40,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-30-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65654616-305f-01e4-9fb1-9a05bad58b47"},"value":0,"unit":""}},{"id":"a-30-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"82eced30-0779-ae6f-9ead-160863dc035f"},"yValue":40,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-30-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"82eced30-0779-ae6f-9ead-160863dc035f"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-30-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":700,"target":{"id":"65654616-305f-01e4-9fb1-9a05bad58b47"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-30-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCirc","duration":1000,"target":{"id":"65654616-305f-01e4-9fb1-9a05bad58b47"},"value":1,"unit":""}},{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outCirc","duration":1000,"target":{"id":"82eced30-0779-ae6f-9ead-160863dc035f"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-30-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outCirc","duration":2000,"target":{"id":"82eced30-0779-ae6f-9ead-160863dc035f"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1679080961560},"a-371":{"id":"a-371","title":"Image scroll prodes","continuousParameterGroups":[{"id":"a-371-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-371-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image---pick.prodes","selectorGuids":["cbe23d23-e1a4-9c68-d252-33407e4c3a13","33585589-1876-07c3-f38a-d4a145ded631"]},"yValue":-30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":20,"actionItems":[{"id":"a-371-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image---pick.prodes","selectorGuids":["cbe23d23-e1a4-9c68-d252-33407e4c3a13","33585589-1876-07c3-f38a-d4a145ded631"]},"yValue":172,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1680033676594}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AboutComponent({
  as: _Component = _Builtin.Block,
  headingTitleText = "Heading",
  subheadingTitleText = "Subheading",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="the-container-about-us"
      tag="div"
      bind="65654616-305f-01e4-9fb1-9a05bad58b45"
      id="about-content"
    >
      <_Builtin.Block className="content---about-us _1" tag="div">
        <_Builtin.Block
          className="subheading-title"
          data-w-id="65654616-305f-01e4-9fb1-9a05bad58b47"
          tag="div"
          sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"238b46cd-d440-4c93-1e5b-7bbc9a4d0f91"}}}'
          id="subheading"
        >
          {subheadingTitleText}
        </_Builtin.Block>
        <_Builtin.Block
          className="heading-title"
          data-w-id="82eced30-0779-ae6f-9ead-160863dc035f"
          tag="div"
          sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"5034e1ef-ddb3-8c31-9630-178b33e59c54"}}}'
          id="heading"
        >
          {headingTitleText}
        </_Builtin.Block>
        <_Builtin.Block className="banner verdes _1" tag="div">
          <_Builtin.Block className="image-wrapper-pick" tag="div">
            <_Builtin.Image
              className="image---pick verdes"
              loading="eager"
              height="1000"
              width="1200"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/642e62ebe1ddf3fe4a17b0ea_Screenshot%202023-04-06%20at%2012.40.52%20PM.webp"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
