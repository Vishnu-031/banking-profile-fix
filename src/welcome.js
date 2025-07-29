import React from 'react';

const handleClick = () => {
  alert("View page");
};

const Welcome = () => {
  return (
    <div>
      <h1>Welcome Banking Project</h1>
      <p>This is dummy project and it's just a testing project for me</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Welcome;
