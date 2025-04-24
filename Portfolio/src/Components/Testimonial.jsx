import React, { useEffect, useState } from 'react';
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

// Import Swiper modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://67d57c67d2c7857431f08c23.mockapi.io/user/use-data")
      .then((res) => {
        console.log(res.data); // Check API response
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Invalid API", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container-fluid testimonial'>
      <div className='container'>
        <h2 className='text-uppercase fw-bold pb-2'>Real Feedback, Real Impact</h2>
        <p className='text-muted fs-5 pb-4'>"Hear what our clients say about us!"</p>

        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className='row'>
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              style={{ paddingBottom: "40px", margin: "0 auto" }}
            >
              {user.map((user) => (
                <SwiperSlide key={user.id}>
                  <div className="slide container-fluid">
                    <img src={user.avatar} alt={user.name} className='img-fluid img-top'
                      style={{ borderRadius: "50%", width: "70px", height: "70px", boxShadow: "2px 2px 7px #000000" }}
                      loading="lazy"
                    />
                    <div className='card-body'>
                      <div className='fs-5 pt-4'>{user.message} <span className='fw-bold'>~ {user.name}</span></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

export default Testimonial;
