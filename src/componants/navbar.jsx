import style from "./navbar.module.css"
const Navbar=({cart,cart_1})=>{
    return<>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="logo.png" alt=""  className={style["logo"]}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={style["dw"]}>
            DEMO
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Fation</a></li>
            <li><a class="dropdown-item" href="#">Bags</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">T-Shirts</a></li>
            <li><a class="dropdown-item" href="#">Pents</a></li>
            <li><a class="dropdown-item" href="#">Soaks</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={style["dw"]}>
            SHOP
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Shoes</a></li>
            <li><a class="dropdown-item" href="#">Jackets</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Belts</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={style["dw"]}>
            PRODUCT
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Fair & Handsome</a></li>
            <li><a class="dropdown-item" href="#">Jonsoi</a></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><a class="dropdown-item" href="#">Lavela</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={style["dw"]}>
            ELEMENTS
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Bed Sheats</a></li>
            <li><a class="dropdown-item" href="#">Blankets</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Others</a></li>
          </ul>
        </li>
        <li><img src="buy.png" alt=""  className={style["buy"]}/></li>
      </ul>
      <ul className={style["bits"]}>
      <li><img src="search.png" alt="" className={style["icons"]}/></li>
      <li><img src="profile.png" alt="" className={style["icons"]}/></li>
      <li><img src="heart.png" alt="" className={style["icons"]}/></li>
      <li> <sup className={style["cart"]}>{cart}</sup> <img src="shopping.png" alt="" className={style["icons"]} /></li>
      </ul>
    </div>
  </div>
</nav>
    </>
}
export default Navbar;