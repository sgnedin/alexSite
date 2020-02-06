$('#btnForm').click(function () {
    
    var errors = [];
    var numbers = [1,2,3,4,5,6,7,8,9];
    // console.log(numbers);
    userName = $('#fullname');
    if(userName.val() == '')
    {
        userName.attr('placeholder', 'Введите имя!');
        $('body').append('<style>input[id="fullname"]::-webkit-input-placeholder {color: red; }</style> ')
        errors.push('username');
    }
    userPhone = $('#userphone');
    if(userPhone.val() == '')
    {
        userPhone.attr('placeholder', 'Введите телефон!');
        $('body').append('<style>input[id="userphone"]::-webkit-input-placeholder {color: red; }</style> ')
        errors.push('userphone');
    }
    userComment = $('#userComment').val();

    // console.log(errors);
    if(errors.length == 0)
    {
        alert ('Ваш номер телефона отправлен, ждите звонок!')
        $.ajax({
            url: 'phpScripts/mail.php',
            method: "POST",
            dataType: "JSON",
            data: {
                user_name: userName.val(),
                user_phone: userPhone.val(),
                user_comment: userComment
            },
            success: function() {
                console.log('that is ok');
            },
        });
    }
    

    
});
