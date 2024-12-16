// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const signInUser = async ({dataProvider, getState, email, password}, dispatch) => {
	let res
	try {
		res = await dataProvider.authUser.signUpWithEmailAndPassword(email, password);
	} catch (error) {
		console.error(error);
	}
	return res;
}

export function signInUserThunkCreator({ email, password }: { email: string; password: string }) {
	return function signInUserThunk({ dataProvider, getState, dispatch }) {
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