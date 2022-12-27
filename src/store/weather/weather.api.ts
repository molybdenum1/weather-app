import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iWeather } from "./types/weather.types";
import { iWeather5Days } from "./types/weather5forecast.types";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<iWeather, string>({
      query: (city) =>
        `weather?appid=9b4d258b0805206bc644291830b014ff&q=${city}`,
    }),
    get5DayWeatherByCity: builder.query<iWeather5Days, string | undefined>({
      query: (city) =>
        `forecast?appid=9b4d258b0805206bc644291830b014ff&q=${city}`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGet5DayWeatherByCityQuery } =
  weatherApi;
