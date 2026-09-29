function postComment() {
      const commentInput = document.getElementById('commentInput');
      const commentText = commentInput.value.trim();
      if (commentText !== "") {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;
        document.getElementById('comments').appendChild(commentDiv);
        commentInput.value = '';
      }
    }