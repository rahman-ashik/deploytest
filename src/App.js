import logo from './logo.svg';
import './App.css';

function App() {
  const line =  `Ashik Rahman`;
  return (
    <div className="App">
      <header className="App-header">
        <div class="floating">
          <div class="card-object rotate">
            <header> hmmm....</header>
              <main>
                <blockquote class="message">This is a test page <em class="forget"></em> 
                to test Github Pages.</blockquote>
              </main>
            <footer class="author"> {line} </footer>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
