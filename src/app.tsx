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
                <li>
                  <span>ESPRESSO</span> <span className="product-price">$3.000</span>
                </li>
                <li>
                  <span>CORTADO</span> <span className="product-price">$4.000</span>
                </li>
                <li>
                  <span>LATTE</span> <span className="product-price">$4.500</span>
                </li>
                <li>
                  <span>CAPUCCINO</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>CAPUCCINO DDL</span> <span className="product-price">$5.500</span>
                </li>
                <li>
                  <span>AMERICANO</span> <span className="product-price">$4.000</span>
                </li>
                <li>
                  <span>LAGRIMA</span> <span className="product-price">$3.500</span>
                </li>
                <li>
                  <span>LATTE MACCHIATO</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>MOKA</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>SUBMARINO</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>TÉS FRUTALES/NEGRO</span> <span className="product-price">$3.000</span>
                </li>
                <li>
                  <span>TÉ CON LECHE</span> <span className="product-price">$3.500</span>
                </li>
              </ul>
            </details>
          </div>

          <div className="menu-column">
            <details className="menu-section" open>
              <summary className="section-title">BEBIDAS FRIAS</summary>
              <ul className="menu-list">
                <li>
                  <span>LICUADOS FRUTALES</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>AGUA</span> <span className="product-price">$2.500</span>
                </li>
                <li>
                  <span>EXPRIMIDO</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>LIMONADA CON MENTA</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>LIMONADA DE FRUTOS</span> <span className="product-price">$5.000</span>
                </li>
              </ul>
            </details>

            <details className="menu-section" open>
              <summary className="section-title">CAFE FRIOS</summary>
              <ul className="menu-list">
                <li>
                  <span>AFFOGATO</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>LATTE</span> <span className="product-price">$4.500</span>
                </li>
                <li>
                  <span>CAPUCCINO</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>AMERICANO</span> <span className="product-price">$4.000</span>
                </li>
                <li>
                  <span>FRAPPE</span> <span className="product-price">$5.000</span>
                </li>
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
                <li>
                  <span>MEDIALUNAS (POR UNIDAD)</span> <span className="product-price">$2.000</span>
                </li>
                <li>
                  <span>TOSTADOS DE J&Q</span> <span className="product-price">$7.000</span>
                </li>
                <li>
                  <span>TOSTADAS MERMELADA Y MANTECA</span> <span className="product-price">$4.500</span>
                </li>
                <li>
                  <span>PORCION DE TORTAS</span> <span className="product-price">$7.000</span>
                </li>
                <li>
                  <span>PORCION DE TARTAS</span> <span className="product-price">$5.500</span>
                </li>
                <li>
                  <span>ALFAJORES DE MAICENA (POR UNIDAD)</span> <span className="product-price">$2.500</span>
                </li>
                <li>
                  <span>ALFAJOR DE CHOCOLATE</span> <span className="product-price">$3.000</span>
                </li>
                <li>
                  <span>COOKIES RELLENAS (POR UNIDAD)</span> <span className="product-price">$5.500</span>
                </li>
                <li>
                  <span>BROWNIE COMUN</span> <span className="product-price">$3.000</span>
                </li>
              </ul>
            </div>

            <div className="food-column">
              <ul className="menu-list">
                <li>
                  <span>BROWNIE (Oreo, Kinder, Frutas, Nueces)</span> <span className="product-price">$4.500</span>
                </li>
                <li>
                  <span>MARQUISE DE CHOCOLATE</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>TIRAMISÚ</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>CHOCOTORTA</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>POSTRE TRES LECHES</span> <span className="product-price">$5.000</span>
                </li>
                <li>
                  <span>PORCIÓN DE BUDÍN</span> <span className="product-price">$3.000</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
