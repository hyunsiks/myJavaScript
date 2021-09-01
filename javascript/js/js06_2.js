// alert(text); //window.alert() 이지만 window는 생략가능

//slic, substring, substr
console.log('length: ', text.length);
console.log('slice: ', text.slice(3,9)); //3번째부터 9번째전까지
console.log('substring: ', text.substring(3,9)); //3번째부터 9번째전까지
console.log('substr: ', text.substr(3,3)); //3번째부터 3개 

//전달한 값이 음수라면 인덱스를 뒤에서부터 세준다
console.log('slice: ', text.slice(2));
console.log('slice: ', text.slice(2, -1));
console.log('slice: ', text.slice(2, -2));
console.log('slice: ', text.slice(2, -3));

console.log('toUpperCase: ', text.toUpperCase());
console.log('toLowerCase: ', text.toLowerCase());

console.log('toLowerCase2: ' + text.toLowerCase());

console.log('trim: ', '         ABCDEFG'.trim());
console.log('padding: ', 'ABCDEFG'.padStart(10, '#').padEnd(13,'%'));

console.log('ABCDEF'.charAt(3));
console.log('ABCDEF'[3]);
console.log('ABCDEF'.charCodeAt(3)); //이 문자열의 아스키코드반환

const fruit_arr = fruits.split('/');
console.log(fruit_arr);

console.log(text.indexOf('H'));
console.log(text.indexOf('a'));
console.log(text.lastIndexOf('a'));

console.log(text.indexOf('Java')); //indexOf는 시작위치를 결정할 수 있다
console.log(text.search('J.3')); //search는 정규표현식을 쓸 수 있다

//match: 문자열에 대한 정규표현식 검사를 할 수 있다
console.log(names.match('.{1}민수'));

console.log('includes 손흥민? ', names.includes('손흥민'));
console.log('includes 김준식? ', names.includes('김준식'));

console.log('text endswith Script!?', text.endsWith("Script!"));