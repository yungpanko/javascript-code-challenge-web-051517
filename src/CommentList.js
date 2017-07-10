class CommentList {
  constructor() {
    this.comments = []
    this.filteredComments = []
  }

  addComment(comment) {
    this.comments.push(comment)
  }

  searchFilter(searchTerm) {
    this.filteredComments = this.comments.filter(comment => {
      return comment.text.includes(searchTerm)
    })
  }

  render() {
    $('#comments-list').empty()
    this.comments.map(comment => {
      $('#comments-list').append(comment.render())
    })
  }

  renderFilteredComments() {
    $('#comments-list').empty()
    this.filteredComments.map(comment => {
      $('#comments-list').append(comment.render())
    })
  }
}
