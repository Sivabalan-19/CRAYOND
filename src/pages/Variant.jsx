import React, { useState, useEffect } from "react";
import "../styles/Variantpage.css";

import { TfiArrowCircleRight } from "react-icons/tfi";
import pizza from "../assets/pizza.jpeg"; 
import { IoAdd } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { RiInformationLine } from "react-icons/ri";

function Variant({ setcol, id, data, cart, setcart }) {
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('large'); 
    const [item, setItem] = useState(null);


    const styles = (item) => ({
        color: selectedSize === item ? "#1263df" : "",
      });

    const fontsi =(item) =>({
        fontSize: selectedSize === item ?'17px' : '',

    })

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
            setcart([...cart, cartItem]);
            setcol(-1); 
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
                        <div style={{ width: "100%", overflow: "hidden",
                            position:'relative',
                            borderRadius: "8px", height: "70%" }}>
                            <img
                                src={item ? item.img : pizza} 
                                alt={item ? item.name : 'Image not available'}
                                style={{ height: "100%", width: "100%" }}
                            />

                            <div style={{position:'absolute', top:'8%', right:'2%',fontSize:'20px'}} className="varblu">
                                <RiInformationLine/>
                            </div>
                         
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
                                <div className="alic" style={fontsi('large')}>{item ? item.name : 'no'} (Large)</div>
                            </div>
                            <div className="radiovlue" style={styles('large')}>SAR {sizePrices.large}.00</div>
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
                                <div  className="alic" style={fontsi('medium')}>{item ? item.name : 'no'} (Medium)</div>
                            </div>
                            <div className="radiovlue" style={styles('medium')}>SAR {sizePrices.medium}.00</div>
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
                                <div className="alic" style={fontsi('small')}>{item ? item.name : 'no'} (Small)</div>
                            </div>
                            <div className="radiovlue" style={styles('small')}>SAR {sizePrices.small}.00</div>
                        </div>
                    </div>
                </div>

                <div className="emptyadd"></div>

                <div className="varbotom">
                    <div className="varbotval">
                        <div style={{ fontWeight: '400', fontSize: '17px' , marginTop:'2%'}}>Item total</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' , marginTop:'2%'}}>SAR {totalPrice}.00</div>
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
