import { FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
    // items reprezentuje nasze posty
    items: [],
    // to reprezentuje dodawany post
    item: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                // najpierw zwracamy aktualny stan za pomocą spread operator
                ...state,
                // teraz chcemy też dodać to co przyjdzię w payload
                items: action.payload
            };
        case NEW_POST:
            return {
                // Ponieważ używamy jsonplaceholder bedzei to troszke ianczej zrobione, bo ten jsonplacehodler API, ma swoje ograniczenia
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
};

