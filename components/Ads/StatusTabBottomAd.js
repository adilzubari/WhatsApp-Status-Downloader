import * as React from "react";
import { View, StyleSheet } from 'react-native';
import { AdKeys } from "./AdKeys";
import { AdMobBanner } from 'expo-ads-admob';

export default function StatusTabBottomAd() {
    return (
        <View style={styles.container}>
            <AdMobBanner
                bannerSize="smartBannerLandscape"
                adUnitID={AdKeys.DevMode.StatusTabBottomAd}
                servePersonalizedAds // true or false
                />
        </View>
    );
}

const styles = StyleSheet.create({
    'container': {
        paddingVertical: 5,
        flex: 1
    }
});