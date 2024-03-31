import {defineStore} from "pinia";
import {ref} from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export const useLikeStore = defineStore('likes', () => {
  const items = ref(JSON.parse(localStorage.getItem('likesItems')) ?? [])
  const addItem = item => {
    const existingProduct = items.value.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      toast.warning("This item has already been saved", {
        autoClose: 1500,
      });

      return
        } else {
      items.value.push(item);

    }
    toast.success("Your Item has been saved", {
      autoClose: 1500,
    });
    localStorage.setItem('likesItems', JSON.stringify(items.value))
  }
  const removeItem = (product) => {
    const id = product.id
    const indexToBeDeleted = items.value.findIndex((item) => item.id === id)
    items.value.splice(indexToBeDeleted, 1)
    localStorage.setItem('likesItems', JSON.stringify(items.value))
  }

  return {items, addItem, removeItem}
}, {
  persist: true,
})
