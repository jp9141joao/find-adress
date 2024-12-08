# **Find Address**

Este é um projeto simples que permite buscar o endereço completo de um local a partir de seu CEP utilizando a API do ViaCEP. Ao inserir um CEP válido, o sistema irá automaticamente preencher os campos de endereço, bairro, cidade, estado e DDD.

---

## **Funcionalidades**

- **Busca de Endereço:** Insira um CEP e o sistema preenche automaticamente os campos com o endereço correspondente.
- **Campos Preenchidos:** Os campos como logradouro, bairro, cidade, estado e DDD são preenchidos com os dados da resposta da API.

---

## **Como Funciona**

1. O usuário insere um CEP válido no campo de pesquisa.
2. O sistema faz uma requisição à API ViaCEP.
3. As informações de endereço são preenchidas automaticamente nos campos do formulário.
4. Caso o CEP não seja válido ou não exista, os campos não serão preenchidos.

---

## **Exemplo de Uso**

1. Insira um CEP, como por exemplo: `01001000`.
2. O sistema faz a requisição e preenche os campos automaticamente:
   - Logradouro: Praça da Sé
   - Bairro: Sé
   - Localidade: São Paulo
   - UF: SP
   - DDD: 11

---

## **Tecnologias Utilizadas**

- **HTML** para estrutura da página.
- **JavaScript** para a manipulação da lógica do programa e requisições à API.
- **API ViaCEP** para buscar o endereço a partir do CEP.

---

## **Como Executar**

1. Clone ou baixe o código-fonte para o seu computador.
2. Abra o arquivo `index.html` no seu navegador.
3. Insira um CEP no campo de pesquisa e o sistema irá preencher os dados do endereço.

