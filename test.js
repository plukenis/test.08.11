const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
let allMin = [];
let min = 0;

for (let i = 0; i < data.length; i++){
        allMin[i] = (Math.min(...data[i].marks))
    }
    min = Math.min(...allMin)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === min){
        console.log("Prasciausias pazymys: ", data[i].name, min);
    
    }
}
    
// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

let allMax = [];
let max = 0;

for (let i = 0; i < data.length; i++){
        allMax[i] = (Math.max(...data[i].marks))
    }
    max = Math.max(...allMax)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === max){
        console.log("Geriausias pazymys: ", data[i].name, max);
    }
}


// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

let allVidurkis = []
let minVidurkis = 0;
let sum = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    sum += (data[i].marks[j])
    }
    allVidurkis[i] = sum / data[i].marks.length
    data[i].vidurkis = allVidurkis[i]
    sum = 0;
}
minVidurkis = Math.min(...allVidurkis)
for (let i = 0; i < data.length; i++){
    
    if(data[i].vidurkis === minVidurkis){
        console.log("Prasciausias pazymiu vidurkis: ", data[i].name, data[i].vidurkis);
    }
    
}

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

allVidurkis = []
let maxVidurkis = 0;
sum = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    sum += (data[i].marks[j])
    }
    allVidurkis[i] = sum / data[i].marks.length
    data[i].vidurkis = allVidurkis[i]
    sum = 0;
}
maxVidurkis = Math.max(...allVidurkis)
for (let i = 0; i < data.length; i++){
    
    if(data[i].vidurkis === maxVidurkis){
        console.log("Geriausias pazymiu vidurkis: ", data[i].name, data[i].vidurkis);
    }
    
}

// Isspausdinti mokinio varda, jei jis turi pazymi 8

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 8){
        console.log("Turi pazymi 8: ", data[i].name);
    }
}

// Isspausdinti mokinio varda, jei jis neturi pazymio 

let x = 0;
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 7){
        x += 1;
}
if(x === 0)
console.log("Neturi pazymio 7:", data[i].name);
}