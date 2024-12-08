let Buscar = async ()=>{
    let cep = document.getElementById("cep").value

    let url = `https://viacep.com.br/ws/${cep}/json`
    let anwser = await fetch(url)
    let anwserJson = await anwser.json()

    document.getElementById("logradouro").value = anwserJson.logradouro
    document.getElementById("bairro").value = anwserJson.bairro
    document.getElementById("localidade").value = anwserJson.localidade
    document.getElementById("uf").value = anwserJson.uf
    document.getElementById("ddd").value = anwserJson.ddd

}