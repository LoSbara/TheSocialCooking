import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../style/Style.css';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function Added() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [adding, setAdd] = useState([]);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [fileDataURL, setFileDataURL] = useState();

  async function sendForm() {
    console.log(file, name, desc, adding, message);
    const res = await fetch("http://localhost:8080/added", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          file: file,
          name: name,
          desc: desc,
          ingredients: ingredients,
      })
    }).then(response => {
      console.log("res: " + response);

      if(response.ok){
        console.log("response ok");

        window.location.replace("/profile")
      }
    });

    console.log(file, name, desc, adding)
    if (res.status === 200) {
      setFile("");
      setName("");
      setDesc("");
      setAdd("");
      setMessage("Recipe created successfully");
    } else {
      setMessage("Some error occured");
    }
  }

  function addIngridients(adding) {
    
    setIngredients(
      [...ingredients, adding]
      )
  }

  function removeIngridients(x) {
    setIngredients(
      ingredients = ingredients.splice(x, 1)
    )
  }

  const changeHandler = (e) => {
    const file = e.target.files[0];
    console.log("file: ", file);
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }

  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        console.log(file)
        if (file && !isCancel) {
          setFileDataURL(file);
          console.log("file ", file)
          console.log("file data url", fileDataURL)
        }
      }
      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  return (
    <div className = "form-container">
        <Card style={{ width: '18rem' }} className = "form-added">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Insert image</Form.Label>
            <div>
              <Form.Control
                type="file"
                id = 'image'
                accept='.png, .jpg, .jpeg'
                onChange={changeHandler}
              />
            </div>
          </Form.Group>
          {fileDataURL ?
            <p className="img-preview-wrapper">
        
              {
                <img src={fileDataURL} alt="preview" width={"250px"} height={"250px"} />
              }
            </p> : null}
          <Card.Body>
            <Card.Title>
                <div className="form-group">
                  <input type="text" 
                    className="form-control" 
                    id="recipe-title" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter recipe's name"
                    onChange={(e) => setName(e.target.value)}/>
                </div>
            </Card.Title>
            <Card.Text>
                <div className="form-group">
                  <input type="text" 
                    className="form-control" 
                    id="recipe-description" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    onChange={(e) => setDesc(e.target.value)}/>
                </div>
            </Card.Text>
            <label for="addingItem">Adding ingridient</label>
            <div className = "form-adding">
                <div className="form-group">
                  <input type="text" 
                    value={adding}
                    className="form-control" 
                    id="adding" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter ingridient" 
                    onChange={(e) => setAdd(e.target.value)} />
                </div>
                <button type="submit" 
                  className="btn btn-outline-secondary" 
                  id = "addIngridient" 
                  onClick = {() => addIngridients(adding)}>+</button>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
          {
            ingredients.map(x => (
              <ListGroup.Item className = "list-item">
                <Row>
                  <Col md = "8">
                    <span className = "item">{x}</span>
                  </Col>
                  <Col md = "4">
                    <button type="submit" 
                      className="btn btn-outline-danger" 
                      id = "removeIngridient" 
                      onClick = {() => removeIngridients(x)}>-</button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
          </ListGroup>
          <Card.Body className = "form-button">
            <Link to = "/profile"><button type="submit" className="btn btn-outline-danger">Cancel</button></Link>
            <Link to = "/profile"><button type="submit" className="btn btn-outline-primary" onClick={e => sendForm()}>Confirm</button></Link>
          </Card.Body>
        </Card>
    </div>
  );
};


export default Added;