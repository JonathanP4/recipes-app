import { FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../data/dummy";

export default function CategoriesScreen({ navigation }) {
    function renderCategoryItem({ item }) {
        function pressHandler() {
            navigation.navigate("Meals", {
                categoryId: item.id,
            });
        }

        return (
            <CategoryCard
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
        />
    );
}
