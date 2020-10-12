import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import QuestionsList from './components/QuestionsList';
import QuestionForm from './components/QuestionForm';
function App() {
	
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<a href="/questions" className="navbar-brand">
					QuestionsAndAnswers.com
				</a>
			</nav>

			<div className="container mt-3">
				<Switch>
					<Route 
						exact
						path={['/', '/questions']}
						component={QuestionsList}
					/>
					<Route path="/form" component={QuestionForm} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
