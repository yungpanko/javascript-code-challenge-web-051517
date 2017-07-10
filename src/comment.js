class Comment {
  constructor(commentText) {
    this.text = commentText
  }

  render() {
    return `<li>${this.text}</li>`
  }
}
