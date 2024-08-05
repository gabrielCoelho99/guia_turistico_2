Guia Turístico

Este é um projeto de site de guia turístico, desenvolvido para fornecer informações sobre diversos destinos turísticos do Maranhão. O site inclui funcionalidades para login, registro, pesquisa de destinos e favoritos.

Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

guia_turistico/
├── backend/
│ ├── config/
│ ├── routes/
│ ├── database.sqlite
│ └── index.js
├── frontend/
│ ├── assets/
│ ├── js/
│ ├── index.html
│ ├── login.html
│ └── register.html
├── node_modules/
├── .env
├── README.md
├── package-lock.json
└── package.json

Funcionalidades

- **Página Principal**: Apresenta uma lista de destinos populares e um mapa interativo.
- **Login e Registro**: Permite que os usuários façam login ou se registrem para acessar funcionalidades adicionais.
- **Pesquisa**: Barra de pesquisa para encontrar destinos específicos.


Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Banco de Dados**: SQLite
- **Mapas**: Leaflet

 Como Executar o Projeto

Pré-requisitos

- Node.js instalado
- Conta no Vercel para deploy (opcional)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/kouga99/guia_turistico_2.git
Navegue até o diretório do projeto:

bash
Copiar código
cd guia_turistico_2
Instale as dependências:

bash
Copiar código
npm install
Configure o arquivo .env com as variáveis de ambiente necessárias.

Execute o backend:

bash
Copiar código
node backend/index.js
Abra o arquivo frontend/index.html no seu navegador para acessar a aplicação.

Deploy
Para fazer o deploy do projeto no Vercel, siga as instruções da documentação do Vercel: Vercel Documentation.

Contribuição
Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

Faça um fork do repositório
Crie uma nova branch com sua feature: git checkout -b minha-feature
Faça commit das suas mudanças: git commit -m 'Minha nova feature'
Envie para a branch: git push origin minha-feature
Abra um Pull Request
Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Desenvolvido por kouga99, debiris e maysousa2

 
