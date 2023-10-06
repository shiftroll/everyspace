import * as React from "react";
import * as Types from "./types";

declare function HomeSection(props: {
  as?: React.ElementType;
  learnMoreBlockFitLink?: Types.Basic.Link;
  title?: React.ReactNode;
  heading?: React.ReactNode;
  button2Link?: Types.Basic.Link;
  shopCatalog?: Types.Basic.IdTextInput;
  shopCatalogVisibility?: Types.Visibility.VisibilityConditions;
  shopCatalogText?: React.ReactNode;
  planFitHomeSectionId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
