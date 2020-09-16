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
import CustomSlide from "../../components/common/CustomSlide";

const SLIDE_IMAGES = [
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
]

const Cemetery = (props) => {
  const { id } = props.match.params;

  const settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
    //     </a>
    //   );
    // },
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

        <Grid className="cemetery-content" container spacing={2}>
          <Grid item xs={5}>
            <Slider {...settings}>
              {SLIDE_IMAGES.map((url, i) => <CustomSlide url={url} index={i} className='img' />)}
            </Slider>
          </Grid>
          <Grid className="cemetery-pet" item xs={7}>
            <Grid className="cemetery-pet-info">
              <Typography align="center" variant="h5" component="h2">
                Giới thiệu chung
              </Typography>
            </Grid>
            <Grid container className="pet-info-comment" spacing={2}>
              <Grid className="comment-box" item xs={8}>
                <InputBase
                  className="comment-input"
                  fullWidth
                  placeholder="Hãy gõ lời bạn muốn nhắn nhủ ở đây"
                />
              </Grid>
              <Grid className="comment-send" item xs={4}>
                <Button variant="contained">Thắp hương</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cemetery;
