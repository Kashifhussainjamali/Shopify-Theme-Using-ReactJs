import style from "./part2.module.css"
function Part2(){
    return<>
    <ul className={style["pics"]}>
        <li><img src="one.png" alt="" className={style["img1"]}/></li>
        <li><img src="two.png" alt="" className={style["img1"]}/></li>
    </ul>
    </>
}
export default Part2