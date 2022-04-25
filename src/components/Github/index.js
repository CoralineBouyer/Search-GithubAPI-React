import { useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react';

import Formulaire from 'src/components/Form';
import Counter from 'src/components/Counter';
import ReposResults from 'src/components/ReposResults';

import './styles.scss';
import githubLogo from './logo-github.png';

// const data = [
//   { kind: 'animal', name: 'chien' },
//   { kind: 'animal', name: 'oiseau' },
//   { kind: 'plant', name: 'cactus' }];

function Github() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${inputValue}`);
      setData(response.data.items);
      setNumber(response.data.total_count);
    }
    catch (error) {
      console.log('error', error);
    }
  };

  const newInputValue = (value) => {
    setInputValue(value);
  };

  const displayResults = () => {
    fetchData();
  };

  return (
    <div className="github">
      <Image src={githubLogo} alt="" centered />
      <Formulaire
        newInputValue={newInputValue}
        displayResults={displayResults}
        value={inputValue}
      />
      <Counter data={number} inputValue={inputValue} />
      <ReposResults data={data} />
    </div>
  );
}

export default Github;
