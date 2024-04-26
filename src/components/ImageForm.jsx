import React from 'react';

const ImageForm = ({ handleAddImage, image, setImage }) => {
    const imgDecor = {
        width: "120px",
        height: "120px",
        borderRadius: "20%"
    };

    return (
        <section className="vh-120" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="container py-5 h-100">
                <form onSubmit={handleAddImage}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <div className="text-center mb-3">
                                        <img src="locator.png" alt="Location placeholder" style={imgDecor} />
                                    </div>
                                    <h3 className="mb-4">Add Image</h3>
                                    <div className="form-outline mb-3">
                                        <input
                                            type="file"
                                            onChange={(e) => setImage(e.target.files[0])}
                                            id="imageUpload"
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <hr className="my-4" />
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-lg btn-block w-75" type="submit">Add Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ImageForm;
