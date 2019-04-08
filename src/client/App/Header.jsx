import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
    <drsite-header>
         <section id="menu-1" data-rv-view={13}>
        <nav className="navbar navbar-dropdown navbar-fixed-top">
          <div className="container">
            <div className="mbr-table">
              <div className="mbr-table-cell">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-logo"><img src="assets/images/drassil-612x128-38.png" alt="Drassil" /></Link>
                  <a className="navbar-caption" href="https://mobirise.com" />
                </div>
              </div>
              <div className="mbr-table-cell">
                <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                  <div className="hamburger-icon" />
                </button>
                <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar"><li className="nav-item">
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link link dropdown-toggle" to="games.html" data-toggle="dropdown-submenu" aria-expanded="false">GAMES<br /></Link><div className="dropdown-menu"><Link className="dropdown-item" to="/games">World of Warcraft</Link></div></li><li className="nav-item dropdown"><a className="nav-link link" href="https://discord.gg/hEvT2yh" aria-expanded="false" target="_blank">DISCORD</a></li></ul>
                <button hidden className="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                  <div className="close-icon" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </drsite-header>

)