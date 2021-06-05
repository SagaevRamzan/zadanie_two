import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                return resp.json()
            })
            .then((json) => {
                setData(json)
                setLoad(false);
            })
    }
,[])
  return (
    <div className="app">
        <div className="header my_bold">
          <div className="name">name</div>
          <div className="adr">city</div>
          <div className="phone">phone</div>
        </div>
        <div>
            {
                (load?
                    (<div>"идет загрузка"</div>):
                data.map((item)=>{

                    return (
                        <div className="header">
                            <div className="name">{item.name}</div>
                            <div className="adr">{item.address.city}</div>
                            <div className="phone">{item.phone}</div>
                        </div>
                    )
                }))
            }
        </div>
    </div>
  );
}

export default App;
