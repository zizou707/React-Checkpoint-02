import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import players from './Players'

function Player({ImageUrl,FullName,Team,Nationality,JerseyNumber,Age}) {
   
  return (
   
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:"350px" , height:"400px"}} src={ImageUrl} />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold",fontSize:"1.6rem" ,fontFamily:"'Courier New', Courier, monospace"}}>{FullName}</Card.Title>
        <Card.Text style={{fontFamily:"Georgia, 'Times New Roman', Times, serif",fontSize: "large",fontWeight:"bold"}}>
          Team : {Team}
        </Card.Text>
        
      </Card.Body>
      <ListGroup  className="list-group-flush">
        <ListGroup.Item >Nationality : {Nationality}</ListGroup.Item>
        <ListGroup.Item >Age : {Age}</ListGroup.Item>
        <ListGroup.Item >JerseyNumber : {JerseyNumber}</ListGroup.Item>
      </ListGroup>
      
    </Card>
   )
}
Player.defaultProps={ FullName: "Player Name",
Team: "Team Name",
Nationality: "Nationality",
JerseyNumber: 0,
Age: 0,
ImageUrl: "https://via.placeholder.com/150"}

export default Player;