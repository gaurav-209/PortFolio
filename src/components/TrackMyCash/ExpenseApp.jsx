import React from 'react';
import Alert from './Alert';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../fireBase/firebase";
import { useAuth } from '../../Context/AuthContext';

const ExpenseApp = () => {
    const [data, setData] = React.useState([]);
    const [expense, setExpense] = React.useState({});
    const [eIndex, setEIndex] = React.useState(null);
    const [isTrue, setIsTrue] = React.useState(true);
    const [alert, setAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const { user, loading } = useAuth();

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleLog = async () => {
        if (!expense.title || !expense.category || !expense.date || !expense.amount) {
            setAlertMessage("Please fill in all fields before adding a log.");
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
            return;
        }

        try {
            const newExpense = {
                ...expense,
                userId: auth.currentUser.uid,
                createdAt: new Date(),
            };

            const docRef = await addDoc(collection(db, 'expenses'), newExpense);
            setData([...data, { id: docRef.id, ...newExpense }]);
            setExpense({});
            setAlertMessage("Your log has been added");
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
        } catch (err) {
            setAlertMessage("Error adding log");
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
        }
    };

    const fetchExpenses = async (uid) => {
        const querySnapshot = await getDocs(collection(db, 'expenses'));
        const expenses = querySnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .filter((item) => item.userId === uid); // correct filtering

        setData(expenses);
    };

    React.useEffect(() => {
  if (!loading && user?.uid) {
    fetchExpenses(user.uid); 
  }
}, [user, loading]);

    const handleEdit = (idx) => {
        setExpense(data[idx]);
        setEIndex(idx);
        setIsTrue(false);
        setAlertMessage("You can edit your log");
        setAlert(true);
    };

    const handleUpdate = async () => {
        const docRef = doc(db, "expenses", expense.id);

        try {
            await updateDoc(docRef, {
                title: expense.title,
                category: expense.category,
                amount: expense.amount,
                date: expense.date
            });

            const updatedData = data.map((item) =>
                item.id === expense.id ? expense : item
            );

            setData(updatedData);
            setExpense({});
            setIsTrue(true);
            setAlertMessage("Your log has been updated");
            setAlert(true);
        } catch (err) {
            setAlertMessage("Update failed");
            setAlert(true);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "expenses", id));
            setData(data.filter((item) => item.id !== id));
            setAlertMessage("Your log has been deleted");
            setAlert(true);
        } catch (err) {
            setAlertMessage("Delete failed");
            setAlert(true);
        }
    };

    return (
        <div className="text-[#5A4A42]">
            {alert && <Alert alertMessage={alertMessage} setAlert={setAlert} />}

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 m-5 p-5 border border-[#5A4A42] rounded-md bg-white shadow">
                    <h4 className="text-center text-lg font-semibold mb-2">Log It Before You Forget! 📝</h4>
                    <hr className="border-[#5A4A42] mb-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="title" className="block mb-1">Title:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={expense.title || ''}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-[#5A4A42] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A4A42]"
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-1">Category:</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                value={expense.category || ''}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-[#5A4A42] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A4A42]"
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-1">Date:</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={expense.date || ''}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-[#5A4A42] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A4A42]"
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block mb-1">Amount:</label>
                            <input
                                type="text"
                                name="amount"
                                id="amount"
                                value={expense.amount || ''}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-[#5A4A42] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A4A42]"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            onClick={isTrue ? handleLog : handleUpdate}
                            className="bg-[#C4A484] text-[#5A4A42] px-6 py-2 rounded-md text-lg hover:bg-[#5A4A42] hover:text-[#C4A484] transition-transform active:scale-95"
                        >
                            {isTrue ? 'Log Expense' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="flex justify-center mb-10">
                <div className="w-full md:w-3/4 overflow-auto">
                    <table className="w-full text-left border border-[#5A4A42]">
                        <thead className="bg-[#f4f0eb]">
                            <tr>
                                <th className="border border-[#5A4A42] px-3 py-2">Sr. No.</th>
                                <th className="border border-[#5A4A42] px-3 py-2">Title</th>
                                <th className="border border-[#5A4A42] px-3 py-2">Category</th>
                                <th className="border border-[#5A4A42] px-3 py-2">Date</th>
                                <th className="border border-[#5A4A42] px-3 py-2">Amount</th>
                                <th className="border border-[#5A4A42] px-3 py-2">Edit</th>
                                <th className="border border-[#5A4A42] px-3 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, idx) => (
                                    <tr key={val.id}>
                                        <td className='border p-2'>{idx + 1}</td>
                                        <td className='border p-2'>{val.title}</td>
                                        <td className='border p-2'>{val.category}</td>
                                        <td className='border p-2'>{val.date}</td>
                                        <td className='border p-2'>{val.amount}</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => handleEdit(idx)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => handleDelete(val.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ExpenseApp;
