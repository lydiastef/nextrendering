import Link from 'next/link';
import '../style.css';

enum UserRole {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

interface UserProfile {
  name: string;
  age?: number;
  email?: string;
  role: UserRole;
}

//defines the props expected by the ProfilePage component
interface ProfilePageProps {
  user: UserProfile;
  isAdmin: boolean;
}

//The keyof operator is a TypeScript keyword that creates types from the keys of the object type. 
//Here, the object type is UserProfile, and keyof UserProfile will be either "name", "age", "email" or "role".
function getUserDetail<T extends keyof UserProfile>(user: UserProfile, key: T): UserProfile[T] {
  return user[key];
} // T is a type varaible and must be one of the keys of "UserProfile". e.g. if the "T" is "name", the return type is string.

const ProfilePage: React.FC<ProfilePageProps> = ({ user, isAdmin }) => {
  return (
    <div className='main-container'>
      <div>
        <h1>User Profile</h1>
        <div className='user'>
            <p>Name: {user.name}</p>
            {user.age && <p>Age: {user.age}</p>}
            {user.email && <p>Email: {user.email}</p>}
            <p>Role: {user.role}</p>
            {isAdmin && <p>You have admin privileges.</p>}
        </div>
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

const user: UserProfile = {
  name: 'Margrét Jóhansdóttir',
  age: 30,
  email: 'margret@example.com',
  role: UserRole.User
};
const isAdmin = false;

const ProfilePageWrapper: React.FC = () => <ProfilePage user={user} isAdmin={isAdmin} />;

export default ProfilePageWrapper;
