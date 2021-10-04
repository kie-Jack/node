const obj = {
name : 'sana',
age : 23,
gender : 'female',
hobby : ['노래','달리기']
}; /*자바스크립트 오브젝트 */

/* JSON은 키 이름도 "" 기호 사용. 문자열 "" 꼭 사용 JSON과 자바스크립트 오브젝트는 모양은 같지만
JSON은 하나의 문자열이기 때문에 둘 사이에 변환이 필요*/

//const json = JSON.stringify(obj);   /*자바오브젝트 -> JSON 형식문자열로 변환*/
const json = JSON.stringify(obj,null,3);    /*두번째 인자는 함수, 세번째 인자는 칸수*/
console.log(typeof obj);
console.log(obj);
console.log("-----------obj -> json --------------")
console.log(typeof json);
console.log(json);


//JSON문자열을 JS Object로 변환하기
const json2 ='{"name":"sana","age":23,"gender":"female","hobby":["노래","달리기"]}';
const obj2 = JSON.parse(json2);
console.log("----------json -> obj-----------");
console.log(typeof obj2);
console.log(obj2);
console.log("----------json -> obj-----------");
const test = JSON.parse(json);
console.log(typeof test);
console.log(test);