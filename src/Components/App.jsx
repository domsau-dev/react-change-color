import React from 'react';

import ChangeColorButton from './ChangeColorButton';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: 'palegreen',
            in: 'AAA',
            diameter: 600,
            border: 50
            };
    }

    changeColorP = () => {
        this.setState({
            bg: 'palegreen',
        });
    }

    changeColorO = () => {
        this.setState({
            bg: 'orangered',
        });
    }

    changeColorG = () => {
        this.setState({
            bg: 'greenyellow',
        });
    }

    changeColor = (color) => {
        this.setState({
            bg: color,
        });
    }

    inChange = (e) => {
        this.setState({
            in: e.target.value,
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.in}));
    }

    setColor = (e) => {
        this.setState({
            in: e.target.value,
        });
        this.doColor();
    }

    setDiameter = (e) => {
        this.setState({
            diameter: e.target.value
        });
    }

    changeShape = () => {
        this.setState({
            border: this.state.border === 50 ? 0 : 50
        });
    }


    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg, width: this.state.diameter + "px", height: this.state.diameter + "px", borderRadius: this.state.border + "%"}}>
                <ChangeColorButton regNumber={23} color={'palegreen'} clickToChangeColor={this.changeColor}></ChangeColorButton>
                <ChangeColorButton regNumber={53} color={'orangered'} clickToChangeColor={this.changeColor}></ChangeColorButton>
                <ChangeColorButton regNumber={77} color={'greenyellow'} clickToChangeColor={this.changeColor}></ChangeColorButton>
                <input type="text" value={this.state.in} onChange={this.setColor}/>
                <input type="text" value={this.state.diameter} onChange={this.setDiameter}/>
                <input type="checkbox" onClick={this.changeShape}/>
            </div>
        );
    }
}
    
export default App;