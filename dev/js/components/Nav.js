import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

class Nav extends Component {
    render() {
        let activeLink = this.props.location;
        let links = ['chat', 'photos', 'settings'];

        return (
            <nav>
                {links.map((hash, index) => {
                    return <Link key={index} className={ hash === activeLink ? 'active': null} to={hash}>{hash}</Link>
                })}
            </nav>
        )
    }
}

export default Nav;
