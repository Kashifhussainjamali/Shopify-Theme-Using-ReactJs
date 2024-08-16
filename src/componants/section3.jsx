import style from "./section3.module.css"
const Section3=({cart,cart_1,bill,bill_1})=>{
    return<>
    <ul className={style["sc2ain"]}>
        <li className={style["li2"]}>

            <h2 >For Her</h2>
            <hr style={{marginBottom:"20px"}}/>

            <ul className={style["ull"]}>
                <li><img src="shirt7.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Simple T-Shirt <br />Rs:2300</p>
                <button className={style["buy"]}
                onClick={()=>bill_1(bill+2300) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt8.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Hooded Anorak <br />Rs:2600</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+2600) (alert(`Added In your Bill`))}>Buy Now</button>
                 <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt9.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Mint Long Sleeve <br />Rs:4200</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+4200) (alert(`Added In your Bill`))}>Buy Now</button>
                 <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
            </ul>

            <ul className={style["ull"]}>
                <li><img src="shirt10.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Colorful Jacket <br />Rs:6700</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+6700) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt11.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Gray T-shirt <br />Rs:4100</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+4100) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt12.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Pull Classic <br />Rs:2900</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+2900) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
            </ul>

        </li>
        <li><img src="pic3.jpeg" alt="" className={style["img22"]}/></li>
    </ul>
    </>
}
export default Section3