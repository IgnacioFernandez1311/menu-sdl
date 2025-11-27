import "./app.css";
import TitledColumn from "./components/column/titledcolumn.tsx";
import UntitledColumn from "./components/column/untitledcolumn.tsx";
import { coffeeList, coldCoffees, coldDrinks, foodList } from "./services/pokcetbase_service";

export interface ItemInterface {
  name: string,
  price: number,
}

const [firstFoodColumn, secondFoodColumn] = [
  foodList.slice(0, 9),
  foodList.slice(9)
];


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
          <TitledColumn name="cafeteria" items={coffeeList} />
          </div>

          <div className="menu-column">
            <TitledColumn name="bebidas frias" items={coldDrinks} />
            
            <TitledColumn name="Cafés frios" items={coldCoffees} />
          </div>
        </section>

        <div className="coffee-cup-decoration"></div>

        <section className="food-section">
          <h2 className="section-header">COMIDAS</h2>
          <div className="section-underline"></div>

          <div className="food-grid">
            <UntitledColumn items={firstFoodColumn} />
            <UntitledColumn items={secondFoodColumn} />
          </div>
        </section>
      </main>
    </div>
  )
}
