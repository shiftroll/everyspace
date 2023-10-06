import React from "react";
import * as _Builtin from "./_Builtin";

export function CalculatorInputs({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="hack47-50-inputs"
      tag="div"
      bind="33b7ef47-3077-5cc9-31c8-db13efc2ebff"
    >
      <_Builtin.FormTextInput
        className="hack-form-input mr-30"
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
        className="hack-form-input"
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
