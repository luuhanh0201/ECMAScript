import { posts } from "~/data/posts"
const post = posts.map(post=>{
    return `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    `
})
const HomePage = ()=>{
    return `
    <div>
    ${post.join("")}
    </div>
    `
}
export default HomePage