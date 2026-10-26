# Expense Control

[English](#english) | [Español](#español)

---

## English

This is a personal project to practice building a budget and expense tracking application using React and TypeScript. The main goal is to learn how to manage global state without external dependencies by using the Context API, avoiding prop drilling across components.

Demo: [expensecontrol.thepuchadesproject.com](https://expensecontrol.thepuchadesproject.com)

### What the project does

- Allows users to define an initial budget.
- Lets you add, edit, and delete expenses using a form and a calendar date picker.
- Categorizes expenses and displays icons for each category.
- Shows budget statistics (total budget, spent, and available) along with interactive charts.
- Includes swipe interactions to easily edit or delete expenses.
- Filters expenses by category.
- Saves data in `localStorage` so your budget information persists after refreshing the page.

### Tech stack

- React
- TypeScript
- Vite
- TailwindCSS
- Headless UI
- Context API & useReducer

### Next steps

Since this is a learning project, I plan to improve it over time:

- [x] Initial setup with TailwindCSS.
- [x] Implement initial budget form and validation.
- [x] Set up Context API and global state.
- [x] Add the modal and expense form.
- [ ] Display and filter expenses.
- [ ] Add interactive charts and local storage persistence.

### How to run it locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm run dev
   ```

---

## Español

Este es un proyecto personal para practicar la creación de una aplicación de control de gastos y presupuestos con React y TypeScript. El objetivo principal es aprender a manejar el estado global sin dependencias externas utilizando la Context API, evitando pasar props por cada componente.

Demo: [expensecontrol.thepuchadesproject.com](https://expensecontrol.thepuchadesproject.com)

### Qué hace el proyecto

- Permite definir un presupuesto inicial.
- Facilita añadir, editar y eliminar gastos mediante un formulario modal y un calendario.
- Categoriza los gastos y muestra iconos para cada categoría.
- Muestra estadísticas del presupuesto (total, gastado y disponible) junto con gráficas interactivas.
- Incluye interacciones (swipe) para editar o eliminar gastos fácilmente.
- Filtra los gastos por categoría.
- Guarda los datos en `localStorage` para que la información persista al recargar la página.

### Tecnologías utilizadas

- React
- TypeScript
- Vite
- TailwindCSS
- Headless UI
- Context API y useReducer

### Próximos pasos

Al ser un proyecto para aprender, tengo pensado ir completando las siguientes fases:

- [x] Configuración inicial con TailwindCSS.
- [x] Implementar el formulario de presupuesto inicial y su validación.
- [x] Configurar Context API y el estado global.
- [x] Añadir ventana modal y formulario de gastos.
- [ ] Mostrar y filtrar los gastos introducidos.
- [ ] Añadir gráficas interactivas y guardar en localStorage.

### Cómo ejecutarlo en local

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el proyecto:
   ```bash
   npm run dev
   ```
