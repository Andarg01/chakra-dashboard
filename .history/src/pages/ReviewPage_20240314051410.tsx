import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios'; // assuming you're using Axios for HTTP requests

interface Review {
  id: string;
  rating: number;
  comment: string;
  status: boolean;
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Fetch reviews data from your backend API
    axios.get('https://sheba-app.onrender.com/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

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
