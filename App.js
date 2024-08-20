import React, { useState } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <div className="form-container">
        {!category && (
          <div className="category-selection">
            <button onClick={() => handleCategoryClick('student')}>Student</button>
            <button onClick={() => handleCategoryClick('teacher')}>Teacher</button>
          </div>
        )}
        {category && (
          <>
            <h2>{isLogin ? 'Login' : 'Signup'} as {category}</h2>
            <form>
              <div className="input-container">
                <input type="email" required placeholder=" " />
                <label>Email</label>
              </div>
              {isLogin && (
                <div className="input-container">
                  <input type="password" required placeholder=" " />
                  <label>Password</label>
                </div>
              )}
              {!isLogin && (
                <>
                  <div className="input-container">
                    <input type="password" required placeholder=" " />
                    <label>Create Password</label>
                  </div>
                  <div className="input-container">
                    <input type="password" required placeholder=" " />
                    <label>Confirm Password</label>
                  </div>
                </>
              )}
              <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <button type="button" onClick={handleFormToggle}>
              Don't have an account? {isLogin ? 'Signup' : 'Login'}
            </button>
            <button type="button" onClick={() => setCategory('')}>
              Change Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
