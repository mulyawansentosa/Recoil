import classNames from 'classnames';
import React from 'react';

export interface IShrinkProps {
  if?: boolean;
  fill?: boolean;
  className?: string;
  children?: any;
  opacity: number;
  scale?: number | string;
  position?: string;
  flex?: boolean;
}

const ShrinkDefaults: IShrinkProps = {
  opacity: 5,
  scale: 0.98,
  position: 'relative'
};

export class Shrink extends React.Component<IShrinkProps> {
  public static defaultProps = ShrinkDefaults;

  public render() {
    const self = this;
    const props = self.props;
    let shrinkStyle;

    const shrinkClass = classNames(
      'r-Shrink',
      { 'e-shrink': props.if },
      { 'e-fill': props.fill },
      { 'e-flex': props.flex },
      props.className
    );

    if (props.if) {
      shrinkStyle = {
        transform: 'scale(' + props.scale + ')',
        opacity: props.opacity / 100,
        position: props.position
      };
    } else {
      shrinkStyle = {
        position: props.position
      };
    }

    return (
      <div className={shrinkClass} style={shrinkStyle}>
        {props.children}
      </div>
    );
  }
}
