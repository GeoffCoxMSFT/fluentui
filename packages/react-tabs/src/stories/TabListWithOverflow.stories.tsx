import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { Button } from '../../../react-button/src/Button';
import { Menu } from '../../../react-menu/src/Menu';
import { MenuItem } from '../../../react-menu/src/MenuItem';
import { MenuList } from '../../../react-menu/src/MenuList';
import { MenuPopover } from '../../../react-menu/src/MenuPopover';
import { MenuTrigger } from '../../../react-menu/src/MenuTrigger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Overflow, OverflowItem, useOverflowMenu, useOverflowVisibility } from '@fluentui/react-priority-overflow';

import {
  Calendar3DayRegular,
  CalendarAgendaRegular,
  CalendarChatRegular,
  CalendarDayRegular,
  CalendarMonthRegular,
  CalendarSearchRegular,
  CalendarTodayRegular,
  CalendarWeekStartRegular,
  CalendarWorkWeekRegular,
  MoreHorizontalRegular,
} from '@fluentui/react-icons';
import { TabList } from '../TabList';
import { Tab } from '../Tab';
// eslint-disable-next-line import/no-extraneous-dependencies
import { tokens } from '@fluentui/react-theme';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.overflow('auto'),
    ...shorthands.padding('50px', '20px'),
    rowGap: '20px',
    minHeight: '600px', //this helps the page remain at height when vertical tabs are resized
  },
  example: {
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.overflow('hidden'),
  },
  horizontal: {
    boxSizing: 'border-box',
    height: 'fit-content',
    minWidth: '150px',
    resize: 'horizontal',
    width: '600px',
    zIndex: 0, //stop the resize handle from peeking through the menu
  },
  vertical: {
    boxSizing: 'border-box',
    height: '250px',
    minHeight: '100px',
    resize: 'vertical',
    width: 'fit-content',
    zIndex: 0, //stop the resize handle from peeking through the menu
  },
  tabText: {
    whiteSpace: 'nowrap',
  },
  menu: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

const tabs = [
  {
    id: 'today',
    name: 'Today',
    icon: <CalendarTodayRegular />,
  },
  {
    id: 'agenda',
    name: 'Agenda',
    icon: <CalendarAgendaRegular />,
  },
  {
    id: 'day',
    name: 'Day',
    icon: <CalendarDayRegular />,
  },
  {
    id: 'threeDay',
    name: 'Three Day',
    icon: <Calendar3DayRegular />,
  },
  {
    id: 'workWeek',
    name: 'Work Week',
    icon: <CalendarWorkWeekRegular />,
  },
  {
    id: 'week',
    name: 'Week',
    icon: <CalendarWeekStartRegular />,
  },
  {
    id: 'month',
    name: 'Month',
    icon: <CalendarMonthRegular />,
  },
  {
    id: 'search',
    name: 'Search',
    icon: <CalendarSearchRegular />,
  },
  {
    id: 'chat',
    name: 'Conversations',
    icon: <CalendarChatRegular />,
  },
];

type OverflowMenuProps = {
  onTabSelect?: (tabId: string) => void;
};

const OverflowMenu = (props: OverflowMenuProps) => {
  const { ref, isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  const { isItemVisible } = useOverflowVisibility();

  const overflowTabs = tabs.filter(tab => !isItemVisible(tab.id));

  const styles = useStyles();

  const onItemClick = (tabId: string) => {
    props.onTabSelect?.(tabId);
  };

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu hasIcons>
      <MenuTrigger>
        <Button appearance="transparent" ref={ref} icon={<MoreHorizontalRegular />} />
      </MenuTrigger>
      <MenuPopover>
        <MenuList className={styles.menu}>
          {overflowTabs.map(tab => {
            return (
              <MenuItem key={tab.id} icon={tab.icon} onClick={() => onItemClick(tab.id)}>
                <div className={styles.tabText}>{tab.name}</div>
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const HorizontalExample = () => {
  const styles = useStyles();

  const [selectedTabId, setSelectedTabId] = React.useState<string>('today');

  const onTabSelect = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className={mergeClasses(styles.example, styles.horizontal)}>
      <Overflow minimumVisible={2}>
        <TabList selectedValue={selectedTabId} onTabSelect={(_, d) => onTabSelect(d.value as string)}>
          {tabs.map(tab => {
            return (
              <OverflowItem key={tab.id} id={tab.id} priority={tab.id === selectedTabId ? 2 : 1}>
                <Tab value={tab.id} icon={<span>{tab.icon}</span>}>
                  <div className={styles.tabText}>{tab.name}</div>
                </Tab>
              </OverflowItem>
            );
          })}
          <OverflowMenu onTabSelect={onTabSelect} />
        </TabList>
      </Overflow>
    </div>
  );
};

const VerticalExample = () => {
  const styles = useStyles();

  const [selectedTabId, setSelectedTabId] = React.useState<string>('today');

  const onTabSelect = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className={mergeClasses(styles.example, styles.vertical)}>
      <Overflow minimumVisible={2} overflowAxis="vertical">
        <TabList vertical selectedValue={selectedTabId} onTabSelect={(_, d) => onTabSelect(d.value as string)}>
          {tabs.map(tab => {
            return (
              <OverflowItem key={tab.id} id={tab.id} priority={tab.id === selectedTabId ? 2 : 1}>
                <Tab value={tab.id} icon={<span>{tab.icon}</span>}>
                  {tab.name}
                </Tab>
              </OverflowItem>
            );
          })}
          <OverflowMenu onTabSelect={onTabSelect} />
        </TabList>
      </Overflow>
    </div>
  );
};

export const WithOverflow = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <HorizontalExample />
      <VerticalExample />
    </div>
  );
};

WithOverflow.parameters = {
  docs: {
    description: {
      story: 'A tab list can support overflow by wrapping with Overflow and OverflowItem.',
    },
  },
};
