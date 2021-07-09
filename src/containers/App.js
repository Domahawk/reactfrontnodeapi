import './App.css';
import Form from '../components/Form';
import UserList from '../components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Redux Mongoose MongoDB App
        </p>
      </header>
      <div className='componentContainer'>
        <Form/>
        <UserList/>
      </div>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
