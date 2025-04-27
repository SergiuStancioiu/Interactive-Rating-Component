import ThankYouImg from '../assets/images/illustration-thank-you.svg';

const ThankYouCard = ({ ratingNumber }) => {
  return (
    <>
      <div className='flex items-center justify-center pt-[200px] px-2.5'>
        <div className='bg-ebony-clay flex flex-col items-center w-[416px] rounded-4xl p-8'>
          <div className='mb-10'>
            <img
              className='p-4 bg-light-ebony-clay rounded-full'
              src={ThankYouImg}
              alt='Star Icon'
            />
          </div>
          <p className='text-orange-500 bg-light-ebony-clay py-2.5 px-5 rounded-4xl mb-5'>
            You selected {ratingNumber} out of 5
          </p>
          <h1 className='font-medium text-3xl text-white mb-5'>Thank you!</h1>
          <p className='text-base text-gray-500 pb-7 text-center'>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouCard;
