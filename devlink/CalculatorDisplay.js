import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CalculatorDisplay.module.css";

export function CalculatorDisplay({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "hack47-50-block-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "hack47-50-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hack47-50-value-block")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"$"}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "hack47-50-value")}
            tag="div"
            id="text-fee-per-hour"
          >
            {"0"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{"Fee per Hour"}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "hack47-50-value")}
        tag="div"
      >
        {"*"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "hack47-50-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hack47-50-value-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hack49-price-amount")}
            tag="div"
            id="text-total-hours"
          >
            {"0"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{"Total Hour(s)"}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "hack47-50-value")}
        tag="div"
      >
        {"="}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "hack47-50-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hack47-50-value-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hack49-price-currency")}
            tag="div"
          >
            {"$"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "hack49-price-amount")}
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
