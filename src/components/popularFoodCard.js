import { Component } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

export default class PopularFoodCard extends Component {
    constructor() {
        super();
    }

    handleClick = (arg) => {
        console.log(arg);
    }

    render() {
        const { data } = this.props;
        return(
           
            <div style={{display:"flex", backgroundColor:"rgb(203, 79, 2)",paddingBottom:"0.7rem",height:"200px"}}>
            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:"160px",width:"350px", borderRadius:"10px",marginTop:"1rem",marginLeft:"5rem"}}>
               
                <img style={{marginRight:"1rem"}} src={data.img} />
                <p style={{fontFamily:"sans-serif",fontSize:"30px"}}>{data.text}</p>
                <button style={{border:"1px solid",height:"50px",width:"50px",borderRadius:"3px",marginLeft:"2rem"}} onClick={this.handleClick.bind(this,data)}><ArrowRightOutlined  /></button>

                
            </div>
            
            </div>
          
            
        )
    }
}