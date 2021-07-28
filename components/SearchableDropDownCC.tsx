import React from "react";
import SearchableDropdown from "react-native-searchable-dropdown";

const SearchableDropDownCC = (props: any) => {
  const { placeHolderValue, items } = props;

  return (
    <SearchableDropdown
      onTextChange={(text: string) => console.log(text)}
      //On text change listner on the searchable input
      onItemSelect={(items: any) => console.log(JSON.stringify(items))}
      //onItemSelect called after the selection from the dropdown
      //suggestion container style
      textInputStyle={{
        //inserted text style
        backgroundColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        borderColor: "#CACACA",
        borderRadius: 5,
        paddingHorizontal: 8,
        height: 50,
        marginTop: 10,
      }}
      itemStyle={{
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 8,

        marginTop: 2,
        borderBottomColor: "#CACACA",
        borderBottomWidth: 0.5,
      }}
      itemTextStyle={{
        color: "#222",
      }}
      itemsContainerStyle={{
        maxHeight: "50%",
      }}
      items={items}
      //default selected item index
      placeholder={placeHolderValue}
      placeholderTextColor="#000000"
      //place holder for the search input
      resetValue={false}
      //reset textInput Value with true and false state
      underlineColorAndroid="transparent"
    />
  );
};

export default SearchableDropDownCC;
