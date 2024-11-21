import React, {useState} from 'react';

const Table = () => {
    
    const data = [
        { id: 1, name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 61 },
        { id: 2, name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 18 },
        { id: 3, name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 63 },
        { id: 4, name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 15 },
        { id: 5, name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 30 },
        { id: 6, name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 16 },
        { id: 7, name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 69 },
        { id: 8, name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 12 },
        { id: 9, name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 20 },
        { id: 10, name: 'sojay', middleName: 'Kofi', lastName: 'Kwame', gender: 'male', age: 232 },
        { id: 11, name: 'sojay', middleName: 'Kofi', lastName: 'Momo', gender: 'female', age: 17 },
        { id: 12, name: 'sojay', middleName: 'Kofi', lastName: 'Sowee', gender: 'male', age: 29 },
    ];

    const getBackgroundColor =(Age) => {
        if(Age < 18 ){
            return 'red'
        }else if(Age >= 18 && Age < 60){
            return 'green'
        }else if(Age >= 60){
            return 'lightgreen'
        }else{
            return 'orange'
        }
    }
    return (
        <div className = 'flex flex-col justify-center mt-20 mx-20'>
            <h1 className='flex justify-center text-4xl font-bold mb-6'>Table data</h1>
            <table>
                <tr className='s'>
                    <th className='relative right-[5rem]'>Name</th>
                    <th className='relative right-[12.5rem]'>Middle Name</th>
                    <th className='relative right-[9rem]'>Last Name</th>
                    <th className='relative right-[6.5rem]'>Gender</th>
                    <th className='relative right-[rem]'>Age</th>
                </tr>
            {data.map((item, index) => {
                  const backgroundColor = getBackgroundColor(item.age);
                  return (
                <tr key={item.id} className=' odd:bg-gray-400 border border-y-4' >
                         <td className='relative left-[6.5re] py-2 '>{item.name}</td> 
                         <td className=' relative left-[rem] '>{item.middleName}</td>
                         <td className='relative left-[6.4re]'> {item.lastName} </td>
                         <td> {item.gender == 'male' ? 
                         <span style={{backgroundColor: 'red', color: 'blue'}}>{item.gender}</span>
                         : item.gender == 'female' ? 
                         <span style={{backgroundColor: 'orange', color: 'white'}}>{item.gender}</span>
                         : <span style={{backgroundColor: 'blue', color: 'white'}}>{item.gender}</span>
                            }</td>
                        <td style={{ backgroundColor}} className='flex justify-center mt-2 py-1'>{item.age}</td>                          
                </tr>
                  );
})}
            </table>
        </div>
            
    );
}

export default Table;

{/* key={item.id} */}
//
