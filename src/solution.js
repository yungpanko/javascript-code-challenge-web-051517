$(document).ready(function () {
  // your code here!
  let commentList = new CommentList()
  commentListener(commentList)
  commentFilter(commentList)
})


function commentListener(commentList) {
  $('#note-form').on("submit", function (event) {
    let commentText = $('#note-form > input[type="text"]').val()
    let comment = new Comment(commentText)
    commentList.addComment(comment)
    commentList.render()
    $('#note-form > input[type="text"]').val('')
    event.preventDefault();
  })
}

function commentFilter(commentList) {
  $('#search-form').on("submit", function (event) {
    let searchTerm = $('#search-form > input[type="text"]').val()
    commentList.searchFilter(searchTerm)
    commentList.renderFilteredComments()
    $('#search-form > input[type="text"]').val('')
    event.preventDefault();
  })
}
