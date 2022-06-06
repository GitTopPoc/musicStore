import React, {useState} from 'react';
import style from "./style.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faGit, faLinkedinIn, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    const [subscribe, setSubscribe] = useState(false);

    return (<div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.footer_element}>
                    <p className={style.heading}>Music <span className={style.green_text}>Store</span></p>
                    <p className={style.company_descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid cum ea ex facilis iure modi neque repellat repudiandae unde voluptates!</p>
                </div>
                <div className={style.footer_element}>
                    <p className={style.heading}>Social Links</p>
                    <div className={style.social_links}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><FontAwesomeIcon className={style.social}
                                                                                             icon={faFacebook}/></a>
                        <a target={"_blank"} rel="noopener noreferrer" href="https://www.instagram.com/"><FontAwesomeIcon className={style.social}
                                                                                                icon={faInstagram}/></a>
                        <a target={"_blank"} rel="noopener noreferrer" href="https://www.github.com/"><FontAwesomeIcon className={style.social}
                                                                                             icon={faGit}/></a>

                    </div>
                    <div className={style.social_links}>
                        <a target={"_blank"} href="https://www.linkedin.com/"><FontAwesomeIcon className={style.social}
                                                                                               icon={faLinkedinIn}/></a>
                        <a target={"_blank"} href="https://www.twitter.com/"><FontAwesomeIcon className={style.social}
                                                                                              icon={faTwitter}/></a>
                        <a target={"_blank"} href="https://www.youtube.com/"><FontAwesomeIcon className={style.social}
                                                                                              icon={faYoutube}/>
                        </a>

                    </div>
                </div>
                <div className={style.footer_element}>
                    <p className={style.heading}>Subscribe For News</p>
                    {!subscribe ? <div className={style.subscribe_wrapper}>
                        <input placeholder={"Email..."} className={style.subscribe_input} type="email"/>
                        <button onClick={() => {
                            setSubscribe(true)
                        }} className={style.subscribe_button}>Subscribe
                        </button>
                    </div> : <div className={style.subscribed_heading}>Thank You!</div>}
                </div>
            </div>
            <p className={style.copyright}>All rights reserved.</p>
        </div>
    </div>);
};

export default Footer;