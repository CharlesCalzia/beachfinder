import Nav from "../../components/Nav.js";
import NavVert from "../../components/Nav-vert.js";
import React, { useRef, useEffect } from 'react'
import './Visualise.scss'
import MapChart from "./MapChart";

const Visualise = ()=>{

    return <>

    <NavVert/>

   <div style={{height:"20rem", marginLeft:"5rem", marginTop:"0"}}>
   <MapChart />
   </div>
    
    </>;
}


const Canvas = props => {
  
    const canvasRef = useRef(null)
    
    const draw = ctx => {
     
      ctx.beginPath();
    // ctx.moveTo(0, 100);
   

    
ctx.lineWidth=4;
ctx.moveTo(5,31);
ctx.lineTo(5,31);
ctx.lineTo(5,31);
ctx.lineTo(5,30);
ctx.lineTo(6,29);
ctx.lineTo(11,22);
ctx.lineTo(17,14);
ctx.lineTo(23,7);
ctx.lineTo(27,2);
ctx.lineTo(57,2);
ctx.lineTo(61,9);
ctx.lineTo(65,19);
ctx.lineTo(67,26);
ctx.lineTo(67,31);
ctx.lineTo(67,36);
ctx.lineTo(67,42);
ctx.lineTo(63,48);
ctx.lineTo(59,50);
ctx.lineTo(55,53);
ctx.lineTo(50,55);
ctx.lineTo(45,56);
ctx.lineTo(42,56);
ctx.lineTo(40,56);
ctx.lineTo(38,56);
ctx.lineTo(36,56);
ctx.lineTo(36,55);
ctx.lineTo(35,54);
ctx.lineTo(35,53);
ctx.lineTo(35,52);
ctx.lineTo(35,51);
ctx.lineTo(35,50);
ctx.lineTo(36,49);
ctx.lineTo(39,48);
ctx.lineTo(45,45);
ctx.lineTo(55,42);
ctx.lineTo(71,40);
ctx.lineTo(77,40);
ctx.lineTo(81,40);
ctx.lineTo(83,40);
ctx.lineTo(84,40);
ctx.lineTo(85,41);
ctx.lineTo(86,45);
ctx.lineTo(88,57);
ctx.lineTo(88,70);
ctx.lineTo(88,83);
ctx.lineTo(84,96);
ctx.lineTo(79,106);
ctx.lineTo(74,112);
ctx.lineTo(66,118);
ctx.lineTo(62,119);
ctx.lineTo(58,120);
ctx.lineTo(56,120);
ctx.lineTo(53,119);
ctx.lineTo(51,117);
ctx.lineTo(48,105);
ctx.lineTo(47,95);
ctx.lineTo(47,86);
ctx.lineTo(48,76);
ctx.lineTo(50,70);
ctx.lineTo(52,66);
ctx.lineTo(57,63);
ctx.lineTo(63,62);
ctx.lineTo(68,62);
ctx.lineTo(75,64);
ctx.lineTo(81,69);
ctx.lineTo(86,74);
ctx.lineTo(90,81);
ctx.lineTo(94,92);
ctx.lineTo(96,99);
ctx.lineTo(96,105);
ctx.lineTo(96,110);
ctx.lineTo(93,115);
ctx.lineTo(89,119);
ctx.lineTo(82,122);
ctx.lineTo(77,123);
ctx.lineTo(75,123);
ctx.lineTo(74,121);
ctx.lineTo(73,115);
ctx.lineTo(73,105);
ctx.lineTo(76,94);
ctx.lineTo(88,79);
ctx.lineTo(98,71);
ctx.lineTo(112,66);
ctx.lineTo(123,64);
ctx.lineTo(131,64);
ctx.lineTo(140,66);
ctx.lineTo(146,71);
ctx.lineTo(152,82);
ctx.lineTo(155,95);
ctx.lineTo(156,108);
ctx.lineTo(153,121);
ctx.lineTo(147,134);
ctx.lineTo(134,148);
ctx.lineTo(125,155);
ctx.lineTo(120,157);
ctx.lineTo(116,158);
ctx.lineTo(115,158);
ctx.lineTo(115,158);
ctx.lineTo(115,157);
ctx.lineTo(116,156);
ctx.lineTo(119,154);
ctx.lineTo(124,152);
ctx.lineTo(131,150);
ctx.lineTo(139,147);
ctx.lineTo(153,144);
ctx.lineTo(161,141);
ctx.lineTo(168,139);
ctx.lineTo(175,138);
ctx.lineTo(179,138);
ctx.lineTo(183,138);
ctx.lineTo(185,139);
ctx.lineTo(188,143);
ctx.lineTo(189,147);
ctx.lineTo(189,154);
ctx.lineTo(189,160);
ctx.lineTo(187,168);
ctx.lineTo(185,172);
ctx.lineTo(180,177);
ctx.lineTo(174,179);
ctx.lineTo(170,179);
ctx.lineTo(166,179);
ctx.lineTo(162,177);
ctx.lineTo(157,173);
ctx.lineTo(154,167);
ctx.lineTo(153,164);
ctx.lineTo(152,162);
ctx.lineTo(152,160);
ctx.lineTo(152,160);
ctx.lineTo(152,159);
ctx.lineTo(152,159);
ctx.lineTo(154,159);
ctx.lineTo(157,159);
ctx.lineTo(161,159);
ctx.lineTo(167,160);
ctx.lineTo(175,165);
ctx.lineTo(182,170);
ctx.lineTo(189,176);
ctx.lineTo(195,187);
ctx.lineTo(199,195);
ctx.lineTo(200,201);
ctx.lineTo(200,206);
ctx.lineTo(200,208);
ctx.lineTo(200,210);
ctx.lineTo(200,211);
ctx.lineTo(200,208);
ctx.lineTo(200,201);
ctx.lineTo(203,188);
ctx.lineTo(216,168);
ctx.lineTo(223,159);
ctx.lineTo(231,153);
ctx.lineTo(239,150);
ctx.lineTo(247,150);
ctx.lineTo(254,152);
ctx.lineTo(265,161);
ctx.lineTo(273,172);
ctx.lineTo(279,188);
ctx.lineTo(282,205);
ctx.lineTo(283,222);
ctx.lineTo(283,236);
ctx.lineTo(279,248);
ctx.lineTo(273,260);
ctx.lineTo(269,263);
ctx.lineTo(266,265);
ctx.lineTo(265,266);
ctx.lineTo(264,266);
ctx.lineTo(263,266);
ctx.lineTo(264,265);
ctx.lineTo(267,260);
ctx.lineTo(274,254);
ctx.lineTo(286,246);
ctx.lineTo(297,242);
ctx.lineTo(312,241);
ctx.lineTo(319,242);
ctx.lineTo(324,246);
ctx.lineTo(329,252);
ctx.lineTo(333,262);
ctx.lineTo(335,272);
ctx.lineTo(335,281);
ctx.lineTo(333,290);
ctx.lineTo(326,298);
ctx.lineTo(320,300);
ctx.lineTo(309,300);
ctx.lineTo(299,299);
ctx.lineTo(290,294);
ctx.lineTo(282,289);
ctx.lineTo(274,284);
ctx.lineTo(272,281);
ctx.lineTo(270,278);
ctx.lineTo(269,275);
ctx.lineTo(269,270);
ctx.lineTo(272,266);
ctx.lineTo(282,259);
ctx.lineTo(295,256);
ctx.lineTo(307,254);
ctx.lineTo(319,254);
ctx.lineTo(331,256);
ctx.lineTo(338,260);
ctx.lineTo(348,271);
ctx.lineTo(354,283);
ctx.lineTo(357,296);
ctx.lineTo(360,311);
ctx.lineTo(360,320);
ctx.lineTo(360,326);
ctx.lineTo(360,329);
ctx.lineTo(357,332);
ctx.lineTo(353,332);
ctx.lineTo(348,332);
ctx.lineTo(342,330);
ctx.lineTo(336,326);
ctx.lineTo(331,319);
ctx.lineTo(329,305);
ctx.lineTo(329,295);
ctx.lineTo(331,284);
ctx.lineTo(339,276);
ctx.lineTo(346,271);
ctx.lineTo(355,269);
ctx.lineTo(370,272);
ctx.lineTo(381,280);
ctx.lineTo(387,286);
ctx.lineTo(391,290);
ctx.lineTo(391,291);
ctx.lineTo(393,292);
ctx.lineTo(394,295);
ctx.lineTo(405,307);
ctx.lineTo(413,321);
ctx.lineTo(424,337);
ctx.lineTo(429,351);
ctx.lineTo(433,363);
ctx.lineTo(434,372);
ctx.lineTo(434,380);
ctx.lineTo(432,383);
ctx.lineTo(427,386);
ctx.lineTo(421,391);
ctx.lineTo(416,395);
ctx.lineTo(413,399);
ctx.lineTo(411,399);
ctx.lineTo(415,394);
ctx.lineTo(425,382);
ctx.lineTo(433,373);
ctx.lineTo(443,366);
ctx.lineTo(452,361);
ctx.lineTo(458,358);
ctx.lineTo(464,357);
ctx.lineTo(468,356);
ctx.lineTo(471,356);
ctx.lineTo(473,356);
ctx.lineTo(475,358);
ctx.lineTo(476,359);
ctx.lineTo(477,361);
ctx.lineTo(477,363);
ctx.lineTo(479,364);
ctx.lineTo(479,366);
ctx.lineTo(480,367);
ctx.lineTo(480,368);
ctx.lineTo(480,368);

    
    

    ctx.strokeStyle = "#FF0000";
    // ctx.closePath();
    ctx.stroke();
   

   
    
    }
    
    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      //Our draw come here
      draw(context)
    }, [draw])
    
    return <canvas ref={canvasRef} {...props}/>
  }

export default Visualise;

