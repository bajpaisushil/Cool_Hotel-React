import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const useRoomController = () => {
  const { id } = useParams();
  const [selectedInDate, setSelectedInDate] = useState<Date | null>(null);
  const [selectedOutDate, setSelectedOutDate] = useState<Date | null>(null);
  const [children, setChildren] = useState<any>(1);
  const [adults, setAdults] = useState<any>(1);
  const [largeWidth, setLargeWidth] = useState<number>(3);

  const handleLargeWidth = (n: number) => {
    console.log(n);
    setLargeWidth(n);
  };
  const handleSelectedInDate=(x: any)=>{
    setSelectedInDate(x);
  }
  const handleSelectedOutDate=(x: any)=>{
    setSelectedOutDate(x);
  }

  const handleAdults=(x: any)=>{
    setAdults(x);
  }
  const handleChildren=(x: any)=>{
    setChildren(x);
  }
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const standardText=id && (id.slice(0, 1).toUpperCase() + id.slice(1, id.length));
  console.log(standardText);

  return {
    id,
    selectedInDate,
    selectedOutDate,
    handleSelectedInDate,
    handleSelectedOutDate,
    adults,
    handleAdults,
    children,
    handleChildren,
    largeWidth,
    handleLargeWidth,
    standardText,
  };
};

export default useRoomController;
