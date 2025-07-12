import { useContext } from "react"
import { FilterContext } from "../../provider/context"

const farr = ['All', 'chicken', 'meat', 'vegan', 'spicy']

function Filter() {
    const {filter, setFilter, search, setSearch} = useContext(FilterContext)
    
    return (
        <div className="mb-4">
            <div className="flex flex-wrap gap-4 mb-4">
                {farr.map(f => (
                    <label key={f} className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="filter"
                            checked={f == filter}
                            onChange={() => setFilter(f)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-sm font-medium text-gray-700">{f}</span>
                    </label>
                ))}
            </div>
            
            <input
                type="search"
                placeholder="Axtar..."
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    )
}

export default Filter