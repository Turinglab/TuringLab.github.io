"use strict";angular.module("turingWeb",["ngRoute","smoothScroll","angular-inview"]),angular.module("turingWeb").config(["$routeProvider",function(a){a.otherwise({templateUrl:"views/main.html",controller:"MainController"})}]),angular.module("turingWeb").controller("FaqController",["$scope",function(a){a.heading="FAQ",a.details=[{title:"Why does my child need to code?",lines:["Coding is awesome","Coding is fun"]},{title:"Curriculum",lines:["Projects are based on real-world scenarios closely linked to the National Curriculum pathways.","TuringLab avoids teaching concepts in isolation by using real world examples which children can relate to. This ensures that children understand why they are learning, not just what.","Integrating closely with the national curriculum complements children's learning at school while providing a foundation to explore exciting new projects."]},{title:"Creativity",lines:["We believe that learning should be fun, and have observed that when kids are being creative they are more engaged in the task at hand and develop a desire to learn more.","We nurture kids' natural creativity by incorporating subjects such as art, design, music and sport into our projects.","We also extend the theme of creativity to problem solving and critical thinking where we encourage kids to explore a wide range of ideas and solutions."]}]}]),angular.module("turingWeb").controller("LaboratoriesController",["$scope",function(a){a.heading="Laboratories";var b=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],c=function(a,c,d){return{cost:a,hours:c,number:b[d],hourly:a/(c*d)}};a.style=function(a){return 2===a.length?"col-sm-6 col-xs-12":"col-xs-12"},a.labs=[{name:"Saturdays",location:"Imperial College London",style:"col-md-6 col-sm-12 col-xs-12",link:"Learn more",slots:[{name:"Morning",content:"KS2 & Scratch",time:"10.00 - 13.00",prices:{left:new c(225,3,10),right:new c(30,3,1)}},{name:"Afternoon",content:"KS3 & Python",time:"14.00 - 17.00",prices:{left:new c(225,3,10),right:new c(30,3,1)}}]},{name:"Weekdays",location:"your local school",style:"col-md-6 col-sm-12 col-xs-12",mail:"Contact us",slots:[{name:"During-School",content:"KS2 & KS3",time:"1-3 hours"},{name:"After-School",content:"KS2 & KS3",time:"2 hours",prices:{left:new c(150,2,10),right:new c(20,2,1)}}]}]}]),angular.module("turingWeb").controller("MainController",["$scope",function(a){a.navigation={section:null,sections:["overview","teaching","laboratories","team","subscribe"]},a.inView=function(b,c){c&&(a.navigation.section=b,console.log(a.navigation.section))}}]),angular.module("turingWeb").controller("OverviewController",["$scope",function(a){a.heading="TuringLab",a.details=[{text:"We are four Imperial College Graduates with Master's Degrees in Computer Science.",icon:"fa-graduation-cap"},{text:"We teach children to code using real world projects based on the national curriculum in computing, maths and science across KS2 & KS3.",icon:"fa-lightbulb-o"},{text:"We develop bespoke technology that allows us to provide creative and stimulating education.",icon:"fa-code"}]}]),angular.module("turingWeb").controller("TeachingController",["$scope",function(a){a.heading="Teaching",a.details=[{title:"Coding",lines:["Coding is an essential skill in today's world, and is at the heart of all the projects available to our students.","We use visual programming languages such as Scratch to teach children fundamental computing concepts in a clear and accessible way.","Children progress onto Python - a text based programming language with an extensive online coummunity and a wide range of applications."]},{title:"Curriculum",lines:["Projects are based on real-world scenarios closely linked to the National Curriculum pathways.","TuringLab avoids teaching concepts in isolation by using examples which children can relate to. This ensures that children understand why they are learning, not just what.","We build upon learning objectives taken directly from the national curriculum. This ensures that our projects remain relavant, while providing new and exciting ways to extend learning at school."]},{title:"Creativity",lines:["We believe that learning should be fun, and have observed that when kids are being creative they are more engaged in the task at hand.","We nurture kids' natural creativity by incorporating subjects such as art, design, music and sport into our projects.","We also enable children to be creative in their approach to problem solving and critical thinking by encouraging them to explore a wide range of ideas and solutions."]}]}]),angular.module("turingWeb").controller("TeamController",["$scope",function(a){a.heading="Team",a.team=[{name:"Henry Miskin",image:"images/team/henrym.4675e142.jpg",about:"Henry wants to share his passion for problem solving in engineering and computing with upcoming inventors.",degrees:[{name:"MSc Computer Science",university:" Imperial College London"},{name:"BEng Mechanical Engineering",university:"University of Southampton"}],linkedin:"https://uk.linkedin.com/in/hpgmiskin",email:"mailto:hpgmiskin@turinglab.co.uk"},{name:"Sam Green",about:"Sam looks forward to passing on an enthusiasm for design and technology to a new generation of innovators.",image:"images/team/sam.031c9860.jpg",degrees:[{name:"MSc Computer Science",university:" Imperial College London"},{name:"BA Architecture",university:"University of Cambridge"}],linkedin:"https://uk.linkedin.com/in/greensamuel",email:"mailto:sam@turinglab.co.uk"},{name:"Priyav Shah",about:"Priyav is driven by getting kids excited about the power of technology.",image:"images/team/priyav.bd3611c9.jpg",degrees:[{name:"MSc Computer Science",university:" Imperial College London"},{name:"BA Psychology",university:"University of York"}],linkedin:"https://www.linkedin.com/in/priyavshah91",email:"mailto:priyav@turinglab.co.uk"},{name:"Henry Lake",about:"Henry enjoys bringing games to life through the application of physics.",image:"images/team/henryl.2fbe8737.jpg",degrees:[{name:"MSc Computer Science",university:" Imperial College London"},{name:"MEng Physics",university:"Imperial College London"}],email:"mailto:henry@turinglab.co.uk"}]}]),angular.module("turingWeb").controller("TechnologyController",["$scope",function(a){a.heading="Technology",a.details=[{header:"Programming Environment",lines:["We have developed an online platform that provides an intuitive way for children to complete projects using both scratch and python.","Children work in an environment that gradually increases in complexity as their knowledge increases","Starting from the simple scratch interface, the environment progresses to offer additional features, incorporating elements from professional platforms."]},{header:"Technology enabled Teaching",lines:["Teachers spend a lot of their time marking, planning lessons, and lecturing to their kids.","These are important aspects of education but we feel they reduce the amount of time available to teachers to focus on the needs of their class.","Our system automates many of these time consuming activities, freeing up teachers to dedicate more of their attention to students."]},{header:"Advanced Functionality",lines:["An essential part of programming is hacking together other people’s work, this allows you to do far more than you could hope to achieve alone.","We don’t expect children to start using open-source software, but we still encourage them to tackle non-trivial problems","The TuringLab team bridges this knowledge gap by providing some of this advanced functionality in a format that kids can readily understand."]}]}]),angular.module("turingWeb").controller("VideoController",["$scope","$sce",function(a,b){var c=[{name:"Code Campaign",summary:"Hear from house-hold names on why your kids should learn to code",link:"https://www.youtube.com/embed/Gjc6UX-BFks?rel=0&amp;start=0&amp;end=148&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0"},{name:"BBC Newsnight",summary:"Newsnight coverage on the UK government introducing programming to the curriculum",link:"https://www.youtube.com/embed/-7x7GYItzS4?rel=0&amp;start=0&amp;end=331&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0"},{name:"TED Conference",summary:"TED: Technology Education Design, speaking about the new curriculum and the role of the big society in helping the government deliver this curriculum",link:"https://www.youtube.com/embed/Ia55clAtdMs?rel=0&amp;start=0&amp;end=691&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0"},{name:"The Hour of Code",summary:"An american campaign run by code.org encouraging kids to learn to code, featuring Barak Obama",link:"https://www.youtube.com/embed/rH7AjDMz_dc?rel=0&amp;start=0&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0"},{name:"Karlie Kloss: Supermodel",summary:"Supermodel Karlie Kloss has started learning to code, and she explains why.",link:"https://www.youtube.com/embed/Bwiln7v0fdc?rel=0&amp;start=0&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0"},{name:"An inspired 12 year old",summary:"Tomas Suarez talks at TED about being an app developer, and his role in setting up a club at school to help others make apps",link:"https://www.youtube.com/embed/Fkd9TWUtFm0?rel=0&amp;start=0&amp;autoplay=0&amp;iv_load_policy=3&amp;autohide=1&amp;cc_load_policy=0&amp;showinfo=0"}];a.videos=[],angular.forEach(c,function(c){c.link=b.trustAsResourceUrl(c.link),a.videos.push(c)})}]),angular.module("turingWeb").directive("navbar",function(){return{restrict:"AE",templateUrl:"views/navbar.html",scope:{navigation:"=navigation"},link:function(a){a.navClass=function(b){return a.navigation.section===b?"active":void 0},a.collapse=function(){"true"===angular.element(".navbar-toggle").attr("aria-expanded")&&angular.element(".navbar-toggle").click()}}}}),angular.module("turingWeb").directive("price",function(){return{restrict:"AE",templateUrl:"views/price.html",scope:{price:"=price"}}}),angular.module("turingWeb").run(["$templateCache",function(a){a.put("views/clients.html",'<div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">Previous Partners</h2> <!-- <h3 class="section-subheading text-muted">We have worked with or for these guys, they are really great initiatives.</h3> --> </div> </div> <div class="row"> <div class="col-md-3 col-sm-6 col-md-offset-2 client-logo"> <a href="http://www.imperial.ac.uk/"> <img src="images/logos/imperial.a8a2b50c.jpg" class="img-responsive img-centered" alt=""> </a> </div> <div class="col-md-3 col-sm-6 client-logo"> <a href="https://coderdojo.com/"> <img src="images/logos/coderdojo.4157dd1f.png" class="img-responsive img-centered" alt=""> </a> </div> <div class="col-md-3 col-sm-6 client-logo"> <a href="http://www.imperialhub.org/"> <img src="images/logos/imperialhub.950d9389.jpg" class="img-responsive img-centered" alt=""> </a> </div> <!--                 <div class="col-md-3 col-sm-6">\n            <a href="#">\n                <img src="images/logos/creative-market.jpg" class="img-responsive img-centered" alt="">\n            </a>\n        </div> --> </div> </div>'),a.put("views/faq.html",'<div class="container" ng-controller="FaqController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading-yellow">{{heading}}</h2> <!-- <h3 class="section-subheading text-white">We believe that education should be inclusive, skills focused and driven by practical projects.</h3> --> </div> </div> <div class="row text-center"> <div class="col-md-4" ng-repeat="detail in details"> <h4 class="service-heading-yellow">{{detail.title}}</h4> <p class="blue text-center detail-text" ng-repeat="line in detail.lines">{{line}}</p> </div> </div> </div>'),a.put("views/footer.html",'<div class="container"> <div class="row"> <div class="col-sm-4 hidden-xs"> <p>TuringLab Limited</p> </div> <div class="col-sm-4 col-xs-12"> <ul class="list-inline social-buttons"> <li><a href="https://twitter.com/turinglab"><i class="fa fa-twitter"></i></a> </li> <!-- <li><a href="#"><i class="fa fa-facebook"></i></a>\n                </li>\n                <li><a href="#"><i class="fa fa-linkedin"></i></a>\n                </li> --> </ul> </div> <div class="col-sm-4"> <p class="copyright">Copyright &copy; TuringLab 2015 </p> <!--             <ul class="list-inline quicklinks">\n                <li><a href="#">Privacy Policy</a>\n                </li>\n                <li><a href="#">Terms of Use</a>\n                </li>\n            </ul> --> </div> </div> </div>'),a.put("views/header.html",'<!-- Header --> <div class="container"> <div class="intro-text center-header"> <div class="turing-orb"> <div class="turing-title"> <img class="orb-logo" src="images/logos/logo-clear.56103787.svg"> </div> <p class="turing-tagline lead">Inspiring children to explore the world through code</p> </div> </div></div>'),a.put("views/laboratories.html",'<div class="container" ng-controller="LaboratoriesController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading-yellow">{{heading}}</h2> </div> </div> <div class="row"> <div ng-class="lab.style" ng-repeat="lab in labs"> <div class="turing-lab white"> <h3>{{lab.name}}</h3> <p class="lead">@ {{lab.location}}</p> <div class="row lab-slots"> <div class="lab-slot" ng-class="style(lab.slots)" ng-repeat="slot in lab.slots"> <div class="lab-sphere"> <div class="lab-sphere-text vertical-center"> <h4>{{slot.name}}</h4> <p>{{slot.content}}</p> <p>{{slot.time}}</p> </div> </div> <!--                         <div class="lab-prices" ng-if="slot.prices">\n                            <h4>Session Prices</h4>\n                            <div class="lab-price lab-price-left" price="slot.prices.left">\n                            </div><div class="lab-price lab-price-right" price="slot.prices.right"></div>\n                        </div> --> </div> </div> <div ng-if="lab.link"> <div class="row"> <a class="btn-link" href="http://code.doc.ic.ac.uk"> <div class="btn btn-turing-basic btn-center"> {{lab.link}} </div> </a> </div> </div> <div ng-if="lab.mail"> <div class="row"> <a class="btn-link" href="mailto:info@turinglab.co.uk?Subject=Possible%20school" target="_top"> <div class="btn btn-turing-basic btn-center"> {{lab.mail}} </div> </a> <div id="contact-us"> if you would like us to come to your school, or to learn more about these sessions. </div> </div> </div> </div> <!--                 <div class="row lab-detail" ng-if="lab.about">\n                    <h4>Session Prices</h4>\n                    <p class="lead">{{lab.about}}</p>\n                    <div class="col-md-12 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-6 col-xs-offset-3">\n                        <p>{{lab.detail}}</p>\n                    </div>\n                </div> --> </div> </div> </div>'),a.put("views/main.html",'<div id="page-top"></div> <!-- Navigation --> <!-- <nav ng-include="\'views/navbar.html\'"></nav> --> <navbar navigation="navigation"></navbar> <!-- Header Section --> <header class="header-fixed" ng-include="\'views/header.html\'" in-view="inView(null,$inview)"></header> <!-- Overview Section --> <section id="overview" class="blue-section" ng-include="\'views/overview.html\'" in-view="inView(\'overview\',$inview)"></section> <div class="page-break group-milton"></div> <!-- Teaching Section --> <section id="teaching" class="white-section" ng-include="\'views/teaching.html\'" in-view="inView(\'teaching\',$inview)"></section> <div class="page-break henry-help"></div> <!-- Technology Section --> <!-- <section id="technology" class="blue-section" ng-include="\'views/technology.html\'" in-view="inView(\'technology\',$inview)"></section> --> <!-- <div class="page-break henry-help"></div> --> <!-- Laboratories Section --> <section id="laboratories" class="blue-section" ng-include="\'views/laboratories.html\'" in-view="inView(\'laboratories\',$inview)"></section> <div class="page-break code-groups"></div> <!-- Team Section --> <section id="team" class="white-section" ng-include="\'views/team.html\'" in-view="inView(\'team\',$inview)"></section> <!-- <div class="page-break group-discussion"></div> --> <div class="page-break imperial"></div> <!-- FAQ Section --> <!-- <section id="faq" class="white-section" ng-include="\'views/faq.html\'" in-view="inView(\'faq\',$inview)"></section> --> <!-- <div class="page-break henry-minecraft"></div> --> <!-- Contact Section --> <section id="subscribe" class="blue-section" ng-include="\'views/subscribe.html\'" in-view="inView(\'subscribe\',$inview)"></section> <!-- Video Grid Section --> <!-- <section id="video" class="white-section" ng-include="\'views/videos.html\'" in-view="inView(\'video\',$inview)"></section> --> <!-- Clients Aside --><!-- class="clients" --> <!-- <section id="clients" class="white-section" ng-include="\'views/clients.html\'" in-view="inView(\'clients\',$inview)"></section> --> <!-- <div class="page-break happy-group"></div> --> <!-- Footer --> <!-- <footer id="footer" class="white-section" ng-include="\'views/footer.html\'"></footer> -->'),a.put("views/navbar.html",'<nav class="navbar navbar-default turing-navbar navbar-fixed-top"> <div class="container"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#"> <img class="header-logo" src="images/logos/logo-clear.56103787.svg"> </a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav navbar-right"> <li ng-class="navClass(section)" ng-repeat="section in navigation.sections"> <a class="page-scroll text-capitalize" href scroll-to="{{section}}" callback-after="collapse">{{section}}</a> </li> </ul> </div> </div> </nav>'),a.put("views/overview.html",'<div class="container" ng-controller="OverviewController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading yellow">{{heading}}</h2> </div> </div> <div class="row text-center"> <div class="col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-8 col-xs-offset-2" ng-repeat="item in details"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa white fa-stack-1x" ng-class="item.icon"></i> </span> <p class="lead text-white">{{item.text}}</p> </div> </div> </div> '),a.put("views/price.html",'<p class="text-uppercase large">{{price.number}}</p> <h4>£{{price.cost}}</h4> <p>£{{price.hourly}} per hour</p>'),a.put("views/subscribe.html",'<div class="container" ng-controller="LaboratoriesController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading-yellow">Subscribe to our mailing list</h2> <h4 class="text-white">To receive TuringLab news and Laboratory updates</h4> </div> <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"> <!-- Begin MailChimp Signup Form --> <form action="//turinglab.us11.list-manage.com/subscribe/post?u=b72c64c467c178fb8a8c978cc&amp;id=736c2cbaea" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> <!-- <div id="mc_embed_signup_scroll"> --> <div class="mc-field-group"> <label for="mce-FNAME"></label> <input type="text" placeholder="First Name" name="FNAME" class="form-control" id="mce-FNAME"> </div> <div class="mc-field-group"> <label for="mce-LNAME"></label> <input type="text" placeholder="Last Name" name="LNAME" class="form-control" id="mce-LNAME"> </div> <div class="mc-field-group"> <label for="mce-EMAIL"></label> <input type="email" placeholder="Email Address" name="EMAIL" class="form-control required email" id="mce-EMAIL"> </div> <div id="mce-responses" class="text-white" class="clear"> <div class="response" id="mce-error-response" style="display:none"></div> <div class="response signup-white" id="mce-success-response" style="display:none"></div> </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> <div style="position: absolute; left: -5000px"> <input type="text" name="b_b72c64c467c178fb8a8c978cc_736c2cbaea" tabindex="-1" value=""> </div> <div class="signup-button"> <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8"> <input type="submit" value="Subscribe" name="subscribe" class="btn btn-lg btn-default col-xs-12"> </div> </div> </form> </div> </div> <div class="row"> <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"> <div id="twitter-footer"> <a href="https://twitter.com/turinglab"><i class="fa fa-twitter"></i></a> </div> </div> </div> </div> <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script> <script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[2]=\'FNAME\';ftypes[2]=\'text\';fnames[1]=\'LNAME\';ftypes[1]=\'text\';fnames[0]=\'EMAIL\';ftypes[0]=\'email\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>'),a.put("views/teaching.html",'<div class="container" ng-controller="TeachingController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">{{heading}}</h2> <!-- <h3 class="section-subheading text-white">We believe that education should be inclusive, skills focused and driven by practical projects.</h3> --> </div> </div> <div class="row text-center"> <div class="col-md-4 info_paragraph" ng-repeat="detail in details"> <h4>{{detail.title}}</h4> <p class="text-center detail-text" ng-repeat="line in detail.lines">{{line}}</p> </div> </div> </div>'),a.put("views/team.html",'<!-- Team Section --> <div class="container" ng-controller="TeamController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">{{heading}}</h2> </div> </div> <div class="row"> <div class="col-xs-12 col-xs-offset-0 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-0" ng-repeat="member in team"> <div class="team-member"> <img ng-src="{{member.image}}" class="img-responsive img-circle" alt=""> <h4 class="yellow">{{member.name}}</h4> <ul class="list-inline social-buttons"> <li ng-if="member.twitter"> <a href="{{member.twitter}}"><i class="fa fa-twitter"></i></a> </li> <li ng-if="member.facebook"> <a href="{{member.facebook}}"><i class="fa fa-facebook"></i></a> </li> <li ng-if="member.linkedin"> <a href="{{member.linkedin}}"><i class="fa fa-linkedin"></i></a> </li> <li ng-if="member.email"> <a href="{{member.email}}"><i class="fa fa-envelope"></i></a> </li> </ul> <div> <div ng-repeat="degree in member.degrees"> <strong class="large">{{degree.name}}</strong> <p class="large">{{degree.university}}</p> </div> <p>{{member.about}}</p> </div> </div> </div> </div> </div>'),a.put("views/technology.html",'<div class="container" ng-controller="TechnologyController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading-yellow">{{heading}}</h2> <!-- <h3 class="section-subheading text-white">{{subheading}}</h3> --> </div> </div> <div class="row text-center"> <div class="turing-lab white col-md-4 info_paragraph" ng-repeat="detail in details"> <h4 class="yellow">{{detail.header}}</h4> <p class="text-center detail-text" ng-repeat="line in detail.lines">{{line}}</p> </div> </div> </div>'),a.put("views/videos.html",'<div class="container" ng-controller="VideoController"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">A Global Movement</h2> <h3 class="section-subheading text-muted">All over the world governments are catching on to the fact that computing is \'THE\' skill of the future. Just watch some of these YouTube clips to hear some of the reasons why your kids should, and can learn to code.</h3> </div> </div> <div class="row"> <div class="col-md-4 col-sm-6 video-item" ng-repeat="video in videos"> <div class="video-link"> <iframe width="100%" height="100%" class="responsive-video" ng-src="{{video.link}}" frameborder="0" allowfullscreen></iframe> </div> <div class="video-caption"> <h4>{{video.name}}</h4> <p class="text-muted">{{video.summary}}</p> </div> </div> </div> </div>')}]);