import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GitHubUser({name, created_at, avatar_url, company, html_url, blog}) {
  return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Img variant="top" src={avatar_url} className="mx-auto" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Joined in {created_at}
                  <br/>
                  {company}
                </Card.Text>
                <Card.Link href={html_url}>Github Profile</Card.Link>
                <Card.Link href={blog}>My Website</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(()=> {
    fetch(`https://api.github.com/users/marklreyes`)
    .then((response)=> response.json())
    .then(setData);
  }, []);
  if (data) {
    console.log("data", data);
    return (
      <>
        <Container fluid="md">
          <Row>
            <Col>
              <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              </div>
              <h1>Vite + React with Github API</h1>
              <p>A quick demo leveraging React alongside Bootstrap, useEffect hook and Github API to display a user's profile.</p>
              <GitHubUser 
              name={data.name}
              created_at={data.created_at}
              avatar_url={data.avatar_url}
              company={data.company}
              html_url={data.html_url}
              blog={data.blog}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }

}

export default App;
