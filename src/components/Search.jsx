

const Search = ({SearchTerm,setSearchTerm}) =>{
    return (
        <div className="search ">
            <div>
                <img src="./logo.png" alt="" />
                <input 
                type="text"
                placeholder="Find Movies"
                value={SearchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    )
}

export default Search