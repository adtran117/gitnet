import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Filters from './Filters'
import GraphContainer from './GraphContainer';
import Organization from './organization';


class GraphView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    	<div>
        <GraphContainer />
      </div>
    )
  }
}

export default GraphView;
    