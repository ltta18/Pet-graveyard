import React, { useEffect, useState } from "react";
import Comments from "../../components/Comments";
import Slider from "react-slick";
import CustomSlide from "../../components/common/CustomSlide";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { firestore } from '../../firebase.js'
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  SPREADSHEET_ID,
  SHEET_ID,
  CLIENT_EMAIL,
  PRIVATE_KEY,
} from "../../components/graveyardzone/GraveyardZone";
import "./index.css";

// const SLIDE_IMAGES = [
//   "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
//   "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
//   "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
//   "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
//   "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
//   "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
// ];

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const Cemetery = (props) => {
  const { id } = props.match.params;
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([{ name: "Elon", content: "Hello, I also went there.", pId: null, time: null }])

  const settings = {
    customPaging: function (i) {
      const images = data['Link ảnh'].split(',')

      return (
        <a>
          <img className="small-image" src={`https://drive.google.com/uc?export=view&${images[i].split('?')[1]}`} alt="slider"/>
          {/* <img className="small-image" src={SLIDE_IMAGES[i]} /> */}
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


  useEffect(() => {
    async function getData() {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      setData(rows.filter((row) => row._rowNumber == id)[0]);
    }

    getData(); 
  }, []);


  useEffect(() => {
    firestore
      .collection(`comments`)
      .onSnapshot(snapshot => {
        const posts = snapshot.docs
        .filter(doc => doc.data().slug === id)
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setComments(posts)
      })
  }, [id])

  useEffect(() => {
    if (data) {
      // set top value for slickDots
      const slickDot = document.getElementsByClassName('slick-dots')[0];
      const sliderContainer = document.getElementsByClassName('sliderContainer')[0]
      const sliderActive = document.getElementsByClassName('slick-active')[0]
      const targetHeight = sliderContainer.clientHeight - sliderActive.clientHeight - 16
      if (slickDot) slickDot.style.top = `-${targetHeight}px`;

      // set top values for prev & next button 
      const slickPrev = document.getElementsByClassName('slick-prev')[0];
      const slickNext = document.getElementsByClassName('slick-next')[0];
      if (slickPrev) {
        slickPrev.style.top = `-${targetHeight - slickDot.clientHeight/2}px`
        slickNext.style.top = `-${targetHeight - slickDot.clientHeight/2}px`
      }
    }
  }, [data, comments])

  return (
    data && (
      <Container className="cemetery-container" maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid className="cemetery-title">
            <Typography variant="h4" component="h2">
              {data["Tên thú cưng"]}
            </Typography>
          </Grid>

          <Grid className="cemetery-content" container spacing={2}>
            <Grid item xs={5} className="sliderContainer">
              <Slider {...settings}>
                {data['Link ảnh'].split(',').map((url, i) => (
                  <CustomSlide url={`https://drive.google.com/uc?export=view&${url.split('?')[1]}`} index={i} key={i} className="img" />
                ))}
                {/* {SLIDE_IMAGES.map((url) => (
                  <CustomSlide url={url} className="img" />
                  ))} */}
              </Slider>
            </Grid>
            <Grid className="cemetery-pet" item xs={7}>
              <Grid className="cemetery-pet-info">
                <h2 style={{ margin: '0px 0px 10px', textAlign: 'center' }}>
                  GIỚI THIỆU CHUNG
                </h2>
                <Grid className="cemetery-pet-info-content">
                  {['Tên thú cưng', 'Tuổi thú cưng', 'Ngày sinh', 'Ngày mất', 'Lời từ biệt'].map((item) => {
                    return (
                      <p key={item}>
                        <b>{item}:</b> {data[item]}
                      </p>
                    )
                  })}
                </Grid>
              </Grid>
            <Grid className="pet-info-comment">
              <Comments comments={comments} slug={id} />
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Container>
    )
  );
};

export default Cemetery;
