import * as actions from './action';

export const createBug = description => ({
    type: actions.CREATE_BUG,
    payload:{
        description // shorthand property for description=description
    }
});

export const resolveBug = id => ({
    type: actions.RESOLVE_BUG,
    payload:{
       id // shorthand property for id=id
    }
});

export const increment =() => ({
    type: actions.INCREMENT
});

export const decrement = () => ({
    type: actions.DECREMENT
})