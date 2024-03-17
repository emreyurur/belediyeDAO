import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  loading: boolean;
  buttonColor: string; // Buton rengi için yeni prop
}

const IstekSikayetOneriButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  loading,
  buttonColor, // Buton rengini prop olarak alıyoruz
}) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: buttonColor }]} // Buton rengini dinamik olarak ayarlıyoruz
    onPress={onPress}
    disabled={loading}
  >
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={styles.text}>{text}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      paddingVertical: 15, // Dikey padding'i biraz artırarak butonun yüksekliğini artırıyoruz
      paddingHorizontal: 40, // Yatay padding'i artırarak butonun genişliğini artırıyoruz
      borderRadius: 25,
      marginVertical: 10, // Butonlar arası dikey mesafeyi ayarlıyoruz
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 3,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      minWidth: 250, // Butonların minimum genişliğini belirliyoruz, böylece daha geniş yer kaplarlar
      justifyContent: 'center', // İçerikleri yatay olarak merkezde hizalıyoruz
    },
    text: {
      color: '#ffffff',
      fontSize: 30, // Metin boyutunu artırıyoruz, buton içindeki yazı daha büyük ve okunaklı olacak
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default IstekSikayetOneriButton;