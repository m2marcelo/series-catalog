import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as SeriesParser from '../../utils/SeriesParser'
import './style.css'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import SeriesDetails from '../SeriesDetails/seriesDetails';


class SeriesItem extends Component {
  static propTypes = {
    series: PropTypes.object,
  }

  state = {
    enterPressed: false,
  }

  navigateToDetails = () => {
    this.setState({ enterPressed: true })
  }

  

  render() {
    const { series } = this.props
    const isEnterPressed = this.state.enterPressed;

    let thumbStyle = {}

    if (series) {
        thumbStyle = {
            backgroundImage: 'url(' + SeriesParser.getCover(series) + ')',
        };
      }

    return (
      <div className="series">
        <div className="series-top">
            {<KeyboardEventHandler
                    handleKeys={['enter']}
                    onKeyEvent={(key, e) => this.navigateToDetails()}
            />}
            {isEnterPressed ? (
                <SeriesDetails seriesDetails={series} />
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

  // let history = useHistory();
    // history.push("/details");

    // this.props.history.push('/details')
