import { useEffect } from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/features/cartSlice";
import useCartController from "./cart-controller";
import CancelIcon from "@mui/icons-material/Cancel";

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

const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 50 });
  });
  const cartController = useCartController();

  return (
    <div className="mb-[5rem]">
      <Navbar />
      <div
        className="h-[35rem] bg-cover"
        style={{ backgroundImage: `url('/assets/images/deluxe4.jpg')` }}
      >
        <div className="pt-[7rem]">
          <h1 className="text-center text-[5rem] font-bold text-white">Cart</h1>
          <p className="text-center text-[1.8rem] font-semibold text-white">
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            . Cart
          </p>
        </div>
      </div>

      <div className="hidde lg:block w-fit m-auto my-[5rem] border">
        <table className="flex border-spacing-[2rem]">
          <tbody className="">
            <tr className="bg-gray-300 text-[1.4rem] font-bold">
              <th className="px-[2rem]">PRODUCT</th>
              <th className="px-[2rem]">PRICE</th>
              <th className="px-[2rem]">QUANTITY</th>
              <th className="px-[2rem]">SUBTOTAL</th>
              <th className="px-[2rem]">&nbsp;</th>
            </tr>
            {cartController.cartItems?.map((cartItem: CartItem) => (
              <tr key={cartItem.rooms[0].id}>
                <td>
                  <div className="flex flex-row p-[1rem]">
                    <img
                      src={`/assets/images/${cartItem.rooms[0].image}`}
                      alt="choosen room"
                      className="w-[4rem] h-[4rem] m-auto mr-[0.6rem]"
                    />
                    <div className="flex flex-col p-[1rem]">
                      <h1 className="text-[1.4rem] font-semibold">
                        {cartItem.rooms[0].title}
                      </h1>
                      <p>Check-in Date:{cartItem.checkin}</p>
                      <p>Check-out Date:{cartItem.checkout}</p>
                      <p>Adults:{cartItem.adults}</p>
                      <p>Children:{cartItem.children}</p>
                      <p>Quantity:{cartItem.quantity}</p>
                    </div>
                  </div>
                </td>
                <td className="px-[2rem]">₹ {cartItem.rooms[0].price}</td>
                <td className="px-[2rem]">
                  {cartController.calculateNumberOfDays(
                    cartItem.checkin,
                    cartItem.checkout
                  )}{" "}
                  Days
                </td>
                <td className="px-[2rem]">₹ {cartItem.rooms[0].price}</td>
                <td className="px-[2rem]">
                  <button
                    onClick={() =>
                      cartController.dispatch(
                        removeFromCart(cartItem.rooms[0].id)
                      )
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    <CancelIcon style={{ fontSize: "1.4rem" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="lg:hidden flex justify-center items-center m-[1rem]">
        <table className="">
          {cartController.cartItems?.map((cartItem: CartItem) => (
            <div key={cartItem.rooms[0].id} className="border m-[1rem]">
              <tr>
                <td className="px-[2rem] p-[0.6rem] font-bold text-[1.2rem] mb-[1rem]">
                  Product:
                </td>
                <td className="px-[2rem] p-[0.6rem]">
                  {cartItem.rooms[0].title}
                </td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem]">Check-in Date:</td>
                <td className="px-[2rem] p-[0.6rem]">
                  {cartItem.checkin}
                </td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem]">Check-out Date:</td>
                <td className="px-[2rem] p-[0.6rem]">
                  {cartItem.checkout}
                </td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem]">Adults:</td>
                <td className="px-[2rem] p-[0.6rem]">{cartItem.adults}</td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem]">Children:</td>
                <td className="px-[2rem] p-[0.6rem]">{cartItem.children}</td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem]">Quantity:</td>
                <td className="px-[2rem] p-[0.6rem]">{cartItem.quantity}</td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem] font-bold text-[1.2rem] mb-[1rem]">
                  Price:
                </td>
                <td className="px-[2rem] p-[0.6rem]">₹ {cartItem.rooms[0].price}</td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem] font-bold text-[1.2rem] mb-[1rem]">
                  Quantity:
                </td>
                <td className="px-[2rem] p-[0.6rem]">
                {cartController.calculateNumberOfDays(
                    cartItem.checkin,
                    cartItem.checkout
                  )}{" "}
                  Days
                </td>
              </tr>
              <tr>
                <td className="px-[2rem] p-[0.6rem] font-bold text-[1.2rem] mb-[1rem]">
                  Subtotal:
                </td>
                <td className="px-[2rem] p-[0.6rem]">{cartItem.rooms[0].price}</td>
              </tr>
            </div>
          ))}
        </table>
      </div> */}

      <div className="flex justify-end m-[2rem]">
        <div className="flex flex-col w-full lg:w-1/2 justify-end text-[1.1rem]">
          <h1 className="text-[1.2rem] m-[1rem] font-medium">CART TOTALS</h1>
          <table>
            <tr>
              <td className="px-[2rem] p-[0.6rem] border-2">Subtotal</td>
              <td className="px-[2rem] p-[0.6rem] border-2">
                ₹ {cartController.totalPrice()}
              </td>
            </tr>
            <tr>
              <td className="px-[2rem] p-[0.6rem] border-2">Total</td>
              <td className="px-[2rem] p-[0.6rem] border-2">
                ₹ {cartController.totalPrice()}
              </td>
            </tr>
            <tr>
              <td className="px-[2rem] p-[0.6rem] border-2">To Pay</td>
              <td className="px-[2rem] p-[0.6rem] border-2">
                ₹ {cartController.totalPrice()}
              </td>
            </tr>
            <tr>
              <td className="px-[2rem] p-[0.6rem] border-2">Remaining</td>
              <td className="px-[2rem] p-[0.6rem] border-2">₹ {0}</td>
            </tr>
          </table>
          <button className="text-[1.2rem] font-semibold p-[0.8rem] text-white bg-black hover:bg-[#ab6034]">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
