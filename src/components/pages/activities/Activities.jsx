import one from '../../../../src/images/one.jpeg'



function Activities() {
  return (

    <>
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
           <center> <h2>MOUNTAIN WALK</h2></center>
            <p className='text-end'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              officia ullam magnam soluta non iusto itaque veritatis repudiandae
              nisi neque, asperiores rerum quos hic doloribus quaerat
              praesentium omnis. Debitis, molestias. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ullam culpa distinctio rerum quasi
              sint laboriosam consectetur architecto, repellat quaerat eaque
              amet odit, neque ipsum sequi rem ab quae autem eligendi!
            </p>
          </div>

          <div className="col-6">
           <center> <h2>STUNNING VIEWS</h2></center>
            <ul>
                <li>Mountain view</li>
                <li>Camping</li>
                <li>Tent Stay</li>
                <li>Trekking</li>
            </ul>
          </div>
        </div>

        <div className="row">
            <div className="col-6"><img className="img-fluid" src={one} alt="" /></div>
            <div className="col-6"><img  className="img-fluid"src={one} alt="" /></div>
        </div>
      </div>
    </div>

    <div></div>

    </>
  );
}

export default Activities;
