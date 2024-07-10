import { Grid, Typography } from "@material-ui/core";

import welcome from './welcome.css';



const Welcome = (props) => {
  return (
    <Grid container item direction="column" alignItems="center" justify="center">
      
    





      
        <div class="caption header-text"
          style={{ position: "absolute",top: "0",left: "0", bottom: "7px",width: "100%"
            }}>

              <div style={{textAlign: "center",position: "absolute",width: "60%",left: "50%",top: "50%",
                            transform: "translate(-50%,-50%)",background:"rgba(0,0,0,0)"}}>
                <Grid item >
                  <Typography variant="h6" style={{marginTop: "100px",fontSize: "18px",
                      textTransform: "uppercase",fontWeight: "800",color: "#FFFFFF",
                      letterSpacing: "0.5px"}}>FACING DIFFICULTIES IN FINDING SUITABLE JOB </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h2" 
                  style={{marginTop: "30px",marginBottom:"100px",textTransform: "uppercase",
                  fontWeight: "800",color: "#031991",letterSpacing: "1px"}}>
                    FIND THE PERFECT <em style={{fontStyle: "normal",color: "#FFFFFF",fontWeight: "900"}}><div class="col-md-12 text-center"><h2 class="animate-charcter">JOB</h2></div></em>
                  </Typography>
                  
                </Grid>
                
              </div> 
              
        </div>
    
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
