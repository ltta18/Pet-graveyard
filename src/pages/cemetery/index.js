import React from "react";
import "./index.css";
import {
  Button,
  Container,
  Grid,
  InputBase,
  Typography
} from "@material-ui/core";
import Slider from "react-slick";
import icon from '../../img/incense.svg';
import CustomSlide from "../../components/common/CustomSlide";

const SLIDE_IMAGES = [
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
]

const Cemetery = (props) => {
  const { id } = props.match.params;

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className="small-image" src={SLIDE_IMAGES[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container className="cemetery-container" maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Grid className="cemetery-title">
          <Typography variant="h4" component="h2">
            {id}
          </Typography>
        </Grid>

        <Grid className="cemetery-content" container spacing={6}>
          <Grid
            item
            sm={4}
            xs={12}
            className="sliderContainer"
          >
            <Slider {...settings}>
              {SLIDE_IMAGES.map((url, i) => <CustomSlide url={url} index={i} className='img' />)}
            </Slider>
          </Grid>
          <Grid className="cemetery-pet" item sm={8} xs={12}>
            <Grid className="cemetery-pet-info">
              <Typography align="center" variant="h5" component="h2">
                Giới thiệu chung
              </Typography>
            </Grid>
            <Grid container className="pet-info-comment" spacing={1}>
              <Grid
                className="comment-box"
                item
                sm={8}
                xs={12}
              >
                <InputBase
                  className="comment-input"
                  fullWidth
                  placeholder="Hãy gõ lời bạn muốn nhắn nhủ ở đây"
                />
              </Grid>
              <Grid
                item
                className="comment-send"
                sm={4}
                xs={12}
                direction="column"
                justify="flex-end"
              >
                <img 
                  src={icon}
                  className="icon"
                  alt="incense-icon"
                />
                <Button
                  className="incense-button" 
                  variant="contained"
                >
                  Thắp hương
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cemetery;
