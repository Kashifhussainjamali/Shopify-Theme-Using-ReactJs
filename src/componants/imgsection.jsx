import style from "./imgsection.module.css"
function Pictures(){
    return<>
    <ul className={style["ul1"]}>
        <li><img src="1.avif" alt="" className={style["img1"]}/></li>
        <li><img src="3.avif" alt="" className={style["img1"]}/></li>
        <li><img src="6.avif" alt="" className={style["img1"]}/></li>
        <li><img src="2.webp" alt="" className={style["img1"]}/></li>
        <li><img src="4.webp" alt="" className={style["img1"]}/></li>
        <li><img src="5.webp" alt="" className={style["img1"]}/></li>
    </ul>
    </>
}
export default Pictures