import React, { useState } from "react";
import "../assets/App.css";
import Control from "../controller/control";
/**
 * Importing necessary required npm modules
 * Using react hooks for validating  form
 * Intializing schema to store data with respect to backend schema
 * @author: Madhavi
 * @author: Rajendra Prasad
 *
 */
/**
 *
 * This code displays the signup page of the project
 */
const Signup = () => {
  /**
   This code snippet checks for the valid email address
   */
  const validateEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return true;
    } else {
      setValidateMsg("Please enter valid emailid");
      return false;
    }
  };
  /**
   * 
   This code snippet checks for the valid password
   */
  const isUpper = (pswd) => {
    let format = /[A-Z]/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };
  const isLower = (pswd) => {
    let format = /[a-z]/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };

  const specialTest = (pswd) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };
  const isNumber = (pswd) => {
    let hasNumber = /\d/;
    if (hasNumber.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };

  const validate = (password) => {
    let length = password.length;

    if (
      length >= 8 &&
      isUpper(password) &&
      isLower(password) &&
      specialTest(password) &&
      isNumber(password)
    ) {
      setValidateMsg("strong password");
      return true;
    } else {
      setValidateMsg("Please enter a valid password");
      return false;
    }
  };
  /**
   * In this we are going to call the fucntions for validations
   */

  const submitDetails = () => {
    if (validateEmail(email) && validate(newpassword)) {
      const body = { firstname, surname, email, newpassword, phonenumber };
      console.log(body);
      let url = "http://localhost:1109/signup";

      const success = (res) => {
        console.log("Success", res);
        alert("User created successfully");
      };
      const failure = (err) => {
        console.log("Error", err);
      };
      Control.sendRequest(url, "post", body, false, null, success, failure);
    }
  };
  const [firstname, setFirstName] = useState("");
  const [surname, setsurName] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setPassword] = useState("");
  const [validatemsg, setValidateMsg] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [visible, setVisible] = useState(false);
  // const [registrationPageNumber, setregistrationPageNumber] = useState(true);
  return (
    <>
      {visible ? (
        <>
          <div class="two">
            <div id="header_wrapper">
              <div id="header">
                <form>
                  <li>
                    Email
                    <br />
                    <input
                      type="text"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </li>

                  <li>
                    Password
                    <br />
                    <input
                      type="password"
                      name="password"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <br />
                    <a href=".">Forgotten account?</a>
                  </li>

                  <li>
                    <a href="/login">
                      <input type="submit" value="log in" required />
                    </a>
                  </li>
                </form>
              </div>
            </div>
            <div id="wrapper">
              <div id="div1"></div>
              <div id="div2">
                <br />
                <li>
                  <select name="countryCode" id="">
                    <optgroup label="Other countries">
                      <option data-countryCode="DZ" value="213">
                        Algeria (+213)
                      </option>
                      <option data-countryCode="AD" value="376">
                        Andorra (+376)
                      </option>
                      <option data-countryCode="AO" value="244">
                        Angola (+244)
                      </option>
                      <option data-countryCode="AI" value="1264">
                        Anguilla (+1264)
                      </option>
                      <option data-countryCode="AG" value="1268">
                        Antigua &amp; Barbuda (+1268)
                      </option>
                      <option data-countryCode="AR" value="54">
                        Argentina (+54)
                      </option>
                      <option data-countryCode="AM" value="374">
                        Armenia (+374)
                      </option>
                      <option data-countryCode="IN" value="91">
                        India (+91)
                      </option>
                      <option data-countryCode="ID" value="62">
                        Indonesia (+62)
                      </option>
                      <option data-countryCode="IR" value="98">
                        Iran (+98)
                      </option>
                      <option data-countryCode="IQ" value="964">
                        Iraq (+964)
                      </option>
                      <option data-countryCode="IE" value="353">
                        Ireland (+353)
                      </option>
                      <option data-countryCode="IL" value="972">
                        Israel (+972)
                      </option>
                      <option data-countryCode="IT" value="39">
                        Italy (+39)
                      </option>
                      <option data-countryCode="JM" value="1876">
                        Jamaica (+1876)
                      </option>
                      <option data-countryCode="GB" value="44">
                        UK (+44)
                      </option>
                      <option data-countryCode="UA" value="380">
                        Ukraine (+380)
                      </option>
                      <option data-countryCode="AE" value="971">
                        United Arab Emirates (+971)
                      </option>
                      <option data-countryCode="UY" value="598">
                        Uruguay (+598)
                      </option>
                      <option data-countryCode="US" value="1">
                        USA (+1)
                      </option>
                      <option data-countryCode="UZ" value="7">
                        Uzbekistan (+7)
                      </option>
                    </optgroup>
                  </select>
                </li>
                <br />
                <li>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    id="Phonenumber"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                  />
                </li>

                <div>
                  <br />
                  <p>Birthday</p>
                  <li>
                    <select id="day">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select id="month">
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <select id="year">
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                    </select>
                    <a href=".">Why do I need to provide my date of birth?</a>
                  </li>

                  <li>
                    <input type="radio" name="gender" />
                    Female
                    <input type="radio" name="gender" />
                    Male
                  </li>
                  <li id="terms">
                    By clicking Create an account, you agree to our{" "}
                    <a href=".">Terms</a> and that <br></br>you have read our{" "}
                    <a href=".">Data Policy</a>, including our{" "}
                    <a href=".">Cookie Use</a>.
                  </li>
                  <li>
                    <input
                      type="submit"
                      value="Submit"
                      onClick={() => submitDetails()}
                    ></input>
                  </li>
                  <button class="btn btn-primary back">
                    <a href="/">Back</a>
                  </button>

                  <li id="create_page">
                    <a href=".">Create a Page</a> for a celebrity, band or
                    business.
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div id="footer_wrapper">
            <div id="footer1">
              English (UK) <a href=".">हिन्दी</a>
              <a href=".">ਪੰਜਾਬੀ</a>
              <a href="."> اردو</a>
              <a href=".">தமிழ்</a>
              <a href=".">বাংলা</a>
              <a href=".">मराठी</a>
              <a href=".">తెలుగు</a>
              <a href=".">ગુજરાતી</a>
              <a href=".">ಕನ್ನಡ</a>
              <a href=".">മലയാളം</a>
            </div>
            <div id="footer2">
              <a href=".">Sign Up</a>
              <a href=".">Log In</a>
              <a href=".">Messenger</a>
              <a href=".">DotNetTec</a>
              <a href=".">Mobile</a>
              <a href=".">Find Friends</a>
              <a href=".">Badges</a>
              <a href=".">People</a>
              <a href=".">Pages</a>
              <a href=".">Places</a>
              <a href=".">Games</a>
              <a href=".">Locations</a>
              <a href=".">Celebrities</a>
              <a href=".">Groups</a>
              <a href=".">Moments</a>
              <a href=".">About</a>
              <a href=".">Create Advert</a>
              <a href=".">Create Page</a>
              <a href=".">Developers</a>
              <a href=".">Careers</a>
              <a href=".">Privacy</a>
              <a href=".">Cookies</a>
              <a href=".">Ads</a>
              <a href=".">Terms</a>
              <a href=".">Help</a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="one">
            <div id="header_wrapper">
              <div id="header">
                <form>
                  <li>
                    Email
                    <br />
                    <input
                      type="text"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </li>

                  <li>
                    Password
                    <br />
                    <input
                      type="password"
                      name="password"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <br />
                    <a href=".">Forgotten account?</a>
                  </li>

                  <li>
                    <a href="/login">
                      <input type="submit" value="log in" required />
                    </a>
                  </li>
                </form>
              </div>
            </div>

            <div id="wrapper">
              <div id="div1"></div>
              <div id="div2">
                <h1>Create an account</h1>
                <p>It's free and always will be.</p>
                <li>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="Firstname"
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    placeholder="Surname"
                    id="surname"
                    onChange={(event) => setsurName(event.target.value)}
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    placeholder="email"
                    id="email-input"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </li>

                <h5 className="passmsg">{validatemsg}</h5>
                <li>
                  <input
                    type="password"
                    placeholder="New password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </li>
                <br />

                <input
                  type="submit"
                  value="Next Step"
                  class="back"
                  onClick={() => setVisible(true)}
                />
              </div>
            </div>
          </div>

          <div id="footer_wrapper">
            <div id="footer1">
              English (UK) <a href=".">हिन्दी</a>
              <a href=".">ਪੰਜਾਬੀ</a>
              <a href="."> اردو</a>
              <a href=".">தமிழ்</a>
              <a href=".">বাংলা</a>
              <a href=".">मराठी</a>
              <a href=".">తెలుగు</a>
              <a href=".">ગુજરાતી</a>
              <a href=".">ಕನ್ನಡ</a>
              <a href=".">മലയാളം</a>
            </div>
            <div id="footer2">
              <a href=".">Sign Up</a>
              <a href=".">Log In</a>
              <a href=".">Messenger</a>
              <a href=".">DotNetTec</a>
              <a href=".">Mobile</a>
              <a href=".">Find Friends</a>
              <a href=".">Badges</a>
              <a href=".">People</a>
              <a href=".">Pages</a>
              <a href=".">Places</a>
              <a href=".">Games</a>
              <a href=".">Locations</a>
              <a href=".">Celebrities</a>
              <a href=".">Groups</a>
              <a href=".">Moments</a>
              <a href=".">About</a>
              <a href=".">Create Advert</a>
              <a href=".">Create Page</a>
              <a href=".">Developers</a>
              <a href=".">Careers</a>
              <a href=".">Privacy</a>
              <a href=".">Cookies</a>
              <a href=".">Ads</a>
              <a href=".">Terms</a>
              <a href=".">Help</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
