import React,{useState} from "react";
import Tachyons from 'tachyons';
import '../stylings/Searchbox.css'



class Searchbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            film: '',
            username: ''
        }
    }
    onInputChange = (event) => {
        this.setState({username: event.target.value})
    }
    onSubmitUsername = () => {
        fetch('http://localhost:8383', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username
            })
        })
    }
    onGetMovie = () => {
        fetch('http://localhost:8383', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        
    }
    render(){
        return(
            <div className="pa2">
                <input 
                type="search" 
                placeholder="Search for User" 
                className="f6 bw2 pv2 mb2 w-30 unselectable"
                style={{input:focus = 'outline: none'}}
                onChange={this.onInputChange}
                />
                <a onClick={this.onSubmitUsername} className="f6 link dim ba bw2 ph3 pv2 mb2 dib black">Bring Your Watchlist</a>
                <a onClick={this.onGetMovie} className="f6 link dim ba bw2 ph3 pv2 mb2 dib black">Get Random Movie</a>
            </div>
        );
    }
}

export default Searchbox;