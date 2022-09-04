import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
// 해당 디바이스의 statusbar 높이 구하기
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DateHead = ({today}) => {
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currDay = today.getDate();

  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      {/* 스태이터스바 글자 흰색으로 변경 */}
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {currYear}년 {currMonth}월 {currDay}일
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default DateHead;
