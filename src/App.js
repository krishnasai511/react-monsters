import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchKey: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log("target", event.target.value);
    this.setState(() => {
      return {
        searchKey: event.target.value,
      };
    });
  };

  render() {

    const {monsters,searchKey} = this.state
    const {onSearchChange} = this

    const filteredMosters = monsters.filter((ele) =>
      ele.name.toLowerCase().includes(searchKey)
    );
    return (
      <div className="App">
        <SearchBox className={'monsters-search-box'} onChangeHandler={onSearchChange}/>
        <CardList monsters={filteredMosters}/>
      </div>
    );
  }
}

export default App;
