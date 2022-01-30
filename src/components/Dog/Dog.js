const Dog = (props) => {
    const {dog, index, deleteAnimal} = props;
    return (
        <div>
            {dog}
            <button onClick={e => deleteAnimal(e, 'deleteDog', index) }>Delete</button>
        </div>
    );
};

export {Dog};