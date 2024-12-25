import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You may need to install this: `npm install @expo/vector-icons`

const HomScreen = ({ navigation }) => {
  const restaurants = [
    {
      id: "1",
      name: "Rose Garden Restaurant",
      description: "Burger - Chicken - Rice - Wings",
      image: "https://i.ibb.co/hLzqbR5/pexels-dana-tentis-118658-262959.jpg",
      rating: 4.7,
      delivery: "Free",
      time: "20 min",
    },
    {
      id: "2",
      name: "Noodle Water",
      description: "Salad - Healthy - Veggies",
      image: "https://i.ibb.co/n783RKQ/pexels-xmtnguyen-699953.jpg",
      rating: 4.5,
      delivery: "$2",
      time: "25 min",
    },
    {
      id: "3",
      name: "Noodle Restaurant",
      description: "Salad - Healthy - Veggies",
      image: "https://i.ibb.co/JHvRgjK/pexels-fotios-photos-1279330.jpg",
      rating: 4.5,
      delivery: "$2",
      time: "25 min",
    },
    {
      id: "4",
      name: "Banh Mi",
      description: "Salad - Healthy - Veggies",
      image:
        "https://i.ibb.co/BTC7Sz3/pexels-quang-nguyen-vinh-222549-6710689.jpg",
      rating: 4.5,
      delivery: "$2",
      time: "25 min",
    },
    // Add more restaurant objects as needed
  ];
  const categories = [
    {
      id: "1",
      image: "https://i.ibb.co/tp4cgbb/pexels-janetrangdoan-1092730.jpg",
      label: "All",
      backgroundColor: "#FFD793",
    },
    {
      id: "2",
      image: "https://i.ibb.co/mtXqdK3/pexels-polina-tankilevitch-4518656.jpg",
      label: "Hot Dog",
      backgroundColor: "#FFFFFF",
    },
    {
      id: "3",
      image: "https://i.ibb.co/v1R5Hxq/pexels-lum3n-44775-1410235.jpg",
      label: "Burg",
      backgroundColor: "#FFFFFF",
    },
    // Add more categories as needed
  ];

  const searchItems = [
    { id: "1", label: "Pizza" },
    { id: "2", label: "Sushi" },
    { id: "3", label: "Burger" },
    { id: "4", label: "Pasta" },
    { id: "5", label: "Salad" },
    { id: "6", label: "Restaurants" },
  ];
  //Flatslist của mục tìm kiếm
  const renderSearchItem = ({ item }) => (
    <TouchableOpacity style={styles.searchItem}>
      <Text style={styles.searchItemText}>{item.label}</Text>
    </TouchableOpacity>
  );
  //Flatlist của mục danh mục
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, { backgroundColor: item.backgroundColor }]}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  const [searchQuery, setSearchQuery] = useState(""); // State để lưu giá trị tìm kiếm
  const [isSearchFocused, setIsSearchFocused] = useState(false); // State để kiểm tra khi nào ô tìm kiếm được focus

  // Hàm lọc tìm kiếm
  const filteredSearchItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Menu mở rộng
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái để mở/đóng menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Mở hoặc đóng menu
  };

  const menuItems = [
    { id: "1", label: "Thông tin cá nhân" },
    { id: "2", label: "Đổi mật khẩu" },
    { id: "3", label: "Đăng xuất" },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuToggle}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        {/* Sidebar Menu */}
        {isMenuOpen && (
          <View style={styles.sideMenu}>
            {/* //close menu */}
            <View
              style={{
                alignItems: "flex-end",
                paddingRight: 0,
                right: 0,
              }}
            >
              <TouchableOpacity
                onPress={handleMenuToggle}
                style={{
                  backgroundColor: "gray",
                  borderTopRightRadius: 10,
                }}
              >
                <Ionicons name="close" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={menuItems}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    if (item.label === "Đăng xuất") {
                      navigation.navigate("Login");
                    }
                  }}
                >
                  <Text style={styles.menuItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        <View style={styles.deliverTo}>
          <Text style={styles.deliverToText}>DELIVER TO</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.locationText}>Halal Lab office</Text>
            <Ionicons name="caret-down" size={14} color="#000" />
          </View>
        </View>
        <TouchableOpacity style={styles.cartIconContainer}>
          <Ionicons name="cart-outline" size={28} color="#000" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.greeting}>Hey Halal, Good Afternoon!</Text>

      {/* Search Bar */}
      <View>
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={{ marginRight: 8 }}
          />
          <TextInput
            style={styles.searchText}
            placeholder="Search dishes, restaurants"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onBlur={() => setIsSearchFocused(false)} // Khi ô tìm kiếm mất focus, ẩn danh sách
            onFocus={() => setIsSearchFocused(true)} // Khi ô tìm kiếm được focus, hiển thị danh sách
          />
        </View>
        {/* FlatList để hiển thị các mục tìm kiếm */}
        {isSearchFocused && (
          <FlatList
            data={filteredSearchItems}
            renderItem={renderSearchItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.searchList}
          />
        )}
      </View>
      {/* All Categories Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All {">"}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        />
      </View>

      {/* Open Restaurants Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Open Restaurants</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All {">"}</Text>
          </TouchableOpacity>
        </View>

        {/* FlatList to make restaurant cards scrollable */}
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{ height: 390 }} // Set a fixed height for the FlatList
          renderItem={({ item }) => (
            <View style={styles.restaurantCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.restaurantImage}
              />
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.restaurantDescription}>
                {item.description}
              </Text>
              <View style={styles.restaurantInfo}>
                <View style={styles.rating}>
                  <Ionicons name="star" size={14} color="#FF9500" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={styles.delivery}>
                  <Ionicons name="bicycle" size={14} color="#000" />
                  <Text style={styles.deliveryText}>{item.delivery}</Text>
                </View>
                <View style={styles.time}>
                  <Ionicons name="time-outline" size={14} color="#000" />
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#F0F4F7",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  deliverTo: {
    flex: 1,
    marginLeft: 10,
  },
  deliverToText: {
    fontSize: 12,
    color: "gray",
  },
  locationText: {
    fontWeight: "bold",
  },
  cartIconContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF5959",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    marginBottom: 20,
  },
  searchText: {
    fontSize: 16,
    color: "#999",
    width: "90%",
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    color: "#007BFF",
  },
  categories: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categoryImage: {
    width: "50%",
    height: 40,
    borderRadius: 50,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  restaurantCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  restaurantImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  restaurantDescription: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  ratingText: {
    fontSize: 14,
    color: "black",
  },
  deliveryText: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 14,
  },
  searchList: {
    paddingBottom: 20,
  },
  searchItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchItemText: {
    fontSize: 16,
    color: "#333",
  },
  //Menu mở rộng
  sideMenu: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    height: 400,
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    zIndex: 999, // Đảm bảo menu nằm trên các phần tử khác
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItemText: {
    fontSize: 16,
    color: "#000",
  },
});

export default HomScreen;
