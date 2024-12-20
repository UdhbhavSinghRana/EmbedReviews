import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type UserData = {
	name: string,
	email: string,
	id: number | null,
}

export const initialState: UserData = {
	name: '',
	email: '',
	id: null,
}

export const usersSlice = createSlice({
	name: 'usersSlice',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserData>) => {
			state.name = action.payload.name
			state.email = action.payload.email
			state.id = action.payload.id
		}
	}
})

export type RootState = {
	usersSlice: UserData;
};

export const getUser = (state: RootState) =>  state.usersSlice
export const getUserId =(state: RootState) =>  state.usersSlice.id

export const { setUser } = usersSlice.actions
export default usersSlice.reducer