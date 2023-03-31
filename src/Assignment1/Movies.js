import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies`)
      .then((resp) => {
        console.log("result", resp);
        setData(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Box>
        <Container sx={{ maxWidth: "1450px !important" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Typography sx={{ fontSize: "32px" }}>Top Movies List</Typography>
          </Box>
          <Grid container spacing={2}>
            {data?.map((item, index) => (
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    cursor: "pointer",
                    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
                    borderRadius: { xs: "none", md: "8px" },
                  }}
                  onClick={() => navigate(`/movie-details/${item?.id}`)}
                >
                  <Box>
                    <Box
                      component="img"
                      src="./Assets/images/12.jpg"
                      sx={{
                        width: { xs: "100%", md: "100%" },
                        height: { xs: "250px", md: "300px" },
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 2 , backgroundColor:"#f0e5d3"}}>
                    <Typography sx={{ fontSize: "28px" }}>
                      {item?.movie_name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography>Ratings : </Typography>
                      <Typography sx={{ color: "#2e7bf0" }}>
                        {item?.ratings} /10
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography>Genre :</Typography>
                      <Typography sx={{ color: "#2e7bf0" }}>
                        {item?.genre?.join(", ")}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography>Release Date :</Typography>
                      <Typography sx={{ color: "#2e7bf0" }}>
                        {item?.release_date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography>Durations :</Typography>
                      <Typography sx={{ color: "#2e7bf0" }}>
                        {item?.runtime}
                      </Typography>
                      <Typography>mins</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Movies;
