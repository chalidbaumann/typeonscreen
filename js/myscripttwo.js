var toggle = true

function showMessage(){

    if (toggle){
        document.getElementById('msgtwo').innerHTML='nala sinephro synths, james mollison saxophone, lyle barton piano, shirley tetteh guitar, jake long drums, rudi creswick double bass'
    }
    else{
        document.getElementById('msgtwo').innerHTML=''
    }
    
    toggle = !toggle
    
    }