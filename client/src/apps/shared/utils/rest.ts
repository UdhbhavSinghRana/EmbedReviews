import HTTPStatus from 'http-status'
/* eslint-disable  @typescript-eslint/no-explicit-any */

export const DEFAULT_HEADERS = { 'Content-Type': '*/*' }
export const CONTENT_TYPE_JSON_HEADER = {
	'Content-Type': 'application/json',
}

const success = (response: any): Promise<any> | undefined => {
	const responseStatus = response.status
	if (responseStatus < HTTPStatus.BAD_REQUEST) {
		// we got one of 'not error' HTTP status response code: see http://www.restapitutorial.com/httpstatuscodes.html
		if (responseStatus === HTTPStatus.NO_CONTENT) {
			// no data
			return Promise.resolve([])
		} else {
			return response
				.json()
				.then((json: any) => {
					return (
						(json && json.data) ||
						json
					)
				})
				.catch((error: any) => {
					console.error('N1 API RestUtils: ', error)
					return Promise.resolve() // Some responses don't contain a body
				})
		}
	}
	// Add a return statement here for the case when responseStatus >= BAD_REQUEST
	return Promise.reject(response)
}

export const post = ({url, body, headers}: {url: string, body?: any, headers?: any}) : Promise<any>  => {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: headers
	}).then(success)
}