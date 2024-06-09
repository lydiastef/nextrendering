import Link from 'next/link';
import './style.css';


const HomePage = async () => {
  const message = 'Welcome to the Home Page!';

  return (
    <div className='main-container'>
      <div className='message'>
        <h1>{message}</h1>
      </div>

      <div className='links'>
        <Link href='/profile'>
          <button className='drbtn'>Profile</button>
        </Link>
        <Link href='/dashboard'>
          <button className='drbtn'>Dashboard</button>
        </Link>
        <Link href='/product/1/'>
          <button className='drbtn'>Product</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
