import { Component } from "react";
import styles from "../styles/meet.module.scss";
import { CheckCircleOutlined,ArrowRightOutlined  } from "@ant-design/icons"
import chef1 from "../media/chef-1.jpg";
import chef2 from "../media/chef-2.jpg";
import chef3 from "../media/chef-3.jpg";
import chef4 from "../media/chef-4.jpg";
import chef5 from "../media/chef-5.jpg";
import chef6 from "../media/chef-6.jpg";

export default class Meet extends Component{
    render(){
        return(
            <div style={{backgroundColor:"rgb(250,230,231)",height:"800px"}}>
            <div className={styles.main} >
                <div className={styles.meet}>
                <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />

                    <p className={styles.one}>BEST FOOD MENU</p>
                    <p className={styles.two}>Meet Our Exclusive</p>
                    <p className={styles.two}>& Master Chefs</p>
                    <div style={{marginTop:"3rem"}}><p className={styles.three}><CheckCircleOutlined style={{color:"red",fontSize:"25px"}}/>25 Years of Experience in Restaurant Services</p>
                    <p className={styles.three}>in USA</p>
                    <p className={styles.three}><CheckCircleOutlined  style={{color:"red",fontSize:"25px"}}/>Any Kind Of Food Made For Customer and So </p>
                    <p className={styles.three}>Much Yamee $ Testy</p>
                    </div>
                    <div style={{marginTop:"2rem"}}><p className={styles.four}>Sit amet consectetur adipiscing elitsue risus</p>
                    <p className={styles.four}>mauris quam adipiscing phasellus aene ante</p>
                    <p className={styles.four}>orcirat scelerisque enim ut nulla</p></div>
                    <button className={styles.btn}>BECOME A CHEFF<ArrowRightOutlined style={{fontSize:"20px",color:"white",marginLeft:"0.2rem"}}/></button>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",marginRight:"5rem",gap:"1rem",marginTop:"4rem"}}>
                        <img className={styles.chefs} src={chef1}/>
                        <img className={styles.chefs} src={chef2}/>
                        <img className={styles.chefs} src={chef3}/>
                        <img className={styles.chefs} src={chef4}/>
                        <img className={styles.chefs} src={chef5}/>
                        <img className={styles.chefs} src={chef6}/>
                    </div>
                    </div>
            </div>

        )
    }
}