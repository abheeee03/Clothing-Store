import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';


const ProductSwiper = () => {
  const items = [{
    Title: 'Headphones Ad',
    src: 'Headphones'
  },
  {
    Title: 'Cosmetic Ad',
    src: 'Cosmetics'
  },{
    Title: 'Shoes Ad',
    src: 'Shoes'
  }]

  return (
    <div className='mb-14'>

        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='Productswiper'
    >

    {items.map((item)=>{
      return <SwiperSlide><p className='swiperBanner'>{item.src}</p></SwiperSlide>
    })}
    </Swiper> 
    </div>
  )
}

export default ProductSwiper