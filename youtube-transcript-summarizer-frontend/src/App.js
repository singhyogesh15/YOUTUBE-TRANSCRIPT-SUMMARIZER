import './App.css';
import BackendAPI from './components/BackendApi';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>YouTube Transcript Summarizer</h1>
				<pre><div class="line"></div></pre>
				<BackendAPI />
			</header>
			<div className='footer_div'>
		 <footer className="footer">
			Made By- Richa, Shruti and Yogesh
			</footer> 
			</div>
		</div>
	);
}

export default App;
