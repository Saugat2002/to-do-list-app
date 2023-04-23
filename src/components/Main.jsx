import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Main = () => {
    const [listItems, setListItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleDelete = (index) => {
        const newList = [...listItems];
        newList.splice(index, 1);
        setListItems(newList);
    }

    const handleInput = (event) => {
        setInputValue(event.target.value);
        if (event.key == 'Enter' && inputValue != '') {
            handlleClick();
        }
    }

    const handlleClick = () => {
        if (inputValue != '') {
            setListItems([...listItems, inputValue]);
            setInputValue('');
        }

    }

    const deleteall = () => {
        setListItems([]);
    }
    return (
        <>
            <div style={{ fontFamily: 'Permanent Marker' }} className="bg-gray-700 text-neutral-100 w-screen h-screen">
                <div className=' flex flex-col space-y-3 items-center pt-20'>
                    <h1>What is on the calender today?</h1>
                    <div className='flex flex-col justify-start items-start'>
                        <div className='flex space-x-5 justify-center items-center'>
                            <div className='w-96'>
                                <Form.Control type="text" placeholder="Add your items here ..." size="lg" className='flex w-10' value={inputValue} onChange={handleInput} onKeyDown={handleInput} />
                            </div>
                            <Button variant='outline-light' size="lg" onClick={handlleClick}>Add</Button>
                            <Button variant='outline-danger' size="lg" onClick={deleteall}>Delete All</Button>
                        </div>
                        <ul className='flex flex-col space-y-2 mt-4'>
                            {listItems.map((item, index) => (
                                <div key={index} className='flex w-96 justify-between'>
                                    <li>{index + 1}. {item}</li>
                                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;