// for add to cart
export const  addCart =(product)=>{
    return{
        type:"ADDCART",
        payload :product

}
}

// for delete
export const  delCart =(product)=>{
    return{
        type:"DELITEM",
        payload :product

}
}
