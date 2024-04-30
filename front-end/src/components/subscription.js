import React from 'react';
import '../components/subscription.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


  

// Plan component
const Plan = ({ title, price, features, recommended, onSelect, selected }) => (
  <div className={`plan ${recommended ? 'recommended' : ''} ${selected ? 'selected' : ''}`}>
    <h2>{title}</h2>
    <div className="price">{price}</div>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button>
    <Link to="/list-home" className="button-like-class" onClick={onSelect}>
      {selected ? 'Selected' : 'Select'} 
    </Link>
    </button>
  </div>
);

// Plans container
const Plans = () => {
  // State to manage selected plan
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const plans = [
    {
      title: 'Lite',
      price: '$0.00',
      features: ['10 photos',],
      recommended: false,
    },
    {
      title: 'Standard',
      price: '$88.95',
      features: ['30 photos', 'Bump up every 5 days', 'Highlight for 7 days'],
      recommended: false,
    },
    {
      title: 'Plus',
      price: '$146.95',
      features: [
        '30 photos',
        'Bump up every 3 days',
        'Highlight for 1 month',
        'Featured for 1 month',
      ],
      recommended: true,
    },
    {
      title: 'Premium',
      price: '$395.95',
      features: [
        '30 photos',
        'Bump up every day',
        'Highlight for 1 month',
        'Featured for 1 month',
        'Top Ad for 1 month',
        'Web URL optional',
      ],
      recommended: false,
    },
  ];

  const handleSelect = (title) => {
    setSelectedPlan(title);
  };

  return (
    <div className="plans">
      {plans.map((plan) => (
        <Plan
          key={plan.title}
          title={plan.title}
          price={plan.price}
          features={plan.features}
          recommended={plan.recommended}
          selected={selectedPlan === plan.title}
          onSelect={() => handleSelect(plan.title)}
        />
      ))}
    </div>
  );
};

export default Plans;
