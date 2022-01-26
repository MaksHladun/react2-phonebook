const Filter = ({onChange })=>{

   
      

    return(
        <>
        <h2>Find contacts by name</h2>
        <input
      type="text"
      id="filter"
      name="filter"
      onChange={onChange}
      
    />
        </>
    )
}
export default Filter