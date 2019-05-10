import React from 'react';

import Calendar from '../DatePicker/Calendar';
import Table from '../Table/Table';
import Tree from '../Tree/Tree';

export class DropdownContentType extends React.Component<any, any> {
  render() {
    const self = this;
    const props = self.props;

    const {
      id,
      children,
      open,
      // Table
      disableSelectedElements,
      dataSource,
      focusOnMount,
      hideHeader,
      rowIsSelectable,
      selectedElements,
      selectedKey,
      pageSizerOptions,
      columns,
      onSort,
      sortable,
      hidePageSize,
      pageSize,
      rowCount,
      page,
      onPageChange,
      searchableKeys,
      searchTitle,
      contentMaxHeight,
      onRowSelect,
      filterOpenDetailTemplate,
      sortKey,
      hideFooter,
      scrollToId,
      scrollIf,
      checkable,
      onCheck,
      //
      parentId,
      hideRoot
    } = props;

    let dropdownTypePartial;

    const tableProps = {
      // Table
      disableSelectedElements,
      id,
      portal: true,
      dataSource,
      focusOnMount,
      hideHeader,
      rowIsSelectable,
      selectedElements,
      selectedKey,
      pageSizerOptions,
      columns,
      onSort,
      hidePageSize,
      pageSize: pageSize ? pageSize : dataSource ? dataSource.length : pageSize,
      rowCount,
      page,
      onPageChange,
      searchableKeys,
      searchTitle,
      contentMaxHeight,
      onRowSelect,
      filterOpenDetailTemplate,
      sortKey,
      sortable,
      hideFooter,
      scrollToId,
      scrollIf,
      scrollY: true,
      checkable,
      onCheck
      //
    };

    const treeProps = {
      // Tree
      dataSource,
      columns,
      onRowSelect,
      selectedElements,
      selectedKey,
      filterOpenDetailTemplate,
      parentId,
      hideRoot
      //
    };

    if (props.dataSource) {
      dropdownTypePartial = <Table {...tableProps} />;
    } else {
      dropdownTypePartial = children;
    }

    return open ? dropdownTypePartial : null;
  }
}
