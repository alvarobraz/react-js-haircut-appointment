<p align="center">
  Aplicação de agendamentos em React/TypeScript chamada HairDay. 🚀 
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/react-js-haircut-appointment"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/react-js-haircut-appointment/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/react-js-haircut-appointment">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/react-js-haircut-appointment">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre

HairDay é uma aplicação de agendamentos para salões de beleza desenvolvida com React e TypeScript, com foco em experiência do usuário, organização de código e boas práticas de desenvolvimento.

O sistema permite que o usuário visualize e crie agendamentos de forma simples e intuitiva, separando os horários por períodos — Manhã, Tarde e Noite — e bloqueando automaticamente horários já ocupados ou passados no dia atual.

## :rocket: Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [React.js](https://pt-br.legacy.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [tailwindcss](https://tailwindcss.com/)
- [useLocalStorage](https://usehooks-ts.com/react-hook/use-local-storage)
- [Class Variance Authority](https://cva.style/docs)
- [Prettier](https://prettier.io/)
- [eslint](https://eslint.org/)

## Estrutura

```

├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── icons
│   │   │   ├── calendar-blank.svg
│   │   │   ├── caret-down.svg
│   │   │   ├── caret-left.svg
│   │   │   ├── caret-right.svg
│   │   │   ├── caret-up.svg
│   │   │   ├── cloud-sun.svg
│   │   │   ├── moon-stars.svg
│   │   │   ├── sun-horizon.svg
│   │   │   ├── trash.svg
│   │   │   └── user-square.svg
│   │   └── images
│   │       ├── logo-hair-day.png
│   │       └── logo-hair-day.svg
│   ├── components
│   │   ├── button-icon.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   ├── date-content.tsx
│   │   ├── icon.tsx
│   │   ├── input-text.tsx
│   │   ├── SelectDate.tsx
│   │   ├── SelectTime.tsx
│   │   ├── text.tsx
│   │   └── yourSchedule.tsx
│   ├── hooks
│   │   └── use-appointments.ts
│   ├── index.css
│   ├── main.tsx
│   ├── models
│   │   └── appointments.ts
│   ├── pages
│   │   ├── footer.tsx
│   │   ├── form.tsx
│   │   ├── layout-main.tsx
│   │   ├── main-content.tsx
│   │   ├── page-components.tsx
│   │   ├── page-home.tsx
│   │   └── title-and-subtitle.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock


```

## :white_check_mark: Requerimentos

- [React](https://react.dev/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/react-js-haircut-appointment

# Access
$ cd alvarobraz/react-js-haircut-appointment

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:5173>
```
