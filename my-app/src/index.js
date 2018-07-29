import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const user = {
	name: 'Long',
	email: 'long@ows.com.vn'
};
// const element = <h1>Hello world, my name is: {user.name}, and email: {user.email}</h1>
// const element = (
// 	<div className="hello">
// 		<h1>hello world</h1>
// 		<h1>hello my name is {user.name} and my email is {user.email} </h1>
// 	</div>
// )

var number = [1,2,3,4,5];
var doubleNumber = number.map((element)=> {
	return (element*2 + ",")
})

function updateTime() {
	const element = (
		<div className="hello">
			<h1>update time</h1>
			<h2>current time is: {new Date().toLocaleTimeString()}</h2>
		</div>
	)
	ReactDOM.render(
		element,
		document.getElementById('root')
	)
}
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
 
