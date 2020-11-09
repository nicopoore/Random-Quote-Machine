import React, { Component } from 'react'
import { connect } from 'react-redux';

class ButtonDiv extends Component {
  constructor(props) {
    super(props)
    this.newQuote = this.newQuote.bind(this)
  }

  componentDidMount() {
    this.newQuote()
  }

  newQuote = () => {
    fetch('https://api.quotable.io/random?maxLength=200')
      .then(response => response.json())
      .then(response => this.props.dispatch({
        type: 'NEW_QUOTE',
        quote: response.content,
        author: response.author,
        _id: response._id,
      }))
  }

  render() {
    return (
      <div className="ButtonDiv">
        <a 
          className="btn btn-primary" 
          id="tweet-quote" 
          target="_blank" 
          rel="noopener noreferrer" 
          href={'https://twitter.com/intent/tweet?text=' + this.props.quote + '%0A%0A— ' + this.props.author}
        >
          Tweet Quote
        </a>
        <button 
          id="new-quote" 
          className="btn btn-primary" 
          onClick={this.newQuote}
        >
          New Quote
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  author: state.author,
})

export default connect(mapStateToProps)(ButtonDiv)