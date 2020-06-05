import * as React from 'react';

import { StyledChild } from './styles';

const Child: React.FC<ReactAdjustable.ChildProps> = React.forwardRef(
  ({ children, adjust, ...props }, ref) => (
    <StyledChild ref={ref} {...adjust} {...props}>
      {children}
    </StyledChild>
  )
);

export default Child;
