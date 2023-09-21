import * as actions from './action'

let lastId=0;

export default function reducer (state=[], action) {
    switch(action.type){
        case actions.CREATE_BUG:{
            return[
                ...state,
                {
                id: ++lastId,
                description: action.payload.description,
                resolved:false
                }

            ]
        }
        case actions.RESOLVE_BUG:{
           return state.map(bug=> bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        }
        default: 
        return state;
    }

}