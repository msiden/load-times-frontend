
const LOCALHOST = 'http://127.0.0.1:8000'

export const getLoadTime = async (url, searchPhrase) => {
    return await makeRequest(
        'GET', `${LOCALHOST}/get_load_time`, {
            url: url,
            search_phrase: searchPhrase
        }
    )
}

const errorHandler = (error) => {
    console.log('Request failed!', error)
}

const parseParametersToQueryString = (parameters) => {
    const queryString = Object.keys(parameters).map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key])).join('&')
    return queryString
}

export const makeRequest = async (method, url, parameters={}) => {

    const requestUrl = parameters ? `${url}?${parseParametersToQueryString(parameters)}` : url
    const requestObject = { method: method, headers: {'accept': 'application/json'}}

    const response = await fetch(requestUrl, requestObject).catch(() => {})

    if (!response || !(response.status === 200 && response.ok)) {
        errorHandler(response)
        return
    }

    return await response.json().catch(() => {})
}
