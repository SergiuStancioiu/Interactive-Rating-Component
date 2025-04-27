import Star from '../assets/images/icon-star.svg';

const ReviewCard = ({ ratingNumber, onClickRatingNumber, onSubmitRating }) => {
  const ratingNumbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div className='flex items-center justify-center pt-[200px] px-2.5'>
        <div className='bg-ebony-clay flex flex-col w-[416px] rounded-4xl p-8'>
          <div className='pb-10'>
            <img
              className='p-4 bg-light-ebony-clay rounded-full'
              src={Star}
              alt='Star Icon'
            />
          </div>
          <h1 className='font-medium text-3xl text-white pb-5'>
            How did we do?
          </h1>
          <p className='text-base text-gray-500 pb-7'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className='flex items-center justify-between text-gray-500 pb-7'>
            {ratingNumbers.map((num, index) => {
              return (
                <div
                  key={index}
                  onClick={() => onClickRatingNumber(num)}
                  className={`${
                    ratingNumber === num ? 'bg-white text-woodsmoke' : ''
                  } size-14 flex items-center justify-center bg-light-ebony-clay rounded-full font-bold hover:bg-orange-500 transition duration-300 cursor-pointer hover:text-woodsmoke`}
                >
                  {num}
                </div>
              );
            })}
          </div>
          <form onSubmit={onSubmitRating}>
            <button
              type='submit'
              className='appearance-none bg-orange-500 w-full py-2.5 uppercase font-semibold rounded-4xl hover:bg-white transition duration-300 cursor-pointer'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
