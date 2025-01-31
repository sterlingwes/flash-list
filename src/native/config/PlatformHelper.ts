import { BaseItemAnimator } from "recyclerlistview";
import { DefaultJSItemAnimator } from "recyclerlistview/dist/reactnative/platform/reactnative/itemanimators/defaultjsanimator/DefaultJSItemAnimator";

const PlatformConfig = {
  defaultDrawDistance: 250,
};
const getCellContainerPlatformStyles = (
  inverted: boolean,
  parentProps: { x: number; y: number }
): { transform: string; WebkitTransform: string } | undefined => {
  return undefined;
};

const getItemAnimator = (): BaseItemAnimator | undefined => {
  return new DefaultJSItemAnimator();
};
export { PlatformConfig, getCellContainerPlatformStyles, getItemAnimator };
