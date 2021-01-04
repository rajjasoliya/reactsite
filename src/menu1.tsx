import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const Menu1: React.FunctionComponent = () => {
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
    key: 'Back',
    text: 'MENU CARD',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'back' },
    href: "/fastfood"
  },
];
