import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from "@material-ui/core";
import Slider from "react-slick";
import { DiscussionEmbed } from "disqus-react";
import CustomSlide from "../../components/common/CustomSlide";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {firestore} from '../../firebase.js'

import {
  SPREADSHEET_ID,
  SHEET_ID,
  CLIENT_EMAIL,
  PRIVATE_KEY,
} from "../../components/graveyardzone/GraveyardZone";
import Comments from "../../components/Comments";

const SLIDE_IMAGES = [
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg",
  "https://images.english.elpais.com/resizer/8cNVrZOU1KaW0whQODrMSxdaofY=/768x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg",
];
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const Cemetery = (props) => {
  const { id } = props.match.params;
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([{name: "Elon", content: "Hello, I also went there.", pId: null, time: null}])


  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <Grid item xs={5}>
              {/* <Slider {...settings}>
                {SLIDE_IMAGES.map((url, i) => (
                  <CustomSlide url={url} index={i} className="img" />
                ))}
              </Slider> */}
              <img style={{ width: "100%" }} src={data["Link ảnh"]} />
            </Grid>
            <Grid className="cemetery-pet" item xs={7}>
              <Grid className="cemetery-pet-info">
                <Typography align="center" variant="h5" component="h2">
                  Giới thiệu chung
                </Typography>
                <Grid className="cemetery-pet-info-content">
                  <p>
                    <b>Tên thú cưng:</b> {data["Tên thú cưng"]}
                  </p>
                  <p>
                    <b>Tuổi thú cưng:</b> {data["Tuổi thú cưng"]}
                  </p>
                  <p>
                    <b>Ngày sinh:</b> {data["Ngày sinh"]}
                  </p>
                  <p>
                    <b>Ngày mất:</b> {data["Ngày mất"]}
                  </p>
                  <p>
                    <b>Lời từ biệt:</b> {data["Lời từ biệt"]}
                  </p>
                </Grid>
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
            <Grid className="pet-info-comment">

              {/* <DiscussionEmbed
                shortname={disqusShortName}
                config={disqusConfig}
              /> */}
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
