import React, {Component} from 'react'
import { connect } from 'react-redux'
import { changeName, changeCarouselSize } from '../actions'
import Nav from '../components/Nav'
import UserSettings from '../components/SettingsChat';
import CarouselSettings from '../components/SettingsCarousel';

const mapStateToProps = (state) => {
    return {
        user: state.chat.user,
        size: state.carousel.size
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (userName) => {
            dispatch(changeName(userName))
        },

        changeCaruselWidth: (event) => {
            dispatch(changeCarouselSize({width: event.target.value}));
        },

        changeCaruselHeight: (event) => {
            dispatch(changeCarouselSize({height: event.target.value}));
        }
    }
};

class Option extends Component {
    constructor(){
        super();
        this.state = {
            collapse: true
        }
    }
    toggleClass(){
        console.log(this.state.collapse);
        this.setState({collapse: !this.state.collapse});
    }
    render() {
        return (
            <div className="settings-option">
                <h3 onClick={this.toggleClass.bind(this)}
                    className="option-header">
                    {this.state.collapse ? <span>&rarr;</span> : <span>&darr;</span>}
                    {this.props.title}</h3>
                {
                    !this.state.collapse ?
                    <div className="options-control">
                        {this.props.children}
                    </div>
                    : null
                }
            </div>
        )
    }
};

const Settings = (props) => {
    let { size, user, changeName, changeCaruselWidth, changeCaruselHeight } = props;

    return (
        <div className="settings">
            <Option title="Photo setting">
                <CarouselSettings {...props}/>
            </Option>
            <Option title="User setting">
                <UserSettings {...props} />
            </Option>
        </div>
    )
};

const SettingsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);

export default SettingsPage;
