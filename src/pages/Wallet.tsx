import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

function Wallet() {
  const [expenses, setExpenses] = React.useState([]);

  return (
    <div>
      <Header />
      <WalletForm setExpenses={ setExpenses } />
      <Table expenses={ expenses } />
    </div>
  );
}

export default Wallet;
