import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Eric Fransen</h1>
                <h5>
                    Software developer in Denver, CO 
                </h5>
                <p>
                    Driven by clean, extensible code and user-first methodologies to build great scalable software.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>*/}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('social')}}>Social</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
