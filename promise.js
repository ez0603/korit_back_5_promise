main();

let complet = [false, false, false, false];

function main() {
    // gugudan(0, 4, "김준일");
    // gugudan(1, 1, "김준이");
    // gugudan(2, 3, "김준삼");
    // gugudan(3, 2, "김준사");

    const promises = [
        gugudan(0, 4, "김준일"),
        gugudan(1, 1, "김준이"),
        gugudan(2, 3, "김준삼"),
        gugudan(3, 2, "김준사")
    ];

    Promise.all(promises).then(result => {console.log(result)}) // Promise.all = 각각의 프로미스 값들이 완료될 때 까지 기다림

}

function gugudan(index, time, name) { // resolve, reject 둘 중 하나만 써도 되지만 순서는 지켜야함
    const p = new Promise((resolve, reject) => {
        console.log(`${name}: 구구단 외워와! `) // Promise는 대입해주지 않고도 생성하고 호출 되면 실행됨
    //     resolve(() => { // 함수정의
    //         setTimeout(() => { 
    //             console.log(`${name}: 다 외웠어요!`)
    //         }, time * 1000);
    //     });
    // }); 
            setTimeout(() => { // setTimeout안에 resolve가 들어가면 '외워와' 다 실행 후-> (외웠어요 완료) * 4 
                console.log(`${name}: 다 외웠어요!`);
                complet = complet.map((value, cIndex) => cIndex !== index ? value : true);
                resolve(complet)
            }, time * 1000);
        });
        return p;
    
    // resolve함수 -> then 호출 -> 함수호출
    // resolve함수는 result를 호출하기 위해서 then을 쓰고, then을 호출하기 위해서 return을 써줌
    
    // setTimeout 밖에 resolve가 있을때
    // p.then((result) => {  // result = 비동기에 대한 결과(함수가 들어옴)
    //     result(); 
    //     return "완료";
    // }).then((result) => {
    //     console.log(result);
    // });

    // setTimeout안에 resolve가 들어갔을때
    // p.then((result) => {
    //     console.log(result)
    // }) // reslove가 호출되면 호출
    
}


