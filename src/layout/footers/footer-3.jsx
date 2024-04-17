import { CopyRight } from '@/src/common/social-links';
import EmailIcon from '@/src/svg/email';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import RightArrow from '@/src/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import footer_logo from  "../../../public/assets/img/logo/logo-black.png";

const footer_content = {
    bg_img: "/assets/img/footer/overly.png",
    phone: "+6282160436752",
    email: "smabintangtimurb@gmail.com",
    description: <>Yayasan DON BOSCO Manado Unit Kantor Perwakilan Balige</>,

    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Navigation",
            delay: ".7s",
            links: [
                {name: "Profil Sekolah", link: "#"},
                {name: "Berita", link: "/about"},
                {name: "PPDB", link: "/price"},
                {name: "E-learning", link: "/integrations"},
                {name: "Kontak Kami", link: "/blog"},
            ]
        },

    ],

    social_links : [
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fab fa-facebook-f", 
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fab fa-twitter", 
        },
        {
          link: "http://www.vimeo.com",
          target: "_blank",
          icon: "fab fa-vimeo-v", 
        }, 
        {
          link: "http://www.instagram.com",
          target: "_blank",
          icon: "fab fa-instagram", 
        },
      ], 
}
const {bg_img, title, btn_text, footer_lisks, social_links, phone , email, description}  = footer_content


// footer slider data 
const footer_slider_data = [
    "Salah Satu Sekolah Swasta Terbaik",
    "Fasilitas Belajar Yang Memadai",
    "Tenaga Pendidik Yang Profesional",
    "Biaya Pendidikan Yang Terjangkau",
    "Lingkungan Suasana Belajar Yang Mendukung",
    "Kurikulum Pendidikan Terpadu", 
]
// slider setting
const setting = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}


const FooterThree = () => {
    return (
        <>
        <div className="footer-bottom-content tp-browser-bg-shape"
             style={{backgroundImage: `url(${bg_img})`}}>
        </div>

            <footer> 

            <div className="tp-footer-slide pb-80">
                <div className="container-fluid g-0">
                    <div className="row g-0 justify-content-center">
                        <Slider {...setting} className="footer-slide-active">
                        {footer_slider_data.map((item, i)  => 
                            <div key={i} className="footer-slide-wrapper">
                            <div className="footer-slide-item">
                                <i className="fal fa-check"></i>
                                <span>{item}</span>
                            </div>
                        </div>
                        )}
                        
                        </Slider> 
                    </div>
                </div>
            </div> 


            <div className="tp-footer__pl-pr">
                <div className="tp-footer__area tp-footer__tp-border-bottom">
                    <div className="container">
                        <div className="row">

                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                                <div className="tp-footer__logo mb-25">
                                    <Link href="/">
                                    <Image src={footer_logo} alt="" /> 
                                    </Link>
                                </div>
                                <div className="tp-footer__contact-info">
                                    <p>{description}</p>
                                    <ul>
                                    <li>
                                        <span>
                                            <PhoneTwo /> 
                                        </span>
                                        <Link className="first-child" href={`tel:${phone}`}>{phone}</Link>
                                    </li>
                                    <li>
                                        <span> 
                                            <EmailTwo /> 
                                        </span>
                                        <Link href={`mailto:${email}`}>{email}</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {footer_lisks.map((item, i)  => 
                            <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay=".7s">
                            <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                <h4 className="tp-footer__widget-title">{item.title}</h4>
                                <div className="tp-footer__content">
                                    <ul>
                                        {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li>)} 
                                    </ul>
                                </div>
                            </div>
                        </div>
                            )
                        } 

                        <div className="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                            <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                                <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                                <div className="tp-footer__input mb-35 p-relative">
                                    <form  onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="School email adress" />
                                    <span>
                                        <EmailIcon /> 
                                    </span>
                                    <button>
                                        <RightArrow />  
                                    </button>
                                    </form>
                                </div>
                                <div className="tp-footer__social-3">
                                    <h4>Social media</h4>
                                    {social_links.map((l, i) => (
                                        <Link
                                        key={i}
                                        href={l.link} 
                                        target={l.target ? l.target : ""}
                                        >
                                        <i className={l.icon}></i>
                                        </Link>
                                    ))} 
                                     
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>


                <div className="tp-copyright__area pt-25 pb-40">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="tp-copyright__text tp-copyright__text-3 text-center">
                               <span> <CopyRight /></span> 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </>
    );
};

export default FooterThree;