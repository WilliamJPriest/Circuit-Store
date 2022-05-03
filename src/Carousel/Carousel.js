// import React from "react";
// import Slider from "react-slick";

// export default function Carousel({closeModal}) {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings} className="Carousel__Container">
//       <div className="Carousel">
//         <div className="Slider">
//           <h3>hello</h3>
//           <img src="img/starterkit.png" alt="slider"></img>
//         </div>
//         <div className="Slider">
//           <h3>hello 2</h3>
//           <img src="img/starterkit.png" alt="slider"></img>
//         </div>
//         <div className="Slider">
//           <h3>hello 3</h3>
//           <img src="img/starterkit.png" alt="slider"></img>
//         </div>
//       </div>
//     </Slider>
//   );
// }
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "Slides",
    autoplay: true,
    autoplaySpeed: 9000
  };
  return (
    <Slider {...settings} >
        <div>
          <div className="Slide">
            <h3> Eletronic Starter Kit w/ Guide</h3>
            <img className="No__Shadow" src="img/starterkit.png" alt="slider"></img>
          </div>
        </div>
        <div>
          <div className="Slide">
            <h3> Get Started Today</h3>
            <img src="img/electricengineer.webp" alt="slider"></img>
          </div>
        </div>
        <div>
          <div className="Slide">
            <h3> The Future Awaits</h3>
            <img src="img/electricengineer2.jpg" alt="slider"></img>
          </div>
        </div>
    </Slider>
  );
}