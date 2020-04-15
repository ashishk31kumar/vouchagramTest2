import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: {}, click: false, dropitem: [] };

  }
  onclick = (item) => {
    let brandNameArray = []
    brandNameArray = item.item.brands_name.split(",");
    this.setState({ click: true, dropitem: brandNameArray, index: item.index })
  }


  callAPI() {
    let url = "http://localhost:5000/testAPI"
    fetch(url)
      .then(res => res.text())
      .then(res => {
        let arr = JSON.parse(res)
        this.setState({ apiResponse: arr })
      });

  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    var arrData = this.state.apiResponse.data
    return (
      <div className="App">

        <br />
        <br />
        <div>

          {arrData != undefined && arrData.length > 0 && arrData.map((item, index) => (
            <td>
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" onClick={() => this.onclick({ item, index })}><img src={item.icon_url} />
                  <span class="caret"></span></button>
                {this.state.click == true && index == this.state.index ?
                  <ul class="dropdown-menu">
                    {this.state.dropitem.length > 0 && this.state.dropitem.map((item, inde) => (
                      <div className={`${inde % 4 == 0 ? "clearfix" : ""} col-md-3 margin`}>
                        <div className="boxModel">
                          <p>{item}</p>
                        </div>

                      </div>
                    ))}


                  </ul>
                  : null}
              </div>
            </td>



          ))}
        </div>

      </div>
    );
  }
}

export default App;
