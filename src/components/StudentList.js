import React from 'react';
import {
  Body,
  Button,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
} from 'native-base';
import { StyleSheet } from 'react-native';


export function StudentList({ student, navigation }) {
  return (
    <List style={styles.textWrap}>
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: student.img }} />
        </Left>
        <Body>
          <Text>{student.StudentFullName}</Text>
          <Text>{student.StudentAddress}</Text>
          <Text>{student.StudentPhone}</Text>
          <Text note numberOfLines={1}>
            {student.Comment}
          </Text>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.push('Profile')}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    </List>
  );
}

const styles = StyleSheet.create({
  textWrap: {
    textAlign: 'center',
    paddingVertical: 2,
  },
});
