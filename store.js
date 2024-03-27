import { createStore } from 'redux';


const TANG = 'TANG';
const GIAM = 'GIAM';

export const tang=()=>({type:TANG}); // khai bao ham tang
export const giam=()=>({type:GIAM}); // khai bao ham tang
// dinh nghia redux 
const initState={
    dem: 0
}
const demReducer = (state=initState,action)=>{
    switch(action.type)
    {
        case TANG :
            return {...state,dem:state.dem+1};
            case GIAM : 
            return {...state,dem:state.dem-1};

            default:
                return state;
    }
}
const store = createStore(demReducer);
export default store;

