
import three from "../../../../src/images/three.png"







function About() {
  return (
    <>
    <div>
      <center>
        <h1 className="mt-5">About Us</h1>
        <p className="mt-3">We are here to make your travel memoriable</p>
      </center>

      <div className="d-flex px-5">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          architecto eveniet illo inventore maxime, qui ea fuga labore adipisci
          deserunt obcaecati minus accusantium quae sequi. Incidunt maxime
          consectetur accusamus sed.
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio rem
          tempore sunt praesentium labore consequatur, blanditiis sapiente earum
          expedita odit distinctio, quae quas corrupti unde, tenetur quaerat
          laboriosam molestiae accusamus.
        </div>
      </div>
    </div>
    


<div className="container ">

<div className="row mt-5">
<div className="col-4"><img className="img-fluid" src={three}></img></div>
<div className="col-4"><img className="img-fluid" src={three}></img></div>
<div className="col-4"><img className="img-fluid" src={three}></img></div>
</div>


</div>

    </>

    

  );
}

export default About;
