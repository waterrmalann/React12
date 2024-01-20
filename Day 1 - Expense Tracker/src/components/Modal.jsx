import './Modal.css';
import { toast } from 'react-hot-toast';
import ToggleButton from './ToggleButton';
import { useState } from 'react';

const Modal = ({ isOpen, setModalOpen, submitTransaction }) => {
    const [option, setOption] = useState('');
    const [amount, setAmount] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleOuterClick(e) {
        if (e.target.className === 'modal') {
            setModalOpen(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!amount || amount <= 0) {
            toast.error("Enter a valid amount.");
            return;
        }

        if (!option || option === '') {
            toast.error("Select income or expense.");
            return;
        }

        if (!title.trim()) {
            toast.error("Enter a title.");
            return;
        }

        toast.success(`Added $${amount} ${option.toLowerCase()}.`);
        submitTransaction(Number(amount), title, description, option === 'Expense');
        setModalOpen(false);
        setAmount(null);
        setTitle('');
        setDescription('');
        // setOption('');
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal" onClick={handleOuterClick}>
            <div className="modal-card">
                <h1>Expense</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor='amount'>Amount</label>
                        <input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor='title'>Title</label>
                        <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor='description'>Description</label>
                        <input id="description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Type</label>
                        <ToggleButton options={['Income', 'Expense']} option={option} setOption={setOption} />
                    </div>
                    <button style={{marginTop: '1rem'}}>
                        Add {option}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal