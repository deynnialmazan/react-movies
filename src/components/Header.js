import { Link } from "react-router-dom";

function Header({ title='React Movies' }) {
  return (
    <header>
        <div className="container flex">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Theatres</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">My account</a></li>
                    <Link to="/new">
                        <input type="button" className="addBtn" value="Add movie" />
                    </Link>
                </ul>  
            </nav>
        </div>
    </header>
  )
};

export default Header;