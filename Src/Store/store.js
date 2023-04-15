import { configureStore, combineReducers } from '@reduxjs/toolkit'
import commandSlice from './Slices/commandSlice'
import serverSlice from './Slices/serverSlice'

const rootReducer = combineReducers({
  command: commandSlice.reducer,
  server: serverSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

export default store