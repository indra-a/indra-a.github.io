import Grid from '@mui/material/Grid'; 
import React, {Component} from "react";
import Projects from './Projects';
import Typography from '@mui/material/Typography';

class MainRow extends Component {
    render(){
        const articles = [
                {
                    "name": "Beginner’s Guide to Portfolio Optimization with Python from Scratch",
                    "date": "May 9, 2020",
                    "desc": "You may have heard this these words before: “Never put all of your eggs in one basket”. It basically means that you shouldn’t solely rely on one or two stocks. Instead you should diversify so that if the basket A with all contained “eggs” goes “south”, you would still have basket B, basket C and so on.",
                    "url": "https://medium.com/@a.indraaa/beginners-guide-to-portfolio-optimization-with-python-from-scratch-4ca115338aa1"
                },
                {
                    "name": "How I made Mongolian economy dashboard using R Shiny",
                    "date": "Nov 20, 2019",
                    "desc": "Analysis of raw data is only half of the job. You have to know how to present all findings, visualize key insights and statistics. There are tons of data visualization tools out there and it is up to you what tool to use. In my case I use R Shiny for interactive dashboards and visualizations. ",
                    "url": "https://medium.com/@a.indraaa/how-i-made-mongolias-economy-dashboard-using-r-shiny-6c328d0f8598"
                }
            ].map(function(article){
                return(
                    <li>
                        <h4><a href = {article.url}>{article.name}</a></h4>
                        <Typography variant="body2" color="text.secondary">{article.date}</Typography>
                        <Typography variant="body2" color="text.secondary">{article.desc}</Typography>
                    </li>
                )
            })

        return(
            <div className='MainRow'>
                <Grid container spacing={3}>
                    <Grid xs={12} md={8}>
                        <h2>
                           Projects 
                        </h2>
                        <Projects/>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <h2>
                           Articles 
                        </h2>
                        <ul>
                            {articles}
                        </ul>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainRow;