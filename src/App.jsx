import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './componants/navbar'
import Section1 from './componants/section1'
import Section2 from './componants/section2'
import Bill from './componants/bill'
import Part2 from './componants/part2'
import Section3 from './componants/section3'
import Off from './componants/offline'
import Section4 from './componants/section4'
import Pictures from './componants/imgsection'
import Footer from './componants/footer'
import Footer2 from './componants/footerlast'

function App() {
  let [cart1,cart2]=useState(0)
  let [bill1,bill2]=useState(0)
  

  return (
    <>
    <Navbar cart={cart1} cart_1={cart2}></Navbar>
    <Section1></Section1>
    <Section2 cart={cart1} cart_1={cart2} bill={bill1} bill_1={bill2}></Section2>
    <Bill bill={bill1}></Bill>
    <Part2></Part2>
    <Section3 cart={cart1} cart_1={cart2} bill={bill1} bill_1={bill2}></Section3>
    <Off></Off>
    <Section4></Section4>
    <Pictures></Pictures>
    <Footer></Footer>
    <Footer2></Footer2>
    
    </>
  )
}

export default App
