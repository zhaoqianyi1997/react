import {combineReducers} from 'redux';

let counter = (state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state + 1;
        case 'SUB':
            return state - 1;
        default:
            return state;
    }
}

let initValue = {
    list:['1','2','3']
}

let todo = (state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let addState = JSON.parse(JSON.stringify(state));
            addState.list.push(action.value);
            return addState;
        case 'del_item':
            let delState = JSON.parse(JSON.stringify(state));
            delState.list.splice(action.value.index, 1);
            return delState;
        default:
            return state;
    }
}

export default combineReducers({
    counter,todo
});