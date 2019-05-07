import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import nachos from '../data/nachos';

import ListItem, { Separator } from '../components/ListItem';

export default () => {

  return (
    <SafeAreaView>
      <ScrollView>
        {nachos.map(item => (
          <React.Fragment key={item.id}>
            <ListItem
              name={item.name}
            />
            <Separator />
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
};
