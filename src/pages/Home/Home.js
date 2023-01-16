import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeView from './HomeView';
import Layout from '../../components/Layout/Layout';

function Home() {
  const navigate = useNavigate();
  const startHandler = () => {
    localStorage.setItem('Prize', '0');
    navigate('/game');
  };
  return (
    <Layout>
      <HomeView startHandler={startHandler} />
    </Layout>
  );
}

export default Home;
