import { useEffect, useState } from "react";

const UseEffect = () => {

    const [productList, setProductList] = useState([])

    const [input, setInput] = useState({
        name: ""
    })

    const getDataAll = async () => {

        console.log("get all is calling again and again")

        try {

            const response = await fetch('https://fakestoreapi.com/products');

            if (!response.ok) {
                console.log("error geting data")
            }

            const data = await response.json()

            setProductList(data)

        } catch (error) {
            console.log(error)
            throw new Error("Getting error");

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(input)

    useEffect(() => {

        getDataAll()
        console.log("This is useEffect")

    }, [])



    return (

        <div>
            <input type="text" placeholder="whrite..." name="name" value={input.name} onChange={handleChange} />
            <div className="w-[300px] p-2.5 m-1.5">
                {
                    productList.map((item) => (
                        <div key={item.id} className="border m-1 p-3 rounded">
                            <h1 className="font-bold">{item.title}</h1>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default UseEffect;