import { authDP } from "./authAPI"

const dataProvider = () => ({
	authUser: authDP()
})

export const getDataProvider = () => dataProvider()