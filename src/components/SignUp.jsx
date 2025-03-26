import React, { useRef, useState } from 'react';
import { ValidateForm } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/Firebase';
import { setUser , setLoading, setError as setAuthError  } from '../utils/Auth/authSlice';

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(''); // Local state for form errors
  const UserName = useRef(null);
  const UserEmail = useRef(null);
  const UserPassword = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access Redux state
  const { user, isLoading, authError } = useSelector((state) => state.auth);

  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
    setError(''); // Clear local form errors
    dispatch(setAuthError(null)); // Clear Redux auth errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = UserEmail.current.value;
    const password = UserPassword.current.value;
    const validationMessage = ValidateForm(email, password);

    if (validationMessage) {
      setError(validationMessage); // Set local form error
      return;
    }

    dispatch(setLoading(true)); // Set loading state to true

    try {
      if (isSignIn) {
        // Sign In logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed in successfully');

        // Dispatch the user to Redux
        dispatch(setUser({ email: user.email, uid: user.uid }));
        navigate('/'); // Redirect to home page
      } else {
        // Sign Up logic
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up successfully');

        // Update the user's profile with the display name
        const displayName = UserName.current.value;
        await updateProfile(user, { displayName });
        console.log('User profile updated with display name:', displayName);

        // Dispatch the user to Redux
        dispatch(setUser({ email: user.email, uid: user.uid, displayName }));
        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      dispatch(setAuthError(error.message)); // Set Redux auth error
    } finally {
      dispatch(setLoading(false)); // Set loading state to false
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Image Section */}
      <div className="w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg"
          alt="Decorative background"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          {(error || authError) && <p className="text-red-500 text-sm mb-4">{error || authError}</p>}
          <form onSubmit={handleSubmit}>
            {!isSignIn && (
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  ref={UserName}
                  id="username"
                  name="username"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                ref={UserEmail}
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                ref={UserPassword}
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
            >
              {isLoading ? 'Loading...' : isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          <p
            className="mt-4 text-center text-sm text-gray-600 cursor-pointer hover:underline"
            onClick={toggleSignInSignUp}
          >
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;