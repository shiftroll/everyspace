import React from "react";
import * as _Builtin from "./_Builtin";

export function CalculatorDisplay({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="hack47-50-block-wrap"
      tag="div"
      bind="3c3d83aa-d33d-3ea7-38b7-c081326294fe"
    >
      <_Builtin.Block className="hack47-50-block" tag="div">
        <_Builtin.Block className="hack47-50-value-block" tag="div">
          <_Builtin.Block tag="div">{"$"}</_Builtin.Block>
          <_Builtin.Block
            className="hack47-50-value"
            tag="div"
            id="text-fee-per-hour"
          >
            {"0"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{"Fee per Hour"}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="hack47-50-value" tag="div">
        {"*"}
      </_Builtin.Block>
      <_Builtin.Block className="hack47-50-block" tag="div">
        <_Builtin.Block className="hack47-50-value-block" tag="div">
          <_Builtin.Block
            className="hack49-price-amount"
            tag="div"
            id="text-total-hours"
          >
            {"0"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{"Total Hour(s)"}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="hack47-50-value" tag="div">
        {"="}
      </_Builtin.Block>
      <_Builtin.Block className="hack47-50-block" tag="div">
        <_Builtin.Block className="hack47-50-value-block" tag="div">
          <_Builtin.Block className="hack49-price-currency" tag="div">
            {"$"}
          </_Builtin.Block>
          <_Builtin.Block
            className="hack49-price-amount"
            tag="div"
            id="text-total-fee"
          >
            {"0"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{"Total Fee"}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
