const ShopList = ({ clickOnList }) => {

    // const [ setSelectedShop ] = useState(null);

    

    return (
        <>
            <div className="flex-column">
                <button className="btn" onClick={() => clickOnList('Futuro')}>Futuro</button>
                <button className="btn" onClick={() => clickOnList('Space Coffee')}>Space Coffee</button>
                <button className="btn" onClick={() => clickOnList('Lux Central')}>Lux Central</button>
                <button className="btn" onClick={() => clickOnList('Aftermarket')}>aftermarket</button>
            </div>
        </>
    )
};

export default ShopList;