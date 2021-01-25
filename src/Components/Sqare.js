import React from "react";

class Square extends React.Component {
    render() {
        const {value} = this.props
      return (
        <button className="square" 
        onClick={()=> {this.props.onClick();}}>
            {{value}.value}
        </button>
      );
    }
}

export default Square