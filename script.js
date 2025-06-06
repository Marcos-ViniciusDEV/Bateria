
function hover() {
    document.querySelectorAll(".key").forEach((key) => {
        if (key.style.borderColor !== "white") {
            setTimeout(() => {
                key.style.borderColor = "white";
            }, 500);
        }
    })
};



function playAudioQ() {

    let audioQ = document.getElementById('s_keyq');

    document.querySelector("[data-key='keyq']").addEventListener("click", () => {
        audioQ.play();
        audioQ.currentTime = 0;
        document.querySelector("[data-key='keyq']").style.borderColor = "red";
        hover()
    })


    document.addEventListener('keydown', (e) => {
        if (e.key === 'q') {
            audioQ.play();
            audioQ.currentTime = 0;
            document.querySelector("[data-key='keyq']").style.borderColor = "red";
            hover()
        }
    });

}


playAudioQ();

function playAudioW() {

    let audioW = document.getElementById('s_keyw');
    document.querySelector("[data-key='keyw']").addEventListener("click", () => {
        audioW.play();
        audioW.currentTime = 0;
        document.querySelector("[data-key='keyw']").style.borderColor = "green";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'w') {
            audioW.play();
            audioW.currentTime = 0;
            document.querySelector("[data-key='keyw']").style.borderColor = "green";
            hover()
        }
    });

}

playAudioW();

function playAudioE() {
    let audioE = document.getElementById('s_keye');
    document.querySelector("[data-key='keye']").addEventListener("click", () => {
        audioE.play();
        audioE.currentTime = 0;

        document.querySelector("[data-key='keye']").style.borderColor = "yellow";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'e') {
            audioE.play();
            audioE.currentTime = 0;
            document.querySelector("[data-key='keye']").style.borderColor = "yellow";
            hover()
        }
    });
}

playAudioE();
function playAudioA() {

    let audioA = document.getElementById('s_keya');
    document.querySelector("[data-key='keya']").addEventListener("click", () => {
        audioA.play();
        audioA.currentTime = 0;
        document.querySelector("[data-key='keya']").style.borderColor = "blue";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'a') {
            audioA.play();
            audioA.currentTime = 0;
            document.querySelector("[data-key='keya']").style.borderColor = "blue";
            hover()
        }
    });
}

playAudioA();

function playAudioS() {
    let audioS = document.getElementById('s_keys');
    document.querySelector("[data-key='keys']").addEventListener("click", () => {
        audioS.play();
        audioS.currentTime = 0;
        document.querySelector("[data-key='keys']").style.borderColor = "purple";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 's') {
            audioS.play();
            audioS.currentTime = 0;
            document.querySelector("[data-key='keys']").style.borderColor = "purple";
            hover()
        }
    });
}

playAudioS();
function playAudioD() {

    let audioD = document.getElementById('s_keyd');
    document.querySelector("[data-key='keyd']").addEventListener("click", () => {
        audioD.play();
        audioD.currentTime = 0;
        document.querySelector("[data-key='keyd']").style.borderColor = "orange";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'd') {
            audioD.play();
            audioD.currentTime = 0;
            document.querySelector("[data-key='keyd']").style.borderColor = "orange";
            hover()
        }
    });


}

playAudioD();
function playAudioZ() {

    let audioZ = document.getElementById('s_keyz');
    document.querySelector("[data-key='keyz']").addEventListener("click", () => {
        audioZ.play();
        audioZ.currentTime = 0;
        document.querySelector("[data-key='keyz']").style.borderColor = "rosybrown";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'z') {
            audioZ.play();
            audioZ.currentTime = 0;
            document.querySelector("[data-key='keyz']").style.borderColor = "rosybrown";
            hover()
        }
    });
}

playAudioZ();

function playAudioX() {

    let audioX = document.getElementById('s_keyx');
    document.querySelector("[data-key='keyx']").addEventListener("click", () => {
        audioX.play();
        audioX.currentTime = 0;
        document.querySelector("[data-key='keyx']").style.borderColor = "violet";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'x') {
            audioX.play();
            audioX.currentTime = 0;
            document.querySelector("[data-key='keyx']").style.borderColor = "violet";
            hover()
        }
    });
}

playAudioX();
function playAudioC() {
    let audioC = document.getElementById('s_keyc');
    document.querySelector("[data-key='keyc']").addEventListener("click", () => {
        audioC.play();
        audioC.currentTime = 0;
        document.querySelector("[data-key='keyc']").style.borderColor = "orange";
        hover();
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'c') {
            audioC.play();
            audioC.currentTime = 0;
            document.querySelector("[data-key='keyc']").style.borderColor = "orange";
            hover()
        }
    });
}



