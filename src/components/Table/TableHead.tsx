import React from 'react';

import { arraysEqual } from '../Utils';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

import { T } from '../DataSource/DataSource';
import { IColumn } from './IColumn';

class DetailTemplateHeadToggle extends React.Component<any, any> {
  detailTemplateToggleAll(dataSource: Array<any>) {
    this.props.detailTemplateToggleAll(dataSource);
  }
  render() {
    const { props } = this;
    return (
      <th style={{ width: '25' }} className='r-Table__DetailTd text-center'>
        <Button
          icon={arraysEqual(props.dataSource, props.detailTemplateSelectedElements) ? 'chevron-down' : 'chevron-right'}
          onClick={this.detailTemplateToggleAll.bind(this, props.dataSource)}
          simple
          size='small'
        />
      </th>
    );
  }
}

class CheckboxHead extends React.Component<any, any> {
  selectAll(dataSource: Array<any>) {
    this.props.selectAll(dataSource);
  }
  render() {
    const props = this.props;

    const { hideCheckAll } = props;

    return (
      <th style={{ width: '25px' }}>
        {!hideCheckAll ? (
          <Checkbox
            onChange={this.selectAll.bind(this, props.dataSource)}
            size='small'
            checked={props.selectedElements ? arraysEqual(props.dataSource, props.selectedElements) : false}
          />
        ) : null}
      </th>
    );
  }
}

export interface ITableHeadProps {
  toggleSorting: (dataSource: any, key: string, sortType: any) => void;
  detailTemplateToggleAll?: (dataSource: any) => void;
  selectAll?: (dataSource: any) => void;
  dataSource: T[];
  columns?: Array<IColumn>;
  hideHeader?: boolean;
  hideColumns?: any;
  checkable?: boolean;
  onSort?: Function;
  selectedElements?: Array<any>;
  sortable?: boolean;
  detailTemplate?: (element: any) => JSX.Element;
  detailTemplateSelectedElements?: Array<any>;
  detailTemplateHideToggle?: boolean;
  sortKey?: any;
  hideCheckAll?: boolean;
  sortType?: string;
}

export interface ITableHeadState {
  sortType: string;
  column: string;
  columns: any[];
}

export class TableHead extends React.Component<ITableHeadProps, ITableHeadState> {
  constructor(props: ITableHeadProps) {
    super(props);
    this.state = {
      sortType: props.sortType || 'desc',
      column: props.sortKey || '',
      columns: []
    };
  }

  toggleSorting(dataSource: Array<any>, columnName: string) {
    const self = this;

    this.setState(
      {
        sortType: this.state.sortType === 'desc' ? 'asc' : 'desc',
        column: columnName
      },
      () => {
        self.props.onSort
          ? self.props.onSort(columnName, self.state.sortType)
          : self.props.toggleSorting(dataSource, columnName, self.state.sortType);
      }
    );
  }

  render() {
    const {
      detailTemplate,
      hideCheckAll,
      sortKey,
      columns,
      detailTemplateHideToggle,
      hideHeader,
      hideColumns,
      detailTemplateToggleAll,
      dataSource,
      detailTemplateSelectedElements,
      selectAll,
      checkable,
      selectedElements,
      sortable
    } = this.props;
    const columnHeadArray: Array<any> = [];

    columns.map((key, index) => {
      const hideColumnsArrayIncludesEitherNameOrTitle =
        hideColumns && hideColumns.includes(key.title ? key.title : key.name);

      const sortTitle: string = key.title ? key.title : key.name;

      if (hideColumnsArrayIncludesEitherNameOrTitle) {
        return null;
      } else {
        columnHeadArray.push(
          <th style={{ width: key.width }} key={index}>
            {key.titleTemplate ? (
              key.titleTemplate()
            ) : (
              <Button
                tabIndex={-1}
                className='p0'
                icon={sortable && (key.name === sortKey || key.title === sortKey) ? 'sort-' + this.state.sortType : ''}
                size='small'
                simple
                iconLocation='right'
                onClick={
                  (sortable && key.name) || (sortable && key.title)
                    ? this.toggleSorting.bind(this, dataSource, sortTitle)
                    : null
                }>
                {key.hideHeader ? null : key.title || key.name}
              </Button>
            )}
          </th>
        );
      }
    });

    const detailTemplateHeadProps = {
      detailTemplateToggleAll: detailTemplateToggleAll,
      dataSource: dataSource,
      detailTemplateSelectedElements: detailTemplateSelectedElements
    };

    const checkboxHeadProps = {
      selectAll: selectAll,
      selectedElements: selectedElements,
      dataSource: dataSource,
      hideCheckAll: hideCheckAll
    };

    if (!hideHeader) {
      return (
        <thead tab-index={-1}>
          <tr>
            {checkable ? <CheckboxHead {...checkboxHeadProps} /> : null}
            {detailTemplate && !detailTemplateHideToggle ? (
              <DetailTemplateHeadToggle {...detailTemplateHeadProps} />
            ) : null}
            {columnHeadArray}
          </tr>
        </thead>
      );
    } else { return null; }
  }
}
