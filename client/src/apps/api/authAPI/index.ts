import { CONTENT_TYPE_JSON_HEADER, DEFAULT_HEADERS, post } from "../../shared/utils/rest.ts"
import { SIGN_UP_USER } from "./endpointsConst.ts"

export type SignInUserDTO = {
	email: string;
	name: string;
}

export type SignUpUserDTO = {
	name: string;
	email: string;
	password: string;
}

export const authDP = () => {
	return {
		signUpWithEmailAndPassword: async (name: string, email: string, password: string): Promise<SignUpUserDTO> => {
			return post({
				url: SIGN_UP_USER,
				body: JSON.stringify({ name, email, password  }),
				headers: CONTENT_TYPE_JSON_HEADER,
			}).catch(() => {
				throw new Error(SIGN_UP_USER)
			})
		},

		signInWithEmailAndPassword: async (email: string, password: string): Promise<SignInUserDTO> => {
			return post({
				url: SIGN_UP_USER,
				body: JSON.stringify({
					email,
					password
				}),
				headers: DEFAULT_HEADERS,
			}).catch(() => {
				throw new Error(SIGN_UP_USER)
			})
		}
	}
}