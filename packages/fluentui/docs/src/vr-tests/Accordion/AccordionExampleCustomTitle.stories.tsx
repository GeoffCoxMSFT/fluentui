import * as React from 'react';
import { StoryWright, Steps } from 'storywright';
import { Meta } from '@storybook/react';
import { Accordion, accordionTitleSlotClassNames } from '@fluentui/react-northstar';
import AccordionExampleCustomTitle from '../../examples/components/Accordion/Visual/AccordionExampleCustomTitle.shorthand';

export default {
  component: Accordion,
  title: 'Accordion',
  decorators: [
    story => (
      <StoryWright
        steps={new Steps()
          .focus(`.${accordionTitleSlotClassNames.contentWrapper}`)
          .snapshot('Focuses the accordion title')
          .end()}
      >
        {story()}
      </StoryWright>
    ),
  ],
} as Meta<typeof Accordion>;

export { AccordionExampleCustomTitle };
