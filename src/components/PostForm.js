import React, {Component} from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        // stare podejście do sprawy (raczej)
        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // stare podejście do sprawy (raczej)
    // onChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };
    // onSubmit(e) {
    //     e.preventDefault();
    //
    //     const post = {
    //         title: this.state.title,
    //         body: this.state.body
    //     };
    //
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(post)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // };

    // Nowe (lepsze) podejście do sprawy z arrow function
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    // Nowe (lepsze) podejście do sprawy z arrow function
    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Add Post
                <input onChange={this.onChange} name="title" placeholder="title" type="text" value={this.state.title}/>
                <input onChange={this.onChange} name="body" placeholder="body" type="text" value={this.state.body}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default PostForm;