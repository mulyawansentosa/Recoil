import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import Grid from '../Grid/Grid';

interface IDropdownDataSourceProps {
    onRowSelect?: (item: any) => void;
    selected?: any;
    open?: boolean;
}

export default class DropdownDataSource extends React.Component<IDropdownDataSourceProps, {}> {
    onRowSelect(item){
        this.props.onRowSelect(item);
    }
    render() {

        const self = this;
        const props = self.props;

        return props.open ? <Grid {...props} onRowSelect={this.onRowSelect.bind(this)} overflow selectedKey={this.props.selected} /> : null
    }
}