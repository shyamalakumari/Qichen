import { Component } from "react";
import vedio from "../media/vedio.jpg";
import styles from "../styles/vedio.module.scss";
import { CheckCircleOutlined,ArrowRightOutlined,CaretRightOutlined   } from "@ant-design/icons"

export default class Vedio extends Component{
    render(){
        return(
            <div className={styles.Vedio}>
                <img src={vedio} className={styles.img}/>
                <CaretRightOutlined  className={styles.playicon} />
                <div>
                <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                <p className={styles.watch}>WATCH VEDIOS</p>
                <p className={styles.watch1}>How Can We Made</p>
                <p className={styles.watch1}>Foods For Customers</p>
                <p className={styles.lorem}>Sit amet consectetur adipiscing elitsue risus mauris quam</p>
                <p className={styles.lorem}>adipiscing phasellus aene ante orcirat scelerisque enim ut</p>
                <p className={styles.lorem}>nulla</p>
                <p className={styles.best}><CheckCircleOutlined style={{fontSize:"20px",color:"red"}}/>Best Way to Serve Our Foods</p>
                <p className={styles.lowcost}><CheckCircleOutlined style={{fontSize:"20px",color:"red"}}/> Low Cost & Onlie Orders</p>
                <button className={styles.button}>WATCH MORE<ArrowRightOutlined style={{fontSize:"20px",marginLeft:"0.6rem"}}/></button>
                </div>
            </div>
        )
    }
}