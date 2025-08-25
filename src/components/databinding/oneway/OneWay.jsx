import React, { useState } from 'react'

import apple from "../../../assets/apple.jpg"
import banana from "../../../assets/banana.jpg"
import cherry from "../../../assets/cherry.jpg"
import date from "../../../assets/date.jpg"
import egg from "../../../assets/egg.jpg"
import fish from "../../../assets/fish.jpg"
import graps from "../../../assets/graps.jpg"
import hen from "../../../assets/hen.jpg"
import igloo from "../../../assets/igloo.jpg"
import jump from "../../../assets/jump.jpg"
import kangaroo from "../../../assets/kangaroo.jpg"
import lion from "../../../assets/lion.jpg"
import mango from "../../../assets/mango.jpg"
import nose from "../../../assets/nose.jpg"
import orange from "../../../assets/orange.jpg"
import pineapple from "../../../assets/pineapple.jpg"
import quince from "../../../assets/quince.jpg"
import raspberry from "../../../assets/Raspberry.jpg"
import strawberry from "../../../assets/Strawberry.jpg"
import tomato from "../../../assets/Tomato.jpg"
import umbu from "../../../assets/Umbu.jpg"
import village from "../../../assets/village.jpg"
import watermelon from "../../../assets/Watermelon.jpg"
import xylophone from "../../../assets/xylophone.jpg"
import yoyo from "../../../assets/yoyo.jpg"
import zebra from "../../../assets/zebra.jpg"
import Child from './Child'

let a = "Apple"
let b = "Banana"
let c = "Cherry"
let d = "Date"
let e = "Egg"
let f = "Fish"
let g = "Graps"
let h = "Hen"
let i = "Igloo"
let j = "Jump"
let k = "Kangroo"
let l = "Lion"
let m = "Mango"
let n = "Nose"
let o = "Orange"
let p = "Pineapple"
let q = "Quince"
let r = "Rasberry"
let s = "Strawberry"
let t = "Tomato"
let u = "Umbu"
let v = "Village"
let w = "Watermelon"
let x = "Xylophone"
let y = "Yoyo"
let z = "Zebra"


const OneWay = () => {

    const [currentImage, setCurrentImage] = useState(apple)
    const [fruitName, setFruitName] = useState(a)


    const handleClick = (fruit, name) => {
        setCurrentImage(fruit)
        setFruitName(name)
    }
    return (

        <div className='max-w-[70%] mx-auto'>
            <div className='flex gap-3.5 justify-center items-center flex-wrap mt-7'>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(apple, a)}>A</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(banana, b)}>B</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(cherry, c)}>C</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(date, d)}>D</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(egg, e)}>E</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(fish, f)}>F</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(graps, g)}>G</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(hen, h)}>H</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(igloo, i)}>I</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(jump, j)}>J</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(kangaroo, k)}>K</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(lion, l)}>L</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(mango, m)}>M</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(nose, n)}>N</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(orange, o)}>O</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(pineapple, p)}>P</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(quince, q)}>Q</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(raspberry, r)}>R</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(strawberry, s)}>S</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(tomato, t)}>T</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(umbu, u)}>U</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(village, v)}>V</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(watermelon, w)}>W</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(xylophone, x)}>X</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(yoyo, y)}>Y</button>
                <button className='px-4 py-2 rounded bg-gray-700 text-white font-bold text-3xl cursor-pointer' onClick={() => handleClick(zebra, z)}>Z</button>
            </div>

            <div className='flex justify-center items-center gap-0'>

                <div className='mx-auto flex justify-center my-9 border-2 border-gray-500 shadow-amber-200 rounded-[5px] bg-black w-150 h-100 overflow-hidden'>
                    <img className='object-cover p-1 rounded-2xl' src={currentImage} alt="fruit" />
                </div>
                <Child fruitName={fruitName} />
            </div>

        </div>
    )
}

export default OneWay;