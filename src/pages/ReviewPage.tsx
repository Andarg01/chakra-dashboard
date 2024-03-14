
import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

// Sample reviews data
const sampleReviews = [
  { id: '1', rating: 4, comment: 'Great product!', status: true },
  { id: '2', rating: 5, comment: 'Excellent service!', status: true },
  { id: '3', rating: 3, comment: 'Could be better.', status: true },
  { id: '4', rating: 2, comment: 'Not satisfied.', status: true },
  { id: '5', rating: 4, comment: 'Fast delivery.', status: true }
];

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState(sampleReviews);

  // useEffect(() => {
  //   // Fetch reviews data from your backend API
  //   axios.get('/api/reviews')
  //     .then(response => {
  //       setReviews(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching reviews:', error);
  //     });
  // }, []);

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Reviews</Text>
      <Flex flexWrap="wrap">
        {reviews.map(review => (
          <Box key={review.id} width={['100%', '50%', '33.33%']} p={2}>
            <Text fontSize="lg" fontWeight="bold">Rating: {review.rating}</Text>
            <Text>{review.comment}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ReviewPage;


// import React, { useState, useEffect } from 'react';
// import { Box, Flex, Text } from '@chakra-ui/react';
// import axios from 'axios'; // assuming you're using Axios for HTTP requests

// interface Review {
//   id: string;
//   rating: number;
//   comment: string;
//   status: boolean;
// }

// const ReviewPage: React.FC = () => {
//   const [reviews, setReviews] = useState<Review[]>([]);

//   useEffect(() => {
//     // Fetch reviews data from your backend API
//     axios.get('https://sheba-app.onrender.com/api/reviews')
//       .then(response => {
//         setReviews(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching reviews:', error);
//       });
//   }, []);

//   return (
//     <Box p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>Reviews</Text>
//       <Flex flexWrap="wrap">
//         {reviews.map(review => (
//           <Box key={review.id} width={['100%', '50%', '33.33%']} p={2}>
//             <Text fontSize="lg" fontWeight="bold">Rating: {review.rating}</Text>
//             <Text>{review.comment}</Text>
//           </Box>
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default ReviewPage;
