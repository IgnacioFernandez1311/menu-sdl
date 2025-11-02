"use client"
import "./app.css";


export function CoffeeMenu() {
  return (
    <div className="container">
  <header className="header">
    <div className="decorations">
      <span className="sparkle">✦</span>
      <span className="circle"></span>
      <span className="circle-small"></span>
    </div>
    <div className="coffee-beans">
      <span className="bean"></span>
      <span className="bean"></span>
      <span className="bean"></span>
      <span className="star">✦</span>
    </div>
    <h1 className="title">MENU</h1>
    <div className="title-underline"></div>
  </header>

  <main className="content">
    <section className="menu-grid">
      <div className="menu-column">
        <details className="menu-section" open>
          <summary className="section-title">CAFETERIA</summary>
          <ul className="menu-list">
            <li>ESPRESSO</li>
            <li>CORTADO</li>
            <li>LATTE</li>
            <li>CAPUCHINO</li>
            <li>CAPUCHINO DE DULCE DE LECHE</li>
            <li>AMERICANO</li>
            <li>LAGRIMA</li>
            <li>LATTE MACCHIATO</li>
            <li>MOKA</li>
            <li>SUBMARINO</li>
            <li>TE FRUTALES/COMUN</li>
            <li>TE CON LECHE</li>
          </ul>
        </details>
      </div>

      <div className="menu-column">
        <details className="menu-section" open>
          <summary className="section-title">BEBIDAS FRIAS</summary>
          <ul className="menu-list">
            <li>LICUADO FRUTALES</li>
            <li>AGUA</li>
            <li>EXPRIMIDOS</li>
            <li>LIMONADA CON MENTA</li>
            <li>LIMONADA DE FRUTOS</li>
          </ul>
        </details>

        <details className="menu-section" open>
          <summary className="section-title">CAFE FRIOS</summary>
          <ul className="menu-list">
            <li>AFFOGATO</li>
            <li>LATTE</li>
            <li>CAPUCHINO</li>
            <li>AMERICANO</li>
            <li>FRAPPE</li>
          </ul>
        </details>
      </div>
    </section>

    <div className="coffee-cup-decoration"></div>

    <section className="food-section">
      <h2 className="section-header">COMIDAS</h2>
      <div className="section-underline"></div>

      <div className="food-grid">
        <div className="food-column">
          <ul className="menu-list">
            <li>MEDIALUNAS</li>
            <li>CROISSANT</li>
            <li>TOSTADOS DE J&Q</li>
            <li>TOSTADAS CON MERMELADA Y MANTECA</li>
            <li>PORCION DE TORTAS</li>
            <li>PORCION DE TARTAS</li>
            <li>ALFAJORES DE MAICENA</li>
            <li>ALFAJOR DE CHOCOLATE</li>
            <li>COOKIES</li>
            <li>BROWNIE COMUNES</li>
          </ul>
        </div>

        <div className="food-column">
          <ul className="menu-list">
            <li>BROWNIES CON AGREGADOS (Oreos, Kinder, Frutas, Nueces)</li>
            <li>MARQUISE DE CHOCOLATE</li>
            <li>TIRAMISU</li>
            <li>CHOCOTORTA</li>
            <li>TORTA 3 LECHES</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</div>
  )
}
