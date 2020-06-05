import * as React from 'react';

import { Parent } from './styles';
import { debounce } from './debounce';

const Adjustable: React.FC<ReactAdjustable.ParentProps> = ({
  children,
  as = 'div',
  flexDirection = 'row',
  height = '100%',
}) => {
  // TODO: i'm having an issue typing this due to it being passed to a styled component
  const parent = React.useRef<HTMLElement>(null);

  const onResize = React.useCallback(() => {
    if (!parent.current) return;

    // TypeScript doesn't recognize the spread operation conversion so use Array.from
    const totalMinWidths = Array.from(parent.current.children)
      .map(c =>
        Number(
          getComputedStyle(c)
            .getPropertyValue('min-width')
            .replace('px', '')
        )
      )
      .reduce((acc, val) => val + acc, 0);

    if (totalMinWidths > window.innerWidth) {
      parent.current.style.flexWrap = 'wrap';
    } else {
      parent.current.style.flexWrap = '';
    }
  }, [parent]);

  React.useEffect(() => {
    // on initial mount ensure proper flex layout
    onResize();
  }, [onResize]);

  React.useEffect(() => {
    window.addEventListener('resize', debounce(onResize, 200));

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return (
    <Parent as={as} ref={parent} flexDirection={flexDirection} height={height}>
      {children}
    </Parent>
  );
};

export default Adjustable;
