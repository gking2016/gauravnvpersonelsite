import React from "react";

function Contact() {
  return (
    <div className="Contact_Section">
      <p style={{ textAlign: "center" }}>
        home <i class="fas fa-angle-right"></i> Contact
      </p>
      <div className="padding-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <h1>Contact</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="input">
                    <i class="far fa-user"></i>
                    <input type="text" placeholder="Name" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="input">
                    <i class="far fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="input2">
                    <i class="far fa-comment-alt"></i>
                    <textarea type="text" placeholder="Message.." />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <br />

                  <button type="submit" className="btn btn-primary">
                    Send<i class="fas fa-paper-plane"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Contact;
