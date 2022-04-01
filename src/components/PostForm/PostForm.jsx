import { Component } from 'react';
import './PostForm.css'
//add lat and lng and time when event create and send to server
export default class PostForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            categories: "",
            firstname: ""
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
                    categories: this.props.categories,
                    firstname: this.state.firstname
                })
                // send the body object to server

            })
            let serverResponse = await fetchResponse.json()
            this.props.updatePost({
                title: this.state.title,
                description: this.state.description,
                categories: this.props.categories,
                firstname: this.state.firstname
            });
            // if the event was sent over without errors, set state to empty
            this.setState({
                title: "",
                description: "",
                categories: "",
                firstname: ""
            })
        } catch (err) {
            console.error("Error:", err)
        }
    }

    handleChange = e => {
        console.log(e.target.checkValidity());
        this.setState({
            [e.target.name]: e.target.value
            // this is referring to name in the input element not name in state
        })
    }

    // const [ selected, setSelected ] = React.useState(null);


    render() {
        return(
               <div>
                   <form className="postForm">
                       <input placeholder="enter your title here" type="text" name="title" value={this.state.title} onChange={this.handleChange} />

                       <input placeholder="enter your Artist Statement here" type="text" name="description" value={this.state.description} onChange={this.handleChange} />

                       <input placeholder="enter your Name here" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                       <br></br>
                       <button onClick={this.addPost}>Add Post</button>
                   </form>
               </div>
        )
    }
}
            