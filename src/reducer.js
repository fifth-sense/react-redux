import { INCREMENT,DECREMENT, CREATE_BUG } from "./action";

let lastId=0;

const initialState = {
    bugs:[{id: 0, description: "", resolved: false}],
    count: 0
}

export default function reducer (state=initialState, action) {
    switch(action.type){
        case INCREMENT: {
            return{ count: state.count+1};
        }
        case DECREMENT: {
            return{ count: state.count-1};
        }
        case CREATE_BUG: [
            ...state,
          {
                
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
          
        ]
        default: 
        return state;
    }

}