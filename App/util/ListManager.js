import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from "uuid/v4";

const updateStoredCurrentList = (list) => {
  AsyncStorage.setItem('@@GroceryList/currentList', JSON.stringify(list));
};

export const useCurrentList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const addItem = (text) => {
    const newList = [{ id: uuid(), name: text}, ...list];
    setList(newList);
    updateStoredCurrentList(newList);
  };

  const removeItem = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    updateStoredCurrentList(newList);
  };

  useEffect(() => {
    AsyncStorage.getItem('@@GroceryList/currentList')
      .then(data => JSON.parse(data))
      .then(data => {
        if (data) {
          setList(data);
        }
        setLoading(false);
      })
  }, []);

  return {
    list,
    loading,
    addItem,
    removeItem,
  }
};
