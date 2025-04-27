import React from 'react'

function DetailCard({data}) {
    const {id, title, price, image, category, description} = data;

    return (
        <div className={"flex flex-row-reverse  justify-around "}>
            <div>
                <img className={"w-full h-64"} src={`${image}`} alt=""/>
            </div>
            <div className={" w-[50%] flex flex-col justify-between rounded-lg border-2 border-[#2a0eaa] p-3"}>
                <div className={"flex m-1 gap-2 p-2 rounded-md border-2 border-gray-500"}>
                    <div className={"font-medium text-[#ffce1d]"}>Title: </div>
                    <div className={"text-[#3191cb]"}>{title}</div>
                </div>
                <div className={"flex m-1 gap-2 p-2 rounded-md border-2 border-gray-500"}>
                    <div className={"font-medium text-[#ffce1d]"}>Category: </div>
                    <div className={"text-[#3191cb]"}>{category}</div>
                </div>
                <div className={"flex m-1 gap-2 p-2 rounded-md border-2 border-gray-500"}>
                    <div className={"font-medium text-[#ffce1d]"}>Description: </div>
                    <div className={"text-[#3191cb]"}>{description}</div>
                </div>
                <div className={"flex m-1 gap-2 p-2 rounded-md border-2 border-gray-500"}>
                    <div className={"font-medium text-[#ffce1d]"}>Price: </div>
                    <div className={"text-[#3191cb]"}>{price}$</div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard
