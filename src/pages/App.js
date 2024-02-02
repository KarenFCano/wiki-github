import React from 'react';
import { useState } from 'react';
import gitlogo from '../assets/gitlogo.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from './services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return;
      } else {
        alert('Repositório já listado')
        setCurrentRepo('')
      }
    }
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitlogo} alt="Github Logo" width={100} height={100} />
      <Input
        value={currentRepo}
        onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo key={repo} repo={repo} handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  )
}

export default App;
