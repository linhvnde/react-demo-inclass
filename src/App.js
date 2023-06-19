import ironhackLogo from './assets/ironhack-logo-F751CF4738-seeklogo.com.png';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import User from './components/User';

// function capitalizeFirstLetter(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

function App() {
  const theId = 'main-container';
  const title = 'Hello Loopey Tunes';
  const amount = 10;

  const user = {
    firstName: 'bob',
    surname: 'smith',
  };

  const myStyle = {
    color: 'fuchsia',
    fontSize: '150%',
  };

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div id={theId} className="App">
      <img src={ironhackLogo} alt="ironhack logo" />
      <Header />
      <h1>{title}</h1>
      <h2>Number of movies: {amount * 2} </h2>

      <p style={myStyle}>
        Hello {user.firstName.toUpperCase()},{' '}
        {capitalizeFirstLetter(user.surname)}
      </p>
      <p>
        {capitalizeFirstLetter(user.firstName)},{' '}
        {capitalizeFirstLetter(user.surname)}
      </p>
      <hr />
      <User userName="Alice" age={30} />
      <User userName="Bob" age={40} favFood="pizza"/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
