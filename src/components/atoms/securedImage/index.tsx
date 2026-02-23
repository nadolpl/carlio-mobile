import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { getAccessToken } from "api/services/authStorage";
import ExpoImage from "expo-image/src/ExpoImage";

interface SecuredImageProps {
  uri: string;
}

const SecuredImage = ({ uri }: SecuredImageProps) => {
  const [token, setToken] = useState<string | null>(null);

  const isRemote = uri.startsWith("http");

  useEffect(() => {
    if (isRemote) getAccessToken().then(setToken);
  }, [isRemote]);

  if (isRemote && !token) {
    return <View style={styles.image} />;
  }

  const source = isRemote ? { uri, headers: { Authorization: `Bearer ${token}` } } : { uri };

  return <ExpoImage source={[source]} style={styles.image} contentFit="cover" />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default SecuredImage;
