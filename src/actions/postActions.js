export const deletePost = id =>{
    return{
        type: 'DELETE_POST',
        id      //shorthand: can just put id since it would be ' id: id ' otherwise
    }
}

export default deletePost