const Category = ({ key, category: { id, title, image } }) => {
    return (
        <>
            <a href="#" className="text-sm font-semibold flex flex-col items-center text-center">
                <img className="w-12 h-12 mb-2 border rounded-md border-gray-200 hover:border-gray-300 peer" src={image}></img>
                <p className="items-center mb-6 hover:text-slider-gradient-primary-color peer-hover:text-slider-gradient-primary-color">{title}</p>
            </a>
        </>
    );
}

export default Category;