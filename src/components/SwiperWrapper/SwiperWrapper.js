
// import required modules
import PropTypes from 'prop-types';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

// That's will Render The Container Of The Swiper Slide Elements
export default function SwiperWrapper(props) {

    const { items, slidesPerViewCount, setActiveIndex, smCustomView, classNames, autoplayDelay, isLooped, includePagination, includeNavigation } = props;

    // ### slidesPerViewCount Will be an array of numbers that's display the count of cards in screen
    const handleSlideChange = (swiper) => {
        return setActiveIndex && setActiveIndex(swiper.activeIndex);
    };

    return (
        <Swiper
            spaceBetween={10}

            autoplay={{

                delay: autoplayDelay,

                disableOnInteraction: false,

            }}

            loop={isLooped == false ? false : true}

            navigation={includeNavigation ? true : false}

            pagination={(includePagination ? true : false, (includePagination ? { clickable: true } : false))}

            modules={[Autoplay, Pagination, Navigation]}

            breakpoints={{

                // when window width is >= 640px
                350: {
                    slidesPerView: smCustomView || 1.1,
                },

                // when window width is >= 640px
                550: {
                    slidesPerView: slidesPerViewCount[0],
                    spaceBetween: 20
                },

                // when window width is >= 768px
                768: {
                    slidesPerView: slidesPerViewCount[1],
                    spaceBetween: 30
                },

                // when window width is >= 1024px
                1024: {
                    slidesPerView: slidesPerViewCount[2],
                    spaceBetween: 40
                },

                // when window width is >= 1024px
                1366: {
                    slidesPerView: slidesPerViewCount[3],
                    spaceBetween: 40
                }

            }}
            speed={3000}
            onSlideChange={handleSlideChange}
            className={`mySwiper ${classNames}`} >

            {/* That's Will Render Items To UI */}
            {items}

        </Swiper >
    )
}

SwiperWrapper.propTypes = {
    items: PropTypes.array,
    slidesPerViewCount: PropTypes.array,
    autoplayDelay: PropTypes.number,
    isLooped: PropTypes.bool,
    includePagination: PropTypes.bool,
    includeNavigation: PropTypes.bool,
}
