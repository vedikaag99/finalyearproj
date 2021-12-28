import React from 'react';
import Navbar from '../components/Navbar/navbar';
class About extends React.Component{
    render(){
        return (
        <div>
            <div class="wrapper">
        <div class="page--header pt--60 pb--60 text-center" data-bg-img="./assets/img/page-header-img/bg.jpg" data-overlay="0.85">
            <div class="container">
                <div class="title">
                    <h2 class="h1 text-white">About Us</h2>
                </div>

                <ul class="breadcrumb text-gray ff--primary">
                    <li><a href="home-1.html" class="btn-link">Home</a></li>
                    <li class="active"><span class="text-primary">About</span></li>
                </ul>
            </div>
        </div>
       
        <div class="section pt--80 pb--40">
            <div class="container">
                <div class="row row--md-vc">
                    <div class="col-md-6 pb--40">
                        <img src="./assets/img/about-img/01.jpg" alt=""/>
                    </div>

                    <div class="col-md-6 pb--40">
                        <div class="text--block">
                            <div class="content fs--14">
                                <h3>About Us</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eius, nesciunt animi qui quaerat aliquam corrupti beatae, veniam excepturi maxime quas rerum asperiores dolore aliquid atque? Aperiam neque ex fugiat?</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eius, nesciunt animi qui quaerat aliquam corrupti beatae, veniam excepturi maxime quas rerum asperiores dolore aliquid atque? Aperiam neque ex fugiat?</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta fugiat voluptatibus aperiam officia quis asperiores animi error distinctio corporis, doloribus aliquam libero maiores modi dolores perspiciatis beatae nulla, eaque?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section class="section bg-lighter pt--80 pb--40">
            <div class="container">
                <div class="row AdjustRow">
                    <div class="col-md-3 col-xs-6 col-xxs-12 pb--40">
                        <div class="feature--item bg-default text-center">
                            <div class="title">
                                <h2 class="h1 ff--default text-primary"><span data-trigger="counterup">530</span>k+</h2>
                            </div>

                            <div class="sub-title">
                                <h3 class="h2 fs--16">Stories / Topics Created</h3>
                            </div>

                            <div class="desc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-xs-6 col-xxs-12 pb--40">
                        <div class="feature--item bg-default text-center">
                            <div class="title">
                                <h2 class="h1 ff--default text-primary"><span data-trigger="counterup">30</span>k+</h2>
                            </div>

                            <div class="sub-title">
                                <h3 class="h2 fs--16">Member Online Right Now</h3>
                            </div>

                            <div class="desc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-xs-6 col-xxs-12 pb--40">
                        <div class="feature--item bg-default text-center">
                            <div class="title">
                                <h2 class="h1 ff--default text-primary"><span data-trigger="counterup">1.5</span>k+</h2>
                            </div>

                            <div class="sub-title">
                                <h3 class="h2 fs--16">Active Group / Meeting Room</h3>
                            </div>

                            <div class="desc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-xs-6 col-xxs-12 pb--40">
                        <div class="feature--item bg-default text-center">
                            <div class="title">
                                <h2 class="h1 ff--default text-primary"><span data-trigger="counterup">03</span>k+</h2>
                            </div>

                            <div class="sub-title">
                                <h3 class="h2 fs--16">New Event In Every Week</h3>
                            </div>

                            <div class="desc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section pt--80 pb--20">
            <div class="container">
                <div class="row row--md-vc">
                    <div class="col-md-6 pb--50">
                        <div class="text--block pb--10">
                            <div class="title">
                                <h2 class="h2 fw--600">Why Choose Us?</h2>
                            </div>

                            <div class="content fs--14">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. make a type specimen book.</p>
                            </div>
                        </div>

                        <div class="row AdjustRow">
                            <div class="col-md-6 pb--10">
                                <div class="feature--block mb--6 clearfix">
                                    <div class="icon fs--18 text-primary mr--20 float--left">
                                        <i class="fa fa-comments-o"></i>
                                    </div>

                                    <div class="info ov--h">
                                        <div class="title">
                                            <h2 class="h6 fw--700">Individual Live Chat</h2>
                                        </div>

                                        <div class="desc mt--8">
                                            <p>Ipsum is simply dummy text of the printing industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 pb--10">
                                <div class="feature--block mb--6 clearfix">
                                    <div class="icon fs--18 text-primary mr--20 float--left">
                                        <i class="fa fa-wrench"></i>
                                    </div>

                                    <div class="info ov--h">
                                        <div class="title">
                                            <h2 class="h6 fw--700">User Friendly Settings</h2>
                                        </div>

                                        <div class="desc mt--8">
                                            <p>Ipsum is simply dummy text of the printing industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 pb--10">
                                <div class="feature--block mb--6 clearfix">
                                    <div class="icon fs--18 text-primary mr--20 float--left">
                                        <i class="fa fa-group"></i>
                                    </div>

                                    <div class="info ov--h">
                                        <div class="title">
                                            <h2 class="h6 fw--700">Discover Amazing People</h2>
                                        </div>

                                        <div class="desc mt--8">
                                            <p>Ipsum is simply dummy text of the printing industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 pb--10">
                                <div class="feature--block mb--6 clearfix">
                                    <div class="icon fs--18 text-primary mr--20 float--left">
                                        <i class="fa fa-clock-o"></i>
                                    </div>

                                    <div class="info ov--h">
                                        <div class="title">
                                            <h2 class="h6 fw--700">Times Fly With Us</h2>
                                        </div>

                                        <div class="desc mt--8">
                                            <p>Ipsum is simply dummy text of the printing industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 pb--60">
                       
                        <div class="video--popup style--1" data-overlay="0.3">
                            <img src="./assets/img/why-choose-us-img/video-poster-1.jpg" alt=""/>

                            <a href="#" class="btn-link" data-trigger="video_popup">
                                <span><i class="fa fa-play"></i></span>
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
        
    </div>

    <div id="backToTop">
        <a href="#" class="btn"><i class="fa fa-caret-up"></i></a>
    </div>

        </div>
        );
    }
}
export default About;