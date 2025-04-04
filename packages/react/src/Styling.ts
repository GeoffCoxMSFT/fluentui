import './version';
export {
  AnimationClassNames,
  AnimationStyles,
  AnimationVariables,
  ColorClassNames,
  DefaultEffects,
  DefaultFontStyles,
  DefaultPalette,
  EdgeChromiumHighContrastSelector,
  FontClassNames,
  FontSizes,
  FontWeights,
  HighContrastSelector,
  HighContrastSelectorBlack,
  HighContrastSelectorWhite,
  IconFontSizes,
  InjectionMode,
  PulsingBeaconAnimationStyles,
  ScreenWidthMaxLarge,
  ScreenWidthMaxMedium,
  ScreenWidthMaxSmall,
  ScreenWidthMaxXLarge,
  ScreenWidthMaxXXLarge,
  ScreenWidthMinLarge,
  ScreenWidthMinMedium,
  ScreenWidthMinSmall,
  ScreenWidthMinUhfMobile,
  ScreenWidthMinXLarge,
  ScreenWidthMinXXLarge,
  ScreenWidthMinXXXLarge,
  Stylesheet,
  ThemeSettingName,
  ZIndexes,
  buildClassMap,
  concatStyleSets,
  concatStyleSetsWithProps,
  createFontStyles,
  focusClear,
  fontFace,
  getEdgeChromiumNoHighContrastAdjustSelector,
  getFadedOverflowStyle,
  getFocusOutlineStyle,
  getFocusStyle,
  getGlobalClassNames,
  getHighContrastNoAdjustStyle,
  getIcon,
  getIconClassName,
  getInputFocusStyle,
  getPlaceholderStyles,
  getScreenSelector,
  getTheme,
  getThemedContext,
  hiddenContentStyle,
  keyframes,
  loadTheme,
  mergeStyleSets,
  mergeStyles,
  noWrap,
  normalize,
  registerIconAlias,
  registerIcons,
  registerOnThemeChangeCallback,
  removeOnThemeChangeCallback,
  setIconOptions,
  unregisterIcons,
} from '@fluentui/style-utilities';
export { createTheme, registerDefaultFontFaces } from '@fluentui/theme';
export type {
  GlobalClassNames,
  IAnimationStyles,
  IAnimationVariables,
  ICSPSettings,
  IEffects,
  IFontFace,
  IFontStyles,
  IFontWeight,
  IGetFocusStylesOptions,
  IIconOptions,
  IIconRecord,
  IIconSubset,
  IIconSubsetRecord,
  IPalette,
  IPartialTheme,
  IProcessedStyleSet,
  IRawStyle,
  IScheme,
  ISchemeNames,
  ISemanticColors,
  ISemanticTextColors,
  ISpacing,
  IStyle,
  IStyleSet,
  IStyleSheetConfig,
  ITheme,
  ShadowConfig,
} from '@fluentui/style-utilities';

import type { ShadowConfig } from '@fluentui/style-utilities';
export interface IShadowDomStyle {
  /**
   * Optional configuration object when using shadow DOM.
   */
  __shadowConfig__?: ShadowConfig;
}
