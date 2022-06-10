import React from 'react'

function User(props) {
    return (
        <center>
                 <div>
           <h1>UserName:{props.username}</h1>
            <h1>Name:{props.surname}</h1>
            <h1>Surname:{props.name}</h1>
            <img src={props.img} width="1350" height="400"></img>
              </div>
         </center> 

        
    )
}

export default User