import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./usersSlice.ts"
import { getDataProvider } from "../../../api/dataProviderFactory.ts"

export const store = () => {
	return configureStore({
		reducer: {
			user: usersSlice.reducer,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						dataProvider: getDataProvider()
					}
				}
			})
	})
}