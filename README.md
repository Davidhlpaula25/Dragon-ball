
# Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [PrimeReact](https://primereact.org/)
- [PrimeIcons](https://primefaces.org/primeicons/)
- [Axios](https://axios-http.com/)
- [Docker](https://www.docker.com/)
- [NGINX](https://www.nginx.com/)

# Demonstração

```bash
Acesse: http://localhost:5173 (após rodar com Docker)
```

---

# Instalação Local

```bash
# Clone o repositório
git clone https://github.com/odavid062/app-dragon-ball-next-main.git

# Acesse a pasta
cd app-dragon-ball-next-main

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

# Docker

# Build da imagem
```bash
docker build -t dragon-ball-app .
```

# Execução da imagem
```bash
docker run -d -p 5173:80 dragon-ball-app
```

#  Acesse:
```
http://localhost:5173
```

---

## 📁 Estrutura de Pastas

```
src/
├── assets/              # Imagens e recursos estáticos
├── character/           # Modelos e tipos dos personagens
├── planets/             # Componentes relacionados a planetas
├── components/          # Tabela de personagens, tabelas reutilizáveis
├── service/             # Serviços de requisição com Axios
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada da aplicação
```

---

## 🧱 Dockerfile multi-stage

A imagem foi construída com duas etapas:

1. **Build (Node 18 Alpine)**: Compila o projeto com `vite build`
2. **Produção (NGINX)**: Serve a aplicação estática via `/usr/share/nginx/html`

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Feito  por [Davidhlpaula25Dev](https://github.com/davidhlpaula25)
