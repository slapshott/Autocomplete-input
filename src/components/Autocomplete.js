import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../selectors';
import { fetchData, fetchDataRequest } from '../requests'
import connect from 'redux'
import './index.css'

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState([])
  const [display, setDisplay] = useState('none')
  const [result, setResult] = useState([])
  const [resultVisibility, setResultvisibility] = useState('none')
  const dispatch = useDispatch();
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value)
    let newSearched = suggestions.filter((item) => {
      return item.value
      .toLowerCase()
      .startsWith(value.toLowerCase())
    });
    if (newSearched.length > 0) {
      setSearched(newSearched)
    } else {
      setSearched([])
    }
 
  };

  const handleInputClick = () => {
    // let newSuggestions = [...searched]
    // setSuggestions(newSuggestions)
    
  }

  const handlePressDown = (e) => {
    
    const value = e.target.value;
    let hasValue = suggestions.find(i => i.value === value)
    if (e.key === 'Enter') {
      setResultvisibility('block')
      value.trim()
      let matched = data.filter(item => item.title.toLowerCase().startsWith(value))
      if (data.filter(item => item.title.toLowerCase().startsWith(value)).length > 0) {
        setSuggestions(matched)
        setResult(matched)
      }
      if (value !== '' && !hasValue) {
        let newSearched = [...suggestions]
        newSearched.unshift({ value: value, canRemove: true })
        setSuggestions(newSearched)
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

  console.log('data: ', data)

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
        <datalist
          className='suggestions' id="suggestions"
          onFocus={handleFocusIn}

          style={{ display: display, border: `${(display === 'block' && searched.length > 0) ? '1px solid rgb(185, 174, 174)' : '0px'}` }}
        >
          {
            searched.map((item, index) => {
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
                      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                    </svg>
                  }
                </div>

              )
            }
            )
          }
        </datalist>

        <div
          style={{ display: resultVisibility }}
          className='resultContainer'
        >
          <div className='resultCount'>
            Около 478 000 резултата (0.55 секунди)
          </div>
          <div className='resultInnerContainer'>
            {
              result?.map((item, index) => {
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


// const mapStateToProps = state => {

// }

export default AutocompleteInput;