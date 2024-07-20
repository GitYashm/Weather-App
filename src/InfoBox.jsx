import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function InfoBox({ info }) {
  let weatherURL =
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/03/1686290-dust-storm-ians.jpg";
  let Hot_URL =
    "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg";
  let Cold_URL =
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  let Rainy_URL =
    "https://i0.wp.com/thechampatree.in/wp-content/uploads/2019/07/stay-healthy-in-rainy-season-01.jpg?ssl=1";

  return (
    <div className="info">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={
              info.humidity > 80
                ? Rainy_URL
                : info.temp > 20
                ? Hot_URL
                : Cold_URL
            }
            title="green iguana"
          />
          <CardContent className="cardcontent">
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <BeachAccessIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            {/* for deg in tempreture we use {&deg;} */}
            <Typography variant="body2" color="text.secondary">
              <h4>Tempreture = {info.temp}&deg;C</h4>
              <h4>Max Tempreture = {info.tempMax}&deg;C</h4>
              <h4>Min Tempreture = {info.tempMin}&deg;C</h4>
              <h4>Humidity = {info.humidity}</h4>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
