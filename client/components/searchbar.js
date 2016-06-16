import React from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import highlight from 'autosuggest-highlight';

const titles = [
  {
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg',
    Title:'The Godfather',
    Type:'movie',
    Year:'1972',
    imdbID:'tt0068646'
  },
  {
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX300.jpg',
    Title:'The Godfather: Part II',
    Type:'movie',
    Year:'1974',
    imdbID:'tt0071562'
  },
  {
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTczMDcxNDA4MV5BMl5BanBnXkFtZTgwNjY1NTk4NjE@._V1_SX300.jpg',
    Title:'The Godfather: Part III',
    Type:'movie',
    Year:'1990',
    imdbID:'tt0099674'
  },
  {
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg',
    Title: 'The Godfather Trilogy: 1901-1980',
    Type:'movie',
    Year:'1992',
    imdbID:'tt0150742'
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


function getSuggestionValue(suggestion) {
  return `${suggestion.Title} ${suggestion.Year}`;
}

function renderSuggestion(suggestion, { value, valueBeforeUpDown }) {
  const suggestionText = `${suggestion.Title} (${suggestion.Year})`;
  const query = (valueBeforeUpDown || value).trim();
  const matches = highlight.match(suggestionText, query);
  const parts = highlight.parse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.imdbID}>
      <span className="title">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: this.getSuggestions(''),
      titles: titles
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
    // TODO: Add promise which fires API Search request if method === 'type'
    // fires idSearch if method === 'click'
    
  }
  
  onSuggestionsUpdateRequested({ value, reason }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('\\b' + escapedValue, 'i');
    
    return this.state.titles.filter(title => regex.test(getSuggestionValue(title)));
  }

  render() {
    const inputProps = {
      placeholder: 'Search...',
      value: this.state.value,
      onChange: this.onChange
    };

    return (
      <Autosuggest suggestions={this.state.suggestions}
                   onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                   getSuggestionValue={getSuggestionValue}
                   renderSuggestion={renderSuggestion}
                   inputProps={inputProps} />
    );
  }
}



// class SearchBar extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       results: []
//     };
//   }

//   render(){
//     return (
//       <div>
//         <form>
//           <input 
//             type='text' 
//             placeholder='Search...' 
//             value={this.props.query}
//             onChange={this.props.handleTextChange}
//           >
//           </input>
//           <input type='checkbox' onChange={this.props.handleMovieCheck} />
//           <p>Movie</p>
//           <input type='checkbox' onChange={this.props.handleSeriesCheck}/>
//           <p>TV Series</p>
//           <button
//             type='submit' 
//             onClick={this.props.handleSearchSubmit} 
//           > 
//             Submit
//           </button>
//         </form>
//       </div>
//       );
//   }
// };

module.exports = SearchBar;