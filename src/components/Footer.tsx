"use client"; 

import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; 

const translations = {
  en: {
    about: "About Us",
    contact: "Contact",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    rights: "All rights reserved",
  },

  ar: {
    about: "معلومات عنا",
    contact: "اتصل بنا",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    rights: "جميع الحقوق محفوظة",
  },
};

export const Footer = () => {
  const language = useSelector((state: RootState) => state.language.current);
  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-yellow-500 text-lg mb-4">CHIC</h3>
            <p className="text-sm">{t.rights} © 2024</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.about}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t.contact}</li>
              <li>{t.terms}</li>
              <li>{t.privacy}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
