import { Component } from "preact";
import Item from "../item/item";
import type { RecordModel } from "pocketbase";

interface ColumnProps {
    items: RecordModel[],
    name: string
}

class TitledColumn extends Component<ColumnProps> {
    render() {
        return (
            <details className="menu-section" open>
              <summary className="section-title">{this.props.name.toUpperCase()}</summary>
              <ul className="menu-list">
                {this.props.items.map((e) => {
                  return <Item name={e.name.toUpperCase()} price={e.price.toLocaleString('es-AR')} />
                })}
              </ul>
            </details>
        )
    }
}

export default TitledColumn;