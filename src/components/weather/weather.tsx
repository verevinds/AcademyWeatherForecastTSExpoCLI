import {useForecast} from 'hooks/useForecast';
import React from 'react';
import {
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import styles from './weather.styles';
import {checkForecastType} from 'utils/checkForecastType';
import Placeholder from 'components/placeholder/placeholder';
import WeatherTile from 'components/weather-tile/weather-tile';
import {Forecastday} from 'types/api/forecast';

type WeatherProps = {
  city: string | null;
};
const Weather = ({city}: WeatherProps): JSX.Element | null => {
  const {data, isFetching, isLoading} = useForecast(city);

  const renderItem: ListRenderItem<Forecastday> = ({item}) => (
    <View style={styles.Weather__containerTile} key={item.date}>
      <WeatherTile day={item} />
    </View>
  );

  if (data) {
    return (
      <View style={styles.Weather__slider}>
        <FlatList
          data={checkForecastType(data)?.forecast.forecastday}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.date}
          snapToAlignment="center"
          snapToStart
          snapToEnd
          snapToInterval={246}
          decelerationRate="fast"
        />
      </View>
    );
  }

  return <Placeholder isFetching={isFetching || isLoading} />;
};

export default Weather;
