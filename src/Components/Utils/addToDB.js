//this section for add cart in local storage

import { toast } from "react-toastify"

// get data form local stroadge 

const getStoredCart = () => {
    const storeddata = localStorage.getItem('cart')
    if (storeddata) {
        const storedCart = JSON.parse(storeddata)
        return storedCart

    } else {
        return []
    }
}

// add to local storadge 
const addCartToLs = (gadget) => {

    const cart = getStoredCart()

    const isExist = cart.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        toast.error('Aready added in Cart', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    } else {

        cart.push(gadget)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Added successful', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
}
const removeCartFromLs = (id) => {
    const carts = getStoredCart()
    const remaining = carts.filter(cart => cart.product_id !== id)
    localStorage.setItem('cart', JSON.stringify(remaining))



}
const revomeAllCartFromLs = ()=>{
    localStorage.removeItem('cart')
}

//this section for add wish list in localStorage

const getStoredWish = () => {
    const storedWishdata = localStorage.getItem('wish')
    if (storedWishdata) {
        const storedwish = JSON.parse(storedWishdata)
        return storedwish

    } else {
        return []
    }
}

// add to local storadge 
const addWishtToLs = (gadget) => {
    console.log(gadget);

    const wish = getStoredWish()

    const isExist = wish.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        toast.error('Aready added in Wish', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    } else {

        wish.push(gadget)
        localStorage.setItem('wish', JSON.stringify(wish))
        toast.success('Added successful', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
}
const removeWishFromLs = (id) => {
    const wishs = getStoredWish()
    const remaining = wishs.filter(cart => cart.product_id !== id)
    localStorage.setItem('wish', JSON.stringify(remaining))



}
const revomeAllWishFromLs = ()=>{
    localStorage.removeItem('wish')
}

export { getStoredCart, addCartToLs, removeCartFromLs, addWishtToLs, getStoredWish, removeWishFromLs,revomeAllCartFromLs,revomeAllWishFromLs }