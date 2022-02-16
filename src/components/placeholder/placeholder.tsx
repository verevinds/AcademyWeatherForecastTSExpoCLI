import React, {Fragment} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import placeholderMessage from './placeholder.message';
import styles from './placeholder.styles';
import PlaceholderIcon from "assets/placeholder.svg";

type PlaceholderProps = {
  isFetching?: boolean;
};
const Placeholder = ({isFetching}: PlaceholderProps): JSX.Element => {
  if (!isFetching) {
    return (
      <View>
          <PlaceholderIcon style={styles.Placeholder__placeholder} />
          <Text style={styles.Placeholder__placeholderText}>
            {placeholderMessage.placeholderText}
          </Text>
      </View>
    );
  }

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Placeholder;
