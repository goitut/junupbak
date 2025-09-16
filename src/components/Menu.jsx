import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { db, } from '../firebase';
import { getDocs, collection } from "firebase/firestore"


function Menu() {
  const [recipes, setRecipes] = useState([]);

  const recipesCollectionRef = collection(db, "Recipes");

  useEffect(() => {
    const getRecipes = async () => {

      try {
        const data = await getDocs(recipesCollectionRef);
        const filteredData = data.docs.
          console.log(data);
      } catch (error) {
        console.error(error)
      }
    };

    getRecipes();
  }, []);


  return (
    <>
      <div className='text-center mt-4'>

        <input
          className='text-3xl border rounded-b-md'
          type="text"
          placeholder='Search'
        />
        <button
          className='ml-2 bg-blue-500 text-3xl rounded-b-md'>Search</button>
      </div>
    </>


  )
}

export default Menu