import React, { Component } from 'react'
import { connect } from 'react-redux';

class QuoteDiv extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="QuoteDiv">
        <p id="text">{this.props.quote}</p>
        <p id="author">— {this.props.author}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  author: state.author,
})

export default connect(mapStateToProps)(QuoteDiv)