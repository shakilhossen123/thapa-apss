import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import './index.css';


ReactDOM.render(
  <>

    <h1 className='hading-style'>List of top 5 Netflix Series in 2020</h1>

    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=25"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=25"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=25"
    />
  </>,
  document.getElementById('root')
)
