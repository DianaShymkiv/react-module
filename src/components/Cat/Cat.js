const Cat = (props) => {
    const {cat, index, deleteAnimal} = props;
    return (
        <div>
            {cat}
            <button onClick={(e => deleteAnimal(e, 'deleteCat', index))}>Delete</button>
        </div>
    );
};

export {Cat};