import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Number from './number';
import BannerAds from '../ads';

const NumberList = ({numberList}) => {
  return (
    <View>
      {numberList.map((curr, idx) => {
        return <Number key={idx} num={curr.list} bonusNum={curr.bonusNum} />;
      })}
    </View>
  );
};

export default NumberList;
