class UserForm {
  static render() {
    return `
    <form id="user-form">
      <label for="user-name"> Name </label>
      <input type='text' id="user-name" name="user-name">

      <button type="button" id="save-user" class="btn btn-warning"> Save Game </button>

    </form>
    `
  }
  static renderOnPage() {
    $('#user-form-container').html(this.render())
  }
}
