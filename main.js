let input = document.getElementById("input");
let solution = document.getElementById("content");
let timer = document.getElementById("timer");
let solutionLength = solution.innerText.length;
//solution.innerHTML = solution.innerText.split('').map(x=>"<span>"+x+"</span>").join('');

// csináljuk meg függvényként, egy bemeneti paraméterrel
let letters = solution.innerText.split('');
solution.innerText = "";

for (let letter of letters) {
    solution.innerHTML += "<span>" + letter + "</span>"; 
}

let start = new Date();
let tick = setInterval(updateTimer, 500);

function updateTimer(){
    let curretTime = new Date();
    let timeSpent = (curretTime - start) / 1000;
    let clock = Math.round(60 - timeSpent);
    timer.innerText = clock;
    
    if(clock == 0){
        clearInterval(tick);
        alert("Vesztettél!");
    }
}

function update(){ 
    let completed = true;
    let letters = solution.getElementsByTagName("span"); 
    for(let i = 0; i < solutionLength; i++){
        letters[i].classList = "";
        if(input.value[i] != undefined){
            if(input.value[i] == letters[i].innerText){
                letters[i].classList.add("correct");
            }else{
                letters[i].classList.add("incorrect");
                completed = false;
            }
        }else{
            completed = false;
        }
    }

    if(completed){
        clearInterval(tick);
        alert("Szépvolt!");
    }
}



