// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const signInUser = async ({dataProvider, getState, email, password}, dispatch) => {
	console.log(dataProvider);
	let res
	try {
		res = await dataProvider.authUser.signInWithEmailAndPassword(email, password);
	} catch (error) {
		console.error(error);
	}

	console.log(res);
	return res;
}

export function signInUserThunkCreator({ email, password }: { email: string; password: string }) {
	return function signInUserThunk(getState, dispatch, {dataProvider}) {
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