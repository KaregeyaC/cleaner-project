
import Image from "../assets/image.png";

const Alice = () => {
    return (
        <>
            <section className="bg-gray-300 grid grid-cols-2">
                <div className="m-20">
                    <h5 className="text-lg text-white">Our services</h5>
                    <h1 className="text-6xl text-white font-extrabold py-5">Professional <br />Cleaning</h1>
                    <p className="text-white uppercase">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />nonumy eirmod tempor invidunt ut labore et dolore magna <br /> aliquyam erat, sed diam voluptua.</p>
                </div>
                <div className="">
                    <img src={Image} alt="Cleaner image" />

                </div>
            </section>
            <section>
                <div>
                    <h2 className="text-5xl text-center p-20">OUR SERVICES</h2>
                </div>
            </section>
        </>
    )
}

export default Alice
