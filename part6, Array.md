# 배열 만들기

### 배열

값을 저장할 수 있는 엘리먼트(변수)의 연속된 공간. 주소(인덱스, index)를 이용해 각 엘리먼트에 접근 가능.

#### 배열의 정의

- 빈 배열 : `var arr=[];`
- 초기화된 배열 : `var arr=[1,2,3,4,5];`
- 엘리먼트에는 어떤 자료형이든 저장될 수 있음
  - `var mixed_arr = [ 1, true, 3.14, "string", {name:"object"}, [1,2,3] ];`

#### 배열의 길이

- `.length` 속성 이용

#### 배열의 엘리먼트에 접근하기

- 대괄호 안에 인덱스를 사용 :

  ```
  arr[index]
  ```

  - `arr[0] = 1`
  - `console.log(arr[arr.length-1]);`



# 배열 사용하기

### 배열에 엘리먼트 추가/삭제하기

기본적으로 배열의 앞과 뒤에서 엘리먼트를 추가하거나 삭제할 수 있음.

- `.push(element)` : 배열의 뒤에 엘리먼트 추가
- `.pop()` : 배열의 뒤에서 엘리먼트 삭제하고 리턴
- `.shift()` : 배열의 앞에서 엘리먼트 삭제하고 리턴
- `.unshift(element)` : 배열의 앞에 엘리먼트 추가

### 배열 붙이기, 검색하기

- `arr1.concat(arr2)` : arr1과 arr2 붙임
- `arr.indexOf(element)` : arr에서 element가 있는 첫 위치를 검색
- `arr.lastIndexOf(element)` : arr에서 element가 있는 마지막 위치를 검색

### 문자열 split 함수

- 문자열을 구분자(separator)로 나눠서 각각을 담은 배열을 반환하는 함수

Code

```
var str="1,2,3,4,5";
arr = str.split(",");
```

결과

```
arr = ["1", "2", "3", "4", "5"];
```



