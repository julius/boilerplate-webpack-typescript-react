import Store = require('../lib/Store');
import models = require('./models');

class PostStore extends Store {

    posts: Array<models.Post>;

    constructor() {
        super();
        this.posts = [];

        console.log('Loading fake posts in 1 second ...');
        setTimeout(() => {
            this.posts = [
                { name: 'Post 1', description: 'First fake post' },
                { name: 'Post 2', description: 'Second fake post' },
            ];
            this.emitChange();
        }, 1000);
    }

    getPosts() {
        return this.posts;
    }

    addPost(post: models.Post) {
        this.posts.push(post);
        this.emitChange();
    }
}

export const store = new PostStore();
