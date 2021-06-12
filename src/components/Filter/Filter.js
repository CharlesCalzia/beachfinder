import './Filter.scss'

const Filter = () => {

    return <>
<div className="filter-cont">
    <br></br>
  <center><h3 className="text-gray-800 font-semibold text-2xl">Filter</h3></center>
 <center> <form className="mt-12">
  <label className="text-black text-left ml-2 text-base mt-4">
    Min Ratings:
    <input className="w-52" type="number"/>
  </label>
  <label className="text-black text-left ml-2 text-base mt-4">
    Max Ratings:
    <input style={{ background: "white"}} type="number" />
  </label>
  <label className="text-black text-left ml-2 text-base mt-4">
    Location:
    <input style={{ background: "white"}} type="text" />
  </label>
  <label className="text-black text-left ml-2 text-base mt-4">
    Weather:
    <input style={{ background: "white"}} type="text" />
  </label>
  <label className="text-black text-left ml-2 text-base mt-4">
    Children Friendly:
    <input style={{ background: "white"}} type="number" />
  </label>
  
    <br></br>
    <br></br>
    <input type="submit" name="Apply Filter" value="Apply Filter" className="px-8 py-1 rounded-3xl text-white bg-accent"/>
 
</form></center>
 
     </div>
    </>

}

export default Filter;