import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [num, setNum] = useState([]);

  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const lottoNumber = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      let number = randomNumber(1, 45);
      if (!arr.includes(number)) {
        arr.push(number);
      } else {
        i--;
      }
    }
    setNum(
      arr.sort((a, b) => {
        return a - b;
      }),
    );
    console.log(arr);
  };
  return (
    <View>
      <Text>Lotto!!!</Text>
      {num.map((curr, idx) => {
        return <Text key={idx}>{curr}</Text>;
      })}
      <Button title={'Random Number'} onPress={lottoNumber} />
    </View>
  );
};

export default App;
