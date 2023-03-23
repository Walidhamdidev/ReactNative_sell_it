import { View } from "react-native";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { AppForm, SubmitButton } from "../components/forms";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/forms/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormField from "../components/forms/FormField";
import FormPicker from "../components/forms/FormPicker";
import useLocation from "../hooks/useLocation";
import api from "../api/listings";
import { ScrollView } from "react-native-gesture-handler";
import UploadScreen from "./UploadScreen";
import { FormikProps } from "formik";

const validationSchema = Yup.object({
  images: Yup.array().min(1, "Please select at least one image."),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", id: 1, icon: "sofa", backgroundColor: "purple" },
  { label: "Clothing", id: 2, icon: "tshirt-crew", backgroundColor: "teal" },
  {
    label: "Cameras",
    id: 3,
    icon: "camera-outline",
    backgroundColor: "orange",
  },
  { label: "Hats", id: 4, icon: "hat-fedora", backgroundColor: "red" },
  { label: "Hoodies", id: 5, icon: "watch", backgroundColor: "blue" },
  {
    label: "Couches",
    id: 6,
    icon: "sofa-outline",
    backgroundColor: "green",
  },
  { label: "Chairs", id: 7, icon: "chair-rolling", backgroundColor: "pink" },
  {
    label: "Watches",
    id: 8,
    icon: "watch-variant",
    backgroundColor: "indigo",
  },
  {
    label: "Watches",
    id: 9,
    icon: "apps",
    backgroundColor: "gold",
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (
    listing: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await api.addListings({ ...listing, location }, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Couldn't save the listing.");
    }
    resetForm();
  };

  return (
    <Wrapper style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <AppForm
          initialValues={{
            images: [],
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <View style={{ paddingBottom: 10 }}>
            <FormImagePicker name="images" />
          </View>
          <FormField
            name="title"
            placeholder="Title"
            maxLength={255}
            autoCorrect={false}
            keyboardType="default"
            textContentType="name"
          />
          <FormField
            name="price"
            placeholder="Price"
            maxLength={8}
            autoCorrect={false}
            keyboardType="numeric"
            width={120}
            // textContentType="dde"
          />
          <FormPicker
            items={categories}
            numColumns={3}
            name="category"
            AppFormPickerComponent={CategoryPickerItem}
            placeholder="Category"
            width={140}
          />
          <FormField
            multiline
            numberOfLines={3}
            maxLength={255}
            name="description"
            placeholder="Description"
            autoCorrect={false}
            keyboardType="default"
            textContentType="name"
          />
          <SubmitButton label="Post" />
        </AppForm>
      </ScrollView>
    </Wrapper>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
