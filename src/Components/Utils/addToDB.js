// get data form local stroadge 

const getStoredData = () => {
    const storeddata = localStorage.getItem('cart')
    if (storeddata) {
        const storedCart = JSON.parse(storeddata)
        return storedCart

    } else {
        return []
    }
}

// add to local storadge 
const addToLs = (gadget) => {

    const cart = getStoredData()

    const isExist = cart.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        alert('already added')
    } else {

        cart.push(gadget)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
const removeFromLs = () => {

}
export { getStoredData, addToLs }