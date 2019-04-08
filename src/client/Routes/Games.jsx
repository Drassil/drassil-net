import React from 'react'
import {Link  } from  'react-router-dom';

export default class Game extends React.Component{
    render(){
        return(
            <div>
             
            <section id="menu-0" data-rv-view={2}>
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
                      <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar"><li className="nav-item dropdown"><a className="nav-link link dropdown-toggle" href="games.html" data-toggle="dropdown-submenu" aria-expanded="false">GAMES<br /></a><div className="dropdown-menu"><a className="dropdown-item" href="games.html#msg-box5-8">World of Warcraft</a></div></li><li className="nav-item"><a className="nav-link link" href="https://discord.gg/hEvT2yh" aria-expanded="false" target="_blank">DISCORD</a></li></ul>
                      <button hidden className="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div className="close-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </section>
            <section className="engine"><a href="https://mobirise.co/c">free web maker</a></section><section className="mbr-section mbr-section__container article mbr-after-navbar" id="header3-5" data-rv-view={4} style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '120px', paddingBottom: '20px'}}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h3 className="mbr-section-title display-2">World of Warcraft<br />Resources</h3>
                    <small className="mbr-section-subtitle">private communities</small>
                  </div>
                </div>
              </div>
            </section>
            <section className="mbr-section mbr-parallax-background" id="msg-box5-8" data-rv-view={6} style={{backgroundImage: 'url(assets/images/151923-2000x1500.jpg)', paddingTop: '0px', paddingBottom: '0px'}}>
              <div className="mbr-overlay" style={{opacity: '0.7', backgroundColor: 'rgb(255, 255, 255)'}}>
              </div>
              <div className="container">
                <div className="row">
                  <div className="mbr-table-md-up">
                    <div className="mbr-table-cell col-md-5 text-xs-center text-md-right content-size">
                      <h3 className="mbr-section-title display-2">WoWGaming</h3>
                      <div className="lead">
                        <p><strong>Free</strong> &nbsp;and &nbsp;<strong>OpenSource</strong> &nbsp;<strong>resource</strong> site &nbsp;for World of Warcraft<br />Subdivided by expansions<br /><em>It includes a wiki and a db search engine!</em></p>
                      </div>
                      <div><a className="btn btn-primary" href="https://wowgaming.github.io/" target="_blank">VISIT</a></div>
                    </div>
                    <div className="mbr-table-cell mbr-left-padding-md-up mbr-valign-top col-md-7 image-size" style={{width: '50%'}}>
                      <div className="mbr-figure"><a href="http://www.wowgaming.org" target="_blank"><img src="assets/images/wowgame-1400x1012.jpg"  /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mbr-section mbr-section-md-padding" id="social-buttons4-5" data-rv-view={9} style={{backgroundColor: 'rgb(50, 50, 50)', paddingTop: '30px', paddingBottom: '30px'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-xs-center">
                    <h3 className="mbr-section-title display-2">FOLLOW US</h3>
                    <div><a className="btn btn-social" title="Twitter" target="_blank" href="https://twitter.com/mobirise"><i className="socicon socicon-twitter" /></a> <a className="btn btn-social" title="Facebook" target="_blank" href="https://www.facebook.com/pages/Mobirise/1616226671953247"><i className="socicon socicon-facebook" /></a>  <a className="btn btn-social" title="YouTube" target="_blank" href="https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw"><i className="socicon socicon-youtube" /></a>   <a className="btn btn-social" title="Tumblr" target="_blank" href="http://mobirise.tumblr.com/">&nbsp;<span className="socicon socicon-googleplus mbr-iconfont mbr-iconfont-btn" /></a>  </div>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        );
    }
}