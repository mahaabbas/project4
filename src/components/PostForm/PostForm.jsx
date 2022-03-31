import React from 'react'

export default function PostForm(props) {
  return (
    <div>
        <form>
                <legend className="text-center">Create New Post</legend>
 
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" className="form-control" placeholder="Title.." />
                </div>
 
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" className="form-control" placeholder="Name.." />
                </div>
 
                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" rows="7"cols="25" placeholder="Here write your content.."></textarea>
                </div>
 
                <div className="form-group">
                    <label>Category</label>
                <select className="form-control">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    <option value="e">E</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Create</button>
            </form>
    </div>
  )
}
