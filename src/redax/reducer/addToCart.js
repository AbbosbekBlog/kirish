const initialState = []
const addToCart = (state = initialState, action) => {
  if (action.type === 'Add') {
    const temCard = state.filter((item) => item.id === action.payload.id)
    if (temCard < 1) {
      return [...state, action.payload]
    }
  }
  if (action.type === 'remove') {
    return state.filter((remove) => remove.id !== action.payload)
  }
  if (action.type === 'inc') {
    const temCard = state.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    return temCard
  }
  return state
}
export default addToCart
