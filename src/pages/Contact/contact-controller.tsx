import { useState } from "react";

export const useContactController=()=>{
    const [messageDetails, setMessageDetails]=useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      })
    
      function handleInput(e: any){
        const {name, value}=e.target;
        setMessageDetails({
          ...messageDetails,
          [name]: value,
        })
      }
      function handleSubmit(e: any){
        e.preventDefault();
      }

      return {handleInput, handleSubmit, messageDetails};
}