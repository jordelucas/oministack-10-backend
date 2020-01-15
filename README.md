# DevRadar - Backend

O DevRadar - Backend é uma API RESTFULL desenvolvida durante a Semana Omnistack - 10ª Edição, da Rocketseat. Com essa aplicação é possível cadastrar desenvolvedores consumindo a API do github, listar os desenvolvedores já cadastrados e realizar busca a partir das tecnologias informadas, bem como a localização.

A partir do username de uma conta do github, são obtidos nome, biografia e avatar. Cada desenvolvedor possui também uma lista de tecnologias e uma localização (latitude e longitude). Os dados são persistidos no MongoDB Atlas.

A estrutura de dados utilizada para estabelecer comunicação com as aplicações que consomem seus dados é o JavaScript Object Notation - JSON.

## Como executar?

Rodar no terminal o seguinte comando: 

```console
yarn dev
```

A porta utilizada é a 3333.