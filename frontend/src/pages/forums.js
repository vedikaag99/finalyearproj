import React from 'react';
class Forums extends React.Component{
    render(){
        return (
            <div>
                <div class="wrapper">
                <div class="page--header pt--60 pb--60 text-center" data-bg-img="./assets/img/page-header-img/bg.jpg" data-overlay="0.85">
                    <div class="container">
                        <div class="title">
                            <h2 class="h1 text-white">Forum</h2>
                        </div>

                        <ul class="breadcrumb text-gray ff--primary">
                            <li><a href="/" class="btn-link">Home</a></li>
                            <li class="active"><span class="text-primary">Forum</span></li>
                        </ul>
                    </div>
                </div>

                <section class="page--wrapper pt--80 pb--20">
                    <div class="container">
                        <div class="row">
                            <div class="main--content col-md-8 pb--60" data-trigger="stickyScroll">
                                <div class="main--content-inner drop--shadow">
                                    <div class="topics--list">
                                        <table class="table">
                                            <thead class="ff--primary fs--14 text-darkest">
                                                <tr>
                                                    <th>Forum</th>
                                                    <th>Topics</th>
                                                    <th>Post</th>
                                                    <th>Freshness</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h4 class="h6 fw--500 text-darkest"><a href="#" class="btn-link">User Interface Design</a></h4>

                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">12</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">49</p>
                                                    </td>
                                                    <td>
                                                        <p>2 days, 5 hours ago</p>

                                                        <a href="#" class="topic--author">
                                                            <span class="name">David J. Kleiner</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 class="h6 fw--500 text-darkest"><a href="#" class="btn-link">Front-End Engineering</a></h4>

                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>

                                                        <ul class="subforums nav mt--10 text-darkest">
                                                            <li><i class="fa fa-circle-thin mr--10 text-primary"></i></li>
                                                            <li><a href="/#">HTML (12, 245)</a></li>
                                                            <li><a href="/#">CSS (21, 108)</a></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">07</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">12</p>
                                                    </td>
                                                    <td>
                                                        <p>2 days, 5 hours ago</p>

                                                        <a href="#" class="topic--author">
                                                            <span class="name">Karen S. Barker</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 class="h6 fw--500 text-darkest"><a href="#" class="btn-link">Web Development</a></h4>

                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">05</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">42</p>
                                                    </td>
                                                    <td>
                                                        <p>2 days, 5 hours ago</p>

                                                        <a href="#" class="topic--author">
                                                            <span class="name">Stuart B. Figueroa</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 class="h6 fw--500 text-darkest"><a href="#" class="btn-link">Social Media Marketing</a></h4>

                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">10</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">50</p>
                                                    </td>
                                                    <td>
                                                        <p>2 days, 5 hours ago</p>

                                                        <a href="#" class="topic--author">
                                                            <span class="name">Cathy T. Frazier</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 class="h6 fw--500 text-darkest"><a href="#" class="btn-link">Content Marketing</a></h4>

                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">10</p>
                                                    </td>
                                                    <td>
                                                        <p class="ff--primary fw--500 fs--14 text-darkest">50</p>
                                                    </td>
                                                    <td>
                                                        <p>2 days, 5 hours ago</p>

                                                        <a href="#" class="topic--author">
                                                            <span class="name">Jane Doe</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="main--sidebar col-md-4 pb--60" data-trigger="stickyScroll">
                                <div class="widget">
                                    <h2 class="h4 fw--700 widget--title">Filter</h2>

                                    <div class="buddy-finder--widget">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label>
                                                            <span class="text-darker ff--primary fw--500">Filter By Topic</span>

                                                            <input type="text" name="search" placeholder="Im looking for..." class="form-control" required/>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="col-xs-12">
                                                    <button type="submit" class="btn btn-primary">Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h2 class="h4 fw--700 widget--title">Notice</h2>

                                    <div class="text--widget">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some  look even slightly believable.</p>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h2 class="h4 fw--700 widget--title">Forums</h2>

                                    <div class="links--widget">
                                        <ul class="nav">
                                            <li><a href="#">User Interface Design<span>(12)</span></a></li>
                                            <li><a href="#">Front-End Engineering<span>(07)</span></a></li>
                                            <li><a href="#">Web Development<span>(37)</span></a></li>
                                            <li><a href="#">Social Media Marketing<span>(13)</span></a></li>
                                            <li><a href="#">Content Marketing<span>(28)</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h2 class="h4 fw--700 widget--title">Archives</h2>

                                    <div class="nav--widget">
                                        <ul class="nav">
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-calendar-o"></i>
                                                    <span class="text">Jan - July 2017</span>
                                                    <span class="count">(86)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-calendar-o"></i>
                                                    <span class="text">Jan - Dce 2016</span>
                                                    <span class="count">(328)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-calendar-o"></i>
                                                    <span class="text">Jan - Dec 2015</span>
                                                    <span class="count">(427)</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div id="backToTop">
                <a href="/" class="btn"><i class="fa fa-caret-up"></i></a>
            </div>
            </div>
        );
    }
}
export default Forums;