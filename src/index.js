import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


const fname = "Neil"
const lname = "Campbell"
const variable = "variables"
const currentDate = new Date();


//create custom inline styling to allow for on the fly changes via conditional statements
const customStyle = 
{
  color: "Red",
  fontSize: "20px"
};

  //change accordingly on click of button maybe
customStyle.color = "blue"


//render method only works for one html element this works 
//with embedded elements also like a div with a h1 and p tag for example
//you can also add javascript into the html with the {syntax} (only expressions not statements)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <h1 className="heading">JSX Practise</h1>
  <h2>Created by {fname + " " + lname}</h2> 
  <p>You can add as many {variable} as you want {variable} {variable}</p>
  <h3>Whose lucky number is <strong>{3+1}</strong></h3>
  <p>A random number is {Math.floor(Math.random(10) * 10)}</p>

  <p>An unordered list</p>

  <ul>
    <li contentEditable ="true" spellCheck = "true">item 1</li>
    <img src={process.env.PUBLIC_URL + '/images/burger.tiff'} alt="Burger" />
    <li contentEditable ="true" spellCheck = "true">item 2</li>
    <img src={process.env.PUBLIC_URL + '/images/lasagne.jfif'} alt="Lasagne" />
    <li contentEditable ="true" spellCheck = "true">item 3</li>
    <img src={process.env.PUBLIC_URL + '/images/pancakes.jfif'} alt="Pancakes" />
  </ul>

  <h4 style = {customStyle}>Text with custom colour and font size depending on button click</h4>
 <p>Created on {Date()}</p>
 <p>Or {currentDate.getFullYear()}</p>

</div>
);


reportWebVitals();

//things to take away from this module
//1: using html attributes to style html is only possible using the javascript equivalent
//1: for example html "class" is className in javascript, font-size is fontSize etc

//inline stying is not recomended in react documentation as standard way to style, instead use css file,
//and link into index.html then remember to use javascript equivlanet html attributes
//however inline is good if you need styling to change on the fly!
