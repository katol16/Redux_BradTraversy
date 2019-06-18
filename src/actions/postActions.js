import { FETCH_POSTS, NEW_POST} from "./types";

// thunk middleware pzowala użyć(wywołać) dispatch function directly, wiec mzoęmy wysylac zapytania asynchronicznie

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
            // jakakolwiek informajca przychodzi do reducera możmey ją nazwać payload
            // możemy oczywiście ją nazwać posts: psots (w skrócie posts)
        }));
};

// Powyżej masz skrócony zapis tego co poniżej
// export function fetchPosts() {
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//                 // jakakolwiek informajca przychodzi do reducera możmey ją nazwać payload
//                 // możemy oczywiście ją nazwać posts: psots (w skrócie posts)
//             }));
//     }
// }

// dispatch -  mozesz to troche traktować jako promise -> reques, resolve