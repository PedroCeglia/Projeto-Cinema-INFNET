import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles.module.css'
const SearchBar = ({ filmes, onSearch, onSelectFilme }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.length > 2) {
      onSearch();  
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 }}
        placeholder="Buscar filmes..."
        value={query}
        onChangeText={(text) => setQuery(text)}
        onEndEditing={handleSearch}  
      />

      <FlatList
        data={filmes.slice(0, 5)}  
        // Limita os resultados a 5 filmes
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectFilme(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchBar;
