import { initializeIcons } from '@fluentui/react';
import { ButtonShim } from '@fluentui/react-button-shim-v8-v9';

import descriptionMd from './ButtonShimDescription.md';
import bestPracticesMd from './ButtonShimBestPractices.md';

export { Default as ActionButtonShim } from './ActionButtonShim.stories';
export { Default as CommandButtonShim } from './CommandButtonShim.stories';
export { Default as CompoundButtonShim } from './CompoundButtonShim.stories';
export { Default as DefaultButtonShim } from './DefaultButtonShim.stories';
export { Default as MenuButtonShim } from './MenuButtonShim.stories';
export { Default as PrimaryButtonShim } from './PrimaryButtonShim.stories';
export { Default as ToggleButtonShim } from './ToggleButtonShim.stories';

initializeIcons();

export default {
  title: 'Migration Shims/Button Shims',
  component: ButtonShim,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('\n'),
      },
    },
  },
};
