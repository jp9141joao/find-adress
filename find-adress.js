let Search = async () => {
    // Get the value entered in the input field with id "cep"
    let cep = document.getElementById("cep").value

    // Construct the API URL dynamically using the entered CEP
    let url = `https://viacep.com.br/ws/${cep}/json`

    // Make an asynchronous fetch request to the ViaCEP API
    let anwser = await fetch(url)

    // Parse the response from JSON format to a JavaScript object
    let anwserJson = await anwser.json()

    // Fill the input fields with the corresponding data from the API response
    document.getElementById("street").value = anwserJson.logradouro
    document.getElementById("neighborhood").value = anwserJson.bairro
    document.getElementById("city").value = anwserJson.localidade
    document.getElementById("state").value = anwserJson.uf
    document.getElementById("ddd").value = anwserJson.ddd
}
