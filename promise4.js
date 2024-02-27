// promise all 쓰지 않고 배열안에 3개 넣어서 순서대로 실행
main();
// resolve는 매개변수로 1개만 보낼 수 있다. 값을 2개 보내고 싶으면 배열로 만들어서 비구조 할당(순서대로 할당 시켜주는것)으로 전해주기

    // promise.all 을 풀어서 쓰면 아래와 같다
function main() {
    let result = [];

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000)
    }).then(num => {
        result = [...result, num]
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2)
            }, 2000)
        }).then(num => {
            result = [...result, num]
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(3)
                }, 1000)
            }).then(num => {
                result = [...result, num]
                return result
            }).then(r => console.log(r))
        })
    })
} 



// new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
// new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
// new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))