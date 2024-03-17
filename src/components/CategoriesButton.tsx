import React from "react";
import { TouchableOpacity,View,Text,ActivityIndicator,StyleSheet } from "react-native";

interface ButtonProps{
    text:string;
    onPress:()=>void;
    loading:boolean;
}

const CategoriesButton: React.FC<ButtonProps> = ({ text, onPress, loading }) => (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
          <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );

  const styles=StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 30, 
        backgroundColor: '#007BFF', 
        borderRadius: 8, 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 3, 
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        marginTop: 10,
        opacity: 0.95, 
        marginBottom:5
      },
      title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '600', 
        textAlign: 'center', 
        fontStyle:"italic"
      }
  })

  export default CategoriesButton;
