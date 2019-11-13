import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as SeriesParser from '../../utils/SeriesParser'
import './style.css'
import KeyboardEventHandler from 'react-keyboard-event-handler';


class SeriesItem extends Component {
  static propTypes = {
    series: PropTypes.object,
  }

  state = {
    enterPressed: false,
    hover: false
  }

  navigateToDetails = () => {
    this.setState({ enterPressed: true })
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }


  render() {
    const { series } = this.props
    const isEnterPressed = this.state.enterPressed;
    const isHovered = this.state.hover;

    let thumbStyle = {}

    if (series) {
        if (isHovered) {
          thumbStyle = {
            backgroundImage: 'url(' + SeriesParser.getCover(series) + ')',
            transform: 'scale(1.2)',
            transition: 'all 0.15s ease-in-out',
            zIndex: '5',
          };
        } else {
          thumbStyle = {
            backgroundImage: 'url(' + SeriesParser.getCover(series) + ')',
            transition: 'all 0.15s ease-in-out',
          };
        }
      }

    return (
      <div className="series">
        <div className="series-top"
             onMouseEnter={this.toggleHover}
             onMouseLeave={this.toggleHover}
        >
            {<KeyboardEventHandler
                    handleKeys={['enter']}
                    onKeyEvent={(key, e) => this.navigateToDetails()}
            />}
            {isEnterPressed ? (
                <Redirect to={{
                    pathname: '/details',
                    seriesDetails: { series }
                }}
                className='series-cover'
                style={thumbStyle}
                ></Redirect>
            ) : (
                series &&
                    <Link 
                        to={{
                            pathname: '/details',
                            seriesDetails: { series }
                        }}
                        className='series-cover'
                        style={thumbStyle}
                    />
            )}
            
            
        </div>
      </div>
    )
  }
}

export default SeriesItem
