import '../Stylesheets/SideNavbar.module.css'

const SideNavbar = () => {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li><a href="#">Aim</a></li>
                    <li><a href="#">Visualization</a></li>
                    <li><a href="#">Test</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Tutorials</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNavbar;