import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import { newMessage } from '../actions'

const mapStateToProps = (state) => {
	console.log(state.chat);
	return {
		messages: state.chat.messages,
		newMessages: state.chat.newMessages,
		path    : state.routing.location.pathname
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetCount: () => {
			newMessages = 0
		}
	}
};

let newMessages = 0;

const resetCount = () => {
	newMessages = 0;
};

let Nav = ({ messages, path}) => {
	let links = ['chat', 'photos', 'settings'];
	let allMessages = messages.length;
	let hasNewMessage = 0;

	console.log({newMessages, allMessages});

	if( path && path.indexOf('chat') + 1 ) {
		newMessages = 0;
	}else if(newMessages === 0 && newMessages !== allMessages){
		newMessages = allMessages;
	}else if (allMessages - newMessages){
		hasNewMessage =  allMessages - newMessages;
	}

	return (
		<nav className={hasNewMessage ? 'blink': ''}>
			{hasNewMessage ?
				<span className="new-message">
					{hasNewMessage}
				</span> : null
			}
			{links.map((hash, index) => {
				return <Link key={index}
				             activeClassName="active" to={hash}>
					{hash}
				</Link>
			})}
		</nav>
	)
};

Nav = connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);

export default Nav;
