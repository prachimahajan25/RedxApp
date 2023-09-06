import React, { useEffect, useState } from 'react';
import '../App.css';
import style from '../style.module.css';
import axios from 'axios';
import Layout from './Layout';
import { Link } from 'react-router-dom';

function Keyword() {
  const [inputValues, setInputValues] = useState({
    val1: '',
    val2: '',
    val3: '',
    val4: '',
  });

  const [keywords, setKeywords] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/add-keyword', inputValues);
      setInputValues({
        val1: '',
        val2: '',
        val3: '',
        val4: '',
      })
      console.log(inputValues)
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  useEffect(() => {
    async function fetchKeywords() {
      try {
        const response = await fetch('http://localhost:8080/getAll-keyword'); // Replace with your API endpoint URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setKeywords(data);
        console.log(keywords);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchKeywords();
  });

  return (
    <>
      <div className={style.Keyword}>
        <h1>Insert New Keyword</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <div className={style.inputdiv}>
              <input
                type="text"
                name="val1"
                className={style.input}
                placeholder='Keyword Name'
                value={inputValues.val1}
                onChange={handleChange}
              />
              <h5 className={style.type}>EN</h5>
            </div>

            <div className={style.inputdiv}>
              <input
                type="text"
                name="val2"
                className={style.input}
                placeholder='Keyword Name'
                value={inputValues.val2}
                onChange={handleChange}
              />
              <h5 className={style.type}>DE</h5>
            </div>

            <div className={style.inputdiv}>
              <input
                type="text"
                name="val3"
                className={style.input}
                placeholder='Keyword Name'
                value={inputValues.val3}
                onChange={handleChange}
              />
              <h5 className={style.type}>RU</h5>
            </div>

            <div className={style.inputdiv}>
              <input
                type="text"
                name="val4"
                className={style.input}
                placeholder='Keyword Name'
                value={inputValues.val4}
                onChange={handleChange}
              />
              <h5 className={style.type}>ES</h5>
            </div>
          </div>


          <button type="submit" className={style.button}>ADD NEW</button>
        </form>

        <div>
          <ul>
            {
              keywords.map(keyword => (
                <li key={keyword._id}>{keyword.val1}</li>
              ))
            }
          </ul>

        </div>
      </div>
    </>
  );
}

export default Keyword;