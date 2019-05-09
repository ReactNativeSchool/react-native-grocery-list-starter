import React from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import ListItem, { Separator } from '../components/ListItem';
import AddItem from '../components/AddItem';
import { useCurrentList } from '../util/ListManager';

export default () => {
  const {
    list,
    loading,
    addItem,
    removeItem,
  } = useCurrentList();

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

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
              onAddedSwipe={() => removeItem(item.id)}
              onDeleteSwipe={() => removeItem(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={() => (
            <AddItem
              onSubmitEditing={({ nativeEvent: { text } }) => addItem(text)}
            />
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
