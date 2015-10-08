import React = require('react');
import reactMixin = require('react-mixin');
import Post = require('./../Post/Post');
import PostComposer = require('./../PostComposer/PostComposer');
import ReactComponent = React.Component;
import models = require('../../stores/models');
import PostStore = require('../../stores/PostStore');

export interface IProps {
    posts: Array<models.Post>;
}

interface IState {
}

interface ICSS { app: string; }
const CSS: ICSS = require<ICSS>('./App.css');

export const watchStores = [ PostStore.store ];
export const getPropsFromStores = (): IProps => ({
    posts: PostStore.store.getPosts(),
});

export class Component extends ReactComponent<IProps, IState> {
    render() {
        console.log('App.render', this.props);

        return (
            React.DOM.div({ className: CSS.app }, [

                React.DOM.h1(null, 'Posts'),

                React.DOM.div({ className: 'post-list' },
                    this.props.posts.map((post, i) => React.createElement<Post.IProps>(Post.Component, { post: post, key: i }))
                ),

                React.createElement<PostComposer.IProps>(PostComposer.Component, {}),
            ])
        );
    }
}

