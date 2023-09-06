import React, { useState, useEffect } from 'react'
import style from '../style.module.css';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Video() {

    const [keywords, setKeyword] = useState([]);
    const [selectedKeyword, setSelectedKeyword] = useState('');
    const [inputfield, setInputField] = useState({
        selectedType: "",
        selectedKeyword: "",
        title: "",
        thumbnail: "",
        link: ""
    });

    useEffect(() => {
        async function fetchKeyword() {
            try {
                const response = await fetch('http://localhost:8080/getAll-keyword'); // Replace with your API endpoint URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setKeyword(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchKeyword();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputField({ ...inputfield, [name]: value });
        setSelectedKeyword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/add-video', inputfield);
            setInputField({
                selectedType: '',
                selectedKeyword: '',
                title: '',
                thumbnail: '',
                link: ''
            });
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <>
            <div className={style.Video}>
                <form onSubmit={handleSubmit}>
                    <h1>INSERT NEW VIDEO</h1>
                    <div className={style.input_group} >
                        <select name="selectedType" className={style.select} onChange={handleChange} value={inputfield.selectedType}>
                            <option value='EN'>EN</option>
                            <option value='DE'>DE</option>
                            <option value='RU'>RU</option>
                            <option value='ES'>ES</option>
                        </select>
                        <select name="selectedKeyword" className={style.select2} onChange={handleChange} value={inputfield.selectedKeyword}>
                            <option value="">Select a keyword</option>
                            {keywords.map((keyword) => (
                                <option key={keyword._id} value={keyword.val1}>
                                    {keyword.val1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={style.inputdiv}>
                        <input type='text' name='title' placeholder='Title' className={style.input} value={inputfield.title} onChange={handleChange} />
                    </div>

                    <div className={style.inputdiv}>
                        <input type='text' name='thumbnail' placeholder='Thumbnail' className={style.input} value={inputfield.thumbnail} onChange={handleChange} />
                        <div className={style.inputImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image"><path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z"></path></svg>
                        </div>
                    </div>
                    <div className={style.inputdiv}>
                        <input type='text' name='link' placeholder='Video Link' className={style.input} value={inputfield.link} onChange={handleChange} />
                    </div>
                    <button type='submit' className={style.button}>ADD NEW</button>
                </form>
            </div>
        </>
    )
}

export default Video;
