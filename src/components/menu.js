import { Component } from "react";
import menu from "../media/menu-single.jpg";
import burger from "../media/hamburger.png";
import pizza from "../media/pizza.png";
import baked from "../media/baked chicken.png";
import seafood from "../media/seafood pizza.png";
import { StarFilled } from '@ant-design/icons'
import styles from "../styles/menu.module.scss";

export default class Menu extends Component {
    render() {
        return (
















            <div className={styles.menu}>
                <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                <img className={styles.img2} src="https://demo.webtend.net/html/qichen/assets/images/next-arrow.png"/>

                <div className={styles.food}><p >BEST FOOD MENU</p>
                </div>
                <div className={styles.choose}><p>Choose Your Best Menus</p></div>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "5rem" }}>
                    <img className={styles.menuimg} src={menu} />
                    <div className={styles.page} style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}><img src={burger} style={{ marginLeft: "2.3--rem" }} />
                            <div style={{ marginLeft: "3rem" }}>
                                <p style={{ fontSize: "25px", marginTop: "1rem" }}>Hamburger.............................................................$25</p>
                                <p style={{ fontSize: "18px", marginTop: "0.8rem" }}>Roasted langoustine, consommé</p>
                                <p style={{ fontSize: "px", color: "#DF3F00", marginTop: "0.6rem" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5K REVIEWS)</p>
                            </div>
                        </div>



                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src={pizza} style={{ marginLeft: "1.5rem" }} />
                            <div style={{ marginLeft: "2rem" }}>
                                <p style={{ fontSize: "25px", marginTop: "1rem", marginTop: "1rem" }}>Pizza.........................................................................$63</p>
                                <p style={{ fontSize: "18px", marginTop: "0.8rem" }}>Roasted langoustine, consommé</p>
                                <p style={{ fontSize: "18px", color: "#DF3F00", marginTop: "0.6rem" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5K REVIEWS)</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src={baked} style={{ marginLeft: "3.4rem" }} />
                            <div style={{ marginLeft: "2rem" }}>
                                <p style={{ fontSize: "25px", marginLeft: "2.6rem", marginTop: "1rem" }}>Baked Chicken Wings..........................................$199</p>
                                <p style={{ marginLeft: "2.8rem", fontSize: "18px", marginTop: "0.6rem" }}>Roasted langoustine, consommé</p>
                                <p style={{ marginLeft: "2.6rem", fontSize: "18px", color: "#DF3F00", marginTop: "0.6rem" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5K REVIEWS)</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src={seafood} style={{ marginLeft: "2.8rem" }} />
                            <div style={{ marginLeft: "3.5rem" }}>
                                <p style={{ fontSize: "25px", marginTop: "1rem" }}>Seafood Pizza......................................................$352</p>
                                <p style={{ fontSize: "18px" }}>Roasted langoustine, consommé</p>
                                <p style={{ fontSize: "20px", color: "#DF3F00", marginTop: "0.8rem" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5K REVIEWS)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
