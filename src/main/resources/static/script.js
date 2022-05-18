$(document).ready(function () {
    getMemos();
})

// GET API repo.findAll
function getMemos() {
    $('#contents').empty();

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
                        <div class="num">${id}</div>
                        <div class="title"><a href="view.html">${title}</a></div>
                        <div class="writer">${username}</div>
                        <div class="date">${modifiedAt}</div>
                        <div class="count">View</div>
                    </div>`
    $("#contents").append(tempHtml);
}

// POST API
function createPost() {
    $('.board-list-wrap').empty()
    $('.board-list').hide()
    $('.board-page').hide()

}