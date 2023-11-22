
import React from 'react';
import './PriceCard.css'; 

const PriceCard = ({ type, price, user, storage, projects, access, support, subdomain, report, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(type);
  };

  return (
    <div className="price-card">
      <div className="price-type">{type}</div>
      <div className="price-amount">${price}/month</div>
      <div className="price-details">
        <div className="detail">{user}</div>
        <div className="detail">{storage}</div>
        <div className="detail">{projects}</div>
        <div className="detail">{access}</div>
        {support && <div className="detail">{support}</div>}
        {subdomain && <div className="detail">{subdomain}</div>}
        {report && <div className="detail">{report}</div>}
        <button onClick={handleClick}>Select</button>
      </div>
    </div>
  );
};

export default PriceCard;
