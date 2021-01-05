import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import BannerAds from '../ads';
import NumberList from './number_list';
import Number from './number';

/*
  숫자 생성구간
  2021-01-05
  @auth 서상진
 */

const GenerateNumber = () => {
  const [num, setNum] = useState([]);
  const [bonusNum, setBonusNum] = useState();
  const [numberList, setNumberList] = useState([]);

  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rnd_num = Math.floor(Math.random() * (max - min + 1)) + min;
    // 보너스 숫자 추가
    setBonusNum(rnd_num);
    return rnd_num;
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
    num_obj(arr, bonusNum);
  };

  const num_obj = useCallback(
    (array, bonus_number) => {
      const obj = {
        list: array,
        bonusNum: bonus_number,
      };

      setNumberList([...numberList, obj]);
    },
    [numberList],
  );

  return (
    <SafeAreaView>
      <View>
        <Text>Lotto!!!</Text>
        <View style={styles.background}>
          {num.length === 0 ? (
            <Text>버튼을 눌러주세요</Text>
          ) : (
            <Number num={num} bonusNum={bonusNum} />
          )}
        </View>
        <Button
          style={styles.btn}
          title={'Random Number'}
          onPress={lottoNumber}
        />
      </View>
      <ScrollView>
        <NumberList numberList={numberList} />
      </ScrollView>
      <View>
        <BannerAds />
      </View>
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

  numberList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ads: {
    position: 'absolute',
    bottom: 0,
  },
});

export default GenerateNumber;
