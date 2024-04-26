

const AddPlaceForm = ({name, location, openHours, description,handleAddPlace, setName, setLocation, setOpenHours, setDescription}) => {
    const imgDecor =  {
        // fontSize: "5rem",/* Adjust the size as needed */
         width:"120px",
         height:"120px" ,
         borderRadius:"20%"
    }

      return (
        <>
        <section className="vh-120" style={{backgroundColor: "#f2f2f2"}}>
      <div className="container py-5 h-100">
        <form onSubmit={handleAddPlace}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">
              <div className="text-center mb-3">
                <img src="locator.png" alt='imag' style={imgDecor} />
                </div>
                <h3 className="mb-4">Add Place</h3>

                <div className="form-outline mb-3">
                {/* <label className="form-label" for="typeEmailX-2">Email</label> */}
                  <input
                     type="text"
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     id="typeEmailX-2"
                     placeholder="Enter the place name"
                     className="form-control form-control-lg" />

                </div>

                <div className="form-outline mb-2">
                {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
                  <input
                     type="text"
                     value={location}
                     onChange={(e)=>setLocation(e.target.value)}
                     id="typeLocationX-2"
                     placeholder='Enter the Location'
                     className="form-control form-control-lg" />

                </div>


                <div className="form-outline mb-2">
                {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
                  <input
                      type="text"
                      id="typePasswordX-2"
                      value={openHours}
                      onChange={(e)=>setOpenHours(e.target.value)}
                      placeholder='Open Hours'
                      className="form-control form-control-lg" />

                </div>

                <div className="form-outline mb-2">
                {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
                  <textarea
                      type="text"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      id="typePasswordX-2"
                      placeholder='Enter in your description'
                      className="form-control form-control-lg" />

                </div>




                <hr className="my-4"/>
                <div className="text-center">
                <button className="btn btn-primary btn-lg btn-block w-75" type="submit">Add Place</button>


                </div>


              </div>
            </div>
          </div>
        </div>

        </form>
      </div>
    </section>
        </>
      )
}

export default AddPlaceForm