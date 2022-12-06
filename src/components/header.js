import { Component } from "react";
import style from "../styles/header.module.scss"
import logo from "../media/logo-white.png";
import {SearchOutlined,MobileOutlined,DownOutlined,ArrowRightOutlined  } from "@ant-design/icons"
class Header extends Component {

render(){

 return(
<div className={style.container}>
<img className={style.logo} src={logo}/>

<ul className={style.list}>

<li>Home<DownOutlined style={{fontSize:"14px",marginLeft:"0.5rem"}}/></li>
<li>Menu<DownOutlined style={{fontSize:"14px"}}/></li>
<li>About<DownOutlined style={{fontSize:"14px"}}/></li>
<li>Shop<DownOutlined style={{fontSize:"14px"}}/></li>
<li>Blog<DownOutlined style={{fontSize:"14px"}}/></li>
<li>Pages<DownOutlined style={{fontSize:"14px"}}/></li>
<li><SearchOutlined style={{fontSize:"28px",marginLeft:"0.6rem"}}/></li>

</ul>

<p className={style.num}><MobileOutlined />000 (123) 456 89</p>
<p className={style.book}>BOOK A TABLE<ArrowRightOutlined style={{fontSize:"18px",marginLeft:"0.2rem"}}/></p>

</div>

 )

}



}

export default Header