import { Component } from "react";
import styles from "../styles/banner.module.scss";
import banner from "../media/banner.png";
import burger from "../media/burger.jpg";
import arrow from "../media/down-arrow.png"

export default class Banner extends Component {
    render() {
        return(
            <div style={{backgroundColor:"rgb(250,230,231)" ,paddingTop:"5rem",paddingBottom:"4rem",height:"500px"}}>
                <img style={{opacity:"0.05"}} src={banner} />
                <img style={{ width:"33rem",marginLeft:"28rem"}} src={burger} />
                <div className={styles.main}>
                <p className={styles.para}>Crispy</p>
                <p className={styles.para}>Chicken</p>
                <p className={styles.para}>Burgers</p>

                <p className={styles.para1} style={{marginTop:"2rem"}}>Sit amet consectetur adipiscing Malesuada morbigrave</p>
                <p className={styles.para1}>ullamore alesuada nec pulvinar nisle</p>
                </div>

                <div className={styles.arrow}>
                    <img src={arrow} />
                    <div style={{backgroundColor:"rgb(203, 79, 2)",height:"55px", width:"180px",color:"white",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"2rem"}}>Order Now</div>
                </div>
            </div>
        )
    }
}