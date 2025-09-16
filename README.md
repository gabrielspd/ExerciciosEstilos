# Treino de CSS em React - Loja de Produtos

Projeto de treino para praticar estilização em React, construindo uma interface simples de loja de produtos.

---

## Estrutura das Pastas

- **01-global-css/** – Todos os estilos em `global.css`. Fácil de alterar e visualizar tudo em um só lugar.  
- **02-css-modules/** – Estilos encapsulados por componente com CSS Modules, evitando conflitos de classes.  
- **03-tailwind/** – Estilização rápida usando classes utilitárias do Tailwind CSS.  
- **04-styled-components/** – Estilos dentro do JSX com Styled Components, permitindo dinamismo via props.

---

## Funcionalidades do Exercício

- Navbar fixa com logo, toggle de tema (claro/escuro persistente) e badge do carrinho.  
- Grid de produtos responsivo (1 a 4 colunas dependendo da tela).  
- Cards de produto com:
  - Imagem 1:1 com lazy loading
  - Título com até 2 linhas e ellipsis
  - Preço, rating (★) e tag (“Novo”/“Promo”)  
  - Botões “Adicionar” (solid/outline/ghost)  
- Estados de interação: hover, focus, disabled  
- Skeleton para simular carregamento  
- Dark mode aplicado a cores, bordas e sombras  
- Transições suaves (150–250ms)

---

## Tecnologias

- React 18 + JavaScript ES6+  
- CSS (Global, Modules, Tailwind, Styled Components)  
- LocalStorage para persistência do tema  
- **Vite** como ferramenta de build e desenvolvimento

---

## Como rodar o projeto

```bash
git clone https://github.com/gabrielspd/ExerciciosEstilos.git
cd 01-global-css   # ou outra pasta do exercício
npm install
npm run dev        # inicia o servidor de desenvolvimento do Vite
