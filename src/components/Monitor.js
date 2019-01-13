import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Transition, animated } from 'react-spring';
import MacRainbow from './MacRainbow';

class Monitor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            oldMac: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = e => {
        this.setState(state => ({
            playing: !state.playing,
            oldMac: !state.oldMac,
        }));
    };
    render() {
        const { url } = this.props;
        return (
            <Wrapper>
                <Vid url={url} playing={this.state.playing} playsinline />
                <Mac
                    src="https://res.cloudinary.com/billpliske/image/upload/v1547315324/grandkids/imac.png"
                    alt="monitor"
                />
                <Transition
                    native
                    items={this.state.oldMac}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {show =>
                        show &&
                        (props => (
                            <animated.div style={props}>
                                <MacRainbow />
                            </animated.div>
                        ))
                    }
                </Transition>
                <PlayButton onClick={this.handleClick}>
                    {this.state.playing ? 'Pause' : 'Play'}
                </PlayButton>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    width: 250px;
    margin: 0 auto;
    @media (min-width: 450px) {
        width: 400px;
    }
`;

const Mac = styled.img`
    position: relative;
    width: 250px;
    z-index: 2;
    @media (min-width: 450px) {
        width: 400px;
    }
`;

const Vid = styled(ReactPlayer)`
    position: absolute;
    z-index: 3;
    width: 220px !important;
    top: -71px;
    left: 15px;
    @media (min-width: 450px) {
        width: 360px !important;
        height: 206px !important;
        top: 71px;
        left: 20px;
    }
`;

const PlayButton = styled.button`
    position: relative;
    z-index: 3;
    background-color: gold;
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;
    width: 100px;
    border: 1px solid gold;
    &:focus {
        outline: none;
        border: none;
    }
`;

export default Monitor;
