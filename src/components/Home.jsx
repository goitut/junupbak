import React, {useState, useEffect } from 'react';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/data.json');
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };

      fetchData();
    }, []);




  return (
    <>
      <div className='text-center mt-15 mb-10'>
        <h1 className='text-5xl'>JUNUP BAKERY</h1>
        <p className='text-1xl font-tt hoves'>From Sunday to Monday 24/7</p>
      </div>
      <div className='text-center'>
        <button className='bg-white text-black  rounded-md cursor-pointer'>ORDER NOW</button>
        <p className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam expedita, ex rem quo mollitia aperiam.</p>
      </div>
      <div className='text-center'>
          <h1 className='text-5xl mt-4'>Our Goodies</h1>
      </div>
    </>
  )
}

export default Home