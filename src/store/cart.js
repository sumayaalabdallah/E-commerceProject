import {defineStore} from "pinia";
import {ref} from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('cartItems')) ?? [])
  const addItem = item => {
    const existingProduct = items.value.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      existingProduct.count++;
      toast.success("Your Item has been updated", {
        autoClose: 1500,
      });
    } else {
      item.count = 1;
      items.value.push(item);
      toast.success("Your Item has been saved", {
        autoClose: 1500,
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
  const removeItem = (product) => {
    const id = product.id
    const indexToBeDeleted = items.value.findIndex((item) => item.id === id)
    items.value.splice(indexToBeDeleted, 1)
    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }

  const incrementQ = item => {
    const existingProduct = items.value.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      existingProduct.count++;
    }
    toast.success("Your Item has been updated", {
      autoClose: 1500,
    });
    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
   const decrementQ =item => {

    const indexToBeDeleted = items.value.find(cartItem => cartItem.id === item.id);
    if (indexToBeDeleted) {
      indexToBeDeleted.count--;
   if(indexToBeDeleted.count === 0){
    removeItem(item)
    }
    }
    toast.success("Your Item has been updated", {
      autoClose: 1500,
    });
    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }

  return {items, addItem, removeItem,incrementQ,decrementQ}
}, {
  persist: true,
})
