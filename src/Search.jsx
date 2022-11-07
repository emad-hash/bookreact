import React from 'react'

export default function Search(props) {
    // console.log(props);
    return (
        <>
            <label
                HtmlFor="UserEmail"
                class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <input
                    type="text"
                    id="UserEmail"
                    placeholder="Search"
                    onChange={e => props.handelSearch(e)}
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    Book
                </span>
            </label>
            <select className="select select-accent w-full max-w-xs mt-10" onChange={e => props.handelFilter(e)}>
                <option disabled selected >Filter</option>
                <option  value="0-40" >All</option>
                <option value="0-10">0-10</option>
                <option value="10-20">10-20</option>
                <option value="20-40">20-40</option>
            </select>
        </>
    )
}