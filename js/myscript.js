var toggle = true

var songmap = {
    trackone: {
        songInfoId: 'msgone', 
        songInfoText: 'nala sinephro <i><b>modular synths and harp</i></b>'
    },
    tracktwo: {
        songInfoId: 'msgtwo', 
        songInfoText: 'nala sinephro <i><b>synths</i></b> <br>james mollison <i><b>saxophone</i></b>  <br> lyle barton <i><b>piano</i></b>  <br> shirley tetteh <i><b>guitar</i></b>  <br> jake long <i><b>drums</i></b>  <br> rudi creswick <i><b>double bass</i></b>'
    },
    trackthree: {
        songInfoId: 'msgthree', 
        songInfoText: 'nala sinephro <i><b>modular synths</i></b>  <br> edward wakili-hick <i><b>drums</i></b>  <br> dwayne kilvington <i><b>synth bass</i></b>'
    },
    trackfour: {
        songInfoId: 'msgfour', 
        songInfoText: 'nala sinephro <i><b>modular synths and harp</i></b> <br> nubya garcia <i><b>saxophone</i></b> <br> lyle barton <i><b>keys</i></b> <br> jake long <i><b>drums</i></b> <br> twm dylan <i><b>double bass</i></b>'
    },
    trackfive: {
        songInfoId: 'msgfive', 
        songInfoText: 'nala sinephro <i><b>modular synths and harp</i></b> <br>ahnansé <i><b>saxophone</i></b> <br> shirley tetteh <i><b>guitar</i></b>'
    },
    tracksix: {
        songInfoId: 'msgsix', 
        songInfoText: 'nala sinephro <i><b>synthesizer</i></b> <br> james mollison <i><b>saxophone</i></b> <br> jake long <i><b>drums</i></b>'
    },
    trackseven: {
        songInfoId: 'msgseven', 
        songInfoText: 'nala sinephro <i><b>modular synths and harp</i></b>'
    },
    trackeight: {
        songInfoId: 'msgeight', 
        songInfoText: 'nala sinephro <i><b>modular synths and harp</i></b> <br> ahnansé <i><b>saxohone</i></b>'
    },
}


function showMessage(songInfo){

if (toggle){
    document.getElementById(songInfo.songInfoId).innerHTML=songInfo.songInfoText
}
else{
    document.getElementById(songInfo.songInfoId).innerHTML=''
}

toggle = !toggle

}



