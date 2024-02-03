import { Component } from "react";

import './card-list.styles.css'

class CardList extends Component {
  render() {
    console.log("in cardlist", this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((mon) => {
          const {name,email,id} = mon
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
