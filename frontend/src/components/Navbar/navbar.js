import React from 'react';
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return (
            <div>
            <header class="header--section style--2">
            
            <div class="header--topbar">
                <div class="container">

                    <div class="header--topbar-logo float--left">
                        <a href="/"><h1 style={{color: "#1da1f2"}}>Project Title</h1></a>
                    </div>


                    <ul class="header--topbar-links nav ff--primary float--right">
                        <li class="dropdown">
                            <a href="/#" class="dropdown-toggle" data-toggle="dropdown">
                                <span>Light</span>
                                <i class="fa fa-caret-down"></i>
                            </a>

                            <ul class="dropdown-menu">
                                <li class="active"><a href="/#">Default</a></li>
                                <li><a href="/#">Light</a></li>
                                <li><a href="/#">Dark</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/#" title="Login" class="btn-link" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-user-o"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>


        
            <div class="header--navbar navbar bg-dark" data-trigger="sticky">
                <div class="container">
                <div class="navbar-header">
                        <button type="button" class="navbar-toggle style--2 collapsed" data-toggle="collapse" data-target="#headerNav">
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="header--search style--1 float--right" data-form="validate">
                        <form action="/#">
                            <input type="text" name="search" placeholder="Im looking for..." class="form-control" required/>

                            <button type="submit" class="btn-link"><i class="fa fa-search"></i></button>
                        </form>
                    </div>


                    <div id="headerNav" class="navbar-collapse collapse float--left">

                        <ul class="header--nav-links style--2 nav ff--primary">
                            <li>
                                <a href="/#">
                                    <span>Home</span>
                            
                                </a>

                            
                            </li>
                            <li class="dropdown">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown">
                                    <span>Discussion</span>
                                    <i class="fa fa-caret-down"></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li><a href="/#"><span>sm1</span></a></li>
                                    <li><a href="/#"><span>sm2</span></a></li>
                                    <li><a href="/#"><span>sm3</span></a></li>
                                </ul>
                            </li>
                            
                            <li><a href="/#"><span>Contact</span></a></li>
                        </ul>

                    </div>
                </div>
            </div>

            </header>
            </div>
        );
    }
}
export default Navbar;