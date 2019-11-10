import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as SeriesParser from '../../utils/SeriesParser'
import './style.css'


class SeriesItem extends Component {
  static propTypes = {
    series: PropTypes.object,
  }

  render() {
    const { series } = this.props

    let thumbStyle = {}

    if (series) {
        thumbStyle = {
            backgroundImage: 'url(' + SeriesParser.getCover(series) + ')',
        };
      }

    return (
      <div className="series">
        <div className="series-top">
            {series &&
                <Link 
                    to={{
                        pathname: '/details',
                        seriesDetails: { series }
                    }}
                    className='series-cover'
                    style={thumbStyle}
                /> 
            }
        </div>
      </div>
    )
  }
}

export default SeriesItem
