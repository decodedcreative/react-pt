export default function clients(state = [], action) {
    switch(action.type){
        case 'ADD_CLIENT':
            // return the new state with the new comment
            return [...state,{
                client: action.client,
            }];
        case 'REMOVE_CLIENT':
            // we need to return the new state without the deleted comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0,action.i),


                // after the deleted one, to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
}