import {Cartwidget} from '../CartWidget/CartWidget'
export const Navbar = () => {
    return (
        <header className="header-nav">
            <h3>ELECTROKEVIN</h3>
            <nav>
                <a href="/#">Televisores</a>
                <a href="/#">Laptops</a>
                <a href="/#">Celulares</a>
                <a href="/#">Parlantes</a>
            </nav>
                <Cartwidget/>
        </header>

    )
}