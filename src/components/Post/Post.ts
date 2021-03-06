import React = require('react');
import models = require('../../stores/models');
import ReactComponent = React.Component;


export interface IProps {
    post: models.Post;
    key?: number;
}

interface IState {
}

interface ICSS { post: string; }
const CSS: ICSS = require<ICSS>('./Post.css');


export class Component extends ReactComponent<IProps, IState> {

    render() {
        return (
            React.DOM.div({ className: CSS.post + ' panel panel-default' }, [

                React.DOM.div({ className: 'panel-heading' },
                    this.props.post.name),

                React.DOM.div({ className: 'panel-body' },
                    this.props.post.description)
            ])
        );
    }
}
