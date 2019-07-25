import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    return(
        <div>
            <h1>
                PAYSLIP
            </h1>
            <information name="Shafeeq" Address="Manchester" Marks="150"/>
            <information name="Harley" Address="Swindon" Marks="130"/>
        </div>
    );
}

class information extends React.Component{
    render(){
        return(
            <div>
                <h2>Name: {this.props.name} </h2>
                <h2>Address: {this.props.address} </h2>
                <h2>Marks: {this.props.marks} </h2>
            </div>
        )
    }
}

export default App;