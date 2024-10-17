//find output:

const mapData = new Map();
mapData['name'] = 'John';
console.log(mapData); //here the size is still zero which means this is not the correct way of storing data iin  Map()
//store data in Mapby using set (key, value)

mapData.set('subject', 'Javascript');;
mapData.set('lesson', 'Map');
console.log(mapData);


console.log(mapData.has('name')); //false
console.log(mapData.has('subject'));  //true
console.log(mapData.has('lesson')); //true
console.log(mapData.size); //2