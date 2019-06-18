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
                // najpierw zwracamy aktualny stan z apomocą spread operator
                ...state,
                // teraz chcemy też dodać to co przyjdzię w payload
                items: action.payload
            };
        default:
            return state;
    }
};