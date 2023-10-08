import Insta from "../images/insta.png"
import Linkedin from "../images/linkedin.png"
import Twitter from "../images/twitter.png"


function MainContent(){
    return(
        <div className="content">
            <h1>About Me</h1>
            <p>I am a 4th year Software Engineering student at TAMK. I love doing both forntEnd and backEnd. Committed to develop and enhance my skills more every day.  </p>
            <div>
                <h3>Skills i have</h3>
                <ul>
                    <li>Fluent in communication in English</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Jira and Confluence</li>
                </ul>
            </div>

            <div>
                <h3>Socials</h3>
                <ul type="none" className="logos">
                    <li> <a href="https://www.instagram.com/accounts/login/"><img src={Insta} width={"60px"}/></a></li>
                    <li><a href="https://www.linkedin.com/in/md-fakhruddin-ferdous-216a6214b/"><img src={Linkedin} width={"60px"}/></a></li>
                    <li><a href="https://twitter.com/"><img src={Twitter} width={"60px"}/></a></li>
                  
                </ul>
            </div>

            <input className="input" type="text" placeholder="Give Feedback" />
            <button>Email me</button>


        </div>
    )
}

export default MainContent