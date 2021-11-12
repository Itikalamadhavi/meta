import React from 'react';
import "../assets/front.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * The below code represents the landing page
 * @author: Madhavi
 * @author: Rajendra Prasad
 */

export default function Landingpage() {

	return (
		<>
			<main>
				<div class="container">
					<div class="login-form">
						<h1>Welcome to Facebook</h1>
						<br />
						<p>Make The Most Of Your Social Life</p>
						<br />
						<button class="loginbtn"><a href="/login">Login</a></button>
						<br />
						<button class="create-account"><a href="/signup">Create New Account</a></button>
					</div>
				</div>
			</main>
		</>
	)
}