//동기 함수 처리
// fs = require("fs");

// const data = fs.readFileSync("./example.txt", "utf-8");
// console.log(data);

//비동기 함수 처리
fs = require("fs");

fs.readFile("./example.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});
