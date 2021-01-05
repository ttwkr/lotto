import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Number = ({num, bonusNum}) => {
  return (
    <View style={styles.background}>
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
            <View key={idx} style={[styles.number, style_number]}>
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
    </View>
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

export default Number;
