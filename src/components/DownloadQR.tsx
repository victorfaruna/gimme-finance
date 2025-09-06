"use client";
import React from "react";
import QRCode from "react-qrcode-logo";

const DownloadQR = () => {
    return (
        <QRCode
            qrStyle="dots"
            logoImage="/logos/logo-black.svg"
            logoPaddingStyle="square"
            logoWidth={35}
            logoHeight={32}
            logoPadding={10}
            logoPaddingRadius={10}
            size={200}
            eyeRadius={10}
            value="https://gimme.finance"
        />
    );
};

export default React.memo(DownloadQR);
