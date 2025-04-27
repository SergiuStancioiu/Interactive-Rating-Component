import ReviewCard from './components/ReviewCard';
import ThankYouCard from './components/ThankYouCard';
import { useState } from 'react';

function App() {
  const [ratingNumber, setRatingNumber] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);

  const onClickRatingNumberHandler = (num) => {
    setRatingNumber(num);
  };

  const onSubmitRatingHandler = (event) => {
    event.preventDefault();

    if (ratingNumber === null) {
      return;
    }

    setIsSubmited(true);
  };

  return (
    <>
      {!isSubmited && (
        <ReviewCard
          onClickRatingNumber={onClickRatingNumberHandler}
          ratingNumber={ratingNumber}
          onSubmitRating={onSubmitRatingHandler}
        />
      )}
      {isSubmited && <ThankYouCard ratingNumber={ratingNumber} />}
    </>
  );
}

export default App;
