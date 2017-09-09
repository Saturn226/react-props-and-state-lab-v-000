import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  getGender = () => {
    const GENDER_ICON_MALE = '♂';
    const GENDER_ICON_FEMALE = '♀';
    
  if(this.props.pet.gender === "female")
    return GENDER_ICON_MALE
  else
    return GENDER_ICON_FEMALE
}

handleClick = (e) => {
  this.props.onAdoptPet(this.props.pet.id)
}

  render() {
    //console.log(this.props.pet.age)
    

    return (
      <div className="card">
        <div className="content">
        <a className="header">Gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <p>Name:{this.props.pet.name}</p>
      
          
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
            
          </div>
          <div className="description"> 
            <p>Age:{this.props.pet.age} </p>
            
            <p>Weight:{this.props.pet.weight} </p>
           
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted === false ?
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;