export const baseStyles = `
  :root {
    font-family: 'Segoe UI', Inter, system-ui, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light;
    color: #4d4a46;
    background-color: #f6f0e8;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 100vh;
    background: radial-gradient(circle at top left, rgba(181, 144, 103, 0.18), transparent 26%), radial-gradient(circle at bottom right, rgba(116, 143, 123, 0.18), transparent 28%), #f6f0e8;
  }

  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(255, 250, 244, 0.76);
    border-bottom: 1px solid rgba(68, 56, 47, 0.16);
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    color: #1c1714;
  }
`;
