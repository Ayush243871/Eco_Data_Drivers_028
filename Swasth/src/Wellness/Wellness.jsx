import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Wellness.css';
import Footer from './Footer/footer';

const WellnessTips = () => {
  const wellnessTipsRef = useRef([]);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      wellnessTipsRef.current.forEach((tip) => {
        const elementPosition = tip.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Check if the scroll position is past the element's top position
        if (scrollPosition > elementPosition) {
          gsap.to(tip, {
            opacity: 1,
            x: 0, // Bring the tip into view from left or right
            duration: 0.5,
            ease: 'easeIn',
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger scroll handler once on page load to animate tips already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
    <div className="wellness-tips-container">
      <div className="header-section">
        <h1 className="header-title">Wellness Tips</h1>
        <p className="header-description">
          Enhance your well-being with these simple yet powerful wellness tips.
        </p>
        <p className="header-description">
            Jaan Hai Toh Jahan Hai
        </p>
      </div>

      <div className="wellness-tips">
        {wellnessTips.map((tip, index) => (
          <div
            key={index}
            ref={(el) => (wellnessTipsRef.current[index] = el)}
            className={`wellness-tip wellness-tip-${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ opacity: 0, transform: `translateX(${index % 2 === 0 ? '-100%' : '100%'})` }}
          >
            <img src={tip.image} alt={tip.title} className="tip-image" />
            <div className="tip-content">
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
<Footer/>
    </>
  );
};

// Wellness tips data with images and descriptions
const wellnessTips = [
    {
      title: 'Meditate Daily',
      description: 'Start with just 5 minutes a day to calm your mind, reduce stress, and improve focus. Meditation can enhance emotional well-being.',
      image: 'https://img.freepik.com/free-photo/person-practicing-yoga-meditation-outdoors-nature_23-2150838318.jpg?t=st=1727860854~exp=1727864454~hmac=8768b33c57177c5e8b36da981244cea9abb52bd1bc799bacac703bb6dd70654a&w=360',
    },
    {
      title: 'Stay Hydrated',
      description: 'Drinking at least 8 glasses of water a day helps maintain energy levels, improves brain function, and keeps your skin healthy.',
      image: 'https://img.freepik.com/free-photo/women-after-exercise-drink-water-from-bottles-handkerchiefs-gym_1150-16574.jpg?t=st=1727861080~exp=1727864680~hmac=8f81b7021c800fceffe88b73c3eb99b3549c2a0d6dbdcebe88d3f6f5b4b712f5&w=740',
    },
    {
      title: 'Exercise Regularly',
      description: 'Engage in at least 30 minutes of physical activity every day to boost your mood, increase energy, and improve cardiovascular health.',
      image: 'https://img.freepik.com/free-photo/full-shot-woman-plank-workout_23-2148285838.jpg?t=st=1727861120~exp=1727864720~hmac=164eac47aaf035f8a7874bdbee851e11d9e8ce2f4dc113bb2fbe9066c48c8d05&w=740',
    },
    {
      title: 'Eat Nutritious Foods',
      description: 'Incorporate fruits, vegetables, whole grains, and lean proteins into your meals to support overall health and well-being.',
      image: 'https://img.freepik.com/free-photo/close-up-portrait-woman-holding-salad_23-2148256140.jpg?t=st=1727861166~exp=1727864766~hmac=34f6bbe7826b4f6d91971aa9521f8f9908c65c624fff90b0902c903e1c569ff9&w=740',
    },
    {
      title: 'Get Enough Sleep',
      description: 'Aim for 7-9 hours of sleep each night to improve cognitive function, mood, and overall health. Quality sleep is vital for the body’s repair processes.',
      image: 'https://img.freepik.com/free-photo/annoyed-mad-asian-girl-blue-pajamas-sleeping-mask-screaming-frustrated-as-overslept-showing-alarm-clock-shouting-bothered-being-late-work-holding-pillow_1258-64166.jpg?t=st=1727861206~exp=1727864806~hmac=2cf802b953fc51c18ac8191e0419e3c59dc245d78011ce7b4371b2c7b2d11fe4&w=740',
    },
    {
      title: 'Practice Deep Breathing',
      description: 'Use deep breathing techniques to reduce stress and promote relaxation. Deep breathing improves oxygen flow and helps calm the nervous system.',
      image: 'https://img.freepik.com/free-photo/middle-aged-woman-nurse-wearing-uniform-with-stethoscope-relax-smiling-with-eyes-closed-doing-meditation-gesture-with-fingers-green-wall_141793-13307.jpg?t=st=1727861269~exp=1727864869~hmac=28549d964d4d49c23c400f2745e2d2df6de536c52a123a81b0ce3989af69a8ba&w=740',
    },
    {
      title: 'Take Breaks from Screens',
      description: 'Follow the 20-20-20 rule: for every 20 minutes of screen time, look at something 20 feet away for 20 seconds to prevent eye strain and mental fatigue.',
      image: 'https://img.freepik.com/free-photo/portrait-professional-enjoying-work-from-home_23-2148499606.jpg?t=st=1727861300~exp=1727864900~hmac=3cbc2c0eec677c9966bbdc165a3c81f9e42e07d1f5371f3d40daf7afdd4aa933&w=740',
    },
    {
      title: 'Connect with Nature',
      description: 'Spending time outdoors can reduce stress, boost mood, and improve mental clarity. Try a daily walk in a park or garden to reconnect with nature.',
      image: 'https://img.freepik.com/free-photo/woman-walking-mountains_1157-19072.jpg',
    },
    {
      title: 'Practice Gratitude',
      description: 'Spend a few moments each day to reflect on what you are thankful for. Practicing gratitude improves emotional resilience and boosts happiness.',
      image: 'https://img.freepik.com/free-photo/gratitude-concept-paper-smile_23-2148593266.jpg',
    },
    {
      title: 'Maintain Social Connections',
      description: 'Regularly connect with friends and loved ones. Social interactions are essential for emotional well-being and can reduce feelings of isolation.',
      image: 'https://img.freepik.com/free-photo/cheerful-group-friends-hanging-out_23-2148845361.jpg',
    },
    {
      title: 'Stretch Your Body',
      description: 'Incorporate stretching into your daily routine to improve flexibility, reduce tension, and prevent injuries. Stretching also promotes better posture.',
      image: 'https://img.freepik.com/free-photo/woman-doing-yoga-exercise_23-2148108741.jpg?t=st=1727861436~exp=1727865036~hmac=321e3e3bc599cd51bd0f8e419d13f8c189f232e2a13bb5daed1e3d7875487c3e&w=360',
    },
    {
      title: 'Reduce Sugar Intake',
      description: 'Minimize your consumption of sugary foods and drinks to lower the risk of obesity, diabetes, and heart disease. Opt for natural sugars found in fruits.',
      image: 'https://img.freepik.com/free-photo/beautiful-blonde-young-woman-taking-selfie-baked-croissant_23-2148028083.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
    {
      title: 'Get Sunlight Exposure',
      description: 'Spend 10-15 minutes in the sun each day to boost Vitamin D levels, which are crucial for bone health and immune function.',
      image: 'https://img.freepik.com/free-photo/young-woman-tolerating-heat-wave-outdoors_23-2149101371.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
    {
      title: 'Limit Caffeine',
      description: 'Reduce caffeine intake to prevent jitteriness, anxiety, and sleep disruption. Opt for herbal teas or water for hydration.',
      image: 'https://img.freepik.com/free-photo/coffee-drink-love-short-restaurant_1303-387.jpg?t=st=1727861636~exp=1727865236~hmac=380b0e941a59eb26f867248815cc73447304e97d5511085168d1fc6c110c20b8&w=740',
    },
    {
      title: 'Unplug Before Bed',
      description: 'Turn off screens at least 30 minutes before bedtime to improve sleep quality. The blue light from devices can interfere with your sleep cycle.',
      image: 'https://img.freepik.com/free-photo/woman-unplugging-mobile-bed-night_23-2148751597.jpg',
    },
    {
      title: 'Take Care of Your Mental Health',
      description: 'Mental health is just as important as physical health. Seek support if you’re feeling overwhelmed, and practice mindfulness to stay grounded.',
      image: 'https://img.freepik.com/free-vector/flat-illustration-world-mental-health-day-awareness_23-2150743673.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
    {
      title: 'Limit Alcohol Intake',
      description: 'Reduce alcohol consumption to protect liver health and reduce the risk of chronic diseases. Opt for non-alcoholic beverages to stay refreshed.',
      image: 'https://img.freepik.com/free-photo/man-refusing-glass-rum-offered-by-his-friend_23-2147919769.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
    {
      title: 'Prioritize Self-Care',
      description: 'Set aside time each week for self-care activities like reading, taking a bath, or engaging in a hobby. Self-care helps you recharge and maintain balance.',
      image: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-58717.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
    {
      title: 'Declutter Your Space',
      description: 'A clutter-free environment promotes a clearer mind and reduces stress. Take time to organize and clean your surroundings regularly.',
      image: 'https://img.freepik.com/free-vector/house-moving-concept-illustration_23-2148657942.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
    {
      title: 'Take Deep Rest Days',
      description: 'Incorporate rest days into your weekly routine to prevent burnout. Allowing your body and mind to recover is essential for long-term health.',
      image: 'https://img.freepik.com/free-photo/sleeping-hammock_329181-12732.jpg?ga=GA1.1.1243596873.1727860675&semt=ais_hybrid',
    },
  ];
  

export default WellnessTips;
