import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  useEffect(() => {
    try {
      if (id) {
        (async () => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong with API!");
          }
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        })();
      }
    } catch (err) {
      console.log(err);
    }
  }, [id]);
  return (
    <div>
      {loading ? (
        <RotatingLines
          strokeColor="green"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      ) : (
        <Paper
          sx={{
            p: 8,
            margin: "auto",
            maxWidth: 900,
            flexGrow: 1,
          }}
        >
          <Grid container>
            <Grid item>
              <Grid sx={{ width: 400, height: 400 }}>
                <Img alt="complex" src={product.image} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {product.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  €{product.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}

export default ProductDetail;
