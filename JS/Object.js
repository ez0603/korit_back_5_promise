const menu1 = {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue: "테스트"
    }
}
const result = "/test/menu?page=1&searchValue=테스트"

const result2 = menu1.path + "?"
console.log(result2)

const keys = Object.keys(menu1.params);
const values = Object.values(menu1.params);
console.log(keys.map(key => menu1.params[key])); // 배열안에 키값들 가져오기, [key]로 value 참조하기, value도 동일하게 사용가능

const entries = Object.entries(menu1.params); // entries = 배열안에 배열들(key, value)가 들어있음
console.log(entries.map(entry => entry[0] + "=" + entry[1])); // entry[0] = 키값 entry[1] = value값
console.log(entries.map(([key, value]) => key + "=" + value).join("&")); // 비구조 할당으로 key, value값 가져오기

const names = ["이지언", "삼지언", "사지언"];
const names2 = names.join("&"); // 배열안에 있는 것들을 붙여서 넣어줌
console.log(names2);

