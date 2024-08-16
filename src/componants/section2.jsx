import style from "./sec2.module.css"
const Section2=({cart,cart_1,bill,bill_1})=>{
    return<>
    <ul className={style["sc2ain"]}>
        <li><img src="pic2.jpeg" alt="" /></li>
        <li className={style["li2"]}>

            <h2 >For Her</h2>
            <hr style={{marginBottom:"20px"}}/>

            <ul className={style["ull"]}>
                <li><img src="shirt1.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Puff Sleeve Shirt <br />Rs:3200</p>
                <button className={style["buy"]}
                onClick={()=> (bill_1(bill+3200)) (alert(`Added In your Bill`))}
                >Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt2.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Short Sleeve Dress <br />Rs:3600</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+3600) (alert(`Added In your Bill`))}>Buy Now</button>
                 <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt3.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Elessi Young T-shirt <br />Rs:2200</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+2200) (alert(`Added In your Bill`))}>Buy Now</button>
                 <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
            </ul>

            <ul className={style["ull"]}>
                <li><img src="shirt4.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Chenille Sweater <br />Rs:4500</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+4500) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt5.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Elessi Knit <br />Rs:4100</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+4100) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
                
                <li><img src="shirt6.png" alt="" className={style["img"]}/>
                <p className={style["price"]}>Floral Embroidery Jacket <br />Rs:2900</p>
                <button className={style["buy"]}
                 onClick={()=>bill_1(bill+2900) (alert(`Added In your Bill`))}>Buy Now</button>
                <button className={style["buy"]}
                onClick={()=>cart_1(cart+1)(alert("Added to cart"))}>Add to Cart</button></li>
            </ul>

        </li>
    </ul>
    </>
}
export default Section2