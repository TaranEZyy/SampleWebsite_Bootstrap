import React from 'react'
import "./style.css"
import Navbar from '../Navbar/Navbar'
import plane from "../../assets/images/img_v_1.jpg"
import GirlBags from "../../assets/images/img_v_2.jpg"
import boat from "../../assets/images/svg/01.svg"
import calculator from "../../assets/images/svg/02.svg"
import TravelPlane from "../../assets/images/svg/03.svg"
import AirportLounge from "../../assets/images/svg/04.svg"
import Cards from "../../assets/images/img-1.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "./afroStyles";
import Slider2 from "./Slider2";



function Home() {

  
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  // Disable arrows
    responsive: [
      {
        breakpoint: 1200, // Adjusted for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992, // For tablets and smaller
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576, // For very small mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  

  return (
    <main >
        <section>
          <div className='hero_1 text-white'>
                    <Navbar/>

            <div className="container mt-5">
                <div className="row ">
                      <div className="col-md-5 mt-5 fs-5 ">
                        <h1 class="hero-heading"> <b>It's a Big World Out There, Go Explore</b></h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      </div>
                </div>
            </div>
          </div>
      </section>

      <section style={{marginTop:"5vh"}}>
          <div className="container ">
            <div className="row">
              <div className="col-md-5 col-sm-12 mt-5 p-5 ">
             <h1 style={{color:"#353662"}} className='ExploreAll'> <b>Explore All Corners of The World With Us</b></h1>
              <p className='ExploreAllP1'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className='ExploreAllP2'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <a href="#" className=" BtnContact ">Read More </a>
              </div>
             
              <div className="col-md-2  GirlBags">
                <img src={GirlBags} alt="" />
              </div>

              <div className="col-md-5  planeImage">
                <img src={plane} alt="" />
              </div>

            </div>
          </div>
      </section>




      <section className="Services">
  <div className="container-fluid" >
    <div className="row" style={{paddingTop:"15vh"}}>
      <div className="col-lg-3 col-md-12 col-sm-6 col-12" >
        <div style={{ color: "#353662" }} className="fs-4">
            <h2>   <b> Our <br /> Services</b></h2>
        </div>
        <p style={{fontSize:"13px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <a href="#" className=" BtnContact  ">View All </a>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6" >
          <img className='svgIcon' src={boat} alt="" />
        <div style={{ color: "#353662" }} className="fs-4">
          <b>Tourism</b>
        </div>
        <p style={{fontSize:"13px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6" >
          <img className='svgIcon' src={calculator} alt="" />
        <div style={{ color: "#353662" }} className="fs-4">
          <b>Package Tours</b>
        </div>
        <p style={{fontSize:"13px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6" >
          <img className='svgIcon' src={TravelPlane} alt="" />
        <div style={{ color: "#353662" }} className="fs-4">
          <b>Travel Insurance</b>
        </div>
        <p style={{fontSize:"13px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6" >
          <img className='svgIcon' src={AirportLounge} alt="" />
        <div style={{ color: "#353662" }} className="fs-4">
          <b>Airport Lounge Access</b>
        </div>
        <p style={{fontSize:"13px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
</section>


    <section>
      <div className="container">
        <div className="row ">
          <div className="col-md-7  pt-5">
          <div>
              <h1 className='ExploreAll' style={{ color: "#353662" }}><b>Discover Hundred of <br /> Travel Destinations</b></h1>
              <p className="col-md-9 " style={{fontSize:"13px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
      <br /><br />

  <section>
      <div className="SliderContainer ">
        <div className="row">
          <div className="col-md-12">
            <div className="content ">
              <div className="SliderContainer">
                <Slider {...settings}>
                  {AfroStyles.map((item) => (
                    <div key={item.id}>
                      <div className="img-body">
                        <img src={item.src} alt={item.alt} />
                      </div>
                      <div>
                        <h2 style={{ color: "#353662", fontSize:"27px" }}> <b>{item.title}</b> </h2>
                        <p style={{fontWeight:"lighter" , fontSize:"13.5px"}}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>






<section>
  <div className="container cardSection">
    <div className="row ">
      <div className="col-lg-5" style={{marginTop:"150px"}}>
        <h1 className='ExploreAll' style={{ color: "#353662" }}> <b>Sweet Memories Come To Life Again</b> </h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <a href="#" className=" BtnContact ">View All </a>
      </div>

      <div className="col-lg-2 col-md-1"></div>

      <div className="col-lg-5">
       <img class=" Cards" src={Cards} alt="" />
      </div>
    </div>
  </div>
</section>


<section>
  <div className='container-fluid' style={{backgroundColor:"rgb(248 249 250)"}}>
              <div className='row'>
                <div className="col-lg-5 display-3 ExploreAll p-5" style={{ color: "#353662",fontWeight:"bold",marginTop:"10vh" }}>
                <span>Testimonials</span>
                </div>

                <div className="SliderContainer2" >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="content" style={{backgroundColor:"white"}}>
                            <div className="SliderContainer2 p-5" >
                              <Slider {...settings}>
                                {Slider2.map((item) => (
                                  <div  key={item.id} >
                                    <div className="img-body2">
                                      <img src={item.src} alt={item.alt} />
                                    </div>
                                    <div>
                                      <h2 style={{fontSize:"20px" }}> <b><span style={{color:"rgb(242, 121, 69)"}}>{item.name}</span></b> </h2>
                                      <h2 style={{fontSize:"20px" }}> <b>{item.title}</b> </h2>
                                      <p style={{fontWeight:"lighter" , fontSize:"20px",lineHeight:"4vh"}}>{item.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>


<br /><br /> 
<br /><br /> 
  </div>
</section>










    </main>
  )
}

export default Home