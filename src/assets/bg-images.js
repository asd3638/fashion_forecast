import clear_sky from "./clear_sky.jpg";
import few_clouds from "./few_clouds.jpg";
import scattered_clouds from "./scattered_clouds.jpg";
import broken_clouds from "./broken_clouds.jpg";
import overcast_clouds from "./overcast_clouds.jpg";
import shower_rain from "./shower_rain.jpg";
import rain from "./rain.jpg";
import thunderstorm from "./thunderstorm.jpg";
import snow from "./snow.jpg";
import mist from "./mist.jpg";

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
