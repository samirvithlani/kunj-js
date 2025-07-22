const fetchUser=()=>{

    return new Promise((res,rej)=>{
        setTimeout(() => {
               res("user data fetched...") 
        }, 1000);
    })
}

const fetchPosts=()=>{

    return new Promise((res,rej)=>{
        setTimeout(() => {
               res("user posts fetched...") 
        }, 1000);
    })
}

const fetchComments=()=>{

    return new Promise((res,rej)=>{
        setTimeout(() => {
               res("user post comment fetched...") 
        }, 2000);
    })
}
// Promise.all([fetchUser(),fetchPosts(),fetchComments()])
// .then((data)=>{
//     console.log(data)
//     const [user,post,comments]= data
//     console.log(user)
//     console.log(post)
//     console.log(comments)
// }).catch((err)=>{
//     console.log(err)
// })



const getData = async () => {

    const result = await Promise.all([fetchUser(), fetchPosts(), fetchComments()]);
    const [user, post, comments] = result;
    console.log(user);
    console.log(post);
    console.log(comments);

}
getData();