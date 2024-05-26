import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductListProps {
  products: ProductImage[];
  slideToShow: number;
}

export default function ProductList({
  products,
  slideToShow,
}: ProductListProps) {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "h-64",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((logo) => (
          <div className="h-64 w-64 items-center p-4">
            <div className="flex h-full w-full items-center justify-center">
              <img src={logo.src} alt={logo.alt} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
