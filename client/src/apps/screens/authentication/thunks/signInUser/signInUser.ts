// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { setUser } from "../../../../shared/slices/usersSlice.ts"

export const signInUser = async ({dataProvider, getState, email, password}, dispatch) => {
	let res
	try {
		res = await dataProvider.authUser.signInWithEmailAndPassword(email, password);
		dispatch(setUser(res))
		console.log(res);
	} catch (error) {
		console.error(error);
	}

	return res;
}

export function signInUserThunkCreator({ email, password }: { email: string; password: string }) {
	return function signInUserThunk(dispatch, getState, {dataProvider}) {
		return signInUser({
			dataProvider,
			getState,
			email,
			password,
		},
			dispatch,
		)
	}
}