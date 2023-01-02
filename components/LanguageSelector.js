import React from "react";
import { useState } from 'react';

export default function LanguageSelector(){
    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'NL-nl', label: 'Dutch' },
        { value: 'HU-hu', label: 'Hungarian' }
    ];

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
      };

    return (
        <select
          value={selectedLanguage}
          onChange={handleChange}
          style={{
            display: "inline-block",
            width: "15%",
            textAlign: "center",
            margin: "auto",
            fontSize: "1em",
          }}
        >
          {languageOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      );
}