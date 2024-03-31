import React, {Component} from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon'; 
import { Grid } from "@mui/material";

class Projects extends Component {
    render(){
        const projects = [
            {
                "img": "3.png",
                "name": "End-to-end Object Detection for Fovea Location of AMD Patients",
                "url": "https://github.com/indra-a/object-detection-project.git",
                "desc": "In this project, my goal is to experiment with different Computer Vision model architectures and parameters in context of Single Object Detection problem. Starting with simple architecture and no additional regularization all the way to complex structures and regularizations, I built different models and compared their performance. The purpose of this project is to experiment with different combinations of model structure and model parameters using MLFlow.",
                "tools": [
                    {'name':"PyTorch"}, 
                    {'name':"MLflow"}, 
                    {'name':"Streamlit"}
                ]
            },
            {
                "img": "1.png",
                "name": "FastAPI for Mongolian-English Translation",
                "url": "https://github.com/indra-a/translation-api",
                "desc": "This repository contains a FastAPI application for translating between Mongolian and English languages. The application is dockerized for easy deployment and scalability. This application utilizes Meta's No Language Left Behind (NLLB) model",
                "tools": [
                    {'name':"Docker"}, 
                    {'name':"FastAPI"},
                    {'name':'No Language Left Behind (NLLB)'}
                ]
            }
        ].map(function(project){
            const image = require("../images/"+project.img)
            const tools = project.tools.map(function(tool){
                return(
                    <Chip label={tool.name} />
                )
            })
            return (
                <li>
                    <Grid container spacing={1}>
                        <Grid xs={12} md={3}>
                            <img
                                className="profile-pic"
                                src={image}
                                alt="Profile Pic"
                            />
                        </Grid>
                        <Grid className="project-body" xs={12} md={8}>
                            <Typography gutterBottom variant="h6" component="div">
                                {project.name}
                            </Typography>
                            <Typography>
                                <Stack direction="row" spacing={1}>{tools}</Stack>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.desc}
                            </Typography>
                            <Button size="small" href={project.url}><Icon baseClassName="fas" className="fa fa-github"/>Github</Button>
                        </Grid>
                    </Grid>
                    
                    <hr/>
                </li>
              );
        })
        
        return(
            <div className='Projects'>
                <ul>
                    {projects}
                </ul>
            </div>
        )
    }
}

export default Projects;