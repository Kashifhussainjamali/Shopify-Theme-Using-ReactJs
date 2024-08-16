import style from "./footer.module.css"

function Footer(){
    return<>
    <div className={style["footere"]}>
    <ul className={style["ul1"]}>
        <li className={style["li1img"]}><img src="logo2.png" alt="" /></li>
        <li className={style["li1"]}>Calista Wise 7292 Dictum Av. Antonio, Italy.</li>
        <li className={style["li1"]}>(+01)-800-3456-88</li>
        <li className={style["li1"]}>contact@company.com</li>
        <li ><img src="icons.png" alt="" /></li>
    </ul>

    <ul className={style["ul1"]}>
        <li className={style["li1head"]}>Useful links</li>
        <li className={style["li2"]}>Delivery Information</li>
        <li className={style["li2"]}>Terms & Condition</li>
        <li className={style["li2"]}>Customer Service</li>
        <li className={style["li2"]}>Privacy Policy</li>
        <li className={style["li2"]}>Search Terms</li>
    </ul>
    <ul className={style["ul1"]}>
    <li className={style["li1head"]}>Get in Touch</li>
        <li className={style["li3"]}><span className={style["span"]}>Whatsapp</span><span>+001 2233 456 291</span>
        <hr className={style["hr"]}/></li>
        <li className={style["li3"]}><span className={style["span1"]}>Real Live Support</span><span>Calista Antonio, Italy</span>
        <hr className={style["hr"]}/></li>
        <li className={style["li3"]}><span className={style["span2"]}>Monday - Friday</span><span>08:00 - 20:00</span>
        <hr className={style["hr"]}/></li>
        <li className={style["li3"]}><span className={style["span3"]}>Saturday</span><span>09:00 - 21:00</span>
        <hr className={style["hr"]}/></li>
        <li className={style["li3"]}><span className={style["span4"]}>Sunday</span><span>13:00 - 22:00</span>
        <hr className={style["hr"]}/></li>
    </ul>
    <ul className={style["ul1"]}>
        <li className={style["li1head"]}>Newsletter signup</li>
        <li className={style["li4"]}>Subscribe to our newsletters now and stay up-to-date with new collections.</li>
        <li className={style["li4"]}>
            <div className={style["dive"]}>
                <input type="text" placeholder="Your Email Addrress" className={style["imput"]}/><button className={style["btn"]}>Subscribe</button>
            </div>
        </li>
        <li className={style["li4"]}> <img src="payment1.avif" alt="" /> </li>
    </ul>
    </div>
    
    </>
}
export default Footer