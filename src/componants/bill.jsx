import style from "./bill.module.css"
const Bill=({bill})=>{
    return<>
    <p className={style["billing"]}>Your Bill is <br /> Rs:{bill}</p>
    </>
}
export default Bill