import React from 'react'
import HogDetail from './HogDetail'

class Hog extends React.Component {

    state = {
        clicked: false
    }
   
    render() {
        let imgSrc = require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)
         return (<div className="ui eight wide column" onClick={() => this.setState({clicked: !this.state.clicked})}>
        <h4>{this.props.hog.name}</h4>
        <img src={imgSrc}></img>
        {this.state.clicked ? <HogDetail hog={this.props.hog}/> : null }
        <button className="ui button pink" onClick={() => this.props.hidePig(this.props.hog)}>Hide</button>
        </div>)
    }
}

export default Hog