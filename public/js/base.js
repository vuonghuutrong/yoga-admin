$(document).ready(function () {
    console.log(CONSTANT.baseApiEndpoint);
    $(".form").submit(function (e) {
        e.preventDefault();
    });
});

const JsBase = {
    request(option) {
        let data = {};
        if (option.formData && !option.data) {
            data = JsBase.serializeForm(option.formData);
        }
        if (option.type?.toUpperCase() !== 'GET') {
            data = JSON.stringify(data);
        }
        $.ajax({
            url: CONSTANT.baseApiEndpoint + option.url,
            type: option.type || 'GET',
            contentType: 'application/json',
            dataType: 'json',
            data: data,
            success: option.success,
            error: (xhr) => {
                option?.error(xhr.responseJSON, xhr.status);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer t-7614f875-8423-4f20-a674-d7cf3096290e');
            },
        }).done(function (res) {
            console.log('done', res);
        });
    },
    serializeForm($form) {
        const formData = $form.serializeArray();
        return _.mapValues(_.keyBy(formData, 'name'), 'value');
    },
    alert(type, message) {
        var wrapper = document.createElement('div')
        wrapper.className = `alert alert-${type} alert-dismissible alert-float`;
        wrapper.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`
        document.body.append(wrapper)
        setTimeout(() => {
            wrapper.remove();
        }, 3000);
    }
}