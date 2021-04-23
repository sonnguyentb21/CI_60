
let $answers = document.getElementById('answers');

let $no = document.getElementById('no');
let count = 0; 
$no.addEventListener('mouseenter', function(){
    $answers.classList.toggle('reverse');
    count++;
    if(count > 5){
        $answers.style.display = "none"
    }
});

import helloByVietnamese, {helloByThailand} from "./hello.js";

helloByVietnamese();
helloByThailand();

// helloByVietnamese();
// helloByEngland();
