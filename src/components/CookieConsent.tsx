import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Cookie, X } from 'lucide-react';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter tous les cookies"
      declineButtonText="Refuser"
      enableDeclineButton
      flipButtons
      cookieName="easyFormaCookieConsent"
      style={{
        background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        fontSize: "14px",
        padding: "20px",
        alignItems: "center",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)"
      }}
      buttonStyle={{
        background: "white",
        color: "#ea580c",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "8px",
        padding: "12px 24px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "white",
        fontSize: "14px",
        fontWeight: "500",
        borderRadius: "8px",
        padding: "12px 24px",
        border: "2px solid white",
        cursor: "pointer",
        marginRight: "12px",
        transition: "all 0.2s ease"
      }}
      expires={365}
      overlay={false}
      onAccept={() => {
        console.log("Cookies acceptés");
        // Ici vous pouvez activer Google Analytics, Facebook Pixel, etc.
      }}
      onDecline={() => {
        console.log("Cookies refusés");
        // Ici vous pouvez désactiver les cookies non essentiels
      }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-white/20 rounded-full flex-shrink-0">
          <Cookie className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold mb-2">
            Nous utilisons des cookies
          </div>
          <div className="text-orange-100 text-sm leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
            analyser le trafic et personnaliser le contenu. En continuant à naviguer, 
            vous acceptez notre utilisation des cookies.{' '}
            <a 
              href="/politique-confidentialite" 
              className="text-white underline hover:no-underline"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;