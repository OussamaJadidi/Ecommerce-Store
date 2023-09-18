import {useState, useEffect} from "react"
import Link from "next/link"
import {BsBagCheckFill} from "react-icons/bs";
import { useRouter } from "next/router"

import { useStateContext } from "@/context/stateContext";
import { runRealisticLookCelebration} from "../lib/utils";

export default function Success() {
    const { setCartItems,setTotalPrice,setTotalQuantities } = useStateContext();

    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runRealisticLookCelebration();
    },[])
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>
                Thank you for your order!
            </h2>
            <p className="email-msg">
                Check your email inbox for the receipt.
            </p>
            <p className="description">
                if you have any question please email
                <a className="email" href="mailto:oussamajadidi2020@gmail.com">
                    oussamajadidi2020@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}
