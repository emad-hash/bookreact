import React from 'react'


export default function Card(props) {
    // console.log(props.book);
    
    return (
        <article
            className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm m-5">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                


                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Language: {props.book.language}
                </h3>

                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Edition: {props.book.edition}
                </h3>

                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Price: {props.book.price}
                </h3>
            </div>
        </article>

    )
}