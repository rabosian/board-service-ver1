$(document).ready(function () {
    getMemos();
    $('.write-area').hide();
    $('.board-view-wrap').hide();

    $('.back-button').hide();
    $('.edit-button').hide();
    $('.delete-button').hide();
})

// GET API repo.findAll
function getMemos() {
    $('.post-list').empty();

    $.ajax({
        type: 'GET',
        url: '/api/memos',
        success: function (res) {
            for (let i = 0; i < res.length; i++) {
                let memo = res[i]
                let id = memo.id
                let username = memo.username
                let title = memo.title
                let modifiedAt = memo.modifiedAt.slice(0, 10)
                addHTML(id, username, title, modifiedAt)
            }
        }
    })
}

function addHTML(id, username, title, modifiedAt) {
    let tempHtml = `<div id="${id}-headline" class="headline">
                        <div id="${id}-num" class="num">${id}</div>
                        <div id="${id}-title" class="title" onclick="showContents('${id}')">${title}</div>
                        <div id="${id}-username" class="username">${username}</div>
                        <div id="${id}-date" class="date">${modifiedAt}</div>
                    </div>`
    let btnWrap = `
            <div class="back-button" onclick="backtoHome()">Go Back</div>
            <div class="post-button" onclick="createPost()">Post</div>
            <div class="edit-button" onclick="editPost('${id}')">Edit</div>
            <div class="delete-button" onclick="deletePost('${id}')">Delete</div>`
    $(".post-list").append(tempHtml);
    // 안되면 empty하고 append
    $(".btn-wrap").html(btnWrap)
    $('.back-button').hide();
    $('.edit-button').hide();
    $('.delete-button').hide();

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
    } else {
        $('.board-list').hide()
        $('.board-page').hide()

        $('.write-area').show()
        $('.back-button').show()
    }

}

// GET getContents API
function showContents(id) {
    $('.board-list').hide()
    $('.board-page').hide()
    $('.post-button').hide()

    $('.board-view-wrap').show()
    $('.back-button').show()
    $('.edit-button').show()
    $('.delete-button').show();

    $.ajax({
        type: "GET",
        url: `/memos/${id}`,
        success: function(res) {
            $('.title-details').text(res.title)
            $('.contents-details').text(res.contents)
            $('.num-details').text(res.id)
            $('.username-details').text(res.username)
            $('.date-details').text(res.modifiedAt)
        }
    })

}

// PUT API
function editPost(id) {

}

// DELETE API
function deletePost(id) {
    if (confirm("Delete this post?") == true) {
        $.ajax({
            type: "DELETE",
            url: `/api/memos/${id}`,
            success: function(res) {
                alert('Delete success')
                window.location.reload()
            }
        })
    } else {
        return
    }
}

function backtoHome() {
    $('.write-area').hide()
    $('.board-view-wrap').hide()
    $('.back-button').hide()
    $('.edit-button').hide()
    $('.delete-button').hide();

    $('.board-list').show()
    $('.board-page').show()
    $('.post-button').show()
}