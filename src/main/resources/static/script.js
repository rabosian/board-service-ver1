$(document).ready(function () {
    getMemos();
    $('.write-area').hide();
    $('.back-button').hide();
})

// GET API repo.findAll
function getMemos() {
    $('.post-list').empty();

    $.ajax({
        type: 'GET',
        url: '/api/memos',
        success: function (res) {
            for (let i=0; i<res.length; i++) {
                let memo = res[i]
                let id = memo.id
                let username = memo.username
                let title = memo.title
                let modifiedAt = memo.modifiedAt
                addHTML(id, username, title, modifiedAt)
            }
        }
    })
}

function addHTML(id, username, title, modifiedAt) {
    let tempHtml = `<div id="${id}-headline" class="headline">
                        <div id="${id}-num" class="num">${id}</div>
                        <div id="${id}-title" class="title"><a href="view.html">${title}</a></div>
                        <div id="${id}-username" class="username">${username}</div>
                        <div id="${id}-date" class="date">${modifiedAt}</div>
                    </div>`
    $(".post-list").append(tempHtml);
}

// POST API
function createPost() {
    if ($('.write-area').is(":visible")) {
        let title = $('#title').val();
        let username = $('#username').val();
        let contents = $('#contents').val();
        let data = {'title': title, 'username': username, 'contents': contents}

        $.ajax({
            type: "POST",
            url: "/api/memos",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (response) {
                alert(`Post success!`)
                window.location.reload()
            }
        })
    }
    else {
        $('.write-area').show()
        $('.board-list').hide()
        $('.board-page').hide()
        $('.back-button').show()
    }

}

function backtoHome() {
    $('.write-area').hide()
    $('.board-list').show()
    $('.board-page').show()
    $('.back-button').hide();
}