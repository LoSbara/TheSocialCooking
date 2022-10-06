import React from "react";
import '../style/Style.css';
import search from '../img/search.png';
import cook from '../img/chef.png';
import account from '../img/account.png';
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div className = "form-container">
		<form className = "form">
			<div className = "form-header">
				<span className = "form-title">The Social Cooking</span>
				<span className = "form-signin">
				<Link to = "/auth"><button type="submit" className="btn btn-primary">Sign In</button></Link>
				</span>
			</div>
			<div className = "form-post"></div>
			<div className = "form-footer">
				<div className = "form-img-search">
					<Link to = "/search"><img src = {search} width = "100" height = {"100"} /></Link>
				</div>
				<div className = "form-img-home">
					<Link to = "/"><img src = {cook} width = "100" height = {"100"} /></Link>
				</div>
				<div className = "form-img-profile">
					<Link to = "/profile"><img src = {account} width = "100" height = {"100"} /></Link>
				</div>
			</div>
		</form>
	</div>
);
};

export default Home;
