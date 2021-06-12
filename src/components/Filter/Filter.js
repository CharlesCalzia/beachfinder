import './Filter.scss'

const Filter = () => {

    return <>
<div className="filter-cont">
    <br></br>
  <center><p>Filter</p></center>
 <center> <form>
  <label>
    Min Ratings:
    <input style={{ background: "white"}} type="number" />
  </label>
  <label>
    Max Ratings:
    <input style={{ background: "white"}} type="number" />
  </label>
  <label>
    Location:
    <input style={{ background: "white"}} type="number" />
  </label>
  <label>
    Weather:
    <input style={{ background: "white"}} type="number" />
  </label>
  <label>
    Children Friendly:
    <input style={{ background: "white"}} type="number" />
  </label>
  <label>
    </label>
    <br></br>
<br></br>
    <input type="submit" name="Apply Filter" value="Apply Filter"/>
 
</form></center>
 
     </div>
    </>;

}

export default Filter;