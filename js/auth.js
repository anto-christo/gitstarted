// Initialize Firebase
var config = {
    apiKey: "AIzaSyBgVB3a5E7crskEMyX3dxL8-jLA_joc780",
    authDomain: "git-started-production.firebaseapp.com",
    databaseURL: "https://git-started-production.firebaseio.com",
    projectId: "git-started-production",
    storageBucket: "",
    messagingSenderId: "511844033342"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GithubAuthProvider();
provider.addScope('user');

function signInPOP() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // alert("Token : " + token);
        // The signed-in user info.
        var user = result.user;
        //alert(JSON.stringify(user));
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
function signIn() {
   
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // alert("Token : " + token);
            // ...
        }
        // The signed-in user info.
        var user = result.user;
        // alert(JSON.stringify(user));
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

function logOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        // alert("Successfully signed out");
    }).catch(function (error) {
        // An error happened.
        alert("Sign Out Error");
    });
}


$(document).ready(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
             // alert(JSON.stringify(user));
            // User is signed in.
            
            // alert(user.displayName);
            $('.sign-in-logout').html(
                `<div class="navbar-buttons" style="margin-top:20px">
                <div class="navbar-collapse collapse right">
                    <span "margin-right:8%">Hello ` + user.displayName + `,&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button type="button" class="btn btn-primary logout-btn" style="padding-right:20px;">
                        <span class="align-middle">
                           <span>LOG OUT</span>
                        </span>
                    </button>
                </div>
            </div>
            `
            );
            $('#show').html(
                `<div class="box text-center" data-animate="fadeInUp">
                <div class="container">
                    <div class="col-md-12">
                        <h3 style="font-style:italic;" >Recommended...</h3>
                        <p class="lead">Checkout these awesome repos we picked just for you !!</p>
                    </div>
                </div>
            </div>
            <div>
                <center>
                    <h2>Apply filters</h2>
                </center>
                <br>
            </div>
            <div class="container">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <center>
                <div class="slidecontainer" style="width:100%;">
                  <input type="range" min="1" max="5" value="2" class="slider" id="slider_input" onchange="slider_change()">
                </div>
            </center>
            <br>
            <div class="col-md-1">Beginner</div>
            <div class="col-md-1"></div>
            <div class="col-md-1">Advanced beginner</div>
            <div class="col-md-2"></div>
            <div class="col-md-1">Intermediate</div>
            <div class="col-md-2"></div>
            <div class="col-md-1">Advanced intermediate</div>
            <div class="col-md-2"></div>
            <div class="col-md-1">Expert</div>

            </div>
            <div class="col-md-3"></div>
            </div>
               
            </div>
            <br><br>
            <div id="filters"></div><br>
            <div class="container">
                <div id="s1"></div>
                <div id="s2"></div>
                <div id="s3"></div>
                <div id="s4"></div>
                <div id="s5"></div>
            </div>
            <div class="container" id="cards">
                <div class="col-md-12" data-animate="fadeInUp"></div>
            </div>
            <br>
            <center>
                <button type="button" class="btn btn-success refresh_button" onclick="refresh()">
                    Show me something else!
                </button>
            </center>
            <br>
            <br>`
                )
            show_recommendations();
            
        } else {
            // No user is signed in.
            $('#cards').html('')
            $('.sign-in-logout').html(
                `<div class="navbar-buttons" style="margin-top:20px">
                <div class="navbar-collapse collapse right">
                    <button type="button" class="btn btn-primary signin-btn" style="padding-right:20px;">
                        <span class="align-middle">
                             <i class="fab fa-github fa-lg" style="margin-right:8%"></i><span>SIGN IN</span>
                        </span>
                    </button>
                </div>
            </div>
            `
            );
            $('#show').html(
                `<div class="box text-center" data-animate="fadeInUp">
                <div class="container">
                    <div class="col-md-12">
                        <h3 style="font-style:italic;" >Hey there!</h3>
                        <p class="lead">Please login with your github account to see customized recommendations for you</p>
                    </div>
                </div>
            </div>

            <div class="container" id="cards">
                <div class="col-md-12" data-animate="fadeInUp"></div>
            </div>
            <br>`
                );
        }
        // var userx = firebase.auth().currentUser;

        // alert(JSON.stringify(userx));
        $('.signin-btn').click(function () {
            // alert('clicked signin');
            signInPOP();
        })

        $('.logout-btn').click(function () {
            // alert('clicked logout');
            logOut();
        })

        function lolm() {
            // alert("logo");
        }
    });

});


function slider_change()
{
    var slider = document.getElementById("slider_input");
    // console.log(slider.value)
}