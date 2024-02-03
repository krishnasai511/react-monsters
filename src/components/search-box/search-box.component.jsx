import { Component } from "react";
import './search-box.styles.css'


export default class SearchBox extends Component {


  render() {
    console.log("props from searchbox",this.props)
   
    const { onChangeHandler } = this.props;

  
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder="search monsters"
          onChange={onChangeHandler}
        />
        
      </div>
    );
  }
}
