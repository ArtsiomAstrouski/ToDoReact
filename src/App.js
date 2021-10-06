import './App.css'
import React from 'react'

function App() {
	return (
		<>
			<div class="container">
				<h1>How to Install Bootstrap in React App - ItSolutionStuff.com</h1>

				<button class="btn btn-success">Success Button!</button>

				<button class="btn btn-primary">Primary Button!</button>

				<button class="btn btn-danger">Danger Button!</button>

				<div class="alert alert-success">
					<p>This is success alert.</p>
				</div>

				<div class="alert alert-primary">
					<p>This is primary alert.</p>
				</div>

				<div class="alert alert-danger">
					<p>This is danger alert.</p>
				</div>
			</div>
		</>
	)
}

export default App

// start of a new project
// npm install -g json-server
// npx json-server --watch db.json (server start)
// npx create-react-app name (creating)
// cd name
// npm run start - (start program)
// npm install react-router react-router-dom --save
// import { useHistory } from 'react-router-dom'  (history)
// npm install react-devtools --save
// npm install react-redux --save
// npm install react-redux --save
// npm install redux-thunk --save
// npm install --save bootstrap
