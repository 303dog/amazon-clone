import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import {Link} from 'react-router-dom';





function Header() {
    return(
        <nav className='header'>
            <img className='header__logo' alt='logo' src='https://images.creativemarket.com/0.1.0/ps/1728480/1160/772/m1/fpnw/wm1/3_paper-.jpg?1475656281&s=15f4dd67633e8094883e14f43ea42f1f'/>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
            {/* 1st Link */}
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello User</span>
                    <span className='header__optionLineTwo'>Sign</span>
                </div>
            </Link>
            {/* 2nd LInk*/}
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>
            {/* 3rd LInk*/}
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>You</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
            </div>
            {/*basket icon with number */}
            <Link to="/checkout" className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    {/* number of otems in basket */}
                    <span className='header_optionLineTwo header__basketCount'>2</span>
                </div>
            
            </Link>
        </nav>
    )
}

export default Header;