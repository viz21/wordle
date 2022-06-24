import React, { useState } from 'react';

const CustomInput = () => {
  const [blockValues, setBlockValues] = useState(new Array(6).fill(''));

  return (
    <>
      <input
        style={{
          width: 50,
          height: 50,
          fontSize: 50,
          textAlign: 'center',
          backgroundColor: 'gray',
          color: 'white',
          margin: 10,
          borderColor: 'black',
          borderRadius: 5,
        }}
        maxLength={1}
        onChange={(e) => console.log(e.target.value)}
        
      />
    </>
  );
};

export default CustomInput;
