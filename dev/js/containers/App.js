import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import Nav from './Navigation'

const mapStateToProps = (state) => {
    return {state: state}
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

class AppPage extends Component {
    render(){
        return (
            <div className="chat">
                <Nav/>
                {this.props.children}
            </div>
        )
    }
};

let App = ({state}) => {
    return (
        <div>
            <Nav/>
        </div>
    )
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppPage;
