import { useState } from 'react'
import { getLoadTime, getResults } from './requestHelpers'
import './App.scss'


const App = () => {

	const [urlInput, setUrlInput] = useState(null)
	const [searchPhraseInput, setSearchPhraseInput] = useState(null)
	const [searchResults, setSearchResults] = useState([])
	const [fetchResults, setFetchResults] = useState(true)

	const handleSubmit = async (event) => {
		event.preventDefault()
		await getLoadTime(urlInput, searchPhraseInput)
		setFetchResults(true)
	}

	const getSearchResults = async () => {
		return await getResults()
	}

	if (fetchResults) {
		getSearchResults().then((results) => setSearchResults(results))
		setFetchResults(false)
	}

	return (
		<div className="main">
			<h1>
				Load times
			</h1>

			<div className="url-input">
				<form onSubmit={(event) => handleSubmit(event)}>
					<p>Enter URL</p>
					<input type="text" onChange={(e) => setUrlInput(e.target.value)} />

					<p>Enter search phrase</p>
					<input type="text" onChange={(e) => setSearchPhraseInput(e.target.value)} />

					<div>
						<button type="submit">
							GO
						</button>
					</div>
				</form>
			</div>

			<table>
				<thead>
					<tr>
						<th>URL</th>
						<th>Search phrase</th>
						<th>Response time</th>
						<th>Start time</th>
						<th>Occurencies</th>
					</tr>
				</thead>
				<tbody>
					{ searchResults.map(result => {
						return (
							<tr key={result.id}>
								<td>{result.url}</td>
								<td>{result.search_phrase}</td>
								<td>{result.response_time}</td>
								<td>{result.start_time}</td>
								<td>{result.occurencies}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
  	)
}

export default App
