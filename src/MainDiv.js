import React from 'react';
import { connect } from 'react-redux';
import QuoteDiv from './QuoteDiv.js'
import ButtonDiv from './ButtonDiv.js'

class MainDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="MainDiv">
            <div id="quote-box">
              <QuoteDiv />
              <ButtonDiv />
            </div>
            <div id="credit">
              by&nbsp;
              <a 
              id="credit-name" 
              href="https://www.linkedin.com/in/nicolas-poore/" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                Nicolás Poore
              </a>
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
export default connect(mapStateToProps)(MainDiv);