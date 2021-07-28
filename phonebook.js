import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}
  
function PhoneBookForm({ addEntryToPhoneBook }) {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <form onSubmit={e => {e.preventDefault()
    addEntryToPhoneBook({first, second, phone})
    setFirst('')
    setSecond('')
    setPhone('')
    }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={first}
        onChange={input => setFirst(input.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={second}
        onChange={input => setSecond(input.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phone}
        onChange={input => setPhone(input.target.value)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({data}) {
  const arrData = data.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0))
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
      {arrData.map((e,i) => (
        <tr key={i}>
          <td style={style.tableCell}>{e.first}</td>
          <td style={style.tableCell}>{e.second}</td>
          <td style={style.tableCell}>{e.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [data, setData] = useState([])
  const dataPhone = datas => {
    const newData = [...data,datas]
    setData(newData)
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={dataPhone}/>
      <InformationTable data={data} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
