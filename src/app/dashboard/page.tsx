'use client';
import Link from 'next/link';
import '../style.css';

import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/dashboard-data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className='main-container'>
        <div>
            <h1>Dashboard</h1>
            {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
        </div>
        <div>
            <Link href='/'>
                <button className='drbtn'>Home</button>
            </Link>
            <Link href='/profile'>
                <button className='drbtn'>Profile</button>
            </Link>
            <Link href='/product/1/'>
                <button className='drbtn'>Product</button>
            </Link>
        </div>
    </div>
  );
};

export default DashboardPage;
