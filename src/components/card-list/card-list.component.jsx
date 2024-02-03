import { Component } from "react";

import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    console.log("in cardlist", this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((mon) => {
          const {name,email,id} = mon
          return (
            <Card name={name} email={email} id={id}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
