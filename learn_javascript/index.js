// const prompt = require('prompt-sync')();
const fetch = require('node-fetch')


function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {callback(json),console.log(json)})
    // .then((json) =>
    // var name = prompt('Please enter your name.');
    // callback(json))
  }
  
  processUserInput(greeting);































const displayData = (data) => {
    console.log("here you go",data)
}

const getData = (displayData) => {
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json()).then(json => displayData(json))
    // displayData(res)
}

getData(displayData);