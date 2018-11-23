import React, {Component} from 'react';
import SearchBar from './SearchBar';
import Products from '../data.json';
import ProductTable from './ProductTable';
import ProductsData from '../data';






class Home extends Component{

state = {
    originalData :[],
    sportData :[],
    electronicData : [],
    searchText: "",  
    checked:false 
}

colocarElementos = () => {
    let {originalData, sportData, electronicData} = this.state
    originalData = ProductsData.data

    sportData = originalData.filter(
        data => data.category === "Sporting Goods"
    )

    electronicData = originalData.filter(
        data => data.category === "Electronics"
    )
    this.setState({sportData,electronicData,originalData})

}

handleChange = (e) => {
    let {searchText} = this.state;
    searchText = e.target.value;
    console.log("jala", searchText)
    this.setState({searchText});
    
}
checado =(e)=>{
    
    let {checked}= this.state
     checked =! checked
    console.log("cambie",checked)
    this.setState({checked})


}


componentWillMount(){
    this.colocarElementos();
}

    
    render(){
        let {sportData, electronicData, searchText}=this.state
        var palabra = "Foo"
    sportData = sportData.filter(
        product => {
            return product.name.toLowerCase().indexOf(
                searchText.toLowerCase()
            ) !==-1;
        }
    )
    electronicData = electronicData.filter(
        product => {
            return product.name.toLowerCase().indexOf(
                searchText.toLowerCase()
            ) !==-1;
        }
    )
        return(
            <div>
                <h4> Buscador: </h4>
                <div className="fields-container"></div>
                    <SearchBar buscar={this.handleChange} checado={this.checado}/>
                    <table>
                        <tr>    
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        
                            <ProductTable data={sportData} name={"Sporting Goods"} checked={this.state.checked}/>
                            
                            <ProductTable data={electronicData} name={"Electronics"} checked={this.state.checked}/>
                        
                    </table>

            </div>



        )
    }
}


export default Home;