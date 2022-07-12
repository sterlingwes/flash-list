import React from "react";
import { View } from "react-native";
import { BaseItemAnimator } from "recyclerlistview";
import { DefaultJSItemAnimator } from "recyclerlistview/dist/reactnative/platform/reactnative/itemanimators/defaultjsanimator/DefaultJSItemAnimator";

const PlatformConfig = {
  defaultDrawDistance: 2000,
};
const getCellContainerPlatformStyles = (
  inverted: boolean,
  parentProps: { x: number; y: number }
): { transform: string; WebkitTransform: string } | undefined => {
  const transformValue = `translate(${parentProps.x}px,${parentProps.y}px)${
    inverted ? ` scaleY(-1)` : ``
  }`;
  return { transform: transformValue, WebkitTransform: transformValue };
};

const getItemAnimator = (): BaseItemAnimator | undefined => {
  return new DefaultJSItemAnimator();
};

const getFooterContainer = (): React.ComponentClass | undefined => {
  return View;
};

export {
  PlatformConfig,
  getCellContainerPlatformStyles,
  getItemAnimator,
  getFooterContainer,
};
