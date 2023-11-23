
const initial = {
    count : 0,
}

const UserReducer = (state=initial,action)=>{
    console.log(action)

    if(action.type === 'INCREMENT'){
        return {...state,count:state.count+1}
    }
    if(action.type === 'add_name'){
        return {...state,name:action.payload}
    }
    if(action.type === 'api'){
        return {...state,data:action.payload}
    }

 return state
}

export default UserReducer