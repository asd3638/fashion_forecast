import clear_sky from "./bg-images/clear_sky.jpg";
import few_clouds from "./bg-images/few_clouds.jpg";
import scattered_clouds from "./bg-images/scattered_clouds.jpg";
import broken_clouds from "./bg-images/broken_clouds.jpg";
import overcast_clouds from "./bg-images/overcast_clouds.jpg";
import shower_rain from "./bg-images/shower_rain.jpg";
import rain from "./bg-images/rain.jpg";
import thunderstorm from "./bg-images/thunderstorm.jpg";
import snow from "./bg-images/snow.jpg";
import mist from "./bg-images/mist.jpg";

export const BG_IMAGES = [
  clear_sky,
  few_clouds,
  scattered_clouds,
  broken_clouds,
  overcast_clouds,
  shower_rain,
  rain,
  thunderstorm,
  snow,
  mist,
];

export const RELEVANT = {
  Thunderstorm: thunderstorm,
  Drizzle: rain,
  Rain: rain,
  Snow: snow,
  Mist: mist,
  Smoke: mist,
  Haze: mist,
  Dust: mist,
  Fog: mist,
  Sand: mist,
  Ash: mist,
  Squall: mist,
  Tornado: mist,
  Clear: clear_sky,
  Clouds: few_clouds,
};
