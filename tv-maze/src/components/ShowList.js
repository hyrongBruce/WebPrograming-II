import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchShows from "./SearchShows";

class ShowList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: undefined,
         loading: false,
         searchTerm: undefined,
         searchData: undefined
      };
   }
      async getShows() {
            try {
                  const response = await axios.get('http://api.tvmaze.com/shows');
                  this.setState({ data: response.data});
            } catch (e) {
                  console.log(e);
            }
      }
      componentDidMount() {
            this.getShows();
      }

      //add
      handleSearchState = (searchWord,searchResult) =>{
         if(searchWord){
            this.setState({searchTerm: searchWord, searchData: searchResult})
         }else{
            this.setState({searchTerm: undefined, searchData: undefined})
         }
      }

      // handleChange = (e) => {
      //       let value = e.target.value;
      //       this.setState({ searchTerm: value }, () => {
      //       this.searchShows();
      //       });
      // }
      
      onSubmit(e) {
            e.preventDefault();
      }
   // async searchShows(){
   //    if (this.state.searchTerm) {
   //          try {
   //             const response = await axios.get('http://api.tvmaze.com/search/shows?q=' + this.state.searchTerm);
   //             this.setState({searchData: response.data});
   //          } catch (e) {
   //             console.log(e);
   //          }
   //    }
   // }
   render() {
      let body = null;
      let li = null;
      if (this.state.searchTerm) {
         li =
            this.state.searchData &&
            this.state.searchData.map(shows => {
               let show = shows.show;

               return (
                  <li key={show.id}>
                     <Link to={`/shows/${show.id}`}>{show.name}</Link>
                  </li>
               );
            });
      } else {
         li =
            this.state.data &&
            this.state.data.map(show => (
               <li key={show.id}>
                  <Link to={`/shows/${show.id}`}>{show.name}</Link>
               </li>
            ));
      }
      body = (
         <div>
           <SearchShows handleSearchState={this.handleSearchState} />
           <ul className="list-unstyled">{li}</ul>
         </div>
       );
       return body;
   }
}

export default ShowList;
