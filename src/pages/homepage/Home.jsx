import { Component } from 'react'
import Post from '../../components/post/post'
import PostForm from '../../components/PostForm/PostForm'
import './home.css'

export default class Home extends Component{
  state = {
    user: [], 
    posts: [],
    categories: []
  }

  handleSubmit = async () => {
    try {
      const fetchResponse = await fetch("/api/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({posts: this.state.posts})
      })
      const serverResponse = await fetchResponse.json()
      console.log("success:", serverResponse)

      this.setState({posts : []})
    } catch (err){
      console.error("error:", err)
    }
  }
  render(){
  return (
    <>
     <div className='home'>
        <h1>HOME PAGE</h1>
        
     </div>
        <Post />
        <PostForm formsubmission={this.handleSubmit} />
    </>
   
  )
}
}
