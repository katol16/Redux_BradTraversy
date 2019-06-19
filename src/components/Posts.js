import React, {Component} from 'react';
// conenct łaczy component z redux store
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {
    // Jak zapiszesz w poniższy sposób state, to też zadziała, ale w kursie z ajkeigos powodu użył konstruktora (lub bez powodu, chuj wie)
    // state = {
    //     posts: []
    // };


    // Odkąd mamy Reduxa, nie potrzebujemy też tego component state'a, bo on przyjdzie z application state - czyli ze store
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // Poniższa metoda wykona się zaraz gdy component się zamontuje
    // odkąd mamy postActions i redux, nie potrzebujemy tego
    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({ posts: data}));
    // }

    componentWillMount() {
        this.props.fetchPosts()
    }

    // Pobierzemy dodanego posta za pomoca life cycle methods
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        // console.log(this.state);

        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>{postItems}</h1>
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
};

// Teraz zeby dostać nasze włąściwości w state(store), zrobimy mapStateToProps
const mapStateToProps = state => ({
    // klucz to "posts" i to sie bierze z reducers/index.js
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts);