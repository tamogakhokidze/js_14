//localStorage, sessionStorage, cookies

//localstorage -  ბრაუზერის დახურვის დროს არ იშლება, წაიშლება ქეშების გასუფთავების დროს
//setitem ( 2 parameters: Key, Value) მონაცემის შენახვა
//getitem ( 1 paratemeters: Key) მონაცემის ამოღება
//removeitem (1 paratemeters: key) მონაცემის წაშლა

//sessionStorage.setitem - იშლება ბრაუზერის დახურვის დროს

//cookies - ინფორმაცია სერვერზეც იგზავნება

//document.cookie = notification ვერ გვერდის გახსნისას
//js cookies ბიბლიოთეკა

// cookies.set
// cookies.get
// cookies.remove

//cdn link დამატება ბიბლიოთეკის დასაკავშირებლად.

let formLogin = document.getElementById('login');

formLogin.addEventListener('submit', function(e){
    e.preventDefault;

    let checkbox = document.getElementById('save');
    if (checkbox.checked) {
        let usernameValue = document.getElementById('username').ariaValueMax;

        Cookies.set('usersUsernameValue', usernameValue); 
    }
    else {
        Cookies.remove('usernameValue');
    }
    e.target.submit();

});

let shenaxuliUsername = Cookies.get('usersUsernameValue');


if (shenaxuliUsername) {
    document.getElementById('username').value = shenaxuliUsername;
    document.getElementById('save').checked =  true;
    
}