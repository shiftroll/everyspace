import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Column2BottomPage.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7208":{"id":"e-7208","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7209"}},"mediaQueries":["main","medium"],"target":{"id":"5e2a11bb-cf34-7b6a-07aa-125020874e1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"43dfb4f0-ed3f-57b1-3886-eec4095f7058","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681625844940},"e-7209":{"id":"e-7209","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-516","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7208"}},"mediaQueries":["main","medium"],"target":{"id":"5e2a11bb-cf34-7b6a-07aa-125020874e1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"43dfb4f0-ed3f-57b1-3886-eec4095f7058","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681625844960},"e-7210":{"id":"e-7210","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7211"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"35dfc400-d4b8-932c-103d-34cc0f844d37","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"35dfc400-d4b8-932c-103d-34cc0f844d37","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681626227332},"e-7211":{"id":"e-7211","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-516","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"35dfc400-d4b8-932c-103d-34cc0f844d37","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"35dfc400-d4b8-932c-103d-34cc0f844d37","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681626227351},"e-7212":{"id":"e-7212","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7213"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6424791f4fc351140ef2c7d7|afac92f6-50ce-6c7e-1fcb-05825d66f0c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6424791f4fc351140ef2c7d7|afac92f6-50ce-6c7e-1fcb-05825d66f0c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681626883694},"e-7213":{"id":"e-7213","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-516","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7212"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6424791f4fc351140ef2c7d7|afac92f6-50ce-6c7e-1fcb-05825d66f0c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6424791f4fc351140ef2c7d7|afac92f6-50ce-6c7e-1fcb-05825d66f0c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681626883713},"e-8274":{"id":"e-8274","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8275"}},"mediaQueries":["main","medium"],"target":{"selector":".column-banner","originalId":"641478aa08fae2407ca834fe|f258b41d-236f-8177-fc86-d593bfd9fcd5","appliesTo":"CLASS"},"targets":[{"selector":".column-banner","originalId":"641478aa08fae2407ca834fe|f258b41d-236f-8177-fc86-d593bfd9fcd5","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681710864181},"e-8275":{"id":"e-8275","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-516","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8274"}},"mediaQueries":["main","medium"],"target":{"selector":".column-banner","originalId":"641478aa08fae2407ca834fe|f258b41d-236f-8177-fc86-d593bfd9fcd5","appliesTo":"CLASS"},"targets":[{"selector":".column-banner","originalId":"641478aa08fae2407ca834fe|f258b41d-236f-8177-fc86-d593bfd9fcd5","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681710864197},"e-8660":{"id":"e-8660","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8661"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6424791f4fc351140ef2c7d7|68c8fb55-5ac6-4285-06ed-44499ad8e9ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6424791f4fc351140ef2c7d7|68c8fb55-5ac6-4285-06ed-44499ad8e9ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681808046168},"e-8661":{"id":"e-8661","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-516","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8660"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6424791f4fc351140ef2c7d7|68c8fb55-5ac6-4285-06ed-44499ad8e9ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6424791f4fc351140ef2c7d7|68c8fb55-5ac6-4285-06ed-44499ad8e9ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681808046168}},"actionLists":{"a-515":{"id":"a-515","title":"banner zoomed out","actionItemGroups":[{"actionItems":[{"id":"a-515-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".column-banner","selectorGuids":["c9046bf7-3a58-f675-2ffc-5c205f008070"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-515-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":1500,"target":{"selector":".column-banner","selectorGuids":["c9046bf7-3a58-f675-2ffc-5c205f008070"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681625852709},"a-516":{"id":"a-516","title":"banner zoomed in","actionItemGroups":[{"actionItems":[{"id":"a-516-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":1500,"target":{"selector":".column-banner","selectorGuids":["c9046bf7-3a58-f675-2ffc-5c205f008070"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681625852709}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Column2BottomPage({
  as: _Component = _Builtin.Block,
  columnBannerImage = "https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6429452169d01c06a81b3672_everycash%20image%203.webp",

  button3Link = {
    href: "#",
    target: "_blank",
  },

  button2Link = {
    href: "#",
  },

  planNowText = "Register Now",
  text5Text = "Verified Designer",
  heading5Text = "Be our best verified designer",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "title-section")}
      tag="div"
      bind="95175978-ad54-8238-3063-c59f04c95c58"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "column-banner")}
        data-w-id="35dfc400-d4b8-932c-103d-34cc0f844d37"
        loading="eager"
        width="auto"
        height="auto"
        alt="__wf_reserved_inherit"
        sym-bind='{"img":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"df5ba900-2db7-21ce-5744-3ca690f78fd1"}}}'
        src={columnBannerImage}
      />
      <_Builtin.Block className={_utils.cx(_styles, "", "content-2")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "subheading-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-5")}
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"02ad3008-958b-ec76-f8e1-f91e7304fd8a"}}}'
          >
            {text5Text}
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image-21")}
            loading="eager"
            width="34"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6429070bf9d51a35f3907a47_everycash.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "", "subheading-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-5")}
            tag="div"
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"fe3d17a4-bd9f-2064-d7d5-a01352a473da"}}}'
          >
            {heading5Text}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "content-3")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "", "button-9-copy")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "earn-now")}
              tag="div"
            >
              {"Earn Now"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
