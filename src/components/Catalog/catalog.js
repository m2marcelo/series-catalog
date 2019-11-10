import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types'
import SeriesItem from '../SeriesItem/seriesItem'

import * as SeriesParser from '../../utils/SeriesParser'

import 'react-multi-carousel/lib/styles.css';
import './style.css'


class Catalog extends Component {
  static propTypes = {
    series: PropTypes.array,
  }

  render() {
    const { series } = this.props

    return (
        <div className="area">
            <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
            desktop: {
                breakpoint: {
                max: 3000,
                min: 1024
                },
                items: 5,
                partialVisibilityGutter: 40
            },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
                {series.length !== 0 && series.map((serie) => (
                    <div  key={SeriesParser.getPublicPath(serie)} >
                        <SeriesItem series={serie} />
                    </div>
                ))}
        </Carousel>
      </div>
    )
  }
}

export default Catalog
