import React from 'react'

const Usertable = ({userlist2}) => {
  return (
    <div>
    <table border = "1">
          <thead>
            <th>name</th>
            <th>sex</th>
          </thead>
          <tbody>
            {userlist2.map((janidu) => (
              <tr key={janidu.Id}>
                <td>{janidu.name}</td>
                <td>{janidu.sex}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
  )
}

export default Usertable