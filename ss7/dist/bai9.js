"use strict";
class User {
    constructor(id, posts, follower) {
        this.id = id;
        this.posts = posts;
        this.followers = follower;
    }
    createPost(newPost) {
        this.posts.push(newPost);
    }
    comment(postId, cmt) {
        const targetPost = this.posts.find((post) => post.id === postId);
        if (targetPost) {
            targetPost.addComment(cmt);
        }
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(postId) {
        const postToLike = this.posts.find((post) => post.id === postId);
        if (postToLike) {
            postToLike.addLike(this);
        }
    }
    viewFeed() {
        this.followers.forEach(ele => {
            console.log(ele.posts);
        });
    }
}
class Post {
    constructor(id, comments, likes, userPostId, content) {
        this.id = id;
        this.comments = comments;
        this.likes = likes;
        this.userPostId = userPostId;
        this.content = content;
    }
    addLike(like) {
        if (like) {
            this.likes.push(like);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comments {
    constructor(id, userId, content, replies) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
const newUser = new User("user9", [], []);
newUser.createPost(new Post("1", [], [], newUser.id, "abc"));
newUser.createPost(new Post("2", [], [], newUser.id, "cdf"));
newUser.createPost(new Post("3", [], [], newUser.id, "zzzz"));
newUser.comment("1", "Bình luận của user9");
const user99 = new User("user99", [], []);
newUser.follow(user99);
newUser.likePost("1");
