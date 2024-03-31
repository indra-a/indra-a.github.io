import Grid from '@mui/material/Grid'; 
import Icon from '@mui/material/Icon'; 
import React, {Component} from "react";
import profilepic from "../images/picture.jpg"

class IntroRow extends Component {
    render() {
      const name = "Indra Ariunbold"
      const description = "ML developer | BA in Finance | MS in Applied Data Science | Fulbright Alumni | CFA Level 1 "
      const social = [
            {
                "name":"linkedin",
                "url":"https://www.linkedin.com/in/indra-ariunbold/",
                "className":"fa fa-linkedin"
            },
            {
                "name":"instagram",
                "url":"https://www.instagram.com/_a.indra_",
                "className":"fa fa-instagram"
            },
            {
                "name":"github",
                "url":"https://github.com/indra-a",
                "className":"fa fa-github"
            }
        ].map(function(socials){
            return (
                <li key={socials.name}>
                    <a href={socials.url}>
                    <Icon baseClassName="fas" className={socials.className} />
                    </a>
                </li>
            )
        })
  
      return (
        <div className='Intro'>
            <Grid container spacing={4}>
                <Grid item xs={12} md={2} style = {{"text-align": "start"}}>
                    <img
                    className="profile-pic"
                    src={profilepic}
                    alt="Profile Pic"
                    />
                </Grid>
                <Grid item xs={12} md={10} style = {{"text-align": "justify"}}>
                    <h1 className="responsive-headline">{name}</h1>
                    <p>{description}</p>
                    <ul className='sns'>{social}</ul>
                </Grid>
                <hr/>
            </Grid>
        </div>
      )
    }
  }

export default IntroRow;