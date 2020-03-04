import React from "react";

const EditNote = () => {
  return (
    <div className="container m-t-20">
      <h1 className="page-title">Edit Note</h1>​
      <div className="newnote-page m-t-20">
        <form>
          <div className="field">
            <label className="label">Note Title</label>
            <div className="control">
              <input className="input" type="text" placeholder="Note Title" />
            </div>
          </div>
          ​
          <div class="field">
            <label class="label">Note Content</label>
            <div class="control">
              <textarea
                class="textarea"
                rows="10"
                placeholder="Note Content here..."
              ></textarea>
            </div>
          </div>
          ​
          <div class="field">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
