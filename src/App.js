
import React from 'react';
import './App.css';
import PriceCard from './components/PriceCard';

function App() {
  const handleButtonClick = (selectedType) => {
    console.log(`Selected: ${selectedType}`);
    
  };

  return (
    <div className="App">
      <PriceCard
        type="Free"
        price={0}
        user="Single User"
        storage="50GB Storage"
        projects="Unlimited Public Projects"
        access="Community Access"
        onButtonClick={handleButtonClick}
      />
      <PriceCard
        type="Plus"
        price={9}
        user="Single User"
        storage="50GB Storage"
        projects="Unlimited Public Projects"
        access="Community Access"
        support="Dedicated Phone Support"
        subdomain="Free Subdomain"
        onButtonClick={handleButtonClick}
      />
      <PriceCard
        type="Pro"
        price={49}
        user="Single User"
        storage="50GB Storage"
        projects="Unlimited Public Projects"
        access="Community Access"
        support="Dedicated Phone Support"
        subdomain="Free Subdomain"
        report="Monthly Status Report"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
