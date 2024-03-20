import React, { useState } from 'react';
import { View, Button, ActivityIndicator,Linking } from 'react-native';

const PhantomWallet = () => {
  const [loading, setLoading] = useState(false);

  const openPhantomWallet = () => {
    setLoading(true); // Butona tıklandığında yükleniyor durumunu true yap

    // Phantom Wallet'ı açma girişimi.
    // Bu örnek, kullanıcı Phantom Wallet uygulamasını kapattıktan sonra bile
    // loading indicator'ın aktif kalmasını sağlar.
    Linking.openURL('phantom://open').catch(() => {
      // URL açılamazsa burada bir şey yapmayın.
      // setLoading(false); Eğer burayı yorumdan çıkarırsanız, 
      // Linking.openURL başarısız olduğunda loading durumunu false yapar.
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Phantom Wallet'ı Aç" onPress={openPhantomWallet} />
      {loading && (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default PhantomWallet;
