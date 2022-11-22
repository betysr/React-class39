import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useParams} from "react-router-dom";
import { RotatingLines } from  'react-loader-spinner';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './product';

function ProductDetail() {
    const { id } = useParams();
    console.log("id is:", id);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try{
            if(id){
                (async () => {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                    if (!response.ok) {
                        throw new Error('Something went wrong with API!');
                    }
                    const data = await response.json();
                    setProduct(data);
                    setLoading(false);
                    
                })();
            }
        }catch(err){
            console.log(err);
        } 
    }, [id]);
    return (
        <div>
            {loading ? <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}/>
            :
            <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
                <Grid xs={12} sm={6} md={4}>
                    <Product product={product}/>
                </Grid> 
            </Grid>   
            }
        </div>
    )
}

export default ProductDetail;