import { Component } from "preact"

interface ItemProps {
    name: string,
    price: string
}


class Item extends Component<ItemProps> {
    render() {
        return (
        <li>
            <span>{this.props.name}</span> <span className="product-price">${this.props.price}</span>
        </li>
        )
    }
}

export default Item;