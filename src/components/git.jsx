// src/GitHubRepos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './github.css';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/LeanderHeitor/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Repositórios no GitHub</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
