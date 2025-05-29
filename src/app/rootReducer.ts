import { combineReducers } from '@reduxjs/toolkit'
// Import your reducers here

const rootReducer = combineReducers({
  // Add your reducers here
  // example: auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer