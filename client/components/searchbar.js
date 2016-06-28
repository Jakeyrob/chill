import React from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import highlight from 'autosuggest-highlight';
import api from '../utils/api';


function uniq(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i].imdbID;
         if(!seen[item]) {
               seen[item] = 1;
               out[j++] = a[i];
         }
    }
    return out;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

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
    <span style={{
                  className: 'suggestion-content ' + suggestion.imdbID,
                }}>
      <img 
        className='poster' 
        src={suggestion.Poster === "N/A" ? "http://i.imgur.com/3c0pcKu.png" : suggestion.Poster } 
        alt={suggestion.Title + ' poster'} /> 
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
      results: [],
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.search = debounce(this.search, 250);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  search() {
   if (this.state.value.trim().length > 1) {
      api.movieSearch(this.state.value)
        .then( response => {
          if (response.Response === 'True') {
            this.setState(
              {results: uniq(this.state.results.concat(response.Search))}, () => 
              this.onSuggestionsUpdateRequested({value: this.state.value, reason:'type'})
            );
          } else {
            this.onSuggestionsUpdateRequested({value: this.state.value, reason:'type'})
          }
        });
   }
  }

  onChange(event, { newValue, method }) {
    if (method === 'type') {
      this.setState(
        { value: newValue }, 
        () => this.search()
      );;
    } 
  }

  // TODO: implement onSuggestionSelected
  onSuggestionSelected(event, { suggestion, suggestionValue, sectionIndex, method }) {
     
     if (method === 'click') {
      this.props.selectTitle(suggestion.imdbID);
     }
    // Set App.state.selected to suggestion.imdbID
    // Fire function
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
    
    if (this.state.results) {
      return this.state.results.filter(title => regex.test(getSuggestionValue(title)));
    }
    return [];
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
                   inputProps={inputProps}
                   onSuggestionSelected={this.onSuggestionSelected} 
      />
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