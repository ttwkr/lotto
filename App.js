import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';
import {BannerAd, TestIds, BannerAdSize} from '@react-native-firebase/admob';

const App = () => {
  const [num, setNum] = useState([]);
  const [bonusNum, setBonusNum] = useState();

  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    setBonusNum(num);
    return num;
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
    <SafeAreaView>
      <View>
        <Text>Lotto!!!</Text>
        <View style={styles.background}>
          {num.length === 0 && bonusNum === '' ? (
            <Text>버튼을 눌러주세요</Text>
          ) : (
            <View style={styles.numbers}>
              {num.map((curr, idx) => {
                let style_number;
                if (curr > 0 && curr < 10) {
                  style_number = styles.red;
                } else if (curr >= 10 && curr < 20) {
                  style_number = styles.blue;
                } else if (curr >= 20 && curr < 30) {
                  style_number = styles.green;
                } else if (curr >= 30 && curr < 40) {
                  style_number = styles.yellow;
                } else if (curr >= 40 && curr < 50) {
                  style_number = styles.purple;
                }

                return (
                  <View style={[styles.number, style_number]}>
                    <Text key={idx} style={styles.text}>
                      {curr}
                    </Text>
                  </View>
                );
              })}
              <View>
                <Text>+</Text>
              </View>
              <View style={[styles.number, styles.orange]}>
                <Text style={styles.text}>{bonusNum}</Text>
              </View>
            </View>
          )}
        </View>
        <Button
          style={styles.btn}
          title={'Random Number'}
          onPress={lottoNumber}
        />
      </View>
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#eeeeee',
  },

  numbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    margin: 5,
    width: 45,
    height: 45,
    fontSize: 30,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },

  red: {
    backgroundColor: '#ff5555',
  },
  blue: {
    backgroundColor: '#5555ff',
  },
  green: {
    backgroundColor: '#00ff00',
  },
  yellow: {
    backgroundColor: '#ffcc00',
  },
  orange: {
    backgroundColor: 'orange',
  },
  purple: {
    backgroundColor: '#ff00ff',
  },

  btn: {
    width: 'auto',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#dddddd',
  },
});

export default App;
