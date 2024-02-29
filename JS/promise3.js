main();

function main() {
    const promises = [
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
    ];

    // 비동기의 프로미스를 하나의 프로미스(all)로 묶어 다 실행이 되고 난 후 then 실행
    Promise.all(promises).then(result => console.log(result));
}