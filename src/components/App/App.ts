import React = require('react');
import reactMixin = require('react-mixin');
import Post = require('./../Post/Post');
import PostComposer = require('./../PostComposer/PostComposer');
import ReactComponent = React.Component;
import models = require('../../stores/models');
import PostStore = require('../../stores/PostStore');

export interface IProps {
}

interface IState {
    posts: Array<models.Post>;
}

interface ICSS { app: string; }
const CSS: ICSS = require<ICSS>('./App.css');

export class Component extends ReactComponent<IProps, IState> {
    componentWillMount() {
        var updateData = () => {
            this.setState({
                posts: PostStore.store.getPosts(),
            });
        }
        updateData();

        PostStore.store.addListener(this, updateData);
    }
    
    componentWillUnmount() {
        PostStore.store.removeListener(this);
    }
    
    render() {
        return (
            React.DOM.div({ className: CSS.app }, [

                React.DOM.h1(null, 'Posts'),

                React.DOM.div({ className: 'post-list' },
                    this.state.posts.map((post, i) => React.createElement<Post.IProps>(Post.Component, { post: post, key: i }))
                ),

                React.createElement<PostComposer.IProps>(PostComposer.Component, {}),
            ])
        );
    }
}

