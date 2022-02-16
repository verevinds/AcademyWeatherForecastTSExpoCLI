import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styles from './background-image.styles';
import VectorFirst from 'assets/vector1.svg';
import VectorSecond from 'assets/vector2.svg';
import VectorThird from 'assets/vector3.svg';
import VectorFourth from 'assets/vector4.svg';
import VectorFifth from 'assets/vector5.svg';

const BackgroundImage = (props: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <View style={styles.BackgroundImage__view}>
      <VectorFirst
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_first,
        ]}
      />
      <VectorSecond
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_second,
        ]}
      />
      <VectorThird
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_third,
        ]}
      />
      <VectorFourth
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_fourth,
        ]}
      />
      <VectorFifth
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_fifth,
        ]}
      />
      {props.children}
      <Text style={styles.BackgroundImage__sign}>
        с любовью от mercury development
      </Text>
    </View>
  );
};

export default BackgroundImage;
