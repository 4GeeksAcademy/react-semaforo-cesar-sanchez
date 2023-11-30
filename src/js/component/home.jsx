import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [redLightOn, setRedLightOn] = useState(false);
	const[yellowLightOn, setYellowLightOn] = useState(false);
	const[greenLightOn, setGreenLightOn] = useState(false);
	const[cyanLightOn, setCyanLightOn] = useState(false);
	const[add,setColorAdd] =useState("none");

	function buttonClick(){
		setColorAdd("flex");
	}

 	

	function redhandleClick () {
		redLightOn === false ? setRedLightOn(true) : setRedLightOn(false);
		if (yellowLightOn === true || greenLightOn === true){
			setYellowLightOn(false);
			setGreenLightOn(false);
		}
	}
	function yellowhandleClick () {
		yellowLightOn === false ? setYellowLightOn(true) : setYellowLightOn(false);
		if (redLightOn === true || greenLightOn === true || cyanLightOn === true){
			setRedLightOn(false);
			setGreenLightOn(false);
			setCyanLightOn(false);
		}
	}
	function greenhandleClick () {
		greenLightOn === false ? setGreenLightOn(true) : setGreenLightOn(false);
		if (redLightOn === true || yellowLightOn === true || cyanLightOn === true){
			setRedLightOn(false);
			setYellowLightOn(false);
			setCyanLightOn(false);
		}
	}
	function cyanhandleClick () {
		cyanLightOn === false ? setCyanLightOn(true) : setCyanLightOn(false);
		if (redLightOn === true || yellowLightOn === true || greenLightOn ===true){
			setRedLightOn(false);
			setYellowLightOn(false);
			setGreenLightOn(false);
		}
	}
	
	return (
	<div id="app">	
		<div className="trafficTop bg-black mx-auto" style={{width:"20px", height:"150px"}}>"

			<div className="container bg-black rounded-4 pt-2" style={{width:"130px", height:"500px"}}>
				<div className="red-light bg-danger mt-2 mx-auto" style={{ borderRadius: "50%", width:"100px", height:"100px", boxShadow: redLightOn ? "0 0 40px #FFFFFF": "none"}} onClick={function(){redhandleClick(redLightOn === true)}} ></div>
				<div className="yellow-light bg-warning mt-2 mx-auto" style={{ borderRadius: "50%", width:"100px", height:"100px", boxShadow: yellowLightOn ? "0 0 40px #FFFFFF": "none"}} onClick={function(){yellowhandleClick(yellowLightOn === true)}} ></div>
				<div className="green-light bg-success mt-2 mx-auto" style={{ borderRadius: "50%", width:"100px", height:"100px", boxShadow: greenLightOn ? "0 0 40px #FFFFFF": "none"}} onClick={function(){greenhandleClick(greenLightOn === true)}} ></div>
				<div className="cyan-light bg-info mt-2 mx-auto" style={{ borderRadius: "50%", width:"100px", height:"100px", boxShadow: cyanLightOn ? "0 0 40px #FFFFFF": "none"}} onClick={function(){cyanhandleClick(cyanLightOn === true)}} ></div>
				
			</div>
			<button type="button" className="btn btn-secondary mt-4 mx-auto ms-3" onClick={buttonClick}>Presione Botón</button>
		</div>	
	</div>	
		
	);
};

export default Home;
