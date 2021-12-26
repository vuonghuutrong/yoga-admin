$(document).ready(function() {
    console.log(123);
    
    $(".form").submit(function (e) {
        JsBase.request({
            type: 'post',
            url: 'auth/login',
            formData: $(this),
            success(res) {
                console.log(res);
            },
            error(res) {
                console.log(res.message);
                JsBase.alert('danger', res.message);
            }
        });

        // JsBase.request({
        //     type: 'get',
        //     url: 'companies',
        //     data: {page: 1},
        //     success(res) {
        //         console.log(res);
        //     }
        // });
    });

});