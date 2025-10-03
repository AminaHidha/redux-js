import { createStore,combineReducers } from "https://cdn.skypack.dev/redux";


function countReducer(state={count:0},action){
    switch(action.type){
        case 'increment':
            return{
                ...state,
               count:state.count+1
            }
        case 'decrement':
            return{
                ...state,
                count:state.count-1
            }   
        default:
            return state     
    }
}

function colorReducer(state={color:"white"},action){
    switch(action.type){
        case 'changecolor':
            return{
                ...state,
                color:state.color=="white"?"blue":"white"
            }
        default:
            return state    
        
    }
}


const rootReducer=combineReducers({
    count:countReducer,
    color:colorReducer
})


const store=createStore(rootReducer)

store.subscribe(()=>{
    document.getElementById('value').innerText=store.getState().count.count
    document.body.style.background=store.getState().color.color
})


document.getElementById('increment').onclick=()=>{
    store.dispatch({type:'increment'})
    console.log('increment');
    
}

document.getElementById('decrement').onclick=()=>{
    store.dispatch({type:'decrement'})
    console.log('decrement');
    
}

document.getElementById('clr').onclick=()=>{
    store.dispatch({type:'changecolor'})
}


