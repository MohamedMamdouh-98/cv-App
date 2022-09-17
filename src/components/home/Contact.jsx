import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  //gmail
  const [addGmail, setAddGmail] = useState("");
  const [gmail, setGmail] = useState("");

  //phone
  const [addPhone, setAddPhone] = useState();
  const [phone, setPhone] = useState();

  //linkedin
  const [addLinkedin, setAddLinkedin] = useState("");
  const [linkedin, setLinkedin] = useState("");

  //github
  const [addGithub, setAddGithub] = useState("");
  const [github, setGithub] = useState("");

  const addContact = () => {
    //gmail
    setGmail(addGmail);
    setAddGmail("");
    //phone
    setPhone(addPhone);
    setAddPhone("");
    //Linkedin
    setLinkedin(addLinkedin);
    setAddLinkedin("");
    //github
    setGithub(addGithub);
    setAddGithub("");
  };

  //Edit Contact
  const EditContact = () => {
    //gmail
    setAddGmail(gmail);
    setGmail("");
    //phone
    setAddPhone(phone);
    setPhone("");
    //Linkedin
    setAddLinkedin(linkedin);
    setLinkedin("");
    //github
    setAddGithub(github);
    setGithub("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="mb-5">
      <h2>Contact</h2>
      <Row>
        <Col>
          <form onSubmit={handleOnSubmit} className="d-flex flex-column gap-2">
            <input
              type="email"
              onChange={(e) => setAddGmail(e.target.value)}
              value={addGmail}
              placeholder="enter gmail"
            />

            <input
              type="number"
              onChange={(e) => setAddPhone(e.target.value)}
              value={addPhone}
              placeholder="enter phone"
            />

            <input
              type="email"
              onChange={(e) => setAddLinkedin(e.target.value)}
              value={addLinkedin}
              placeholder="enter linkedin"
            />
            <input
              type="email"
              onChange={(e) => setAddGithub(e.target.value)}
              value={addGithub}
              placeholder="enter github"
            />
            <button type="submit" onClick={() => addContact()}>
              Add
            </button>
          </form>
        </Col>
        <Col>
          <div>
            <p>
              gmail: <h3>{gmail}</h3>
            </p>
            <p>
              phone: <h3>{phone}</h3>
            </p>
            <p>
              linkedin: <h3>{linkedin}</h3>
            </p>
            <p>
              github: <h3>{github}</h3>
            </p>
          </div>
          {gmail && phone && linkedin && github ? (
            <button onClick={() => EditContact()}>Edit Contact</button>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
