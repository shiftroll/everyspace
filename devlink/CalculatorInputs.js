import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CalculatorInputs.module.css";

export function CalculatorInputs({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "hack47-50-inputs")} tag="div">
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "hack-form-input", "mr-30")}
        autoFocus={false}
        maxLength={256}
        name="Fee-per-Hour"
        data-name="Fee per Hour"
        placeholder="Fee per Hour ($)"
        type="number"
        disabled={false}
        required={false}
        id="input-fee-per-hour"
      />
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "hack-form-input")}
        autoFocus={false}
        maxLength={256}
        name="Total-Hour"
        data-name="Total Hour"
        placeholder="Total Hour(s)"
        type="number"
        disabled={false}
        required={false}
        id="input-total-hours"
      />
    </_Component>
  );
}
