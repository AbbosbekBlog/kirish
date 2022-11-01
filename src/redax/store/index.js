import { createStore } from 'redux'
import rootReducer from '../reducer'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'reducer',
  storage: storage,
  blacklist: [''],
  whitelist: [''],
  //   whitelist: ['addToCart'], whitelist: ['addToCart'], bunda saqlab turadi refleshda ham localStorege ga
}

const presistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(presistedReducer)
const persistor = persistStore(store)

export { store, persistor }
