function verification(){ 
    let user=document.getElementById("user").value
    let password=document.getElementById("password").value

    if(user === "" || password === ""){
        alert("Preencha todos os campos!")
    }else if(user ==="admin" || password === "admin"){
        alert("Agora podemos começar!")
        window.location.href = "./pages/poke-page.html"
    }else{
        alert("Senha ou Usuario Incorretos")
    }

}
