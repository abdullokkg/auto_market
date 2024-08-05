import "./nav.scss"

const Nav = () => {
  return (
    <div>
        <nav className="nav">
            <ul className="nav_ul">
                <li>Modellar</li>
                <li>Tanlov va sotib olish</li>
                <li>Konfigurator</li>
                <li>Maxsus takliflar</li>
            </ul>
            <div className="logo">
                <h1>Auto Uz</h1>
            </div>
            <ul className="nav_ul">
                <li>Dilerlar</li>
                <li>Test drayvga yozilish</li>
                <li>Mashinalar olami</li>
                <li>Egalariga</li>
            </ul>
            <div className="translator">
                <strong>RU</strong>
                <br />
                <strong>UZ</strong>
            </div>
        </nav>
    </div>
  )
}

export default Nav
