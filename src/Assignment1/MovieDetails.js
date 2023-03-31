import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
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
      <Container sx={{ maxWidth: "1300px !important" }}>
        <Box
          sx={{
            boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
            borderRadius: "8px",
            mt: 2,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#2b93e3"
            p={2}
          >
            <Typography
              sx={{ fontSize: { xs: "26px", md: "42px" }, color: "#ffff" }}
            >
              {data?.movie_name}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Box sx={{ p: 2, backgroundColor: "#e1e5eb " }}>
                <Box sx={{mb:2}}>
                  <Typography sx={{ fontSize: { xs: "26px", md: "42px" } }}>
                    {data?.movie_name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography>Release :</Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.release_date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography>Time :</Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.runtime}
                    </Typography>
                    <Typography> mins</Typography>
                  </Box>
                </Box>
                <Divider color="#131317" />
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "18px", md: "22px" } }}>
                      Genre :{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.genre?.join(" , ")}
                    </Typography>
                  </Box>

                  <Divider color="#131317" />

                  <Box
                    sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "18px", md: "22px" } }}>
                      Description:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.description}
                    </Typography>
                  </Box>

                  <Divider color="#131317" />

                  <Box
                    sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "18px", md: "22px" } }}>
                      Director:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.director}
                    </Typography>
                  </Box>
                  <Divider color="#131317" />
                  <Box
                    sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "18px", md: "22px" } }}>
                      Star:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.cast?.join(" , ")}
                    </Typography>
                  </Box>
                  <Divider color="#131317" />
                  <Box
                    sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "18px", md: "22px" } }}>
                      producer:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "20px" },
                        color: "#2e7bf0",
                      }}
                    >
                      {data?.producer}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default MovieDetails;
