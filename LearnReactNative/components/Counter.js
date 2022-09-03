import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = ({count, onIncrease, onDecrease}) => {
  return (
    // 모든 영역을 차지
    <View style={styles.wrapper}>
      {/* button을 제외한 모든 영역 차지 */}
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // 모든 영역을 차지
    flex: 1,
  },
  numberArea: {
    flex: 1,
    // 가로 정렬
    alignItems: 'center',
    // 세로 정렬
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
