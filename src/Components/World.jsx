

const World = ({ image }) => {
    return (
        <div className="grid grid-cols-2 w-3/4 mx-auto">
            <ul className="font-bold pt-10 text-lg leading-10">
                <li>Istanbul</li>
                <li>Moskow</li>
                <li>London</li>
                <li>S. Petersburg</li>
                <li>Warsaw</li>
                <li>Belgrade</li>
                <li>Budapest</li>
                <li>Barcelona</li>
                <li>Munich</li>
                <li>Milan</li>
                <li>Birminghan</li>
                <li>Cologne</li>
            </ul>
            <img className="pt-20" src={image} alt="" />
        </div>
    )
}

export default World
