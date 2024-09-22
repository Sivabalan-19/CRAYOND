import React, { useState, useEffect } from "react";
import "../styles/Variantpage.css";
import { TfiArrowCircleRight } from "react-icons/tfi";
import pizza from "../component/assets/pizza.jpeg"; 
import { IoAdd } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";

function Variant({ setcol, id, data, cart, setcart }) {
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('large'); 
    const [item, setItem] = useState(null);

    useEffect(() => {
        const foundItem = data.find(item => item.id === Number(id));
        setItem(foundItem);
    }, [id, data]);

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const sizePrices = {
        large: item ? item.max : 0,
        medium: item ? item.mid : 0,
        small: item ? item.min : 0,
    };

    const totalPrice = sizePrices[selectedSize] * count;

    const handleAddToCart = () => {
        if (item) {
            const cartItem = {
                id: item.id,
                name: item.name,
                quantity: count,
                price: sizePrices[selectedSize],
                total: totalPrice, 
            };

            // Update cart
            setcart([...cart, cartItem]); // Add new item to the cart
            setcol(-1); // Optionally close the variant modal
        }
    };

    return (
        <div className="variantmaincont">
            <div style={{ width: "96%", height: "96%" }}>
                <div className="varianthead">
                    <div style={{ fontSize: "20px", fontWeight: "700" }}>
                        Variant & Add-ons
                    </div>
                    <div className="rightciric">
                        <TfiArrowCircleRight />
                    </div>
                </div>

                <div className="dishbanner">
                    <div className="bannerima">
                        <div style={{ width: "70%", overflow: "hidden", borderRadius: "8px", height: "70%" }}>
                            <img
                                src={item ? item.img : pizza} 
                                alt={item ? item.name : 'Image not available'}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="bannerdet">{item ? item.descr : 'Item not found'}</div>
                </div>

                <div className="addoncont">
                    <div className="varibut">Variant(2)</div>
                    <div className="addonbut">Add-ons</div>
                </div>

                <div className="radiototocon">
                    <div className="quanit">Quantity</div>
                    <div className="radiobutbox">
                        <div className="radiocon">
                            <div className="radiolab">
                                <div className="alic">
                                    <input
                                        type="radio"
                                        name="price"
                                        value="large"
                                        checked={selectedSize === 'large'}
                                        onChange={() => setSelectedSize('large')}
                                        style={{ height: '17px', width: '17px' }}
                                    />
                                </div>
                                <div style={{ fontSize: '16px' }}>{item ? item.name : 'Pizza'} (Large)</div>
                            </div>
                            <div className="radiovlue">SAR {sizePrices.large}.00</div>
                        </div>

                        <div className="radiocon">
                            <div className="radiolab">
                                <div className="alic">
                                    <input
                                        type="radio"
                                        name="price"
                                        value="medium"
                                        checked={selectedSize === 'medium'}
                                        onChange={() => setSelectedSize('medium')}
                                        style={{ height: '17px', width: '17px' }}
                                    />
                                </div>
                                <div style={{ fontSize: '16px' }}>{item ? item.name : 'Pizza'} (Medium)</div>
                            </div>
                            <div className="radiovlue">SAR {sizePrices.medium}.00</div>
                        </div>

                        <div className="radiocon">
                            <div className="radiolab">
                                <div className="alic">
                                    <input
                                        type="radio"
                                        name="price"
                                        value="small"
                                        checked={selectedSize === 'small'}
                                        onChange={() => setSelectedSize('small')}
                                        style={{ height: '17px', width: '17px' }}
                                    />
                                </div>
                                <div style={{ fontSize: '16px' }} className="alic">{item ? item.name : 'Pizza'} (Small)</div>
                            </div>
                            <div className="radiovlue">SAR {sizePrices.small}.00</div>
                        </div>
                    </div>
                </div>

                <div className="emptyadd"></div>

                <div className="varbotom">
                    <div className="varbotval">
                        <div style={{ fontWeight: '400', fontSize: '18px' }}>Item Total</div>
                        <div style={{ fontWeight: '700', fontSize: '20px' }}>SAR {totalPrice}.00</div>
                    </div>

                    <div className="varbotbut">
                        <div className="addsubbot">
                            <button onClick={decrease}><LuMinus /></button>
                            <button>{count}</button>
                            <button onClick={() => setCount(count + 1)}><IoAdd /></button>
                        </div>
                        <div className="addprodu" onClick={handleAddToCart}>
                            <button>Add to order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Variant;
