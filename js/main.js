<script>


    let textarea=document.getElementById("edit-acercaDe")
    textarea.addEventListener('keyup', (e) => {
        logMessage(`Key "${e.key}" released [event: keyup]`);
        if (e.key=="Enter"){
            document.getElementById("text-acercaDe").style.display="none"
        }
    });

    // cambia el estilo del imput a visible
    function cambiar_parrafo(){
        document.getElementById("edit-acercaDe").style.display="block";
        let texto = document.getElementById("text-acercaDe").innerText;
        console.log(texto);
    };

    function myFunction2(valor){
        document.getElementById("text-acercaDe").innerText=valor;
    };

    function logMessage(message) {
        console.log(message + "<br>");
    };

    //controla la tecla enter
    </script>
