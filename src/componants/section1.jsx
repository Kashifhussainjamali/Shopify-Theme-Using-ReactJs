import style from "./section1.module.css"

function Section1(){
    return<>
    <ul className={style["ul1"]}>
        <li className={style["li1"]}>
            <img src="basic.png" alt="" /><br />
            <button className={style["btn"]}>Shop now</button>
        </li>
        <li className={style["li2"]}><img src="bigpic.png" alt="" /></li>
    </ul>
    </>
}
export default Section1