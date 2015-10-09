import React = require('react');
import $ = require('jquery');
import models = require('../../stores/models');
import PostStore = require('../../stores/PostStore');
import SyntheticEvent = React.SyntheticEvent;
import ReactComponent = React.Component;

export interface IProps {
}

interface IState {
}

interface ICSS { postComposer: string; }
const CSS: ICSS = require<ICSS>('./PostComposer.css');


export class Component extends ReactComponent<IProps, IState> {

    handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const post: models.Post = {
            name: $(React.findDOMNode(this.refs['name'])).val(),
            description: $(React.findDOMNode(this.refs['description'])).val(),
        };

        PostStore.store.addPost(post);

        $(React.findDOMNode(this.refs['name'])).val('');
        $(React.findDOMNode(this.refs['description'])).val('');
    }

    render() {
        return (
            <div className={CSS.postComposer}>
                <h2><i className="fa fa-pencil" /> Create Post</h2>
                
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="composerName">Name</label>
                        <input id="composerName" ref="name" type="text" placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="composerDescription">Description</label>
                        <input id="composerDescription" ref="description" type="text" placeholder="Description" className="form-control" />
                    </div>
                    <input type="submit" value="Create Post" className="form-control" />
                </form>
            </div>
        );
    }
}
