import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">React</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="components.html">Components</a></li>
                    <li><a href="javascript.html">JavaScript</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;