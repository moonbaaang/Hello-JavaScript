var a = 100, b = 3.14
var c = "안녕하세요", d = "a"
var e = true, f = false

console.log(a, typeof(a))
console.log(b, typeof(b))
console.log(c, typeof(c))
console.log(d, typeof(d))
console.log(e, typeof(e))

var height = prompt("키를 입력해주세요")
console.log(height, typeof(height))

var height_int =  parseInt(height)
console.log(height_int, typeof(height_int))

var height_float = parseFloat(height)
console.log(height_float, typeof(height_float))

var empty_obj = {}
console.log(empty_obj, typeof(empty_obj))

var man = {name:"홍길동", age:20, height:180}
console.log(man, typeof(man))
console.log(man["name"],  man.name)
man["name"] = "전우치"
console.log(man.name)


var uninitialized_var;

var str1 = "abcdefg"
str[1]
str[10]
str[-1]
str.charAt(1)
str.substring(2,6)
str.substr(2,6)
str.substring(-2)

var arr = [];
arr = [1,2,3,4,5];
arr2;
var mixed_arr = [1, true, "a", {"String"}:"a", 3.14]

arr.pop()
console.log(arr)
arr.push(5)
arr.shift(1)
arr.unshift()
arr.reverse()
arr.sort()


var cond = false;
while(cond){
    console.log("이 구문은 실행되지 않습니다.")
}

do{
    console.log("이 구문은 한번 실행됩니다.")
} while (cond)

do{
    var ans = parseInt(prompt("1+1 은 무엇일까요?"))
}while(ans!= 2);

console.log("정답입니다.")

var obj = {
    name:"object",
    weight : 30,
    isObject:true,
    arr:[1,2,3],
    obj:{property:1}
};
console.log("For 구문으로 object property 반복")

var property_list = Object.keys(obj);
console.log("Property List : ", property_list)

for (var i=0; i<property_list.length; i++){
    var propertyName = property_list[i]
    console.log("\t", propertyName, ":", obj[propertyName])
}

for (var propertyName in obj){
    console.log("\t", propertyName, ":", obj[propertyName]))
}

function a(){
    var v_a = "a"

    function b(){
        var v_b = "b"
        console.log("b : ", typeof(v), typeof(v_a), typeof(v_b))
    }
    
    b();
    console.log("a : ", typeof(v), typeof(v_a), typeof(v_b))
}

var v = "v"

a();

console.log("o : ", typeof(v), typeof(v_a), typeof(v_b))

function shadowing_example(){
    var val = 0;
    console.log("F", val)
    val++;
}

var val = 0
shadowing_example()
console.log("O", val)

