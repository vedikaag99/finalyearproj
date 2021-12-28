import React from 'react';
class NotFound extends React.Component{
    render(){
        return (
            <div>
            <div class="wrapper">
            <div class="f0f--section">
            <div class="f0f--bg hidden-xs">
                <div class="f0f--bg-inner" data-bg-img="./assets/img/light-bg.png"></div>
            </div>

            <div class="vc--parent">
                <div class="vc--child">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="f0f--content text-white text-center pt--80 pb--80">
                                    <div class="caption fs--18 fw--700 text-uppercase">
                                        <p>oops ! error</p>
                                    </div>

                                    <div class="title fw--700">
                                        <p>404</p>
                                    </div>

                                    <div class="desc fs--18 fw--500">
                                        <p>The page you are looking for doesn't exist.</p>
                                        <p>The page might have been renamed, move, removed or temporary unavailable.</p>
                                    </div>
                                    <div class="buttons">
                                        <a href="/" class="btn btn-white">Go To Home<i class="fa fa-home"></i></a>
                                    </div>

                                    <div class="social pt--60">
                                        <ul class="nav">
                                            <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                                            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                            <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                                            <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        );
    }
}
export default NotFound;