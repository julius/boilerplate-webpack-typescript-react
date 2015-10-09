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
            <div className={CSS.post + ' panel panel-default'}>
                <div className="panel-heading">
                    {this.props.post.name}
                </div>
                <div className="panel-body">
                    {this.props.post.description}
                </div>
            </div>
        );
    }
}
