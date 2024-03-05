function loadpk(){
    let url = 'https://pokeapi.co/api/v2/pokemon/';

    fetch(url + pesquisa.value.trim())
    .then((response) => {
        return response.json();
    })
    
    .then((data) => {
        console.clear();
        console.log(data)
        let pokeName = document.getElementById('nome').innerHTML = data['name'];
        console.log(pokeName);
        document.getElementById('numero').innerHTML = data['id'];
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
        document.getElementById('altura').innerHTML = data['height'];
        document.getElementById('peso').innerHTML = data['weight'];
    })

    .catch((erro) => {
        console.log("Erro: " + erro);
    });
}

document.getElementById('btn1').onclick = loadpk;
