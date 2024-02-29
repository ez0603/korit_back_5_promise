main();

function main() {
    new Promise((resolve, reject) => {
        console.log(1); // 비동기라도 실행이 먼저 되어야하기 때문에 1,2,3 순서로 찍힘
        console.log(2);
        setTimeout(() => {
            console.log(4)
            resolve();
        }, 3000);
        // then은 다음스텝을 쓸때(활용할때) 사용
    }).then(() => { // promise의 then 은 순차적으로 만들어줌
        console.log("then 실행")
    }); 
    console.log(3)
}