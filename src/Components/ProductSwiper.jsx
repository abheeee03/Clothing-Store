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
    src: 'https://images.bewakoof.com/uploads/grid/app/lemonade-hc-1x1-1730816104.jpg'
  },
  {
    Title: 'Cosmetic Ad',
    src: 'https://images.bewakoof.com/uploads/grid/app/Buy-3-at-999-Common-1x1-HC-Banner-1730453866.jpg'
  },{
    Title: 'Shoes Ad',
    src: 'https://images.bewakoof.com/uploads/grid/app/bsh-1x1-new-banner-001-1730706389.jpg'
  }
  ,{
    Title: 'Shoes Ad',
    src: 'https://images.bewakoof.com/uploads/grid/app/Savings-zone-Common-1x1-HC-Banner-1730453864.jpg'
  }
  ,{
    Title: 'Shoes Ad',
    src: 'https://images.bewakoof.com/uploads/grid/app/HC-1X1-dotw-comm-ezgif-com-optimize--1--1730431327.gif'
  }
  ,{
    Title: 'Shoes Ad',
    src: 'https://images.bewakoof.com/uploads/grid/app/Buy-2-at-999-Common-1x1-HC-Banner-1730453865.jpg'
  }
]

  return (
    <div className='mb-14'>

        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      className='Productswiper'
    >

    {items.map((item, id)=>{
      return <SwiperSlide key={id}><p className='swiperBanner p-2 m-2'> <img className='bannerImg' src={item.src} /> </p></SwiperSlide>
    })}
    </Swiper> 
    </div>
  )
}

export default ProductSwiper