import { memo } from "react";


type SearchInputT = {
    onSearch(param: string): void,
    onClear(): void,
    searchInputRef?: any
}

function SearchInput({ searchInputRef, onSearch, onClear }: SearchInputT) {

    const onLocalClear = () => {
        searchInputRef.current.value = ''
        onClear()
        searchInputRef.current.focus()

    }

    return (
        <div className="input-group mb-3">
            <input 
                ref={searchInputRef} 
                onChange={(e) => onSearch(e.target.value)} 
                type="text" className="form-control" placeholder="Search user" 
            />
            <button className="btn btn-outline-secondary" type="button" onClick={onLocalClear}>Clear</button>
        </div>
    )
}

export default memo(SearchInput)