import React, {Component, Fragment} from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

class Navbar extends Component {
    render() {
        return(
            <Fragment>
                <AppBar title='Pixabay Image Finder'/>
            </Fragment>
        )
    }
}


export default withStyles(Navbar);