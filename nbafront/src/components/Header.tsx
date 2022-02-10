import "./Header.css"

export const Header = () => {
    return (
        <div className="Header">
            <h1>NBA GALAXY</h1>
            <nav>
                <a href="/"> Trivia </a> |
                <a href="/"> Home </a>
                {/* <p>Remember to cite the API!</p> */}
            </nav>
            <div className="logo">
                <img src="./basketball-sports.gif" height={100} width={100}/>
            </div>

        </div>
    )
}