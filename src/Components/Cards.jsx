

const Cards = ({ title, description, image }) => {
    return (
        <div>
            <div className="bg-[#f2f2f2] rounded-xl">
                <h6>{title}</h6>
                <p>{description}</p>
                <img src={image} className="rounded md:rounded-xl w-54 h-1/3 " alt="image" />
            </div>
        </div>

    )
}

export default Cards
