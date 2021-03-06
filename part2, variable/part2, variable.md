### 변수 선언과 초기화

#### 변수

- 프로그램 실행 도중 임의의 값을 저장해 두고 읽을 수 있는 공간
- 변수의 선언과 초기화
  - 선언 : 컴퓨터에게 변수를 사용할 것이라고 선언(알려주는) 역할
  - 초기화 : 선언한 변수에 처음으로 값을 저장하는 과정
  - 변수에 값을 저장하는 법 : 대입연산자 (=) 를 활용
  - 콤마(,)를 활용해 여러 변수를 동시에 선언, 초기화 가능
  - 변수에 대한 더 자세한 내용은 [외계어사전](http://cafe.naver.com/hajacoding/4) 참고

```
var variable_name;
variable_name = value;
```

#### prompt() 명령어

- promprt 뒤에 따라오는 괄호 안에 들어있는 메세지를 사용자에게 보여주고, 문자열을 입력받는 명령
  - 변수에 값을 저장하는 구문과 함께 사용해서, 사용자가 입력한 값을 변수에 저장 가능

```
var name=prompt("이름을 입력해 주세요");
```



### 변수의 활용

#### 변수의 값 활용

- 변수의 이름을 사용하면, 변수의 값을 읽어서 사용 가능

```
var var1 = "1", var2 = "2", var3 = "3";

console.log(var1);
alert(var2);
prompt(var3);
```

#### console.log 명령어

- 괄호 안에 여러 개의 메시지를 콤마(,)로 구분하여 활용할 수도 있음

```
console.log("홍길동", "님 안녕하세요")
```