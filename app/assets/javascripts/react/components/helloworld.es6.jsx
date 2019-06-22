import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const divStyle = {
  border: '1px solid lightgray',
  boxShadow: '2px 10px 10px #cccccc',
  width: '240px',
  padding: '40px',
  fontSize: '14px',
  textAlign: 'center',
  marginLeft: '40px',
  marginTop: '40px'
}

const buttonStyle = {
  backgroundColor: 'red',
  color: 'white'
}

const buttonEvent = (event) => {
  alert('Congratulations we made it');
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>Helping Hands Test</h1>
        <p style={{fontSize:'20px'}}>Hello World</p>
        <Button 
          variant='contained' 
          style={buttonStyle}
          onClick={buttonEvent}
        >Hello World</Button>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloWorld/>,
    document.body.appendChild(document.createElement('div'))
  )
})