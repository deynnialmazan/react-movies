import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <section className='notFound'>
        <Helmet>
          <title>404 Not found</title>
        </Helmet>
        <div className='content'>
            <h1 className='notfound-message'>Oooops!</h1>
            <h1 className='notfound-message'>404 Page not found</h1>
            <p className='notfound-p'>Look like you are lost...This page doesn't exist!</p>
            <img src='https://media1.giphy.com/media/aYpmlCXgX9dc09dbpl/giphy.gif?cid=ecf05e47hcauoqccii0e3vv6zxqy5cwi9g68tgyruzgm9g6j&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
            <Link to="/">
                <input type='button' className="returnBtn" value="Return home" />
            </Link >
         </div>
    </section>
  )
}

export default NotFound;