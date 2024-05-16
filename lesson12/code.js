let cars = [ 'Chealse','Arsnal','Liverpool','Man city'];

//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);

//console.log(cars.length);

//cars.push('Honda');

//console.log(cars.length);

Printcars();

cars.push('man united');

Printcars();

cars.pop();

Printcars();

var results = cars.find(x => x == 'fullham');

if (results == undefined){
    console.log('=========');
    console.log('team not exists');
}
else {
    console.log('==========');
    console.log('team exists');
}

function Printcars() {
console.log('==========');
for(i=0;i < cars.length; i++){
    console.log(cars[i])
}

}
let index = cars.findIndex(x => x == 'Man city');
if (index == -1){
console.log('team isnt in the prem');
}
else{
    console.log('i found the team and its called ',cars[index], 'it was found in index',index);
}

let x = cars.filter(x=> x.endsWith('l'))
console.log(x);
