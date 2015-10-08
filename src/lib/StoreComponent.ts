import React = require('react');
import Store = require('./Store');
import ReactComponent = React.Component;

export interface IProps<T> {
    children: Array<any>;
    stores: Array<Store>;
    dataFn(): T;
}


interface IState {
}

export class Component<T> extends ReactComponent<IProps<T>, IState> {
    componentWillMount() {
        this.props.stores.forEach((store) => {
            store.addListener(this, () => this.forceUpdate());
        });
    }

    componentWillUnmount() {
        this.props.stores.forEach((store) => {
            store.removeListener(this);
        });
    }

    render() {
        if (!this.props.children || this.props.children.length != 1) {
            throw('StoreComponent requires exactly one child');
        }

        return React.cloneElement(this.props.children[0], this.props.dataFn.call(null));
    }
}
