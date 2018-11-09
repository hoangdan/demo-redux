const saveText =(state=[], action)=>{
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action]
    default:
      return state;
  }
}
export default saveText
