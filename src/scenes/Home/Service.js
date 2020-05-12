import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaGem } from "react-icons/fa";

const service = [
    {
        title: "Endurance",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        icon: <FaGem className="icon" />,
        link: "/service-details",
    },
    {
        title: "Strength",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: <FaGem className="icon" />,
    },
    {
        title: "Power Lifting",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: <FaGem className="icon" />,
    },
    {
        title: "Power Yoga",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: <FaGem className="icon" />,
    },
    {
        title: "Cardio",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: <FaGem className="icon" />,
    },
    {
        title: "Climbing",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: <FaGem className="icon" />,
    },
];

function Service() {
    let sliderSettings = {
        dots: false,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section class="section section-service section-service-1">
            <div class="display-full-screen">
                <div className="overlay-image" style={{ backgroundImage: `url(/assets/images/service/1.jpg)` }}>
                    <Slider className="el-slider" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div class="item box" key={index}>
                                <div class="inner">
                                    <div class="service-item">
                                        <div class="service-head">
                                            <span class="service-icon ti-heart"></span>
                                            <span class="count">{`0${index + 1}.`}</span>
                                            <h3>
                                                <Link to={item.link}>{item.title}</Link>
                                            </h3>
                                        </div>
                                        <div class="service-body">
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Service;
