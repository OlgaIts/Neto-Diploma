import {memo} from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";
import {CarouselItem} from "../../../entities/ui/CarouselItem";
import {reviews} from "../../../entities/reviews/reviewsData";
import styles from "./ReviewsCarousel.module.scss";

export const ReviewsCarousel = memo(() => {
  const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 2},
  };

  return (
    <div className={styles.component}>
      <AliceCarousel
        disableButtonsControls
        infinite
        animationDuration={900}
        swipeDelta={20}
        autoPlay
        autoPlayInterval={3000}
        autoPlayStrategy='default'
        responsive={responsive}
        mouseTracking
      >
        {reviews.map((item) => (
          <CarouselItem
            image={
              new URL(
                `../../../shared/assets/img/reviews/${item.image}.jpg`,
                import.meta.url,
              ).href
            }
            name={item.name}
            text={item.text}
            key={item.id}
          />
        ))}
      </AliceCarousel>
    </div>
  );
});
ReviewsCarousel.displayName = "ReviewsCarousel";
