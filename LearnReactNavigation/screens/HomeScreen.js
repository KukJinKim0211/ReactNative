import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

// 스크린으로 사용된 컴포넌트는 navigation이라는 객체를 Props로 받아올 수 있다.
const HomeScreen = ({navigation}) => {
  // navigation 헤더 타이틀 수정
  useEffect(() => {
    navigation.setOptions({title: '홈홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
};

export default HomeScreen;
