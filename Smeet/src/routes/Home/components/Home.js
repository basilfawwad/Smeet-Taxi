import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Container} from "native-base";
import MapContainer from "./MapContainer";
import Permissions from 'react-native-permissions';

class Home extends React.Component{

    componentDidMount(){

        Permissions.request('location','always').then(response => {
            console.log('Response: ' + response);
            this.props.getCurrentLocation();
          });
        
}

    
    render(){

        const region = {
            latitude:3.1468,
            longitude:101.2514,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }
        return(
            <Container>
                {this.props.region.latitude &&
                <MapContainer region = {this.props.region} 
                    getInputData = {this.props.getInputData} 
                    toggleSearchResultModal={this.props.toggleSearchResultModal}
                    getAddressPredictions={this.props.getAddressPredictions}
                    resultTypes = {this.props.resultTypes}
                    predictions = {this.props.predictions}
                    />
                }
            </Container>
        );
    }
}


export default Home;