import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const Menu: React.FunctionComponent = () => {
  return (
    <div>
      <CommandBar
        items={_items}
        overflowButtonProps={overflowProps}        
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};

const _items: ICommandBarItemProps[] = [
  {
    key: 'live',
    text: 'MENU CARD',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Brunch' },
    href: "/fastfood"
  },

  {
    key: 'MoveToFolder',
    text: 'Restourant',
    iconProps: { iconName: 'CityNext2' },
    href: '/restourant',
  },

  {
    key: 'Upcoming',
    text: 'Tifin Service',
    iconProps: { iconName: 'DeliveryTruck' },
    href: '/tifinservice',
  },
  
];
