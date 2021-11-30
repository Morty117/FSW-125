import './App.css';
import { useEffect } from 'react'
import axios from "axios";

//import Bounty from './components/Bounty';
//import BountyForm from './components/BountyForm';

function App() {

  //const [bounty, setBounty] = useState([])

  // const getBounties = () => {
  //   axios.get('/bounties-available')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  useEffect(() => {
    axios.get('/bounties-available')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
