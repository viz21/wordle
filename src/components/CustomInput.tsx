import React, { FC, useState } from 'react';

interface Props {
  correctWord: string;
}

const CustomInput: FC<Props> = (props) => {
  const { correctWord } = props;
  const [blockValues, setBlockValues] = useState(new Array(5).fill(''));

  const getColor = (index: number, letter: string): string => {
    if (!letter) {
      return 'gray';
    } else if (correctWord[index] === letter.toLowerCase()) {
      return 'green';
    } else if (correctWord.includes(letter.toLowerCase())) {
      return 'yellow';
    } else {
      return 'gray';
    }
  };

  return (
    <div>
      {blockValues.map((item, index) => {
        return (
          <input
            value={item}
            style={{
              width: 50,
              height: 50,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: getColor(index, item),
              color: 'black',
              margin: 5,
              borderColor: 'black',
              borderRadius: 5,
            }}
            maxLength={1}
            onChange={(e) => {
              setBlockValues([
                ...blockValues.slice(0, index),
                e.target.value,
                ...blockValues.slice(index + 1),
              ]);
            }}
            disabled={item}
          />
        );
      })}
    </div>
  );
};

export default CustomInput;
