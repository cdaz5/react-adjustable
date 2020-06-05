declare var ReactAdjustable: ReactAdjustable.ReactAdjustable;

declare namespace ReactAdjustable {
  interface ReactAdjustable {}

  type As = keyof JSX.IntrinsicElements | React.ComponentType<any>;

  type ResizeDirection =
    | 'none'
    | 'both'
    | 'horizontal'
    | 'vertical'
    | 'initial'
    | 'inherit';

  interface ChildProps {
    adjust: {
      width: string;
      resizeDir?: ResizeDirection;
      resizeable?: boolean;
      minWidth?: string;
      height?: string;
      minHeight?: string;
      as?: As;
    };
  }

  interface ParentProps {
    flexDirection?: 'row' | 'column';
    height?: string;
    as?: As;
  }
}
