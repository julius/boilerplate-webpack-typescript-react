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

export const watchStores = [ PostStore.store ];
export const getPropsFromStores = (): IProps => ({
    posts: PostStore.store.getPosts(),
});

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
        var posts = this.state.posts.map((post, i) => <Post.Component post={post} key={i} />);

        return (
            <div className={CSS.app}>
                <h1>Posts</h1>
                
                <div className="post-list">
                    {posts}
                </div>
                
                <PostComposer.Component />
            </div>
        )
    }
}

