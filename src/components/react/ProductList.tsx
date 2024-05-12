import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shunda from "@images/product/shunda.png";
import ecofon from "@images/product/ecofon.png";
import duma from "@images/product/duma.png";
import alfafon from "@images/product/alfafon.png";
import batikplafon from "@images/product/batikplafon.png";
import envara from "@images/product/envara.png";
import janur from "@images/product/janur.png";
import pvcplank from "@images/product/pvcplank.png";
import petrafone from "@images/product/petrafone.png";

export default function ProductList() {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
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

  const logos = [
    { src: shunda.src, alt: "shunda" },
    { src: ecofon.src, alt: "ecofon" },
    { src: duma.src, alt: "duma" },
    { src: alfafon.src, alt: "alfafon" },
    { src: batikplafon.src, alt: "batik plafon" },
    { src: envara.src, alt: "envara" },
    { src: janur.src, alt: "janur" },
    { src: pvcplank.src, alt: "pvcplank" },
    { src: petrafone.src, alt: "petrafone" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo) => (
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
