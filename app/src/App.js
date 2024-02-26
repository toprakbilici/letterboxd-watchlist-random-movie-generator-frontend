import React, {Component} from "react";
import Searchbox from "./components/Searchbox";

class App extends Component{
    render(){
        return(
            <div className="tc">
                <h1 style={{userSelect: "none"}} className="f1 fw6 ttu tracked">Letterboxd Watchlist Random Movie Generator</h1>
                <Searchbox  postData={this.postData}/>
            </div>
        )
    }
}

export default App;