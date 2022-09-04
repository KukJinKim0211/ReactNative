# ReactNative

## 리액트 네이티브

장점

- js로 코드를 작성해 안드로이드, iOS 기기에서 구동하는 애플리케이션을 개발 가능

사용 도구

- watchman : 작업 처리 모니터링

---

### 라이브러리

#### react-native-safe-area-context => 앱의 statusbar 영역에 내용을 넣으려고 할 때 사용하는 라이브러리

1. yarn add react-native-safe-area-context
2. cd ios
3. pod install
4. cd ..
5. yarn ios
6. App.js에 import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

#### react-native-vector-icons => 벡터 아이콘

https://oblador.github.io/react-native-vector-icons/ 여러 아이콘들

#### @react-native-community/async-storage => AsyncStorage

##### 가져오기

```javascript
import AsyncStorage from "@react-native-community/async-storage";
```

##### 저장하기

```javascript
const save = async () => {
  try {
    // 값 저장 시
    await AsyncStorage.setItem("key", "value");
    // 객체, 배열 저장 시
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
  } catch (e) {
    // 오류 처리
  }
};
```

##### 불러오기

```javascript
const load = async () => {
  try {
    // 값 불러오기
    const value = await AsyncStorage.getItem('key');
    // 객체, 배열 불러오기
    const rawTodos = await AsyncStorage.getItem('todos');
    const todos.= JSON.parse(rawTodos);
  } catch (e) {
    // 오류 처리
  }
}
```

##### 초기화

```javascript
const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // 오류 처리
  }
};
```

---

### 코코아팟 설치 오류

sudo xcodebuild -license accept
sudo xcodebuild -license

---

### 색상 코드 정할 시.

https://material.io/resources/color

---

### image resizeMode 속성

- cover: 기본값. 이미지의 가로 세로 비율을 유지한 상태로 이미지를 리사이징. 이미지가 잘릴 수 있음.
- contain: 이미지의 가로 세로 비율을 유지한 상태로 이미지를 리사이징. 이미지의 모든 부분이 보임
- stretch: 뷰의 크기대로 이미지를 리사이징. 가로/세로 비율이 원본과 달라질 수 있음
- repeat: 뷰의 크기가 이미지의 크기보다 크면 바둑판식으로 이미지 반복
- center: 이미지를 뷰 중앙에 둠. contain과 마찬가지로 이미지의 모든 영역이 뷰 안에 보임.
  뷰가 이미지보다 크면 이미지의 크기가 커지지 않고 원본 사이즈 유지

---

### returnKeyType Props

- 플랫폼 공통: done(완료) go(이동) next(다음) search(검색) send(보내기)
- iOS: default(기본) emergency-call(긴급통화) google(검색) join(가입) route(이동) yahoo(검색)
- 안드로이드: none(일반 Enter) previous(뒤로)

---

### 불변성 유지

##### 배열의 새로운 항목 추가

1. spread 연산자

```javascript
const numbers = [0, 1, 2, 3];
const newNumbers = [...numbers, 4];
```

2. 내장함수 concat

```javascript
const numbers = [0, 1, 2, 3];
const newNumbers = numbers.concat([4, 5, 6]);
```

##### 배열의 항목 제거

1. 내장함수 filter

```javascript
const numbers = [0, 1, 2, 3];
const newNumbers = numbers.filter((number) => number > 2);
```

##### 배열의 항목 수정

1. 내장함수 map 사용

```javascript
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const nextNumbers = numbers.map((number) => (number === 0 ? 10 : number));
```
