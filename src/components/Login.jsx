import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(auth?.currentUser?.photoURL);

  const signIn = async () => {
    try {
       await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
     
  };
    const signInWithGoogel = async () => {
    try {
       await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };
     const logout = async () => {
    try {
       await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <Link to="create" className="font-medium text-green-600 hover:text-green-500">
              create an account
            </Link>
          
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onClick={signIn}  className="space-y-6" >
                <div>
                    <label for="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div class="mt-1">
                        <input  name="email" type="email" autocomplete="email" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div class="mt-1">
                        <input name="password" type="password" autocomplete="current-password" required
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password" 
                             onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input  name="remember_me" type="checkbox"
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900" />
                            Remember me
                        
                    </div>

                    <div className="text-sm">
                        <a href="#" class="font-medium text-green-600 hover:text-green-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div className='flex gap-1.5'>
                    <button type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" >
                        Sign in
                    </button>
                       <button onClick={logout} type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" >
                        Sign out
                    </button>
                </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid ">
                    <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                      <button onClick={signInWithGoogel}>
                        Sign Up with Google
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Login