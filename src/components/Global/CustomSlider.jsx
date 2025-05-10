import { Carousel } from '@trendyol-js/react-carousel';

const CustomSlider = ({ DataArr }) => {
    return (
        <Carousel infinite={true} show={4} slide={1} transition={0.5} swipeOn={1} swiping={true} rightArrow={true} leftArrow={true} className="city-slider">
            {
                DataArr.map(({ id, imageURL, imageAltText }) => (
                    <div key={id}>
                        <img src={imageURL} alt={imageAltText} />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default CustomSlider
