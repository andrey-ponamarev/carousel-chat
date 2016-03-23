import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message, isMyMessage) => {
            dispatch(sendMessage(message, isMyMessage))
        }
    }
};

let Nav = ({ messages }) => {
    let links = ['chat', 'photos', 'settings'];
    let start = messages.length;

    return (
        <nav>
            {links.map((hash, index) => {
                return <Link key={index} activeClassName="active" to={hash}>{hash}</Link>
            })}
        </nav>
    )
};

Nav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default Nav;
