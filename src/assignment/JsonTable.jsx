import React from 'react'
import data from "./Sample.json";
import '../tabledata.css';

const Home = () => {
  return (
    <div className="home">
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Name</th>
            <th>Batter</th>
            <th>Topping</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, index]) => {
            return (
                <>
                {data[key].item.map(function (keyItem) {
                  return (
                    <>
                    {/* Batter */}
                      {keyItem.batters.batter.map(function (keyBatter) {
                        return (
                            <>
                             {/* Topping */}
                            {keyItem.topping.map(function (keyTopping,i) {
                              return (
                                <tr key={index}>
                                  <td>{keyItem.id}</td>
                                  <td>{keyItem.type}</td>
                                  <td>{keyItem.name}</td>
                                  <td>{keyBatter.type}</td>
                                  <td>{keyTopping.type}</td>
                                </tr>
                              );
                            })}
                          </>
                        );
                      })}
                     </>
                  );
                })}
           </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
