import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type UserData = {
	name: string,
	email: string,
	password: string,
}

export const initialState: UserData = {
	name: '',
	email: '',
	password: '',
}

export const usersSlice = createSlice({
	name: 'usersSlice',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setUserEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload
		},
		setUserPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	}
})

export type RootState = {
	users: UserData;
};

export const getUserName = (state: RootState) => state.users.name;
export const getUserEmail = (state: RootState) => state.users.email;
export const getUserPassword = (state: RootState) => state.users.password;

export const { setUserPassword, setUserEmail, setUserName } = usersSlice.actions
export default usersSlice.reducer