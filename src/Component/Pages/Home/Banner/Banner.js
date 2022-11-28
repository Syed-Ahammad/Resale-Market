import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://media.istockphoto.com/id/1194426021/vector/web-banner-or-horizontal-template-design-with-special-offer-on-mobile-phones-for-advertising.jpg?s=170667a&w=0&k=20&c=1FKOlbmVJ3NcG-SGCEkWbEIDSpig6iFjAM-1Txbko1A=" className="w-full h-96" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ytimg.com/vi/3Km78Bx_SWE/maxresdefault.jpg" className="w-full h-96" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1711/vasilyrosca171100119/90438541-super-sale-smartphone-banner-mobile-phone-clearance-sale-discount-poster-web-banner-big-promotion-.jpg" alt=""  className="w-full h-96"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
