function CodeAria() {
    return (
      <>
      <div className="d-flex flex-column vh-100">
        <textarea
          name="postContent"
          className="form-control h-100"
          placeholder="Leave a JSON here"
          id="floatingTextarea"
        />
      </div>
    </>
    );
}

export default CodeAria;