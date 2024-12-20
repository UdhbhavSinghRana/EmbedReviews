// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { setUser } from "../../../../shared/slices/usersSlice.ts"

export const signUpUser = async ({dataProvider, email, password, name}, dispatch) => {
	console.log(dataProvider);
	let res
	try {
		res = await dataProvider.authUser.signUpWithEmailAndPassword(name, email, password);
		console.log(res);
		dispatch(setUser(res))
	} catch (error) {
		console.error(error);
	}

	console.log(res);
	return res;
}

export function signUpUserThunkCreator({ email, password, name }: { email: string; password: string, name: string }) {
	return function signUpUserThunk(dispatch, getState, {dataProvider}) {
		return signUpUser({
				dataProvider,
				email,
				password,
				name
			},
			dispatch,
		)
	}
}