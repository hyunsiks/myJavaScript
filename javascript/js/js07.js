
function print(text){
    console.log(text);
}

const num1 = 123;

print(num1.toString());
print(typeof num1.toString());

print(num1.valueOf()); //num1 중에 숫자값을 추출

//Number(): 다양한 자바스크립트 값들을 숫자 타입으로 변환해주는 메소드
print(Number(true));
print(Number(false));
print(Number('10.1234'));
print(Number('     10.1234  '));
print(Number('Mike')); //변환에 실패하는 경우 NaN(Not a Number) 반환

//Date타입을 Number로 변환하면 Unix Time이 된다
print(new Date());
print(Date()); //new를 안써도됨
print(Number(new Date()));

//parseInt(): 문자열을 정수 타입으로 변환(소수도 정수가됨)
print(parseInt("-1234"));
print(parseInt("10 20 30")); //맨 앞에 있는것만 짤라줌(맨 아이 숫자여야함)
print(parseInt("10,20,30"));
print(parseInt("10YEARS"));
print(parseInt("AFTER10YEARS"));

//parseFloat(): 문자열을 실수 타입으로 변환
print(parseFloat("-1234"));
print(parseFloat("10 20 30"));
print(parseFloat("10,20,30"));
print(parseFloat("10.2030"));
print(parseFloat("10YEARS"));
print(parseFloat("AFTER10YEARS"));

//숫자 관련 상수
print(Number.MAX_VALUE);
print(Number.MAX_SAFE_INTEGER);
print(Number.MIN_VALUE);
print(Number.MIN_SAFE_INTEGER);
print(Number.POSITIVE_INFINITY);
print(1/0);
print(Number.NEGATIVE_INFINITY);
print(-1/0);