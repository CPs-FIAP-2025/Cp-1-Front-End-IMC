function Header(){
    return(
        <header>
            <div className="logo">
                <a href="#"><img src="" alt="logo IMC" /></a>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li><a href="#"><i className='fa-regular fa-house'></i> Home</a></li>
                        <li><a href="#" target='_blank'><i className='fa-brands fa-linkedin-in'></i> Linkedin</a></li>
                        <li><a href="#" target='_blank'><i className='fa-brands fa-github'></i> GitHub</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header