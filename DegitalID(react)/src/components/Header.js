import ReactLOGO from "../images/pic.jpg"

function Header(){
    return(
        <nav className="header">
            <img className="leftSide" src={ReactLOGO} />
            <div className="rightSide">
                <h1>Md Fakhruddin Ferdous</h1>
                <h4>Full Stack Developer</h4>
                <h5>Tampere University of Applied Sciences</h5>
            </div>
            
        </nav>
    )
}
export default Header