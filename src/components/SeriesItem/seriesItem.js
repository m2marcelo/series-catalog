import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as SeriesParser from '../../utils/SeriesParser'
import './style.css'


class SeriesItem extends Component {
  static propTypes = {
    series: PropTypes.array,
  }

  render() {
    const { series } = this.props

    let thumbStyle = {}

    if (series) {
        thumbStyle = {
            backgroundImage: 'url(' + SeriesParser.getCover(series[0]) + ')',
        };
      }

    return (
      <div className="series">
        <div className="series-top">
            {series && 
                <div className="series-cover" style={thumbStyle} />
            }
        </div>
      </div>
    )
  }
}

export default SeriesItem
