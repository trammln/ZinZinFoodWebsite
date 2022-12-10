/*Lấy Các Phần Tử Trong Thẻ DOM*/
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");
/*Thực Hiện Vòng Lặp*/
for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");
        tabIndicator.style.left = `calc(calc(100% / 2) * ${i})`;
    });
};

function scrollToTop() {
               window.scrollTo(0, 0);
            }
    
function returnlogin() {
    document.getElementById("top").style.removeProperty('display');
    scrollToTop();
}

function openFormLogin() {
    document.getElementById("tab-container2").style.display = "none";
    document.getElementById("tab-container1").style.display = "block";
    document.body.style.setProperty('overflow', 'hidden');
    document.body.style.backgroundColor = 'rgb(0, 0, 0, 0.4)';
  }
  
function closeFormLogin() {
    document.getElementById("tab-container1").style.display = "none";
    document.body.style.removeProperty('background-color');
    document.body.style.removeProperty('overflow');
  } 

  function openFormForgot() {
    document.getElementById("tab-container1").style.display = "none";
    document.getElementById("tab-container2").style.display = "block";
    document.body.style.setProperty('overflow', 'hidden');
    document.body.style.backgroundColor = 'rgb(0, 0, 0, 0.4)';
  }
  
  function closeFormForgot() {
    document.getElementById("tab-container2").style.display = "none";
    document.body.style.removeProperty('background-color');
    document.body.style.removeProperty('overflow');
  }

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
       return false;
    }else{
       return true;
    }
}

function IsPhone(phone) {
    var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(!regex.test(phone)) {
       return false;
    }else{
       return true;
    }
}

function Register(e) {
    event.preventDefault();
    let email = document.getElementById('resemail').value;
    let phone = document.getElementById('resphone').value;
    let password = document.getElementById('respassword').value;
    let passwordagain = document.getElementById('passwordagain').value;
    var user = {
        email: email,
        phone: phone,
        password: password,
    };
    console.log(user);
    var json = JSON.stringify(user);
    if (password == "" || passwordagain == "" || email == "" || phone =="") {
        alert("Vui lòng điền đầy đủ thông tin");
    } else if (!IsEmail(email) && !IsPhone(phone)) {
        alert("Vui lòng nhập đúng định dạng thông tin");
    }
    else if (password != passwordagain) {
        alert('Mật khẩu không trùng khớp! Vui lòng kiểm tra lại!');
    }
    else {
        localStorage.setItem(email, json);
        localStorage.setItem(phone, json);
        alert('Đăng ký thành công');
        document.location.href = '03-LoginSignup.html';
        }
};

function LogIn(e) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    if (password == "" || username == "") {
        alert("Vui lòng điền đầy đủ thông tin");
    }   else if (!IsEmail(username) && !IsPhone(username)) {
        alert("Vui lòng nhập đúng định dạng");
    }
     else if ((username == data.email && password == data.password) || (username == data.phone && password == data.password)) {
        alert("Đăng nhập thành công");
        document.location.href = '02-Homepage.html';
    } else {
        alert("Đăng nhập thất bại");
    }
};


function Forgot() {
    event.preventDefault();
    var check = document.getElementById('forcheck');
    var email = document.getElementById('foremail').value;
    if (email == "") {
        alert("Vui lòng điền đầy đủ thông tin");
    } else if (!IsEmail(email)) {
        alert("Vui lòng nhập đúng định dạng email");
    }
    else {
        check.click();
        alert("Liên kết thay đổi mật khẩu sẽ được gửi đến bạn sớm, hãy kiểm tra hòm thư của bạn!");
    }
};

function Reset() {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var passwordagain = document.getElementById('passwordagain').value;
    if (password.length < 8) {
        alert("Vui lòng điền mật khẩu đủ mạnh và có ít nhất 8 ký tự");
    } else if (password != passwordagain) {
        alert("Mật khẩu không khớp! Vui lòng nhập lại");
    }
    else {
        alert("Đổi mật khẩu thành công");
        document.location.href = '03-LoginSignup.html';
    }
};

function AdminLogIn(e) {
    event.preventDefault();

    let username = document.getElementById('adminusername').value;
    let password = document.getElementById('adminpassword').value;
    
    if (password == "" || username == "") {
        alert("Vui lòng điền đầy đủ thông tin");
    }   else if (!IsEmail(username) && !IsPhone(username)) {
        alert("Vui lòng nhập đúng định dạng");
    } else{
        alert("Đăng nhập thành công");
        document.location.href = '01-ad_Dashboard.html';
    }
};

//////////////////////////// Xem mật khẩu
function togglepass() {
    var password = document.getElementById('password');
    var toggle = document.getElementById('showbtn');
    if (password.value.length > 0) {
        toggle.ariaDisabled = false;
        if (password.type == 'password') {
            password.type = 'text';
            toggle.classList.add("hide-btn");
        } else {
            password.type = 'password';
            toggle.classList.remove("hide-btn");
        }
    } else {
        toggle.ariaDisabled = true;
        alert('Vui lòng nhập thông tin vào trước')
    } 
}
function togglepass1() {
    var password1 = document.getElementById('respassword');
    var toggle = document.getElementById('showbtn1');
    if (password1.value.length > 0) {
        toggle.ariaDisabled = false;
        if (password1.type == 'password') {
            password1.type = 'text';
            toggle.classList.add("hide-btn");
        } else {
            password1.type = 'password';
            toggle.classList.remove("hide-btn");
        }
    } else {
        toggle.ariaDisabled = true;
        alert('Vui lòng nhập thông tin vào trước')
    } 
}
function togglepass2() {
    var password2 = document.getElementById('passwordagain');
    var toggle = document.getElementById('showbtn2');
    if (password2.value.length > 0) {
        toggle.ariaDisabled = false;
        if (password2.type == 'password') {
            password2.type = 'text';
            toggle.classList.add("hide-btn");
        } else {
            password2.type = 'password';
            toggle.classList.remove("hide-btn");
        }
    } else {
        toggle.ariaDisabled = true;
        alert('Vui lòng nhập thông tin vào trước')
    }    
}
function togglepass3() {
    var password3 = document.getElementById('adminpassword');
    var toggle = document.getElementById('showbtn3');
    if (password3.value.length > 0) {
        toggle.ariaDisabled = false;
        if (password3.type == 'password') {
            password3.type = 'text';
            toggle.classList.add("hide-btn");
        } else {
            password3.type = 'password';
            toggle.classList.remove("hide-btn");
        }
    } else {
        toggle.ariaDisabled = true;
        alert('Vui lòng nhập thông tin vào trước')
    } 
}
function Cancel(){
    window.location.href = '03-LoginSignup.html';
};
function Close() {
    window.close();
};
