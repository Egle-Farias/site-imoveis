window.addEventListener("load", () => {
    const button1 = document.querySelector("#click-me-btn");
    const button2 = document.querySelector("#esconder-casa-btn");
    const casaImg = document.querySelector("#casa-img");

    button1.addEventListener("click", () => {
        alert("Boa noite!")
    });

    button2.addEventListener("click", () => {
        casaImg.remove();
    });
})

function escreverNome()  {
    escreverNome.innerHtml = "Egle Farias";
}

window.onload = escreverNome;