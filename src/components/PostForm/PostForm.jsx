import { Component } from 'react';

import './PostForm.css'

export default class PostForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            categories: "",
            firstname: "",
            website: "",
        };
    }
    

    addPost = async (e) => {
        e.preventDefault();
        try {
            let jwt = localStorage.getItem('token')
            let fetchResponse = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + jwt
                },
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    categories: this.state.categories,
                    firstname: this.state.firstname,
                    website: this.state.website
                })

            })
            let serverResponse = await fetchResponse.json()
            this.setState({
                title: "",
                description: "",
                categories: "",
                firstname: "",
                website: "",
            })
            window.location.href = '/';
        } catch (err) {
            console.error("Error:", err)
        }
    }


    handleChange = e => {
        console.log(e.target.checkValidity());
        this.setState({
            [e.target.name]: e.target.value
            
        })

        
    }


  


    render() {
        return(
               <div className='form'>
                   <form className="row mb-3" >
                        <label className="col-sm-2 col-form-label">Title</label><input className="form-control" placeholder="enter your title here" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                       <br></br>
                       <label className="col-sm-2 col-form-label">Artist Statement</label><input className="form-control" placeholder="enter your Artist Statement here" type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                       <br></br>
                       <label className="col-sm-2 col-form-label"> Artist's Name</label><input  className="form-control" placeholder="enter your Name here" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                       <br></br>
                       <label className="col-sm-2 col-form-label">Website</label><input className="form-control" placeholder="enter your website here" type="text" name="website" value={this.state.website} onChange={this.handleChange} />
                       <br></br>
                       <button onClick={this.addPost}>Add Post</button>
                   </form>
               </div>
        )
    }
}
            