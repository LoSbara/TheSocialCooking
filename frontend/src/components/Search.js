import React from "react";
import '../style/Style.css';
import search from '../img/search.png';
import cook from '../img/chef.png';
import account from '../img/account.png';
import { Link } from "react-router-dom";

const Search = () => {
return (
	<div className = "form-container">
		<form className = "form">
			<div className = "form-header">
				<div className = "form-title">The Social Cooking</div>
			</div>
			<div className = "form-post">
				<form>
					<div className="form-group">
						<label for="research">Research</label>
						<input type="text" className="form-control" id="research" aria-describedby="emailHelp" placeholder="Enter research" />
					</div>
				</form>
			</div>
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

export default Search;
