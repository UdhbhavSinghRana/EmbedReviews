import { authDP } from "./authAPI"

export const getDataProvider = () => {
	return {
		authUser: authDP()
	}
}