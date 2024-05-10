import logo from './logo.svg';
import './App.css';
// START Importing components
import ChatInterface from './components/ChatInterface';
import InputArea from './components/InputArea';
import MessageDisplay from './components/MessageDisplay';
// END Importing components

function App() {
  return (
    <div className='App'>
      // START Components usage
      <ChatInterface />
      <InputArea />
      <MessageDisplay />
      // END Components usage
    </div>
  );
}

export default App;