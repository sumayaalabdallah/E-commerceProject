import {defineStore} from "pinia";
import {ref} from "vue";


export const useLikeStore = defineStore('likes', () => {
  const items = ref(JSON.parse(localStorage.getItem('likesItems')) ?? [])
  // const items = ref([])

  const addItem = item => {
    const existingProduct = items.value.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      return
        } else {
      items.value.push(item)
    }
    localStorage.setItem('cartItems', JSON.stringify(items.value))
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
