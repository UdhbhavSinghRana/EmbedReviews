import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "../../../shared/slices/usersSlice.ts"
import { getDataProvider } from "../../../api/dataProviderFactory.ts"

export const store = () => {
	return configureStore({
		reducer: {
			usersSlice: usersSlice.reducer,
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

export const AppDispatch = store().dispatch