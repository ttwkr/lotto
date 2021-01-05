import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const BannerAds = () => {
  return <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />;
};

export default BannerAds;
