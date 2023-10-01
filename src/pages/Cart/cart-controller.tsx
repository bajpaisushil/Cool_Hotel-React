import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface Room {
  id: number;
  image: string;
  title: string;
  adults: number;
  size: number;
  subTitle: number;
  price: number;
}

interface CartItem {
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
  quantity: number;
  rooms: Array<Room>;
}

function useCartController() {
  const cartItems = useSelector((state: any) => state.cart);
  console.log("cart items", cartItems);
  function totalPrice() {
    const totalPrice = cartItems.reduce((total: any, cartItem: CartItem) => {
      // Assuming each cartItem has a rooms array
      // const roomPrices = cartItem.rooms.map((room:any) => room.price);
      // const subtotal = roomPrices[0];
      const subtotal = cartItem.rooms[0].price;
      return total + subtotal;
    }, 0);
    return totalPrice;
  }

  const dispatch = useDispatch();
  const calculateNumberOfDays = (checkin: string, checkout: string) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return numberOfDays;
  };

  return { cartItems, calculateNumberOfDays, totalPrice, dispatch };
}

export default useCartController;
