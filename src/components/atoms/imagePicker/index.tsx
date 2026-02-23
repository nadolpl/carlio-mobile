import { useState } from "react";
import * as Picker from "expo-image-picker";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";
import { useUploadVehiclePhoto } from "api/hooks/vehicle";
import SecuredImage from "components/atoms/securedImage";

interface ImagePickerProps {
  vehicleId: string;
  preimage?: string | null;
}

const ImagePicker = ({ vehicleId, preimage }: ImagePickerProps) => {
  const [localUri, setLocalUri] = useState<string | null>(null);
  const { mutate } = useUploadVehiclePhoto(vehicleId);

  const pickImage = async () => {
    const permissionResult = await Picker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Invalid permissions", "Required access to the gallery.");
      return;
    }

    let result = await Picker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      const selectedUri = result.assets[0].uri;
      setLocalUri(selectedUri);
      mutate(selectedUri);
    }
  };

  const displayUri = localUri || preimage;

  return (
    <View style={styles.container}>
      <Pressable onPress={pickImage} style={styles.imageContainer}>
        {displayUri ? <SecuredImage uri={displayUri} /> : <Icon name={ICONS.IMAGE} size={50} />}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagePicker;
