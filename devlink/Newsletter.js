import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Newsletter.module.css";

export function Newsletter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "cc-subscribe-form")}
      tag="div"
      bind="2df3695a-ff87-37fa-7ac7-63d4f4891939"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "cc-subscription-form")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "heading-jumbo-small")}
          tag="div"
        >
          {"Monthly Newsletter"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "paragraph-light",
            "cc-subscribe-paragraph"
          )}
          tag="div"
        >
          {
            "Sign up to receive updates from our shop, including new tea selections and upcoming events."
          }
        </_Builtin.Block>
        <_Builtin.FormWrapper
          className={_utils.cx(_styles, "form-block")}
          bind="2df3695a-ff87-37fa-7ac7-63d4f489193f"
        >
          <_Builtin.FormForm
            className={_utils.cx(_styles, "subscribe-form")}
            name="wf-form-Monthly-Newsletter-Form"
            data-name="Monthly Newsletter Form"
            method="get"
            id="wf-form-Monthly-Newsletter-Form"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(
                _styles,
                "text-field",
                "cc-subscribe-text-field"
              )}
              autoFocus={false}
              maxLength={256}
              name="Newsletter-Email"
              data-name="Newsletter Email"
              placeholder="Enter your email"
              type="email"
              disabled={false}
              required={true}
              id="Newsletter-Email"
            />
            <_Builtin.FormButton
              className={_utils.cx(_styles, "button")}
              type="submit"
              value="Submit"
              data-wait="Please wait..."
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage
            className={_utils.cx(_styles, "status-message")}
          >
            <_Builtin.Block tag="div">
              {"Thank you! Your submission has been received!"}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage
            className={_utils.cx(_styles, "status-message")}
          >
            <_Builtin.Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
