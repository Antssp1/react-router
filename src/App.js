import React, { Component } from "react";
import "./active.css";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./home"
import Histoire from "./history"
import Navigation from "./navigation";


class App extends Component {
constructor(props) {
super(props);
this.state = {
work: props.work
};
}
handleClick = () => {
this.setState({ work: !this.state.work });
};
render() {
const working = this.state.work ? 'one' : 'App-logo';
return (
<div className="App">

<BrowserRouter>
<div>
<Navigation />
<Switch>
<Route path="/" component={Home} exact/>
<Route path="/notre-histoire" component={Histoire}/>
</Switch>
</div>
</BrowserRouter>


</div>
);
}
}

export default App;
