import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import {Balance} from './components/Balance.js';
import {AccSum} from './components/AccSum.js';
import {TransactionHistory} from './components/TransactionHistory.js';
import {AddTransaction} from './components/AddTransaction.js';
import {TransactionProvider} from './context/transContext.js'
function App() {
  return (
    <TransactionProvider>
       <div className='container'>
    <Header/>
    <Balance/>
    <AccSum/>
    <TransactionHistory/>
    <AddTransaction/>
      </div>
    </TransactionProvider>
     
  );
}

export default App;
