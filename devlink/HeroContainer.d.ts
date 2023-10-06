import * as React from "react";
import * as Types from "./types";

declare function HeroContainer(props: {
  as?: React.ElementType;
  theContainerVisibility?: Types.Visibility.VisibilityConditions;
  heroTitleBedroomText?: React.ReactNode;
  heroTitle?: React.ReactNode;
  learnMoreLink?: Types.Basic.Link;
  customOrderLink?: Types.Basic.Link;
  vrLink?: Types.Basic.Link;
  customOrderLink2?: Types.Basic.Link;
}): React.JSX.Element;
