import { createStore } from "https://cdn.skypack.dev/redux";


function appReducer(prevState={value:0},action){
    switch(action.type){
        case "increment":
            return{
                ...prevState,
                value:prevState.value+1
            }
        case "decrement":
            return{
                ...prevState,
                value:prevState.value-1
            }

        default:
            return prevState    

    } 
  
}

function increment(){
    return{type :"increment"}
}

const store=createStore(appReducer)

const state=store.getState()

store.subscribe(()=>{
    document.getElementById('value').innerText=store.getState().value;

})

// document.getElementById('value').innerText=state.value;
document.getElementById('Increment').onclick=()=>{
    store.dispatch(increment())
    console.log("increment");
    

},
document.getElementById('Decrement').onclick=()=>{
   store.dispatch({type:"decrement"})
   console.log("decrement");
   
}

console.log(state);
