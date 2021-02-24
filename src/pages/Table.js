import React , { useState } from 'react';
import Avatar from 'react';
export default function SimpleTable() {

  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function sampleFunc() {
    let response = await fetch("/users/all");
    let body = await response.json();
    upDateData(body);
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;

  return (
    <>
    <h2>USer directory</h2>

          <table>
            <thead>
              <tr>
                <th align="center">Name</th>
                <th align="center">Age</th>
                <th align="center">Ville</th>
                <th align="center">Department</th>
                <th align="center">Genre</th>
                <th align="center">Mail</th>
                <th align="center">Role</th>
                <th align="center">Themes</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(row => (
                <tr key={row.id}>
                  <td align="center">{row.username}</td>
                  <td align="center">{row.age}</td>
                  <td align="center">{row.ville}</td>
                  <td align="center">{row.departement}</td>
                  <td align="center">{row.sexe}</td>
                  <td align="center">{row.email}</td>
                  <td align="center">{row.role}</td>
                  <td align="center"><ul>{row.themes.map(theme=>(
                    <li key={theme.id}>{theme.name}</li>
                  ))}</ul></td>

                </tr>



              ))}
            </tbody>
          </table>

      <a href="/">retour</a>
      </>
  );
}
