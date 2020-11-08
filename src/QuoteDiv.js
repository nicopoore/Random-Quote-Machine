import React from 'react';
import { connect } from 'react-redux';

class QuoteDiv extends React.Component {
    constructor(props) {
        super(props);
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
            <div className="QuoteDiv">
              <div id="quote-box">
                <p id="text">{this.props.quote}</p>
                <p id="author">— {this.props.author}</p>
                <div id="buttons">
                    <a className="btn btn-primary" id="tweet-quote" target="_blank" rel="noopener noreferrer" href={'https://twitter.com/intent/tweet?text=' + this.props.quote + '%0A%0A— ' + this.props.author}>
                      Tweet Quote
                    </a>
                    <button id="new-quote" className="btn btn-primary" onClick={this.newQuote}>
                      New Quote
                    </button>
                </div>
              </div>
              <div id="credit">
                by <a id="credit-name" href="https://www.linkedin.com/in/nicolas-poore/" target="_blank" rel="noopener noreferrer">Nicolás Poore</a>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  author: state.author,
  id_array: state.id_array,
})
export default connect(mapStateToProps)(QuoteDiv);