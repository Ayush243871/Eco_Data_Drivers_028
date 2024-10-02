import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
// import './GoalCards.css';  // Import the CSS file

const LoseWeight = () => {
  const loseWeightGoals = [
    {
      title: '1 Month Goal',
      meals: 3,
      calories: 300,
      exercise: 'Light exercises 3 times a week',
      image: 'https://example.com/lose-weight-1-month.jpg'  // Replace with actual images
    },
    {
      title: '3 Month Goal',
      meals: 4,
      calories: 250,
      exercise: 'Medium exercises 4 times a week',
      image: 'https://example.com/lose-weight-3-months.jpg'
    },
    {
      title: '6 Month Goal',
      meals: 5,
      calories: 200,
      exercise: 'Advanced exercises 5 times a week',
      image: 'https://example.com/lose-weight-6-months.jpg'
    },
    {
      title: '1 Year Goal',
      meals: 5,
      calories: 180,
      exercise: 'Intense exercises 6 times a week',
      image: 'https://example.com/lose-weight-1-year.jpg'
    }
  ];

  return (
    <Box>
      <Heading as="h2" mb={6}>
        Lose Weight Plan
      </Heading>
      <div className="goal-cards-container">
        {loseWeightGoals.map((goal, index) => (
          <div key={index} className="goal-card">
            <img src={goal.image} alt={goal.title} />
            <div className="card-content">
              <h3>{goal.title}</h3>
              <div className="goal-details">
                <p><span>Meals per day:</span> {goal.meals}</p>
                <p><span>Calories per meal:</span> {goal.calories}</p>
              </div>
              <div className="exercise-plan">
                <p><span>Exercise Plan:</span> {goal.exercise}</p>
              </div>
              <button>Track Progress</button>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default LoseWeight;
