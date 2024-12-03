import React, {useState} from 'react';
import ExportCSV  from './export';
import Modal from './modal';


const MyTable = ()=>{
  const [data, setData] = useState([
    { name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 10 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 18 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 63 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 15 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 30 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 16 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 69 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 12 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 20 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 232 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 17 },
    { name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 29 },
]);

// const [visiblerows, setVisble] = useState(3)

const [visibleRows, setVisibleRows] = useState(5);
const handleshowmore = () => {
    setVisibleRows(data.length )
};
const handleshowless = () => {
    setVisibleRows(5)
};


const getBackgroundColor =(Age) => {
    if(Age < 18 ){
        return 'red'
    }else if(Age >= 18 && Age < 60){
        return 'green'
    }else if(Age >= 60){
        return 'lightgreen'
    }else{
        return 'blue'
    }
}

const [name, setName] = useState('');
const [middleName, setMiddleName] = useState('');
const [lastName, setLastName] = useState('');
const [gender, setGender] = useState('');
const [age, setAge] = useState('');

const handleAddRow = () => {
if (name && middleName && lastName && gender && age) {
  const newRow = { name, middleName, lastName, gender, age};
  setData([newRow, ...data,]);
  setName('');
  setMiddleName('');
  setLastName('');
  setGender('');
  setAge('');
} else {
  alert("Please fill out both fields.");
}
};

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
setIsModalOpen(true)
};
const closeModal = () => {
setIsModalOpen(false)
};


return (
    <div className = 'overflow-x-hidden'>
        <div className='bg-green-900 h-[15rem]  mt-[-16px]'>
        <h1 className='flex justify-center text-4xl font-bold mt-4 underline text-white'>Table data</h1>
       
     <div className='flex justify-between mt-20 mx-4 md:mx-20 space-x-10'>
      <div  className='text-2xl text-blue-600'>
        {visibleRows < data.length ? (
        <button onClick={handleshowmore}>Show More</button>
        ) : (
        <button onClick={handleshowless}>Show Less</button>
      )}
     </div>

     
  <Modal isOpen={isModalOpen} onClose={closeModal}>
  <div className='flex flex-col space-y-8'>
    <h1 className='flex justify-center'>Create Table Row</h1>
    <input
      type="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Name"
      className='border border-blue-200'
    />
    <input
      type="middleName"
      value={middleName}
      onChange={(e) => setMiddleName(e.target.value)}
      placeholder="middleName"
      className='border border-blue-200'
    />

    <input
      type="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="lastName"
      className='border border-blue-200'
    />

    <input
      type="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      placeholder="gender"
      className='border border-blue-200'
    />

    <input
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      placeholder="Age"
      className='border border-blue-200'
    />
     <button onClick={handleAddRow} className='bg-green-600 text-white py-2'>Add Row</button> 
     </div>
    </Modal>
    
     <div className='flex space-x-4 mx-2'>
     <button
       className="px-4 py-2 bg-blue-500 text-white rounded"
       onClick={openModal}
     >
       Create
    </button>
        <ExportCSV data={data} fileName="exported_data"/>
     </div>
    </div>
    </div>

        <div className = 'flex flex-col justify-center  mt-10 mx-[0.5rem] md:mx-20'>
        <table>
            <thead>
            <tr>
                <th className='relative md:right-[5rem]'>Name</th>
                <th className='relative md:right-[12.5rem]'>Middle Name</th>
                <th className='relative md:right-[9rem]'>Last Name</th>
                <th className='relative md:right-[6.5rem]'>Gender</th>
                <th className='relative md:right-[rem]'>Age</th>
            </tr>
            </thead>

            <tbody>
        {data.slice(0, visibleRows).map((item, index) => {
              const backgroundColor = getBackgroundColor(item.age);
              return (
            <tr key={item.id} className=' odd:bg-gray-400 hover-red-600 hover:bg-gray-600' >
                     <td className='relative left-[6.5re] py-2 '>{item.name}</td> 
                     <td className=' relative left-[rem] '>{item.middleName}</td>
                     <td className='relative left-[6.4re]'> {item.lastName} </td>
                     <td> {item.gender == 'male' ? 
                     <span className='bg-blue-600  text-white'>{item.gender}</span>
                     : item.gender == 'female' ? 
                     <span className='bg-orange-400  text-white'>{item.gender}</span>
                     : <span style={{backgroundColor: 'red', color: 'white'}}>{item.gender}</span>
                        }</td>
                    <td style={{ backgroundColor}} className=' flex justify-center mt-1 py-1 text-white'>{item.age}</td>                          
            </tr>
              );
          })}
          </tbody>
        </table>
    </div>
    </div>
        
);
}

export default MyTable;