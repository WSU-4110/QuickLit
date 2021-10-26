import RoutesUrls from '../../util/RouteURL';
require('../../../style/navbar/Navbar.scss');

    const Navbar = () => (
        <>
        <nav className="navbar">
          <ul>
            <li><a className="nav-item" href={RoutesUrls.HOME}>quicklit</a></li>
            <li><a className="nav-item" href={RoutesUrls.DISCUSSION}>Discussions</a></li>
            <li><a className="nav-item" href={RoutesUrls.PROFILE}>Profile</a></li>
            
          </ul>
        </nav>
        </>
      )

export default Navbar