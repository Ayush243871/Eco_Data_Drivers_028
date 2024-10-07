import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, SimpleGrid, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Create a motion box for animated effects
const MotionBox = motion(Box);
const Exercise = () => {
  const location = useLocation();
  const { goal } = location.state;
  const exercises = goal === 'gain'
    ? [
        {
          name: 'Squats',
          img: 'https://plus.unsplash.com/premium_photo-1661906824628-3ac1f6c4ce1c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3F1YXRzfGVufDB8fDB8fHww',
          video: 'https://www.youtube.com/watch?v=aclHkVaku9U',
          points: [
            'Targets quads, hamstrings, and glutes.',
            'Enhances core strength and stability.',
            'Improves mobility and flexibility.',
          ],
        },
        {
          name: 'Deadlifts',
          img: 'https://media.istockphoto.com/id/848260466/photo/man-preparing-for-a-lift.webp?a=1&b=1&s=612x612&w=0&k=20&c=5BDLZ3r7DHPQUapums_4T2j6ziBSrbAxP7z9IjIyD1Q=',
          video: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
          points: [
            'Strengthens posterior chain (back, glutes, hamstrings).',
            'Improves posture and core stability.',
            'Can help with fat loss and muscle gain.',
          ],
        },
        {
          name: 'Bench Press',
          img: 'https://media.istockphoto.com/id/1152600459/photo/young-man-practicing-bench-press-at-health-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=rKAcWf0fyNfB2dLMYL9cIWFTBBZaOUnWeyCqdM5wW0M=',
          video: 'https://www.youtube.com/watch?v=gRVjAtPip0Y',
          points: [
            'Targets chest, shoulders, and triceps.',
            'Improves upper body strength and muscle mass.',
            'Promotes shoulder stability.',
          ],
        },
        {
          name: 'Pull-ups',
          img: 'https://media.istockphoto.com/id/480174782/photo/pull-ups.webp?a=1&b=1&s=612x612&w=0&k=20&c=BBgkdtKLuXThQiXCmFn8NlfpwTiQAJDCZVfRHSSKJgc=',
          video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
          points: [
            'Strengthens back, shoulders, and arms.',
            'Enhances grip strength.',
            'Improves overall upper body strength.',
          ],
        },
        {
          name: 'Overhead Press',
          img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3ZlcmhlYWQlMjBQcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
          video: 'https://www.youtube.com/watch?v=2yjwXTZQDDI',
          points: [
            'Builds shoulder strength and mass.',
            'Engages core and stabilizer muscles.',
            'Enhances athletic performance.',
          ],
        },
        {
          name: 'Lunges',
          img: 'https://media.istockphoto.com/id/1210548146/photo/slim-hispanic-girl-doing-lunges-with-dumbbells-at-home-empty-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=T441HR3zxt0L_foQlud_G39c_llDWeR0QG3ynNWagJU=',
          video: 'https://www.youtube.com/watch?v=QOVaH1sEZwo',
          points: [
            'Targets quads, hamstrings, and glutes.',
            'Improves balance and coordination.',
            'Can be performed with or without weights.',
          ],
        },
        {
          name: 'Barbell Rows',
          img: 'https://media.istockphoto.com/id/532792113/photo/young-man-exercising-on-t-bar-row-machine-in-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=b254xBk4kfDkp_wlWwkiLE0-WFGGMhEWgmzfVe6A2wY=',
          video: 'https://www.youtube.com/watch?v=vT2GjY_UmpI',
          points: [
            'Targets the back muscles effectively.',
            'Helps improve posture and stability.',
            'Enhances grip strength.',
          ],
        },
      ]
    : [
        {
          name: 'Running',
          img: 'https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D',
          video: 'https://youtu.be/nDFwe7_gZQ8?si=tL6O0UV1YzHnuNgQ',
          points: [
            'Great for cardiovascular health.',
            'Helps with weight management.',
            'Boosts mood and mental health.',
          ],
        },
        {
          name: 'Jump Rope',
          img: 'https://media.istockphoto.com/id/1207943813/photo/young-woman-training-with-a-jumping-rope.webp?a=1&b=1&s=612x612&w=0&k=20&c=uA3pd2wuZNORiK-nm1yRfjY6PPtOxWp2mjyC2RG6j8k=',
          video: 'https://youtu.be/k-ddOFlo3xY?si=NpkoFvcn58FZ-hE7',
          points: [
            'Improves coordination and agility.',
            'Burns a high number of calories.',
            'Enhances cardiovascular fitness.',
          ],
        },
        {
          name: 'Burpees',
          img: 'https://media.istockphoto.com/id/186808358/photo/young-woman-doing-burpee-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=sW7dP2DZYtaD2wmyUj8vq21RDoKhvxoTT5_Hn1gU4_w=',
          video: 'https://youtu.be/auBLPXO8Fww?si=DvUIEUp19gv6t1lb',
          points: [
            'Full-body exercise targeting multiple muscle groups.',
            'Boosts metabolism and cardiovascular endurance.',
            'Can be modified for various fitness levels.',
          ],
        },
        {
          name: 'Mountain Climbers',
          img: 'https://media.istockphoto.com/id/1437664081/photo/young-tourist-walk-along-high-altitude-track-among-snowy-and-cloudy-mountains-man-expeditor.webp?a=1&b=1&s=612x612&w=0&k=20&c=BZ3uxiop2at7kEhA3NlwUfpi_WykcOINfveipVXSp_U=',
          video: 'https://youtu.be/bJgN9jGYEV0?si=vZXaqgFVgzZ8FWZM',
          points: [
            'Great for building core strength.',
            'Improves cardiovascular endurance.',
            'Can be done anywhere with no equipment.',
          ],
        },
        {
          name: 'Cycling',
          img: 'https://media.istockphoto.com/id/1769626936/photo/people-riding-electric-mountain-bikes.webp?a=1&b=1&s=612x612&w=0&k=20&c=ctsJyAB-ehSsO8PYafmrrXxYPEd-gzUW-Eo80bbk4UI=',
          video: 'https://youtu.be/0MLnC3bzXgQ?si=qGWR7nJk1h0Aat8V',
          points: [
            'Excellent for building leg strength.',
            'Enhances cardiovascular fitness.',
            'Low-impact exercise suitable for all fitness levels.',
          ],
        },
        {
          name: 'High Knees',
          img: 'https://media.istockphoto.com/id/1200935405/photo/handsome-black-sportsman-walks-highly-lifting-knees.webp?a=1&b=1&s=612x612&w=0&k=20&c=98z_2jILpYYtqX-8JrO8RjD5oQS5pysSlae83F1Zroo=',
          video: 'https://youtu.be/8WabM6v7vbo?si=vHgY6efX2cME9zQI',
          points: [
            'Great for improving agility and speed.',
            'Engages core and leg muscles.',
            'Can be incorporated into HIIT workouts.',
          ],
        },
      ];

  return (
    <Box p={4} mt={5}>
      <Heading textAlign="center" mb={6}>
        Recommended Exercises
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {exercises.map((exercise, index) => (
          <MotionBox
            key={index}
            borderWidth={1}
            borderRadius="md"
            overflow="hidden"
            boxShadow="lg"
            p={5}
            whileHover={{ scale: 1.05 }} // Add scale animation on hover
            transition={{ duration: 0.3 }}
          >
            <Image src={exercise.img} alt={exercise.name} borderRadius="md" mb={4} height="50vh" width="100vw"/>
            <Heading size="md" mb={2}>{exercise.name}</Heading>
            <Text fontSize="xx-large" mb={4}>
              <a href={exercise.video} target="_blank" rel="noopener noreferrer" >Watch Video</a>
            </Text>
            <UnorderedList spacing={1}>
              {exercise.points.map((point, index) => (
                <ListItem key={index}>{point}</ListItem>
              ))}
            </UnorderedList>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Exercise;
