import style from "./section4.module.css"

function Section4(){
    return<>
    <div className={style["maindiv"]}>
    <ul className={style["mainul"]}>
        <li><h4>Top Rated</h4></li>

        <li className={style["items"]}><img src="shirt11.png" alt="" className={style["img"]}/>
        <p>Gray T-shirt <br /><s>$16.00</s> $14.00</p></li>

        <li className={style["items"]}><img src="shirt2.png" alt="" className={style["img"]}/>
        <p>Short Sleeve Dress <br />$24.00</p></li>

        <li className={style["items"]}><img src="shirt3.png" alt="" className={style["img"]}/>
        <p>T-Shirt Pink Shirt <br />$22.00</p></li>
    </ul>
    <ul className={style["mainul"]}>
        <li><h3>Best Selling</h3></li>

        <li className={style["items"]}><img src="shirt4.png" alt="" className={style["img"]}/>
        <p> Shirt Knit Elessi <br /><s>$30.00</s> $25.00</p></li>

        <li className={style["items"]}><img src="shirt5.png" alt="" className={style["img"]}/>
        <p>Elessi Knit <br />$96.00</p></li>

        <li  className={style["items"]}><img src="shirt10.png" alt="" className={style["img"]}/>
        <p>Hoodie For Men <br />$88.00</p></li>
    </ul>
    <ul className={style["mainul"]}>
        <li><h3>On Sale</h3></li>

        <li  className={style["items"]}><img src="shirt7.png" alt="" className={style["img"]}/>
        <p>Pink Shirt <br /><s>$22.00</s> $19.00</p></li>

        <li  className={style["items"]}><img src="shirt8.png" alt="" className={style["img"]}/>
        <p>Mint Long Sleeve <br /><s>$60.00</s> $45.00</p></li>

        <li  className={style["items"]}><img src="shirt12.png" alt="" className={style["img"]}/>
        <p>Classic Wool Sweater <br />$65.00</p></li>
    </ul>
    </div>

    </>
}
export default Section4