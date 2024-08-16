import style from "./footerlast.module.css"

function Footer2(){
    return<>
        <ul className={style["last"]}>
            <li className={style["lastli"]}>© 2024 <b>The4 Studio</b> - All Right reserved!</li>
            <li className={style["lastli1"]}>Accessibility</li>
            <li className={style["lastli1"]}>About Us</li>
            <li className={style["lastli1"]}>Contact</li>
            <li className={style["lastli1"]}>Blog</li>
        </ul>
    </>
}
export default Footer2
