import {useState} from 'react'
import './App.scss'


const App = () => {

	const [urlInput, setUrlInput] = useState(null)
	const [searchPhraseInput, setSearchPhraseInput] = useState(null)

	const handleUrlSubmit = () => {
		console.log('submit', urlInput)
	}

	const handleSearchPhraseSubmit = () => {
		console.log('submit', searchPhraseInput)
	}

	return (
		<div className="main">
			<h1>
				Load times
			</h1>

			<div className="url-input">
				<form onSubmit={handleUrlSubmit}>
					<p>
						Enter URL
					</p>
					<input type="text" onChange={(e) => setUrlInput(e.target.value)} />
					<button type="submit">
						GO
					</button>
				</form>
			</div>

			<div className="search-phrase-input">
				<form onSubmit={handleSearchPhraseSubmit}>
					<p>
						Enter search phrase
					</p>
					<input type="text" onChange={(e) => setSearchPhraseInput(e.target.value)} />
					<button type="submit">
						GO
					</button>
				</form>
			</div>

			<table>
				<thead>
					<tr>
						<th>URL</th>
						<th>Search phrase</th>
						<th>Elapsed time</th>
						<th>Start time</th>
						<th>Hits</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>google.se</td>
						<td>Hey man</td>
						<td>000.1ms</td>
						<td>2023-12-01 09:45</td>
						<td>999 000 999</td>
					</tr>
				</tbody>
				</table>

		</div>
  	)
}

export default App
