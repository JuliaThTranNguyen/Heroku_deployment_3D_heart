import './App.css';

function App() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
App();
setInterval(function () {
	App();
}, 1000);

export default App;