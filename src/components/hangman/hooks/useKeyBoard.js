import { useState } from "react";

export const useKeyBoard = () => {
   const generatekeyBoard = () =>{
    let keyList =[];
    for (let i = 0; i< 26; i++) {
          let key = String.fromCharCode( i + 65);
          keyList = [...keyList, { key, status: false, id: "key_" + i }];

       }
       return keyList;
   };
   const [keyBoard, setKeyBoard] = useState(generatekeyBoard());
   return [keyBoard, setKeyBoard];
};
