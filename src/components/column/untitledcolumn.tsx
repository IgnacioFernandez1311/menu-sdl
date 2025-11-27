import { Component } from "preact";
import Item from "../item/item";
import type { RecordModel } from "pocketbase";

interface UntitledColumnProps {
    items: RecordModel[]
}

class UntitledColumn extends Component<UntitledColumnProps> {
    render() {
        return (
            <div className="food-column">
              <ul className="menu-list">
                {this.props.items.map((e) => {
                  return <Item name={e.name.toUpperCase()} price={e.price.toLocaleString('es-AR')} />
                })}
              </ul>
            </div>
        )
    }
}

export default UntitledColumn;