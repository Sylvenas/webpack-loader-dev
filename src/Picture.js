import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './picture.css'

class Picture extends PureComponent {
    constructor() {
        super();
        this.svg = React.createRef();
    }
    handleImgLoad = (event) => {
        this.svg.current.style.opacity = 0;
        event.target.style.opacity = 1;
    }
    render() {
        const { img, alt, className } = this.props;
        return (
            <div className='picture'>
                <img src={img.preview}
                    alt={alt}
                    className={'svg ' + className}
                    ref={this.svg} />
                <picture>
                    <source srcSet={img.webpSrc}
                        type="image/webp"/>
                    <img onLoad={this.handleImgLoad}
                        src={img.originSrc}
                        alt={alt}
                        className={'img ' + className}
                    />
                </picture>
            </div>
        )
    }
}

Picture.propTypes = {
    img: PropTypes.shape({
        preview: PropTypes.string.isRequired,
        originSrc: PropTypes.string.isRequired,
        webpSrc: PropTypes.string.isRequired,
    }),
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default Picture;