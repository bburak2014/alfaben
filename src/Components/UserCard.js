import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row,Modal,Form,Button } from "react-bootstrap";
function UserCard({ item,getuser,setuser }) {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(item.name);
  const [mail, setMail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);
  const [site, setSite] = useState(item.website);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const changeStyle = () => {
    setActive(!isActive);
  };
   const handleEdit = () => {
    const EditdUser = getuser.findIndex((filr) => filr.name === item.name);

   getuser[EditdUser].name=name;
   getuser[EditdUser].email=mail;
   getuser[EditdUser].phone=phone;
   getuser[EditdUser].website=site;
   handleClose()

  };

  const handleRemove = () => {
    const filteredUser = getuser.filter((filr) => filr.name !== item.name);
    setuser(filteredUser);
  };
 

  return (
    <Col xs={12} md={6} lg={4} xl={3}>
  
    <Card className="mb-4 p-1" >
      <Card.Img variant="top" src={`https://avatars.dicebear.com/v2/avataaars/${item.id}.svg?options[mood][]=happy`}  width={200}
    height={200}/>
      <Card.Body className="Pbody">
        <div className="itemheader">{item.name}</div>
        <Card.Text>
          <li className="ptext">
            <i className="fa-regular fa-envelope icon"></i>
            <span>{item.email}</span>{" "}
          </li>
          <li className="ptext">
            {" "}
            <i className="fa-solid fa-phone-flip icon"></i>
            <span>{item.phone}</span>{" "}
          </li>
          <li className="ptext">
            {" "}
            <i className="fa-solid fa-globe icon"></i>
            <span>http://{item.website}</span>
          </li>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className="cardfooter">
          <Col>
            <div className="footerIcon">
              {" "}
              <i
                onClick={changeStyle}
                className={
                  isActive
                    ? "fa-solid fa-heart icon"
                    : "fa-regular fa-heart icon"
                }
              ></i>
            </div>
          </Col>
          <Col>
            <div className="footerIcon" onClick={handleShow}>
              <i className="fa-regular fa-pen-to-square icon"></i>
            </div>
          </Col>
          <Col>
            <div className="footerIcon" onClick={handleRemove}>
              <i className="fa-solid fa-trash icon"></i>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={item.name}
                autoFocus
                onChange={(e)=>(setName(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                defaultValue={item.email}
                autoFocus
                onChange={(e)=>(setMail(e.target.value))}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                defaultValue={item.phone}
                autoFocus
                onChange={(e)=>(setPhone(e.target.value))}

              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Web Site</Form.Label>
              <Form.Control
                type="text"
                defaultValue={"http://"+(item.website)}
                 autoFocus
                 onChange={(e)=>(setSite(e.target.value))}

              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button   variant="primary" onClick={handleEdit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
 
    </Col>
  );
}

export default UserCard;
