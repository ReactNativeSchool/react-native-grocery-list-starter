import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native';
import uuid from "uuid/v4";

import nachos from '../data/nachos';

import ListItem, { Separator } from '../components/ListItem';
import AddItem from '../components/AddItem';

export default () => {
  const [list, setList] = useState(nachos);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
      >
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <ListItem
              name={item.name}
              onFavoritePress={() => alert('todo: handle favorite!')}
              isFavorite={index < 2}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={() => (
            <AddItem
              onSubmitEditing={({ nativeEvent: { text } }) => {
                setList([{ id: uuid(), name: text}, ...list])
              }}
            />
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
