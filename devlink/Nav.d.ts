import * as React from "react";
import * as Types from "./types";

declare function Nav(props: {
  as?: React.ElementType;
  navbarVisibility2?: Types.Visibility.VisibilityConditions;
  navbarLinkText?: React.ReactNode;
  navbarVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
