main();

// async 특징
// 1. promise를 함수화한것
// 2. setTimeout을 await 할 수 없음

function main() {
    p1(3, "data1").then(result => console.log(result));
    setTimeout(() => p2("data").then(result => console.log(result)), 4000);
    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));
    p4("data4"); // promise 호출 => async의 return이 promise이기 때문
}

function p1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time * 1000);
    });
}
 
async function p2(data) { // async = resolve가 없기 때문에 return을 해줘야함
    return data;
}

async function p3(data, value) {
    return {
        [data]: value
    }
        
}

async function p4(data) {
    // const r1 = await p2(data); // await을 달기전 = promise , 달고난 후 = p2값
    // const r2 = await p3(r1, 200);
    const r2= await p3(await p2(data), 200)
    console.log(r2);
}