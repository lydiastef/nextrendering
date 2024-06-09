import Link from 'next/link';
import '../style.css';


const ProfilePage = async () => {
    const user = 'Margrét Jóhansdóttir';
  
    return (
        <div className='main-container'>
        <div>
            <h1>User Profile</h1>
            <p>Name: {user}</p>
        </div>
        <div>
            <Link href='/'>
                <button className='drbtn'>Home</button>
            </Link>
            <Link href='/product/1/'>
                <button className='drbtn'>Product</button>
            </Link>
            <Link href='/dashboard'>
                <button className='drbtn'>Dashboard</button>
            </Link>
        </div>
    </div>
    );
  };
  
  export default ProfilePage;
  