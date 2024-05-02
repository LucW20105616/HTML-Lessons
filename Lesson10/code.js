function test1() {
    var a = 1;
    console.log('hello world');
}
test1();

function test2(message) {
    console.log(message);
}
test2('hello world');

function tests4(num1, num2) {
    let ans = num1 + num2;

    return ans;
}

let answer = test4(1, 1);

console.log(answer)

function test4(num1, num2, num3) {
    let ans = (num1 + num2) - num3;

    return ans;
}
let ans = test4(1, 1, 1);
console.log(ans)

function concatName (Forename,Surname){
    let name = Forename + ' ' + Surname;
    return name;
}

let myName = concatName('lucas','wong');
console.log(myName);