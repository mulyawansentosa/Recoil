import React from 'react';
import { Button } from '../Button/Button';
import { Open } from '../Open/Open';
import { Toolbar } from '../Toolbar/Toolbar';

import { branchIn } from '../Utils';

export interface ITagsProps {
  dataSource?: any;
  branchIn?: any;
  onRemove?: any;
}

export class Tags extends React.Component<ITagsProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource || [],
      open: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dataSource !== this.props.dataSource) {
      this.setState({
        dataSource: this.props.dataSource,
        open: true
      });
    }

    if (!!prevProps.dataSource && this.props.dataSource.length === 0 && prevProps.dataSource.length !== 0) {
      this.setState({
        open: false
      });
    }
  }

  onRemove(item) {
    this.props.onRemove(item);
  }

  render() {
    const createList = (item, index) => {
      return (
        <Toolbar flush key={index} className='mr10'>
          <Button size='small'>{this.props.branchIn ? branchIn(item, this.props.branchIn) : item}</Button>
          <Button size='small' icon='times' onClick={this.onRemove.bind(this, item)} />
        </Toolbar>
      );
    };
    return (
      <Open openToHeight={'32px'} if={this.state.open && !!this.state.dataSource}>
        <Toolbar block className='text-left'>
          {this.state.dataSource.map(createList)}
        </Toolbar>
      </Open>
    );
  }
}
