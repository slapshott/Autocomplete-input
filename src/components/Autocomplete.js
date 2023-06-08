import React, { useState } from 'react';
import './index.css'
const AutocompleteInput = () => {
  // { value: 'Car', canRemove: false }, { value: 'Dog', canRemove: false }, { value: 'Cat', canRemove: false }
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState([])
  const [display, setDisplay] = useState('none')
  const [results, setResults] = useState([
    { title: 'React', description: `React is a community. It's a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners ...` },
    { title: 'React – A JavaScript library for building user interfaces', description: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just ...` }
  ])
  const [resultVisibility, setResultvisibility] = useState('none')

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
    if (searched.length > 0) {
      let newSuggestions = searched.filter((item) => {
        return item.value
          .toLowerCase()
          .startsWith(value.toLowerCase())
      }
      );
      setSuggestions(newSuggestions);
    } 
  };

  const handleInputClick = () => {
    let newSuggestions = [...searched]
    setSuggestions(newSuggestions)
  }

  const handlePressDown = (e) => {
    const value = e.target.value;
    if (e.key === 'Enter') {
      setResultvisibility('block')
      value.trim()
      let hasValue = searched.find(i => i.value === value)
      console.log('hasValue: ', hasValue)
      if (value !== '' && !hasValue) {
        searched.unshift({ value: value, canRemove: true })
      }
    }
  }

  const onHandleRemove = (index) => {
    const newSearched = [...searched]
    newSearched.splice(index, 1)
    setSearched(newSearched)
    const newSuggestions = [...newSearched]
    setSuggestions(newSuggestions)
  }

  const handleFocusIn = () => {
    setDisplay('block');
  };

  const handleFocusOut = () => {
    setTimeout(() => {
      setDisplay('none');
    }, 100)
  };

  const onHandleChoose = (item) => {
    setInputValue(item)
  }


  // console.log(suggestions)

  return (
    <div className='main'
    >
      <div className='inner'>
      <input
        className='input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        list="suggestions"
        onClick={handleInputClick}
        onKeyDown={handlePressDown}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
      />
      <div
        className='suggestions' id="suggestions"
        onFocus={handleFocusIn}

        style={{ display: display, border: `${(display === 'block' && searched.length > 0) ? '1px solid rgb(185, 174, 174)' : '0px'}` }}
      >
        {
          suggestions.map((item, index) => {
            return (
              <div
                onFocus={handleFocusIn}
                onClick={() => onHandleChoose(item.value)}
                key={index}
                className='suggestionsContainer'
              >
                <div>
                  {item.value}
                </div>
                {
                  item.canRemove &&
                  <svg 
                    className='close' 
                    xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 0 50 50" 
                    onClick={() => onHandleRemove(index)}
                    >
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
                  </svg>
                }
              </div>

            )
          }
          )
        }
      </div>

      <div
        style={{ display: resultVisibility }}
        className='resultContainer'
      >
        <div className='resultCount'>
          Около 478 000 резултата (0.55 секунди)
        </div>
        <div className='resultInnerContainer'>
          {
            results.map((item, index) => {
              return (
                <div
                  className='resultRow'
                  key={index}
                >
                  <a href='/' className='title'>
                    {item.title}
                  </a>
                  <div>
                    {item.description}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      </div>
    </div>
  );
};

export default AutocompleteInput;