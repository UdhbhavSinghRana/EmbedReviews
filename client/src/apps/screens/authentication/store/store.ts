import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./usersSlice.ts"

export const store = () => {
	return configureStore({
		reducer: {
			user: usersSlice.reducer,
		}
	})
}