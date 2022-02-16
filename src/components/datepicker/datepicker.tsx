import {useModal} from 'hooks/useModal';
import {DateTime} from 'luxon';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './datepicker.styles';

type DatePicker = {
  style: ViewStyle | TextStyle | ImageStyle;
  onChangeDate: (date: Date) => void;
};
const DatePicker = ({style, onChangeDate}: DatePicker): JSX.Element => {
  const [date, setDate] = useState(new Date());
  const datePickerModal = useModal();

  const onChange = (selectedDate: Date) => {
    datePickerModal.close();
    setDate(selectedDate);

    if (!onChangeDate) return;
    onChangeDate(selectedDate);
  };

  useEffect(() => {
    if (onChangeDate) {
      onChangeDate(date);
    }
  }, [onChangeDate, date]);

  return (
    <ImageBackground
      style={[styles.Datepicker__imageBackground, style]}
      source={require('assets/date-place.png')}>
      <TouchableOpacity onPress={datePickerModal.open}>
        <DateTimePickerModal
          isVisible={datePickerModal.isOpen}
          onCancel={datePickerModal.close}
          mode="date"
          onConfirm={onChange}
          maximumDate={new Date()}
          minimumDate={DateTime.now().minus({week: 1}).toJSDate()}
        />
        <View style={styles.Datepicker__textContainer}>
          {date ? (
            <View style={styles.Datepicker__dateTextContainer}>
              <Text style={styles.Datepicker__dateDay}>
                {DateTime.fromISO(date.toISOString()).day}
              </Text>
              <Text style={styles.Datepicker__dateMonth}>
                {DateTime.fromISO(date.toISOString())
                  .toFormat('MMM')
                  .toLocaleLowerCase()}
              </Text>
            </View>
          ) : (
            <Text>...</Text>
          )}
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default DatePicker;
