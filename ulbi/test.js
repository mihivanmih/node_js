// const num = 5
// console.log(num)


function get(obj, path, defaultValue) {
    // your code here
    
    if(defaultValue === true) {
        //return true
        console.log(true)
    } else if(defaultValue) {
        console.log('defaultValue', defaultValue)
    } else {
     const pathArr = path.split(".")
     
     if(Object.keys(obj)[0] === pathArr[0]) {
         
         function recurs(newObj) {
            obj = newObj
            return obj
         }
    
         pathArr.forEach(item => {
             recurs(obj[item])
         })
         
         
         console.log(obj)
     
         
     } else {
         console.log(undefined)
     }
    }
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};


//get(obj, 'a.e')

// get(obj, 'a.b');   // { c : 'd' }
// get(obj, 'a.b.c'); // 'd'
// get(obj, 'a.e');   // 'f'
// get(obj, 'x.x.e'); // undefined
// get(obj, 'a.x.e', true); // true
// get(obj, 'a.x.e', 'My default value'); // My default value




function noArray () {

}


function flatten(list) {
    let mass = []
    list.filter(item => {
        if(Array.isArray(item)){
            //mass.push(String(item))
           console.log(item)
        } else {
            mass.push(item)
        }
    })
    return mass
}

//flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }])
//console.log()

// возвращает
//[1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
flatten([[[[1]]],[2]]) //[1,2]













