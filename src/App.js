import { useEffect, useState } from 'react';
import { Row } from 'antd';
import RaffleCard from './components/RaffleCard';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [raffles, setRaffles] = useState();
  useEffect(() => {
    // fetch('http://localhost:3001/')
    fetch('https://us-central1-rafffle-sniper.cloudfunctions.net/api/')
      .then(res => res.json())
      .then(json => setRaffles(json.sort((a,b) => a.end - b.end)))
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {!raffles
          ? <p>Loading...</p>
          : raffles.map(r => (
            <RaffleCard key={r.raffle}  raffle={r} />
          ))
        }
      </header>
    </div>
  );
}

export default App;
