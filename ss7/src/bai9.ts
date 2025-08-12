class User{
    public id: string;
    public posts: Post[];
    public followers: User[];

    constructor(id : string, posts : Post[], follower : User[]){

        this.id = id;
        this.posts = posts;
        this.followers = follower;
    }
    createPost(newPost: Post): void{
        this.posts.push(newPost);
    }

    comment(postId: string , cmt: string){

        const targetPost  = this.posts.find((post) => post.id === postId);

        if(targetPost){
            targetPost.addComment(cmt);
        }
    }
    follow(user: User){
        this.followers.push(user);
    }

    likePost(postId: string): void {

        const postToLike = this.posts.find((post) => post.id === postId);
        
        if(postToLike){
            postToLike.addLike(this);
        }
    }
    viewFeed():void{
        this.followers.forEach(ele => {
            console.log(ele.posts);
        });
    }
}


class Post{

    public id: string;
    public comments: string[];
    public likes: User[];
    public userPostId : string;
    public content : string;

    constructor(id: string, comments:string[], likes : User[], userPostId : string ,content : string){
        this.id = id;
        this.comments = comments;
        this.likes = likes;
        this.userPostId = userPostId;
        this.content =content;
    }

    addLike(like : User): void{
        if(like){
            this.likes.push(like);
        }
    }

    addComment(comment : string) : void{
        this.comments.push(comment);
    }
}

class Comments{

    public id: string;
    public userId: string
    public content: string
    public replies: string[];
    
    constructor(id : string, userId : string, content : string, replies : string[]){
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply : string) : void{
        this.replies.push(reply);
    }
}

const newUser = new User("user9", [], []);

newUser.createPost(new Post("1", [], [], newUser.id, "abc"))
newUser.createPost(new Post("2", [], [], newUser.id, "cdf"))
newUser.createPost(new Post("3", [], [], newUser.id, "zzzz"))

newUser.comment("1", "Bình luận của user9");

const user99 = new User("user99", [], []);
newUser.follow(user99);
newUser.likePost("1");

